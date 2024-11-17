type ConversationType = {
  id: string;
  fullName: string;
  profilePic: string;
};

type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
};

// glogal.d.ts is a special file. Types added here can be used globally in the project without importing them.
