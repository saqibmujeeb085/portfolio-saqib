"use client";

import { useLenis } from "@/hooks/useLenis";

export function SmoothProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
