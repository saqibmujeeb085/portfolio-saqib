"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="fixed left-0 top-0 z-50 h-1 bg-violet-500" style={{ width: `${progress}%` }} />;
}
