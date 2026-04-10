"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container-wide flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">SAQIB.</Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-zinc-300 hover:text-white">{link.label}</Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>Menu</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0 }} animate={{ height: 280 }} exit={{ height: 0 }} className="overflow-hidden bg-zinc-900 md:hidden">
            <div className="flex flex-col p-6">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="py-2 text-lg" onClick={() => setOpen(false)}>{link.label}</Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
