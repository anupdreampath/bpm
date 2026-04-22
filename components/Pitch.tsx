"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CDN } from "@/lib/assets";
import { ensureGSAP } from "@/lib/anim";

export default function Pitch() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGSAP();
    const el = ref.current;
    if (!el) return;

    const circle = el.querySelector<HTMLElement>(".animating-circle");
    const words = el.querySelectorAll<HTMLElement>(".big .word");
    const inlineImg = el.querySelector<HTMLElement>(".inline-img");

    // initial state
    if (words.length) {
      gsap.set(words, { y: 30, opacity: 0 });
    }
    if (inlineImg) {
      gsap.set(inlineImg, { scale: 0.4, opacity: 0 });
    }
    const sub = el.querySelector<HTMLElement>(".sub");
    if (sub) {
      gsap.set(sub, { y: 20, opacity: 0 });
    }

    // circle starts large and contracts as user scrolls through the 200vh pitch
    if (circle) {
      gsap.set(circle, { scale: 35 });
      gsap.to(circle, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    // text reveal timeline scrubbed to the same range
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
    tl.to(words, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 1,
      ease: "power3.out",
    });
    if (inlineImg) {
      tl.to(
        inlineImg,
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
    }
    if (sub) {
      tl.to(sub, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");
    }

    // mobile image scale-in via independent scroll trigger
    const mobileImg = el.querySelector<HTMLElement>(".mobile-img img");
    if (mobileImg) {
      gsap.fromTo(
        mobileImg,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: mobileImg,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && el.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={ref} className="pitch">
      <div className="sticky-wrap">
        <div className="layer-back" aria-hidden="true">
          <div className="animating-circle" />
        </div>
        <div className="layer-front">
          <h2 className="big">
            <span className="word">Light</span>{" "}
            <span className="inline-img" aria-hidden="true">
              <img src={CDN.pitchInline} alt="" loading="lazy" />
            </span>{" "}
            <span className="word">that</span>{" "}
            <span className="word" style={{ flexBasis: "100%" }}>
              feels like sun.
            </span>
          </h2>
          <p className="sub">
            The first hybrid of desk and daylight luminaire delivers ideal light
            at every hour of the day — and quietly enhances wellbeing and focus.
          </p>
        </div>
      </div>
      <div className="mobile-img">
        <img src={CDN.pitchInline} alt="" loading="lazy" />
      </div>
    </section>
  );
}
