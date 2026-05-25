export function cleanAIText(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export function parseJSONObject<T>(text: string): T | null {
  try {
    const cleaned = cleanAIText(text);
    const match = cleaned.match(/\{[\s\S]*\}/);

    if (!match) return null;

    return JSON.parse(match[0]) as T;
  } catch {
    return null;
  }
}

export function parseJSONArray<T>(text: string): T[] | null {
  try {
    const cleaned = cleanAIText(text);

    const start = cleaned.indexOf("[");
    const end = cleaned.lastIndexOf("]");

    if (start === -1 || end === -1) return null;

    const parsed = JSON.parse(cleaned.slice(start, end + 1));

    return Array.isArray(parsed) ? (parsed as T[]) : null;
  } catch {
    return null;
  }
}