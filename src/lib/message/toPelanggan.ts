export function buildMessageToPelanggan({
  nama,
  tips,
}: {
  nama: string;
  tips: string[];
}) {
  return `
Hai ${nama}, terima kasih telah memesan di Fern Aromatics!

Jika belum, jangan lupa kirim konfirmasi pesanan kamu ke admin kami ya.

Sambil menunggu pesanan sampai, berikut tips dari Fern:

${tips.map((t) => `- ${t}`).join("\n")}

Fern Aromatics
`.trim();
}