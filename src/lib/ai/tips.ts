import { askGroq } from "@/lib/ai/groq";
import { parseJSONArray } from "@/lib/ai/parser";
import { TIPS_SYSTEM_PROMPT, buildTipsPrompt } from "@/lib/ai/prompt";
import type { GroqResponse } from "@/types/groq";

export async function generateTips(keluhan: string) {
  const res: GroqResponse = await askGroq(
    [
      {
        role: "user",
        content: buildTipsPrompt(keluhan),
      },
    ],
    TIPS_SYSTEM_PROMPT
  );

  const content = res?.choices?.[0]?.message?.content || "";

  const parsed = parseJSONArray<string>(content);

  if (!parsed) {
    console.log("Tips gagal di-parse:", content);

    return {
      success: false,
      message: "Gagal generate tips",
      raw: content,
    };
  }

  return {
    success: true,
    data: parsed,
  };
}