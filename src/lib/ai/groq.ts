import type { GroqResponse, GroqMessage } from "@/types/groq";

const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

const MODEL_PRIORITY = [
  "openai/gpt-oss-120b",
  "llama-3.3-70b-versatile",
  "qwen/qwen3-32b",
  "meta-llama/llama-4-scout-17b-16e-instruct",
  "openai/gpt-oss-20b",
  "llama-3.1-8b-instant",
];

const MODEL_MAX_TOKENS: Record<string, number> = {
  "openai/gpt-oss-120b": 800,
  "llama-3.3-70b-versatile": 600,
  "qwen/qwen3-32b": 500,
  "meta-llama/llama-4-scout-17b-16e-instruct": 500,
  "openai/gpt-oss-20b": 400,
  "llama-3.1-8b-instant": 250,
};

// FIX 1: Tambah TTL supaya cache tidak stale selamanya
let cachedAvailableModels: string[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 menit

async function getAvailableModels(): Promise<string[]> {
  const now = Date.now();

  // Gunakan cache hanya kalau masih dalam TTL
  if (cachedAvailableModels && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedAvailableModels;
  }

  const response = await fetch(`${GROQ_BASE_URL}/models`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.warn(
      "Gagal mengambil daftar model Groq, fallback ke priority list lokal."
    );

    // FIX 2: Jangan cache saat error — biarkan null supaya request
    // berikutnya masih bisa retry ke API
    return MODEL_PRIORITY;
  }

  const data = await response.json();

  // FIX 3: Type guard eksplisit supaya tidak ada string | undefined masuk ke array
  cachedAvailableModels = (data.data as { id: string }[])
    .map((model) => model.id)
    .filter((id): id is string => typeof id === "string" && id.length > 0);

  cacheTimestamp = Date.now();

  return cachedAvailableModels;
}

async function getModelQueue(preferredModel?: string) {
  const availableModels = await getAvailableModels();

  const orderedModels = MODEL_PRIORITY.filter((model) =>
    availableModels.includes(model)
  );

  // FIX 4: Sederhanakan dua blok if yang overlap jadi satu
  if (preferredModel && availableModels.includes(preferredModel)) {
    return [
      preferredModel,
      ...orderedModels.filter((model) => model !== preferredModel),
    ];
  }

  return orderedModels.length ? orderedModels : MODEL_PRIORITY;
}

async function callGroqOnce(
  messages: GroqMessage[],
  system: string | undefined,
  model: string
): Promise<GroqResponse> {
  const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      max_tokens: MODEL_MAX_TOKENS[model] ?? 300,
      messages: [
        ...(system ? [{ role: "system", content: system }] : []),
        ...messages,
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Groq model ${model} gagal. Status: ${response.status}. ${errorText}`
    );
  }

  return response.json() as Promise<GroqResponse>;
}

export async function askGroq(
  messages: GroqMessage[],
  system?: string,
  preferredModel?: string
): Promise<GroqResponse> {

  const modelQueue = await getModelQueue(preferredModel);

  // safeguard
  if (!modelQueue.length) {
    throw new Error(
      "Tidak ada model Groq yang tersedia."
    );
  }

  let lastError: unknown = null;

  for (const model of modelQueue) {
    try {
      console.log(`Mencoba Groq model: ${model}`);

      return await callGroqOnce(
        messages,
        system,
        model
      );

    } catch (error) {
      lastError = error;

      console.warn(
        `Model ${model} gagal, mencoba model berikutnya...`
      );
    }
  }

  throw (
    lastError ??
    new Error("Semua model Groq gagal.")
  );
}