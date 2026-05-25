export type RecommendedTreatment = {
  kode: string;
};

export type ChatAIResponse = {
  type: "chat" | "recommendation";
  message: string;
  treatments?: RecommendedTreatment[];
};

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  type: "chat" | "recommendation";
  content: string;
  treatments?: RecommendedTreatment[];
};