"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(el.querySelector(".pre-logo"), { opacity: 1, y: 0, duration: 0.6 })
      .to(el.querySelector(".pre-logo"), { opacity: 0, duration: 0.5 }, "+=0.6")
      .to(el, { yPercent: -100, duration: 1.0 }, "-=0.2")
      .set(el, { display: "none" });
  }, []);

  return (
    <div ref={ref} className="preloader" aria-hidden="true">
      <div
        className="pre-logo"
        style={{ opacity: 0, transform: "translateY(12px)" }}
      >
        BRAND
      </div>
    </div>
  );
}
