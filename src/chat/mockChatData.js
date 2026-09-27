const currentUserId = "user-ahmad-ali";

export const mockAds = [
  {
    id: 1,
    title: "Toyota Camry 2022",
    price: "18,500 JOD",
    thumbnail: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
  },
  {
    id: 2,
    title: "شقة للإيجار - عبدون",
    price: "650 JOD شهرياً",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    details: "3 غرف",
  },
  {
    id: 3,
    title: "BMW X5 2021",
    price: "32,000 JOD",
    thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  },
];

export const mockUsers = [
  {
    id: "user-omar-khalil",
    name: "Omar Khalil",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "user-lina-nasser",
    name: "Lina Nasser",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: "user-ahmad-ali",
    name: "Ahmad Ali",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

function conversation(id, ad, otherUser) {
  return {
    id,
    title: ad.title,
    subtitle: ad.price,
    avatarUrl: otherUser.avatar,
    metadata: {
      adId: ad.id,
      adTitle: ad.title,
      adThumbnail: ad.thumbnail,
      otherUserId: otherUser.id,
    },
    participants: [
      { id: currentUserId, displayName: "Ahmad Ali", role: "user" },
      {
        id: otherUser.id,
        displayName: otherUser.name,
        role: "assistant",
        avatarUrl: otherUser.avatar,
      },
    ],
    unreadCount: 0,
    lastMessageAt: "2026-09-27T10:30:00.000Z",
  };
}

export const mockConversations = [
  conversation("conversation-toyota-omar", mockAds[0], mockUsers[0]),
  conversation("conversation-apartment-omar", mockAds[1], mockUsers[0]),
  conversation("conversation-bmw-lina", mockAds[2], mockUsers[1]),
];

function message(id, conversationId, role, text, authorId, createdAt) {
  const author = mockUsers.find((user) => user.id === authorId);
  return {
    id,
    conversationId,
    role,
    parts: [{ type: "text", text }],
    author: {
      id: author.id,
      displayName: author.name,
      avatarUrl: author.avatar,
      role,
    },
    createdAt,
    status: "sent",
  };
}

export const mockMessages = {
  "conversation-toyota-omar": [
    message(
      "toyota-1",
      "conversation-toyota-omar",
      "user",
      "هل ما زالت السيارة متاحة؟",
      currentUserId,
      "2026-09-27T10:12:00.000Z",
    ),
    message(
      "toyota-2",
      "conversation-toyota-omar",
      "assistant",
      "نعم، ما زالت متاحة وبحالتها الممتازة.",
      "user-omar-khalil",
      "2026-09-27T10:15:00.000Z",
    ),
    message(
      "toyota-3",
      "conversation-toyota-omar",
      "user",
      "هل السعر قابل للتفاوض بعد المعاينة؟",
      currentUserId,
      "2026-09-27T10:28:00.000Z",
    ),
    message(
      "toyota-4",
      "conversation-toyota-omar",
      "assistant",
      "ممكن نتفاهم بعد ما تشوفها.",
      "user-omar-khalil",
      "2026-09-27T10:30:00.000Z",
    ),
  ],
  "conversation-apartment-omar": [
    message(
      "apartment-1",
      "conversation-apartment-omar",
      "user",
      "مرحباً، هل الشقة متاحة للإيجار؟",
      currentUserId,
      "2026-09-27T09:40:00.000Z",
    ),
    message(
      "apartment-2",
      "conversation-apartment-omar",
      "assistant",
      "نعم، متاحة. فيها 3 غرف ومطبخ واسع.",
      "user-omar-khalil",
      "2026-09-27T09:46:00.000Z",
    ),
    message(
      "apartment-3",
      "conversation-apartment-omar",
      "user",
      "ممتاز، هل يمكن زيارتها هذا الأسبوع؟",
      currentUserId,
      "2026-09-27T10:02:00.000Z",
    ),
  ],
  "conversation-bmw-lina": [
    message(
      "bmw-1",
      "conversation-bmw-lina",
      "user",
      "هل يوجد فحص حديث للسيارة؟",
      currentUserId,
      "2026-09-27T08:20:00.000Z",
    ),
    message(
      "bmw-2",
      "conversation-bmw-lina",
      "assistant",
      "نعم، الفحص موجود والسيارة لا تحتاج أي مصاريف.",
      "user-lina-nasser",
      "2026-09-27T08:26:00.000Z",
    ),
    message(
      "bmw-3",
      "conversation-bmw-lina",
      "user",
      "تمام، بتواصل معك لترتيب موعد.",
      currentUserId,
      "2026-09-27T08:30:00.000Z",
    ),
  ],
};

export { currentUserId };
