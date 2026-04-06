"use client";

export function BackToTop() {
  return (
    <button
      className="fixed bottom-6 right-6 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Top
    </button>
  );
}
