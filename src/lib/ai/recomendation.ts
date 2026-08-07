import { buildPrompt, SYSTEM_PROMPT } from "@/lib/ai/prompt";
import { askGroq } from "@/lib/ai/groq";
import { parseJSONObject } from "@/lib/ai/parser";
import type { Treatment } from "@/types/treatment";
import type { GroqResponse } from "@/types/groq";

interface RecommendParams {
  areas: string[];
  level: string;
  keluhan: string;
  treatments: Treatment[];
}

interface AIResult {
  kode: string;
  reason: string;
}

export async function recommendTreatment({
  areas,
  level,
  keluhan,
  treatments,
}: RecommendParams) {
  const scope = areas[0];

  const filtered = treatments.filter(
    (t) => t.area.toLowerCase() === scope.toLowerCase()
  );

  if (!filtered.length) {
    return {
      success: false,
      message: `Tidak ada produk untuk kategori ${scope}`,
    };
  }

  const prompt = buildPrompt({
    areas,
    level,
    keluhan,
    treatments: filtered,
  });

  const res: GroqResponse = await askGroq(
    [{ role: "user", content: prompt }],
    SYSTEM_PROMPT
  );

  const content = res?.choices?.[0]?.message?.content || "";
  const parsed = parseJSONObject<AIResult>(content);

  if (!parsed?.kode) {
    return {
      success: false,
      message: "AI gagal menghasilkan rekomendasi valid",
      raw: content,
    };
  }

  const selected = treatments.find((t) => t.kode === parsed.kode);

  if (!selected) {
    return {
      success: false,
      message: "Kode produk tidak ditemukan",
      raw: parsed,
    };
  }

  return {
    success: true,
    data: {
      treatment: selected,
      reason: parsed.reason,
    },
  };
}