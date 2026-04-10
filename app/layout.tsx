import type { Metadata } from "next";
import "./globals.css";
import "@/styles/animations.css";
import { baseMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { PageLoader } from "@/components/PageLoader";
import { BackToTop } from "@/components/BackToTop";
import { PageTransition } from "@/components/PageTransition";
import { SmoothProvider } from "@/components/SmoothProvider";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothProvider>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <Header />
          <PageTransition>{children}</PageTransition>
          <BackToTop />
          <Footer />
        </SmoothProvider>
      </body>
    </html>
  );
}
