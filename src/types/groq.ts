// src/types/groq.ts

export interface GroqResponse {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

export interface AIResult {
  kode: string;
  reason: string;
}

export interface GroqMessage {
  role: "user" | "assistant";
  content: string;
}