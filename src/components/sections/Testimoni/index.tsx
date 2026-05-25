import { Star, CircleUserRound } from "lucide-react";

const ratings = [
  { star: 5, percent: 90 },
  { star: 4, percent: 16 },
  { star: 3, percent: 8 },
  { star: 2, percent: 0 },
  { star: 1, percent: 3 },
];

const testimonials = [
  {
    text: "Booking lewat HP gampang banget, terapis datang tepat waktu. Punggung langsung enteng!",
    name: "Fulan bin Wulan",
  },
  {
    text: "Fitur rekomendasi AI-nya keren banget! Tinggal pilih area pegal langsung dicariin treatment cocok.",
    name: "Budi Santoso",
  },
  {
    text: "Pelayanannya mantap sih, habis treatment badan rasanya reset kayak habis restart Windows.",
    name: "Jack",
  },
  {
    text: "Kerokannya mantap! Masuk angin langsung surrender.",
    name: "Sofyan Al-Buqori",
  },
];

export default function Testimoni() {
  return (
    <section className="bg-[#FDF5E6] flex flex-col lg:flex-row gap-10 p-8 lg:p-20">

      <div className="kiri w-full lg:w-[40%] flex flex-col justify-center">


        <div className="rating-angka font-poppins text-main text-[100px] lg:text-[128px] text-center leading-none">
          4.8
        </div>

        <div className="rating-bintang flex justify-center gap-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="fill-yellow-400 text-yellow-400"
              size={24}
            />
          ))}
        </div>

        <div className="rating-jumlah font-poppins text-main text-center mt-2 mb-8">
          1200+ ulasan
        </div>

        <div className="w-full space-y-4 px-4 lg:px-10">
          {ratings.map((item) => (
            <div
              key={item.star}
              className="grid grid-cols-[16px_1fr] items-center gap-3"
            >
              <span className="text-sm text-main">{item.star}</span>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#DEDCD6]">
                <div
                  className="h-full rounded-full bg-[#C9A46C]"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="kanan w-full lg:w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#E7CFA3] rounded-[28px] p-8 shadow-md flex flex-col justify-between min-h-60"
            >
              <div>
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-yellow-400 text-yellow-400"
                      size={20}
                    />
                  ))}
                </div>

                <p className="text-main text-center font-poppins italic leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <CircleUserRound
                  className="text-purple-400"
                  size={34}
                />

                <div>
                  <div className="font-poppins text-main font-semibold text-sm">
                    {item.name}
                  </div>

                  <div className="text-xs text-main/60">
                    Pelanggan
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}