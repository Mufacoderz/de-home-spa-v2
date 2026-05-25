"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CustomerForm from "@/components/features/Form/CustomerForm";
import SubmitButton from "@/components/features/Form/SubmitButton";
import TreatmentDetail from "@/components/features/Form/TreatmentDetail";

export default function BookingForm() {
  const searchParams = useSearchParams();

  const treatment = searchParams.get("treatment") || "";
  const level = searchParams.get("level") || "";
  const durasi = searchParams.get("durasi") || "";
  const harga = searchParams.get("harga") || "0";
  const keluhan = searchParams.get("keluhan") || "";

  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Laki-laki");
  const [lokasi, setLokasi] = useState("");
  const [detailAlamat, setDetailAlamat] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [catatan, setCatatan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">
            Booking Form
          </p>
          <h1 className="text-2xl font-semibold text-stone-800">
            Form Reservasi De Home Spa
          </h1>
        </div>

        <div className="border border-stone-200 rounded-2xl p-6">
          <TreatmentDetail />

          <CustomerForm
            nama={nama} setNama={setNama}
            phone={phone} setPhone={setPhone}
            gender={gender} setGender={setGender}
            lokasi={lokasi} setLokasi={setLokasi}
            detailAlamat={detailAlamat} setDetailAlamat={setDetailAlamat}
            payment={payment} setPayment={setPayment}
            catatan={catatan} setCatatan={setCatatan}
            tanggal={tanggal} setTanggal={setTanggal}
            jam={jam} setJam={setJam}
          />

          <SubmitButton
            nama={nama}
            phone={phone}
            gender={gender}
            lokasi={lokasi}
            detailAlamat={detailAlamat}
            payment={payment}
            catatan={catatan}
            treatment={treatment}
            level={level}
            durasi={durasi}
            harga={harga}
            tanggal={tanggal}
            jam={jam}
            keluhan={keluhan}
          />
        </div>
      </div>
    </div>
  );
}