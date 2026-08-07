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
  const [lokasi, setLokasi] = useState("");
  const [detailAlamat, setDetailAlamat] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [catatan, setCatatan] = useState("");

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex justify-center">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">
            Checkout
          </p>
          <h1 className="text-2xl font-semibold text-stone-800">
            Form Checkout Fern Aromatics
          </h1>
        </div>

        <div className="border border-stone-200 rounded-2xl p-6">
          <TreatmentDetail />

          <CustomerForm
            nama={nama} setNama={setNama}
            phone={phone} setPhone={setPhone}
            lokasi={lokasi} setLokasi={setLokasi}
            detailAlamat={detailAlamat} setDetailAlamat={setDetailAlamat}
            payment={payment} setPayment={setPayment}
            catatan={catatan} setCatatan={setCatatan}
          />

          <SubmitButton
            nama={nama}
            phone={phone}
            lokasi={lokasi}
            detailAlamat={detailAlamat}
            payment={payment}
            catatan={catatan}
            treatment={treatment}
            level={level}
            durasi={durasi}
            harga={harga}
            keluhan={keluhan}
          />
        </div>
      </div>
    </div>
  );
}
