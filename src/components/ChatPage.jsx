import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ChatBox } from "@mui/x-chat";
import { useSearchParams } from "react-router-dom";
import { mockAdapter } from "../chat/mockChatAdapter";

const chatTheme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#ef4444" },
    text: { primary: "#141826", secondary: "#667085" },
    background: { default: "#f4f5f9", paper: "#ffffff" },
  },
  shape: { borderRadius: 16 },
  typography: { fontFamily: "Inter, Poppins, sans-serif" },
  components: {
    MuiChatConversationList: {
      styleOverrides: {
        root: { backgroundColor: "#ffffff", borderColor: "#eef0f5" },
      },
    },
    MuiChatMessage: {
      styleOverrides: {
        root: { fontFamily: "Inter, Poppins, sans-serif" },
        content: { borderRadius: 16 },
      },
    },
    MuiChatMessageList: {
      styleOverrides: {
        root: { overscrollBehaviorY: "auto" },
      },
    },
  },
});

function createConversation({
  currentUserId,
  adId,
  adTitle,
  adThumbnail,
  adPrice,
  otherUserId,
  otherUserName,
}) {
  return {
    id: `${currentUserId}-${otherUserId}-${adId}`,
    title: adTitle || `محادثة مع ${otherUserName || "المستخدم"}`,
    subtitle: adPrice ? `${adPrice} JOD` : undefined,
    metadata: { adId, adTitle, adThumbnail, otherUserId, currentUserId },
    unreadCount: 0,
  };
}

function HiddenComposer() {
  return null;
}

export default function ChatPage({ currentUser }) {
  const adapter = mockAdapter; // TODO: swap for the real backend adapter
  const [searchParams] = useSearchParams();
  const contactRequest = useMemo(
    () => ({
      currentUserId: currentUser?.id || "current-user",
      adId: searchParams.get("adId"),
      adTitle: searchParams.get("adTitle"),
      adThumbnail: searchParams.get("adThumbnail"),
      adPrice: searchParams.get("adPrice"),
      otherUserId: searchParams.get("otherUserId"),
      otherUserName: searchParams.get("otherUserName"),
    }),
    [currentUser?.id, searchParams],
  );
  const initialConversation = useMemo(
    () =>
      contactRequest.adId && contactRequest.otherUserId
        ? createConversation(contactRequest)
        : undefined,
    [contactRequest],
  );
  const [conversations, setConversations] = useState(() =>
    initialConversation ? [initialConversation] : [],
  );
  const [activeConversationId, setActiveConversationId] = useState(
    initialConversation?.id,
  );

  return (
    <ThemeProvider theme={chatTheme}>
      <main className="w-full bg-[#F4F5F9] p-0 sm:p-4" dir="rtl">
        <div className="h-[min(680px,calc(100dvh-6rem))] w-full rounded-none bg-white shadow-sm sm:rounded-2xl">
          <ChatBox
            adapter={adapter}
            conversations={conversations}
            onConversationsChange={(nextConversations) => {
              setConversations(nextConversations);
              const matchingConversation = nextConversations.find(
                (conversation) =>
                  String(conversation.metadata?.adId) === contactRequest.adId &&
                  String(conversation.metadata?.otherUserId) ===
                    contactRequest.otherUserId,
              );
              if (matchingConversation) {
                setActiveConversationId(matchingConversation.id);
              }
            }}
            activeConversationId={activeConversationId}
            onActiveConversationChange={setActiveConversationId}
            currentUser={currentUser}
            slots={{
              composerRoot: activeConversationId ? undefined : HiddenComposer,
            }}
            features={{
              conversationList: true,
              attachments: false,
              helperText: false,
            }}
            variant="compact"
            sx={{ height: "100%", minHeight: 0 }}
          />
        </div>
      </main>
    </ThemeProvider>
  );
}
