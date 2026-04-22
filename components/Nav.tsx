"use client";
import { useEffect, useRef } from "react";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const dark = document.querySelectorAll<HTMLElement>("[data-nav-dark]");
      const isDark = Array.from(dark).some((d) => {
        const r = d.getBoundingClientRect();
        return r.top <= 60 && r.bottom >= 60;
      });
      el.classList.toggle("on-dark", isDark);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <header ref={ref} className="nav">
      <a href="#" className="logo" aria-label="Home">
        BPM ent
      </a>
      <div className="pill" aria-hidden="false">
        <a href="#" className="logo" aria-label="Home">
          BPM ent
        </a>
        <a href="#order" className="pill-btn">
          Order now
        </a>
      </div>
      <a href="#order" className="btn order-btn">
        Order now
      </a>
    </header>
  );
}
