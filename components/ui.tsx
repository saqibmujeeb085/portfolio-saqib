"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

export function SectionTitle({ eyebrow, title, className }: { eyebrow?: string; title: string; className?: string }) {
  return (
    <div className={clsx("mb-10", className)}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-violet-400">{eyebrow}</p>}
      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
    </div>
  );
}

export function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
      <Link className="inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-medium transition hover:bg-violet-500" href={href}>
        {children}
      </Link>
    </motion.div>
  );
}
