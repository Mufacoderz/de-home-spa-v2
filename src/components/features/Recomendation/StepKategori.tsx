import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuFlame, LuWind, LuSprayCan, LuDroplet } from "react-icons/lu";

const KATEGORI = [
  {
    id: "Candle",
    label: "Candle",
    desc: "Lilin Aromaterapi",
    icon: <LuFlame className="text-[35px] md:text-[60px]" />,
  },
  {
    id: "Reed Diffuser",
    label: "Reed Diffuser",
    desc: "Aroma Tahan Lama",
    icon: <LuWind className="text-[35px] md:text-[60px]" />,
  },
  {
    id: "Room Spray",
    label: "Room Spray",
    desc: "Instan & Praktis",
    icon: <LuSprayCan className="text-[35px] md:text-[60px]" />,
  },
  {
    id: "Roll-On",
    label: "Roll-On",
    desc: "Personal & Portable",
    icon: <LuDroplet className="text-[35px] md:text-[60px]" />,
  },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepKategori({
  selected,
  onSelect,
  onNext,
  onPrev,
}: Props) {
  return (
    <div className="font-poppins">
      <h2 className="mb-1 text-center font-poppins text-lg font-semibold text-fern-deep">
        Kategori Produk yang Kamu Inginkan
      </h2>
      <p className="mb-5 text-center text-sm text-fern-mid">
        Pilih Kategori Produk
      </p>

      <div className="mt-12 mb-6 flex flex-wrap justify-center gap-4 md:mt-8">
        {KATEGORI.map((kat) => (
          <button
            key={kat.id}
            onClick={() => onSelect(kat.id)}
            className={`h-38 w-58 rounded-4xl border border-fern-deep text-center shadow-2xl transition-all md:h-64 ${
              selected === kat.id
                ? "border-4 border-fern-deep bg-stone-100"
                : "hover:border-fern-deep"
            }`}
          >
            <span className="flex items-center justify-center text-fern-deep">
              {kat.icon}
            </span>
            <p className="font-poppins text-sm font-bold text-fern-deep md:text-md">
              {kat.label}
            </p>
            <p className="text-[8px] font-light text-fern-deep md:text-sm">
              {kat.desc}
            </p>
          </button>
        ))}
      </div>

      <section className="mt-22 flex items-center justify-between md:mt-0">
        <button
          onClick={onPrev}
          className="mt-6 flex w-28 items-center justify-center gap-2 rounded-4xl border-2 border-fern-deep py-2 text-sm font-medium text-fern-deep transition md:w-32"
        >
          <FaArrowLeft />
          <span>Kembali</span>
        </button>

        <button
          onClick={onNext}
          disabled={!selected}
          className="mt-6 flex w-38 items-center justify-center gap-2 rounded-4xl border-2 border-fern-deep py-2 text-sm font-medium text-fern-deep transition disabled:opacity-40 md:w-52"
        >
          <span>Lanjutkan</span>
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
}
