export type AreaTreatment = "Candle" | "Reed Diffuser" | "Room Spray" | "Roll-On";
export type LevelTreatment = "Ringan" | "Sedang" | "Kuat";

export interface Treatment {
  kode: string;
  nama: string;
  area: AreaTreatment;
  desc: string;
  level: LevelTreatment;
  harga: Record<number, number>;
  keywords?: string[];
  cocokUntuk?: string[];
}