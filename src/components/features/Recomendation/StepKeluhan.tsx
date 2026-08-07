import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logoCoklat from "@/public/images/logo-coklat.png"

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  onPrev: () => void;
  loading: boolean;
  error: string;
}

export default function StepKeluhan({
  value,
  onChange,
  onSubmit,
  onPrev,
  loading,
  error,
}: Props) {
  return (
    <div className="font-poppins">
      <div className="px-4">
        <h2 className="-mt-3 mb-1 text-left text-md font-semibold text-fern-deep">
          Ceritakan Mood atau Suasana yang Kamu Mau
        </h2>
        <p className="mb-2 text-left text-xs font-medium text-fern-mid">
          Jelaskan suasana yang kamu inginkan agar Fern bisa kasih rekomendasi yang pas
        </p>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        placeholder="Contoh: pengen suasana kamar yang bikin tidur lebih nyenyak..."
        className="min-h-30 w-full resize-none rounded-2xl border border-fern-frost bg-stone-50 p-4 text-sm text-stone-700 placeholder:text-stone-400 focus:border-4 focus:border-fern-frost focus:outline-none"
      />

      <div className="w-full px-2">
        <p className="text-sm text-fern-deep">Pilihan cepat :</p>

        <div className="flex flex-col">
          <button
            onClick={() =>
              onChange("Pengen ruangan kerja terasa lebih fokus dan tenang.")
            }
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-fern-mid bg-fern-panel px-2 py-1 text-sm font-medium text-fern-deep transition"
          >
            <p>Pengen ruangan kerja terasa lebih fokus dan tenang.</p>
          </button>

          <button
            onClick={() =>
              onChange("Lagi pengen suasana rumah yang hangat dan homey.")
            }
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-fern-mid bg-fern-panel px-2 py-1 text-sm font-medium text-fern-deep transition"
          >
            <p>Lagi pengen suasana rumah yang hangat dan homey.</p>
          </button>

          <button
            onClick={() =>
              onChange("Mau aroma segar buat kamar mandi atau ruang kecil.")
            }
            className="mt-4 hidden w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-fern-mid bg-fern-panel px-2 py-1 text-sm font-medium text-fern-deep transition md:flex"
          >
            <p>Mau aroma segar buat kamar mandi atau ruang kecil.</p>
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-4 text-center text-sm text-red-500">{error}</p>
      )}

      <section className="mt-8 flex items-center justify-between md:mt-4">
        <button
          onClick={onPrev}
          disabled={loading}
          className="mt-6 flex w-28 items-center justify-center gap-2 rounded-4xl border-2 border-fern-deep py-2 text-sm font-medium text-fern-deep transition disabled:opacity-40 md:w-32"
        >
          <FaArrowLeft />
          <span>Kembali</span>
        </button>

        <button
          onClick={onSubmit}
          disabled={value.trim().length < 5 || loading}
          className="mt-6 flex w-38 items-center justify-center gap-2 rounded-4xl border-2 border-fern-deep py-2 text-sm font-medium text-fern-deep transition disabled:opacity-40 md:w-52"
        >
          <span>Kirim</span>
          <FaArrowRight />
        </button>
      </section>

      {loading && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/35 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-[28px] bg-fern-second px-7 py-8 text-center shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="relative mx-auto mb-6 flex h-22 w-22 items-center justify-center rounded-full bg-fern-deep/10">
              <div className="absolute inset-2 rounded-full border border-fern-mid/50 animate-ping" />
              <Image src={logoCoklat}  width={42} height={42} alt="logo" />
            </div>

            <h3 className="text-xl font-semibold text-main">
              Meracik Rekomendasi
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-second">
              Fern sedang mencocokkan mood kamu dengan produk terbaik.
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-second">
              <div className="h-full w-1/2 rounded-full bg-ternary animate-[loadingSlide_1.4s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
