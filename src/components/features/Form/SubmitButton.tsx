"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import { buildMessageToAdmin } from "@/lib/message/toAdmin";
import { buildMessageToPelanggan } from "@/lib/message/toPelanggan";
import { MidtransResponse } from "@/types/snap-payment";
import { toast } from "sonner";

interface Props {
  nama: string;
  phone: string;
  gender: string;
  lokasi: string;
  detailAlamat: string;
  payment: string;
  catatan: string;
  treatment: string;
  level: string;
  durasi: string;
  harga: string;
  tanggal: string;
  jam: string;
  keluhan: string;
}

// buat klo user masukkan 08 auto berubah datanya jdi 628
export function normalizeTo62(phone: string) {
  let cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  }

  if (!cleaned.startsWith("62")) {
    cleaned = "62" + cleaned;
  }

  return cleaned;
}

export default function SubmitButton({
  nama,
  phone,
  gender,
  lokasi,
  detailAlamat,
  catatan,
  treatment,
  level,
  durasi,
  harga,
  tanggal,
  jam,
  keluhan,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState("");

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey || "");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const closeDialog = () => {
    const escapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      which: 27,
      bubbles: true,
    });

    document.dispatchEvent(escapeEvent);
  };

  const sendToAdmin = async () => {
    const messageToAdmin = buildMessageToAdmin({
      nama,
      gender,
      phone,
      lokasi,
      detailAlamat,
      catatan,
      tanggal,
      jam,
      treatment,
      level,
      durasi,
      harga,
      payment,
    });

    const whatsappUrl = `https://wa.me/6285753421213?text=${encodeURIComponent(
      messageToAdmin
    )}`;

    window.location.href = whatsappUrl;
  };

  const sendTipsToCustomer = async () => {
    const hasKeluhan = keluhan && keluhan.trim().length > 0;

    if (!hasKeluhan) return;

    try {
      const res = await fetch("/api/tips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keluhan }),
      });

      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const customerMessage = buildMessageToPelanggan({
          nama,
          tips: data.data,
        });

        const formattedPhone = normalizeTo62(phone);

        fetch("/api/sendWA", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: formattedPhone,
            message: customerMessage,
            delay: 10000,
          }),
        });
      }
    } catch (error) {
      console.error("Gagal kirim tips:", error);
    }
  };

  const verifyPayment = async (orderId: string) => {
    try {
      const response = await fetch("/api/webhook", {
        method: "POST",
        body: JSON.stringify({
          order_id: orderId,
        }),
      });

      const data = await response.json();

      return (
        data.transaction_status === "settlement" ||
        data.transaction_status === "capture"
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handlePayment = async () => {
    try {
      if (!window.snap) {
        toast.error("Midtrans belum siap");
        return;
      }

      closeDialog();

      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: Number(harga),
          nama,
        }),
      });

      const requestData = await response.json();

      window.snap.pay(requestData.token, {
        onSuccess: async (result: MidtransResponse) => {
          const isValid = await verifyPayment(result.order_id);

          if (!isValid) {
            toast.error("Pembayaran gagal diverifikasi");
            return;
          }

          toast.success("Pembayaran berhasil!");

          await sendTipsToCustomer();

          setTimeout(() => {
            sendToAdmin();
          }, 1000);
        },

        onPending: () => {
          toast.warning("Menunggu pembayaran");
        },

        onError: () => {
          toast.error("Terjadi kesalahan pembayaran");
        },

        onClose: () => {
          toast.warning("Transaksi dibatalkan");
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Gagal memproses pembayaran");
    }
  };

  const handleCashOrder = async () => {
    try {
      closeDialog();

      toast.success("Pesanan berhasil!");

      await sendTipsToCustomer();

      setTimeout(() => {
        sendToAdmin();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrder = async () => {
    if (
      !nama.trim() ||
      !phone.trim() ||
      !lokasi.trim() ||
      !detailAlamat.trim() ||
      !tanggal ||
      !jam
    ) {
      toast.warning("Mohon lengkapi semua data");
      return;
    }

    if (!payment) {
      toast.warning("Pilih metode pembayaran");
      return;
    }

    setLoading(true);

    try {
      if (payment === "cash") {
        await handleCashOrder();
      }

      if (payment === "online") {
        await handlePayment();
      }
    } catch (error) {
      console.error(error);

      toast.error("Terjadi kesalahan");

      const fallback = `
Halo Admin, saya ingin reservasi layanan spa.

Nama: ${nama}
Tanggal: ${tanggal}
Jam: ${jam}
      `.trim();

      window.location.href =
        "https://wa.me/6285753421213?text=" +
        encodeURIComponent(fallback);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Kirim Booking"}
        </button>
      </DialogTrigger>

      <DialogContent className="w-md md:max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center">
            Detail Pesanan
          </DialogTitle>
        </DialogHeader>

        <section className="space-y-3 text-sm mt-4">
          <div className="border rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Detail Treatment
            </h3>

            <p>
              <span className="font-medium">Treatment:</span>{" "}
              {treatment || "-"}
            </p>

            <p>
              <span className="font-medium">Level:</span>{" "}
              {level || "-"}
            </p>

            <p>
              <span className="font-medium">Durasi:</span>{" "}
              {durasi ? `${durasi} menit` : "-"}
            </p>

            <p>
              <span className="font-medium">Harga:</span>{" "}
              {harga
                ? `Rp ${Number(harga).toLocaleString("id-ID")}`
                : "-"}
            </p>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Data Pemesan
            </h3>

            <p>
              <span className="font-medium">Nama:</span>{" "}
              {nama || "-"}
            </p>

            <p>
              <span className="font-medium">Gender:</span>{" "}
              {gender || "-"}
            </p>

            <p>
              <span className="font-medium">No HP:</span>{" "}
              {phone || "-"}
            </p>

            <p>
              <span className="font-medium">Alamat:</span>{" "}
              {detailAlamat || "-"}
            </p>

            <p>
              <span className="font-medium">Tanggal:</span>{" "}
              {tanggal || "-"}
            </p>

            <p>
              <span className="font-medium">Jam:</span>{" "}
              {jam || "-"}
            </p>

            {catatan && (
              <p>
                <span className="font-medium">Catatan:</span>{" "}
                {catatan}
              </p>
            )}
          </div>

          <div>
            <label className="text-lg font-medium">
              Metode Pembayaran
            </label>

            <Select
              value={payment}
              onValueChange={setPayment}
            >
              <SelectTrigger className="w-full h-12 mt-2">
                <SelectValue placeholder="Pilih metode pembayaran" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="cash">
                  Cash (Bayar di tempat)
                </SelectItem>

                <SelectItem value="online">
                  Online Payment (QRIS / Transfer / E-Wallet)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className="flex flex-col gap-y-2 mt-4">
          <button
            type="button"
            onClick={handleOrder}
            disabled={loading}
            className="w-full h-12 rounded-md bg-[#C9A882] text-white disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Pesan Sekarang!"}
          </button>

          <DialogClose asChild>
            <button
              type="button"
              className="w-full h-12 rounded-md bg-black text-white"
            >
              Batal
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}