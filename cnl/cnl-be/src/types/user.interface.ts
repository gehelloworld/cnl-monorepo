export interface User {
  userId: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  accessToken: string;
  // chatHistory: ChatMessage[];
  firstLogin: string;
  lastLogin: string;
}

export interface UserSession {
  sessionId: string;
  sessionStartTime: string;
  sessionExpiryTime: string;
}