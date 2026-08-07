"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StepKategori from "@/components/features/Recomendation/StepKategori";
import StepLevel from "@/components/features/Recomendation/StepLevel";
import StepDurasi from "@/components/features/Recomendation/StepDurasi";
import StepKeluhan from "@/components/features/Recomendation/StepKeluhan";
import StepResult from "@/components/features/Recomendation/StepResult";

import type { Result } from "@/types/flow";

export default function FlowShell() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [selectedKategori, setSelectedKategori] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDur, setSelectedDur] = useState("");
  const [keluhan, setKeluhan] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const areas = [selectedKategori];
  const STEPS = ["Kategori", "Level", "Ukuran", "Keluhan"];

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/recomendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ areas, level: selectedLevel, durasi: selectedDur, keluhan }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.data);
        setStep(4);
      } else {
        setError(data.message || "Terjadi kesalahan");
      }
    } catch {
      setError("Gagal menghubungi server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-main px-4 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {step < 4 && (
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-main">
              Rekomendasi Fern
            </h1>

            <p className="mt-1 text-sm text-second">
              {step === 0 && "Pilih kategori produk yang kamu inginkan"}
              {step === 1 && "Pilih intensitas aroma"}
              {step === 2 && "Pilih ukuran produk yang kamu inginkan"}
              {step === 3 && "Ceritakan mood atau suasana yang kamu mau"}
            </p>
          </div>
        )}

        {step < 4 && (
          <div className="mb-8 flex items-center gap-0 overflow-x-auto">
            {STEPS.map((label, i) => {
              const isActive = i === step;
              const isDone = i < step;

              return (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all ${isActive || isDone
                          ? "bg-ternary   text-white"
                          : "border border-fern-mid bg-white text-fern-mid"
                        }`}
                    >
                      {i + 1}
                    </div>

                    <span
                      className={`mt-1 w-16 text-center text-[10px] ${isActive || isDone
                          ? "font-medium text-main"
                          : "text-fern-mid"
                        }`}
                    >
                      {label}
                    </span>
                  </div>

                  {i < STEPS.length - 1 && (
                    <div
                      className={`mb-4 h-px w-12 transition-all ${i < step ? "bg-fern-ternary" : "bg-fern-frost"
                        }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div
          className={`w-full ${step === 4
              ? "max-w-6xl pb-12"
              : "max-w-4xl rounded-3xl bg-white p-6 shadow-sm"
            }`}
        >
          {step === 0 && (
            <StepKategori
              selected={selectedKategori}
              onSelect={setSelectedKategori}
              onNext={handleNext}
              onPrev={() => router.push("/")}
            />
          )}

          {step === 1 && (
            <StepLevel
              selected={selectedLevel}
              onSelect={setSelectedLevel}
              onNext={handleNext}
              onPrev={handleBack}
            />
          )}

          {step === 2 && (
            <StepDurasi
              selected={selectedDur}
              onSelect={setSelectedDur}
              onNext={handleNext}
              onPrev={handleBack}
            />
          )}

          {step === 3 && (
            <StepKeluhan
              value={keluhan}
              onChange={setKeluhan}
              onSubmit={handleSubmit}
              onPrev={handleBack}
              loading={loading}
              error={error}
            />
          )}

          {step === 4 && result && (
            <StepResult result={result} keluhan={keluhan} />
          )}
        </div>
      </div>
    </div>
  );
}