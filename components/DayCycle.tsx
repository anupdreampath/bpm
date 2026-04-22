"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DAY_SLIDES } from "@/lib/assets";
import { ensureGSAP, splitLinesReveal } from "@/lib/anim";

export default function DayCycle() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensureGSAP();
    const el = ref.current;
    if (!el) return;

    const rows = el.querySelectorAll<HTMLElement>(".day-row");

    rows.forEach((row) => {
      const mode = row.dataset.mode || "light";
      ScrollTrigger.create({
        trigger: row,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => el.setAttribute("data-mode", mode),
        onEnterBack: () => el.setAttribute("data-mode", mode),
      });

      // split headline + paragraph into line reveals
      splitLinesReveal(row, "h3");
      splitLinesReveal(row, "p");

      // media scale + time badge reveal
      const mediaImg = row.querySelector<HTMLElement>(".media img");
      if (mediaImg) {
        gsap.fromTo(
          mediaImg,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
      const badge = row.querySelector<HTMLElement>(".time-badge");
      if (badge) {
        gsap.fromTo(
          badge,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 60%" },
          }
        );
      }
      const pill = row.querySelector<HTMLElement>(".time-pill");
      if (pill) {
        gsap.fromTo(
          pill,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 60%" },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && el.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={ref} className="day" data-mode="light">
      {DAY_SLIDES.map((s) => (
        <div
          key={s.time}
          className="day-row"
          data-mode={s.mode === "dark" ? "dark" : "light"}
          {...(s.mode === "dark" ? { "data-nav-dark": "" } : {})}
        >
          <div className="media">
            <img src={s.image} alt="" loading="lazy" />
            <span className="time-badge">
              <span className="sun-dot" />
              {s.time}
            </span>
          </div>
          <div className="body-col">
            <span className="time-pill">
              <span className="sun-dot" />
              {s.time}
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
