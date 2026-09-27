const defaultEndpoints = {
  conversations: "/api/conversations",
  messages: (conversationId) => `/api/conversations/${conversationId}/messages`,
};

function getPartText(parts = []) {
  return parts
    .filter((part) => part.type === "text")
    .map((part) => part.text || "")
    .join("");
}

function mapConversation(conversation) {
  const metadata = conversation.metadata || {};
  return {
    id: String(conversation.id),
    title: conversation.title || metadata.adTitle || "محادثة الإعلان",
    subtitle: conversation.subtitle || metadata.adPrice || "",
    avatarUrl: conversation.avatarUrl || metadata.otherUserAvatar,
    metadata: {
      adId: metadata.adId,
      adTitle: metadata.adTitle,
      adThumbnail: metadata.adThumbnail,
      otherUserId: metadata.otherUserId,
    },
    unreadCount: conversation.unreadCount || 0,
    lastMessageAt: conversation.lastMessageAt,
  };
}

function mapMessage(message, conversationId) {
  const parts = message.parts || [
    { type: "text", text: message.content ?? message.text ?? "" },
  ];
  return {
    id: String(message.id),
    conversationId: String(message.conversationId || conversationId),
    role: message.role || (message.senderId ? "assistant" : "user"),
    parts,
    author: message.author,
    createdAt: message.createdAt,
    updatedAt: message.updatedAt,
    status: message.status || "sent",
  };
}

function createClosedAcknowledgementStream(messageId) {
  return new ReadableStream({
    start(controller) {
      controller.enqueue({ type: "start", messageId });
      controller.enqueue({ type: "finish", messageId, finishReason: "stop" });
      controller.close();
    },
  });
}

export class ChatAdapter {
  constructor({ apiBaseUrl = "", endpoints = {}, fetcher = fetch } = {}) {
    this.apiBaseUrl = apiBaseUrl.replace(/\/$/, "");
    this.endpoints = { ...defaultEndpoints, ...endpoints };
    this.fetcher = fetcher;
  }

  getUrl(path) {
    return `${this.apiBaseUrl}${path}`;
  }

  async request(path, options = {}) {
    const response = await this.fetcher(this.getUrl(path), {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    });
    if (!response.ok) {
      throw new Error(`Chat request failed with status ${response.status}`);
    }
    return response.json();
  }

  async listConversations({ query } = {}) {
    const path = query
      ? `${this.endpoints.conversations}?query=${encodeURIComponent(query)}`
      : this.endpoints.conversations;
    const payload = await this.request(path);
    const items = Array.isArray(payload)
      ? payload
      : payload.conversations || [];
    return {
      conversations: items.map(mapConversation),
      cursor: payload.cursor,
      hasMore: payload.hasMore,
    };
  }

  async listMessages({ conversationId }) {
    const endpoint = this.endpoints.messages;
    const path =
      typeof endpoint === "function"
        ? endpoint(conversationId)
        : `${endpoint}/${conversationId}`;
    const payload = await this.request(path);
    const items = Array.isArray(payload) ? payload : payload.messages || [];
    return {
      messages: items.map((message) => mapMessage(message, conversationId)),
      cursor: payload.cursor,
      hasMore: payload.hasMore,
    };
  }

  async sendMessage({ conversationId, message, signal }) {
    const endpoint = this.endpoints.messages;
    const path =
      typeof endpoint === "function"
        ? endpoint(conversationId)
        : `${endpoint}/${conversationId}`;
    await this.request(path, {
      method: "POST",
      signal,
      body: JSON.stringify({ content: getPartText(message.parts), message }),
    });
    return createClosedAcknowledgementStream(message.id);
  }

  subscribe({ onEvent }) {
    let previousConversations = [];
    const previousMessagesByConversation = new Map();

    // TODO: replace with SignalR once available
    const intervalId = window.setInterval(async () => {
      try {
        const conversationResult = await this.listConversations();
        const conversations = conversationResult.conversations;
        if (
          JSON.stringify(conversations) !==
          JSON.stringify(previousConversations)
        ) {
          previousConversations = conversations;
          onEvent({ type: "conversation-update", conversations });
        }
        await Promise.all(
          conversations.map(async (conversation) => {
            const result = await this.listMessages({
              conversationId: conversation.id,
            });
            const previous =
              previousMessagesByConversation.get(conversation.id) || [];
            if (JSON.stringify(result.messages) !== JSON.stringify(previous)) {
              previousMessagesByConversation.set(
                conversation.id,
                result.messages,
              );
              onEvent({
                type: "new-message",
                conversationId: conversation.id,
                messages: result.messages,
              });
            }
          }),
        );
      } catch {
        // Polling failures should not interrupt the active chat surface.
      }
    }, 5000);
    return () => window.clearInterval(intervalId);
  }
}

export default ChatAdapter;
