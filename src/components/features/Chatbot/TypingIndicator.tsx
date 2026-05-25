export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div
        className="
          rounded-[24px]
          rounded-bl-md
          border
          border-[#E8D0A4]
          bg-[#FFF9EF]
          px-4
          py-3
          shadow-sm
        "
      >

        <p
          className="
            mb-2
            font-poppins
            text-[11px]
            font-medium
            text-[#BD8622]
          "
        >
          Thera
        </p>

        <div className="flex items-center gap-1">

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-[#8B6B52]
            "
          />

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-[#8B6B52]
              [animation-delay:0.15s]
            "
          />

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-[#8B6B52]
              [animation-delay:0.3s]
            "
          />

        </div>

      </div>

    </div>
  );
}