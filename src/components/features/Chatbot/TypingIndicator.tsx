export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div
        className="
          rounded-[24px]
          rounded-bl-md
          border
          border-fern-frost2
          bg-fern-petal3
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
            text-fern-glow2
          "
        >
          Fern
        </p>

        <div className="flex items-center gap-1">

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-fern-mid2
            "
          />

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-fern-mid2
              [animation-delay:0.15s]
            "
          />

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-fern-mid2
              [animation-delay:0.3s]
            "
          />

        </div>

      </div>

    </div>
  );
}