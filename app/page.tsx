import { HomeSections } from "@/sections/home-sections";
import { buildJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = buildJsonLd("Saqib");
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeSections />
    </main>
  );
}
