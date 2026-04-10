"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-black" exit={{ opacity: 0 }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-semibold text-gradient">Loading Experience</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
