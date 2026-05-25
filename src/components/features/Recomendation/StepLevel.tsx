import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuLeaf, LuWind } from "react-icons/lu";
import { GiFist } from "react-icons/gi";

const LEVELS = [
  {
    id: "Lembut",
    label: "Lembut",
    desc: "Relaksasi Ringan",
    icon: <LuLeaf className="text-[35px] md:text-[60px]" />,
  },
  {
    id: "Normal",
    label: "Normal",
    desc: "Seimbang & Nyaman",
    icon: <LuWind className="text-[35px] md:text-[60px]" />,
  },
  {
    id: "Keras",
    label: "Keras",
    desc: "Kuat & Intens",
    icon: <GiFist className="text-[35px] md:text-[60px]" />,
  },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepLevel({
  selected,
  onSelect,
  onNext,
  onPrev,
}: Props) {
  return (
    <div className="font-poppins">
      <h2 className="mb-1 text-center font-poppins text-lg font-semibold text-[#8B6B52]">
        Seberapa Kuat Pijatan yang Kamu Inginkan
      </h2>
      <p className="mb-5 text-center text-sm text-[#C8A96E]">
        Pilih Level Pijatan
      </p>

      <div className="mt-12 mb-6 justify-center flex gap-4 md:mt-8">
        {LEVELS.map((lvl) => (
          <button
            key={lvl.id}
            onClick={() => onSelect(lvl.id)}
            className={`h-38 w-58 rounded-4xl border border-[#8B6B52] text-center shadow-2xl transition-all md:h-64 ${
              selected === lvl.id
                ? "border-4 border-[#8B6B52] bg-stone-100"
                : "hover:border-[#8B6B52]"
            }`}
          >
            <span className="flex items-center justify-center text-[#8B6B52]">
              {lvl.icon}
            </span>
            <p className="font-poppins text-sm font-bold text-[#8B6B52] md:text-md">
              {lvl.label}
            </p>
            <p className="text-[8px] font-light text-[#8B6B52] md:text-sm">
              {lvl.desc}
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