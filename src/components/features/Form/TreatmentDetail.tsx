"use client"

import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/utils/formatRupiah";

export default function TreatmentDetail() {
  const searchParams = useSearchParams();

  const treatment = searchParams.get("treatment") || "";
  const level = searchParams.get("level") || "";
  const durasi = searchParams.get("durasi") || "";
  const harga = Number(searchParams.get("harga")) || 0;

  return (
    <div className="mb-6">
      <h2 className="text-sm font-medium text-stone-800 mb-4">
        Detail Treatment
      </h2>

      <div className="space-y-4">

        <div>
          <label className="text-xs text-stone-500 mb-1 block">
            Nama Treatment
          </label>

          <input
            type="text"
            readOnly value={treatment}
           className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm"
          />
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">
            Level Pijatan
          </label>

          <input
            type="text"
            readOnly value={level}
           className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm"
          />
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">
            Durasi
          </label>

          <input
            type="text"
            readOnly value={`${durasi} menit`}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm"
          />
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">
            Harga
          </label>

          <input
            type="text"
            readOnly value={formatPrice(harga)}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm"
          />
        </div>

      </div>
    </div>
  );
}