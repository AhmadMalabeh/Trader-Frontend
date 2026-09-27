import { mockConversations, mockMessages, mockUsers } from "./mockChatData.js";

const conversations = mockConversations.map((item) => ({
  ...item,
  metadata: { ...item.metadata },
}));
const messagesByConversation = Object.fromEntries(
  Object.entries(mockMessages).map(([conversationId, messages]) => [
    conversationId,
    messages.map((item) => ({
      ...item,
      parts: item.parts.map((part) => ({ ...part })),
      author: { ...item.author },
    })),
  ]),
);
const listeners = new Set();

function createClosedAcknowledgementStream(messageId) {
  return new ReadableStream({
    start(controller) {
      controller.enqueue({ type: "start", messageId });
      controller.enqueue({ type: "finish", messageId, finishReason: "stop" });
      controller.close();
    },
  });
}

function getOtherUser(conversationId) {
  const conversation = conversations.find((item) => item.id === conversationId);
  return mockUsers.find(
    (user) => user.id === conversation?.metadata?.otherUserId,
  );
}

export const mockAdapter = {
  async listConversations() {
    return { conversations: [...conversations] };
  },

  async listMessages({ conversationId }) {
    return { messages: [...(messagesByConversation[conversationId] || [])] };
  },

  async sendMessage({ conversationId, message, signal }) {
    if (signal?.aborted)
      throw new DOMException("Message sending was cancelled", "AbortError");
    const messages = messagesByConversation[conversationId] || [];
    messages.push(message);
    messagesByConversation[conversationId] = messages;

    window.setTimeout(() => {
      const otherUser = getOtherUser(conversationId);
      const reply = {
        id: `reply-${Date.now()}`,
        conversationId,
        role: "assistant",
        parts: [{ type: "text", text: "تمام، بتواصل معك قريباً" }],
        author: {
          id: otherUser?.id || "other-user",
          displayName: otherUser?.name || "المستخدم",
          avatarUrl: otherUser?.avatar,
          role: "assistant",
        },
        createdAt: new Date().toISOString(),
        status: "sent",
      };
      messages.push(reply);
      listeners.forEach((onEvent) =>
        onEvent({ type: "message-added", message: reply }),
      );
    }, 1500);

    return createClosedAcknowledgementStream(message.id);
  },

  subscribe({ onEvent }) {
    listeners.add(onEvent);
    return () => listeners.delete(onEvent);
  },
};

export default mockAdapter;
