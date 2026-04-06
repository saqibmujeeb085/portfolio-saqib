import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 section-padding">
      <div className="container-wide grid gap-6 md:grid-cols-3">
        <p className="text-zinc-400">© {new Date().getFullYear()} Saqib. All rights reserved.</p>
        <Link href="/privacy">Privacy Policy</Link>
        <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15555555555"}`}>WhatsApp</a>
      </div>
    </footer>
  );
}
