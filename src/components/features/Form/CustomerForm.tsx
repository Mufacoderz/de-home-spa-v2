interface Props {
  nama: string;
  setNama: (v: string) => void;

  phone: string;
  setPhone: (v: string) => void;

  lokasi: string;
  setLokasi: (v: string) => void;

  detailAlamat: string;
  setDetailAlamat: (v: string) => void;

  payment: string;
  setPayment: (v: string) => void;

  catatan: string;
  setCatatan: (v: string) => void;
}

export default function CustomerForm({
  nama,
  setNama,
  phone,
  setPhone,
  lokasi,
  setLokasi,
  detailAlamat,
  setDetailAlamat,
  catatan,
  setCatatan,
}: Props) {

  return (
    <>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-stone-800 mb-4">
          Data Pelanggan
        </h2>

        <div className="space-y-4">

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Nama
            </label>

            <input
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama lengkap"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Nomor HP
            </label>

            <input
              required
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Catatan Tambahan
            </label>

            <textarea
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              placeholder="Opsional..."
              className="w-full min-h-22.5 rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none resize-none focus:border-stone-400"
            />
          </div>

        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-sm font-medium text-stone-800 mb-4">
          Detail Pengiriman
        </h2>

        <div className="space-y-4">

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Kota / Wilayah
            </label>

            <input
              required
              type="text"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              placeholder="Contoh: Samarinda"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Alamat Detail
            </label>

            <textarea
              required
              value={detailAlamat}
              onChange={(e) => setDetailAlamat(e.target.value)}
              placeholder="Jalan, nomor rumah, patokan..."
              className="w-full min-h-22.5 rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none resize-none focus:border-stone-400"
            />
          </div>

        </div>
      </div>
    </>
  );
}
