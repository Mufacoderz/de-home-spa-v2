
import ReservasiAI from "./ReservasiAI";
import ReservasiManual from "./ReservasiManual";
import Image from "next/image";
import logoCoklat from "@/public/images/logo-coklat.png"


export default function Reservasi() {
    return (
        <section id="reservasi" className="bg-main flex justify-center flex-col w-full p-10 lg:p-28">
            <div className="favorite-header">
                <h2 className="font-playfair  text-[48px] text-main text-center">Reservasi</h2>
                <h3 className="font-poppins text-[20px] text-second text-center">Jadwalkan Sesi Relaksasi mu</h3>
                <div className="divider-area flex items-center justify-center gap-4">
                    <div className="divider w-40 h-1 bg-ternary rounded-full" />
                    <div className="logo">
                        <Image src={logoCoklat} width={80} height={80} alt="logo" />
                    </div>
                    <div className="divider w-40 h-1 bg-ternary rounded-full" />
                </div>
            </div>
            <ReservasiAI />
            <ReservasiManual />
        </section>
    )
}