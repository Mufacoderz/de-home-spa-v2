export type Treatment = {
  kode: string;
  nama: string;
  area: string;
  level: string;
  harga: Record<string, number>;
  harga_durasi?: number | null;
};

export type Result = {
  treatment: Treatment;
  reason: string;
  durasi: number;
  related: Treatment[];
};

export type ApiResponse = {
  success: boolean;
  message?: string;
  data?: Result;
};