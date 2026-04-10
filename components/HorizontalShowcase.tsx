"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HorizontalShowcase() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wrapRef.current;
    if (!el) return;

    const sections = gsap.utils.toArray<HTMLElement>(".h-item", el);
    const tween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        pin: true,
        scrub: 1,
        end: "+=1400"
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={wrapRef} className="flex w-[300vw]">
      {"Strategy|Design|Build".split("|").map((item) => (
        <div key={item} className="h-item grid h-[50vh] w-screen place-items-center border-r border-white/10 text-5xl font-semibold">
          {item}
        </div>
      ))}
    </div>
  );
}
