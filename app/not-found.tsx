"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center section-padding">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-3 text-zinc-400">Page lost in the animation timeline.</p>
      </motion.div>
    </main>
  );
}
