export function buildMessageToAdmin({
  nama,
  phone,
  lokasi,
  detailAlamat,
  catatan,
  treatment,
  level,
  durasi,
  harga,
  payment,
}: {
  nama: string;
  phone: string;
  lokasi: string;
  detailAlamat: string;
  catatan: string;
  treatment: string;
  level: string;
  durasi: string;
  harga: string;
  payment: string;
}) {
  return `
Halo Admin, saya ingin memesan produk dari Fern Aromatics. Berikut detail pesanan saya:

DATA PELANGGAN
Nama: ${nama}
No HP: ${phone}
${catatan ? `Catatan: ${catatan}` : ""}

DETAIL PENGIRIMAN
Wilayah: ${lokasi}
Alamat Detail: ${detailAlamat}

DETAIL PESANAN
Produk: ${treatment}
Intensitas Aroma: ${level}
Ukuran: ${durasi} ml

INFORMASI PEMBAYARAN
Total Harga: Rp ${harga}
Metode: ${payment}

Mohon konfirmasi ketersediaan stok dan proses pesanan saya. Terima kasih!
`.trim();
}
