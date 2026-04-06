"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function animateReveal(selector: string) {
  registerGsapPlugins();
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.to(el as Element, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el as Element, start: "top 85%" }
    });
  });
}
