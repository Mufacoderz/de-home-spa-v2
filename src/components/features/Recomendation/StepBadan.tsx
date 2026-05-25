"use client";

import Image from "next/image";
import abu from "@/public/images/anatomy/default.webp";
import { getSelectedImage } from "@/utils/getSelectedImage";
import { FaArrowLeft, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  selected: number[];
  onSelect: (ids: number[]) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepBadan({ selected, onSelect, onNext, onPrev }: Props) {
  const toggle = (id: number) => {
    onSelect(
      selected.includes(id)
        ? selected.filter((x) => x !== id)
        : [...selected, id]
    );
  };

  return (
    <div className="mx-auto font-poppins">
      <div className="mb-6 text-center">
        <h2 className="mb-1 text-lg font-semibold text-[#8B6B52]">
          Bagian Tubuh Mana yang Terasa Pegal
        </h2>
        <p className="text-sm text-[#C8A96E]">
          Kamu bisa pilih lebih dari satu area
        </p>
      </div>

      <div className="mb-0 flex justify-center">
        <div className="mt-16 mr-18 md:mr-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C1C1C1] bg-[#FDF5E6] text-[#8B6B52] md:hidden">
                <FaRegQuestionCircle size={20} />
              </button>
            </DialogTrigger>

            <DialogContent className="min-h-50 w-70 max-w-[90vw] rounded-3xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-[#8B6B52]">
                  <FaRegQuestionCircle />
                  Tips
                </DialogTitle>
              </DialogHeader>

              <p className="text-sm text-[#8B6B52]">
                Pilih satu atau lebih area yang terasa pegal agar kami bisa
                memberikan rekomendasi yang lebih tepat
              </p>
            </DialogContent>
          </Dialog>

          <div className="hidden h-42 w-42 rounded-4xl border border-[#C1C1C1] md:block">
            <div className="h-full w-full rounded-4xl bg-[#FDF5E6] p-3">
              <div className="mb-2 flex items-center gap-2 font-bold text-[#8B6B52]">
                <FaRegQuestionCircle />
                <p>Tips</p>
              </div>

              <p className="text-xs font-extralight text-[#8B6B52]">
                Pilih satu atau lebih area yang terasa pegal agar kami bisa
                memberikan rekomendasi yang lebih tepat
              </p>
            </div>
          </div>
        </div>

        <div
          className="mr-0 inline-block cursor-pointer"
          onClick={(e) => {
            const img = e.currentTarget.querySelector("img") as HTMLImageElement;
            if (!img) return;

            const rect = img.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width;
            const relY = (e.clientY - rect.top) / rect.height;

            let areaId: number | null = null;

            if (relY < 0.2) areaId = 1;
            else if (relY >= 0.2 && relY < 0.35) {
              areaId = relX < 0.15 || relX > 0.85 ? 2 : 3;
            } else if (relY >= 0.35 && relY < 0.54) {
              areaId = relX < 0.1 || relX > 0.9 ? 2 : 3;
            } else areaId = 4;

            toggle(areaId);
          }}
        >
          <Image
            src={getSelectedImage(selected, abu)}
            alt="Area tubuh"
            loading="lazy"
            className="h-66 w-auto object-contain md:h-74"
          />
        </div>
      </div>

      <section className="flex items-center justify-between">
        <button
          onClick={onPrev}
          className="mt-6 flex w-28 items-center justify-center gap-2 rounded-4xl border-2 border-[#8B6B52] py-2 text-sm font-medium text-[#8B6B52] transition md:w-32"
        >
          <FaArrowLeft />
          <span>Kembali</span>
        </button>

        <button
          onClick={onNext}
          disabled={selected.length === 0}
          className="mt-6 flex w-38 items-center justify-center gap-2 rounded-4xl border-2 border-[#8B6B52] py-2 text-sm font-medium text-[#8B6B52] transition disabled:opacity-40 md:w-52"
        >
          <span>Lanjutkan</span>
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
}