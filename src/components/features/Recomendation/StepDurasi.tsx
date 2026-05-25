import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const DURATIONS = [
  {
    id: "30",
    label: "30 menit",
    desc: "Durasi Singkat",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
  {
    id: "60",
    label: "60 menit",
    desc: "Durasi Ideal",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
  {
    id: "90",
    label: "90 menit",
    desc: "Lebih Lama",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
  {
    id: "120",
    label: "120 menit",
    desc: "Sesi Maksimal",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepDurasi({
  selected,
  onSelect,
  onNext,
  onPrev,
}: Props) {
  return (
    <div className="font-poppins">
      <h2 className="mb-1 text-center text-lg font-semibold text-[#8B6B52]">
        Durasi Pijatan yang kamu inginkan
      </h2>
      <p className="text-center text-sm text-[#C8A96E]">
        Pilih Durasi Pijatan yang paling sesuai
      </p>

      <div className="mt-12 mb-6 flex gap-4 md:mt-8">
        {DURATIONS.map((dur) => (
          <button
            key={dur.id}
            onClick={() => onSelect(dur.id)}
            className={`h-38 w-58 rounded-4xl border border-[#8B6B52] text-center shadow-2xl transition-all md:h-64 ${
              selected === dur.id
                ? "border-4 border-[#8B6B52] bg-stone-100"
                : "hover:border-[#8B6B52]"
            }`}
          >
            <span className="mb-4 flex items-center justify-center text-[#8B6B52]">
              {dur.icon}
            </span>
            <p className="font-poppins text-[10px] font-bold text-[#8B6B52] md:text-sm">
              {dur.label}
            </p>
            <p className="text-[6px] font-light text-[#C8A96E] md:text-xs">
              {dur.desc}
            </p>
          </button>
        ))}
      </div>

      <section className="mt-22 flex items-center justify-between md:mt-0">
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