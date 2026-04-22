"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureGSAP, splitLinesReveal, fadeUp } from "@/lib/anim";

export default function TechInfo() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensureGSAP();
    const el = ref.current;
    if (!el) return;

    splitLinesReveal(el, "h2");
    splitLinesReveal(el, ".copy p");
    fadeUp(el, ".copy .btn", 0);

    const strokes = el.querySelectorAll<SVGGeometryElement>(
      "svg path, svg line, svg rect, svg circle, svg ellipse"
    );
    strokes.forEach((s) => {
      try {
        const len = (s as any).getTotalLength?.() ?? 300;
        (s as any).style.strokeDasharray = String(len);
        (s as any).style.strokeDashoffset = String(len);
      } catch {
        // noop
      }
    });
    gsap.to(strokes, {
      strokeDashoffset: 0,
      duration: 1.6,
      ease: "power2.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && el.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={ref} className="tech">
      <div className="container">
        <div className="inner">
          <div className="copy">
            <h2>Technical details</h2>
            <p>
              Designed in close cooperation with sleep researchers and doctors
              — a well thought-out concept reflected in the technical data.
            </p>
            <a href="#" className="btn btn-lg btn-light">
              Download catalog
            </a>
          </div>
          <div className="sketch" aria-hidden="true">
            <svg
              viewBox="0 0 400 700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#777"
              strokeWidth="1"
            >
              <line x1="200" y1="60" x2="200" y2="640" />
              <rect x="178" y="20" width="44" height="180" rx="6" />
              <circle cx="200" cy="280" r="36" />
              <ellipse cx="200" cy="660" rx="120" ry="10" />
              <line x1="200" y1="280" x2="260" y2="340" />
              <line x1="260" y1="340" x2="260" y2="420" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
