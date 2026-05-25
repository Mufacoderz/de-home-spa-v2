export function buildMessageToAdmin({
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
}: {
  nama: string;
  gender: string;
  phone: string;
  lokasi: string;
  detailAlamat: string;
  catatan: string;
  tanggal: string;
  jam: string;
  treatment: string;
  level: string;
  durasi: string;
  harga: string;
  payment: string;
}) {
  return `
Halo Admin, saya ingin melakukan reservasi layanan De Home Spa. Berikut adalah detail pesanan saya:

DATA PELANGGAN
Nama: ${nama}
Gender: ${gender}
No HP: ${phone}
Wilayah: ${lokasi}
Alamat Detail: ${detailAlamat}
${catatan ? `Catatan: ${catatan}` : ""}

JADWAL KUNJUNGAN
Tanggal: ${tanggal}
Jam: ${jam} WITA

DETAIL PERAWATAN
Treatment: ${treatment}
Level Tekanan: ${level}
Durasi: ${durasi} menit

INFORMASI PEMBAYARAN
Total Harga: Rp ${harga}
Metode: ${payment}

Mohon konfirmasi ketersediaan terapis untuk jadwal di atas. Terima kasih!
`.trim();
}