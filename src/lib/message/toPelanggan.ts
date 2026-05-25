export function buildMessageToPelanggan({
  nama,
  tips,
}: {
  nama: string;
  tips: string[];
}) {
  return `
Hai ${nama}, terima kasih telah melakukan reservasi di De Home Spa!

Jika belum, jangan lupa kirim konfirmasi reservasi kamu ke admin kami ya.

Sambil menunggu jadwal treatment, berikut tips dari kami:

${tips.map((t) => `- ${t}`).join("\n")}

De Home Spa
`.trim();
}