import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const UKURAN = [
  {
    id: "10",
    label: "10ml",
    desc: "Travel Size",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
  {
    id: "30",
    label: "30ml",
    desc: "Reguler",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
  {
    id: "60",
    label: "60ml",
    desc: "Value Size",
    icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />,
  },
  {
    id: "100",
    label: "100ml",
    desc: "Jumbo",
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
      <h2 className="mb-1 text-center text-lg font-semibold text-fern-deep">
        Ukuran yang kamu inginkan
      </h2>
      <p className="text-center text-sm text-fern-mid">
        Pilih Ukuran Produk yang paling sesuai
      </p>

      <div className="mt-12 mb-6 flex flex-wrap justify-center gap-4 md:mt-8">
        {UKURAN.map((uk) => (
          <button
            key={uk.id}
            onClick={() => onSelect(uk.id)}
            className={`h-38 w-58 rounded-4xl border border-fern-deep text-center shadow-2xl transition-all md:h-64 ${
              selected === uk.id
                ? "border-4 border-fern-deep bg-stone-100"
                : "hover:border-fern-deep"
            }`}
          >
            <span className="mb-4 flex items-center justify-center text-fern-deep">
              {uk.icon}
            </span>
            <p className="font-poppins text-[10px] font-bold text-fern-deep md:text-sm">
              {uk.label}
            </p>
            <p className="text-[6px] font-light text-fern-mid md:text-xs">
              {uk.desc}
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
