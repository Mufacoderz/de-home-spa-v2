import { TREATMENTS } from "@/data/treatment";

export function retrieveTreatments(input: string, limit = 6) {
  const query = input.toLowerCase();

  return TREATMENTS
    .map((treatment) => {
      let score = 0;

      const searchableText = [
        treatment.nama,
        treatment.area,
        treatment.level,
        treatment.desc,
        ...(treatment.keywords ?? []),
        ...(treatment.cocokUntuk ?? []),
      ]
        .join(" ")
        .toLowerCase();

      // Match area
      if (query.includes(treatment.area.toLowerCase())) {
        score += 6;
      }

      // Match level
      if (query.includes(treatment.level.toLowerCase())) {
        score += 4;
      }

      // Match keywords penting
      for (const keyword of treatment.keywords ?? []) {
        if (query.includes(keyword.toLowerCase())) {
          score += 8;
        }
      }

      // Match cocokUntuk
      for (const target of treatment.cocokUntuk ?? []) {
        if (query.includes(target.toLowerCase())) {
          score += 3;
        }
      }

      // Fallback word matching
      const queryWords = query
        .split(/\s+/)
        .map((word) => word.trim())
        .filter((word) => word.length > 3);

      for (const word of queryWords) {
        if (searchableText.includes(word)) {
          score += 1;
        }
      }

      // Bonus kalau user minta lembut/ringan
      if (
        (query.includes("lembut") ||
          query.includes("ringan") ||
          query.includes("santai") ||
          query.includes("relaks")) &&
        treatment.level === "Lembut"
      ) {
        score += 5;
      }

      // Bonus kalau user minta normal/sedang
      if (
        (query.includes("normal") ||
          query.includes("sedang") ||
          query.includes("biasa")) &&
        treatment.level === "Normal"
      ) {
        score += 5;
      }

      // Bonus kalau user minta kuat/keras/dalam
      if (
        (query.includes("kuat") ||
          query.includes("keras") ||
          query.includes("dalam") ||
          query.includes("deep")) &&
        treatment.level === "Keras"
      ) {
        score += 5;
      }

      return {
        ...treatment,
        score,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}