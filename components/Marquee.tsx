"use client";

import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-white/10 py-4">
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="whitespace-nowrap text-3xl font-semibold text-zinc-300">
        {Array.from({ length: 8 }).map((_, i) => <span key={i} className="mx-6">{text}</span>)}
      </motion.div>
    </div>
  );
}
