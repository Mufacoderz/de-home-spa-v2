import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
};

export default function ButtonReservasi({ children }: ButtonProps) {
  return (
    <Link
      href="/flow"
      className="relative overflow-hidden inline-flex items-center justify-center rounded-xl border-2 border-[#603e00] hover:border-transparent bg-transparent px-10 py-4 font-poppins text-[16px] font-semibold text-main shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#603e00] hover:text-white group"
    >
      {/* efek kilap on hover */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute left-[-120%] top-0 h-full w-[40%] rotate-12 bg-white/30 blur-md transition-all duration-1000 group-hover:left-[130%]" />
      </span>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}