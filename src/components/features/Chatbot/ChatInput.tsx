"use client";

import { Loader2, SendHorizontal } from "lucide-react";

type Props = {
  input: string;
  loading: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
};

export default function ChatInput({
  input,
  loading,
  textareaRef,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="border-t border-thera bg-thera-surface/90 p-4">
      <div className="flex items-end gap-2 rounded-2xl border border-thera bg-white p-2">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={onChange}
          rows={1}
          placeholder="Ceritakan keluhanmu..."
          className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 font-poppins text-sm text-main outline-none placeholder:text-second/60"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />

        <button
          onClick={onSend}
          disabled={loading || !input.trim()}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-ternary text-ternary transition hover:scale-[1.04] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Kirim pesan"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <SendHorizontal size={19} />
          )}
        </button>
      </div>
    </div>
  );
}