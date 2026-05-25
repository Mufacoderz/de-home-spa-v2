interface Props {
  nama: string;
  setNama: (v: string) => void;

  phone: string;
  setPhone: (v: string) => void;

  gender: string;
  setGender: (v: string) => void;

  lokasi: string;
  setLokasi: (v: string) => void;

  detailAlamat: string;
  setDetailAlamat: (v: string) => void;

  payment: string;
  setPayment: (v: string) => void;

  catatan: string;
  setCatatan: (v: string) => void;

  tanggal: string;
  setTanggal: (v: string) => void;

  jam: string;
  setJam: (v: string) => void;
}

export default function CustomerForm({
  nama,
  setNama,
  phone,
  setPhone,
  gender,
  setGender,
  lokasi,
  setLokasi,
  detailAlamat,
  setDetailAlamat,
  catatan,
  setCatatan,
  tanggal,
  setTanggal,
  jam,
  setJam,
}: Props) {

  // tanggal minimal = hari ini
  const today = new Date().toISOString().split("T")[0];

  // jam minimal = sekarang + 1 jam
  const getMinTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1);

    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
  };
  const isToday = (date: string) =>
    date === new Date().toISOString().split("T")[0];

  const isValidTime = (time: string, date: string) => {
    if (!isToday(date)) return true;
    return time >= getMinTime();
  };
  const handleJamChange = (val: string) => {
    setJam(isValidTime(val, tanggal) ? val : getMinTime());
  };


  return (
    <>
      <div className="mb-5">
        <h3 className="text-sm font-medium text-stone-800 mb-3">
          Jadwal Treatment
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Tanggal
            </label>

            <input
              type="date"
              required
              min={today}
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Jam
            </label>

            <input
              type="time"
              value={jam}
              min={isToday(tanggal) ? getMinTime() : undefined}
              onChange={(e) => handleJamChange(e.target.value)}
            />

            <p className="text-[11px] text-stone-400 mt-1">
              Minimal pemesanan 1 jam sebelum treatment dimulai.
            </p>
          </div>
        </div>
      </div>

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
              Gender
            </label>

            <select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Lokasi
            </label>

            <select
              required
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            >
              <option value="">Pilih lokasi</option>
              <option value="Samarinda Kota">Samarinda Kota</option>
              <option value="Samarinda Seberang">Samarinda Seberang</option>
              <option value="Samarinda Ulu">Samarinda Ulu</option>
              <option value="Samarinda Ilir">Samarinda Ilir</option>
              <option value="Sambutan">Sambutan</option>
              <option value="Sungai Kunjang">Sungai Kunjang</option>
              <option value="Palaran">Palaran</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">
              Detail Alamat
            </label>

            <textarea
              required
              value={detailAlamat}
              onChange={(e) => setDetailAlamat(e.target.value)}
              placeholder="Jalan, nomor rumah, patokan..."
              className="w-full min-h-22.5 rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none resize-none focus:border-stone-400"
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
    </>
  );
}