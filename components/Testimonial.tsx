"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CDN } from "@/lib/assets";

const QUOTE =
  "I recommend anyone who wants to use their time effectively and increase their efficiency to try this luminaire.";
const NAME = "Person Name, Role";

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    // parallax image
    const bg = el.querySelector<HTMLElement>(".parallax img");
    if (bg) {
      gsap.fromTo(
        bg,
        { yPercent: -10 },
        {
          yPercent: 10,
          scrollTrigger: {
            trigger: el.querySelector<HTMLElement>(".parallax"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }

    // split words of the quote and animate from grey → black as scrolled
    const big = el.querySelector<HTMLElement>(".big");
    if (big) {
      const text = big.innerText;
      big.innerHTML = text
        .split(" ")
        .map((w) => `<span class="w" style="color:#aaa">${w}</span>`)
        .join(" ");
      const words = big.querySelectorAll<HTMLElement>(".w");
      gsap.to(words, {
        color: "#111",
        stagger: 0.04,
        scrollTrigger: {
          trigger: big,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section ref={ref} className="testimonial">
      <div className="parallax">
        <img src={CDN.testimonialBg} alt="" loading="lazy" />
      </div>
      <div className="container">
        <div className="quote">
          <div className="big">{`“${QUOTE}”`}</div>
          <div className="attribution">
            {NAME}
            <small>Read interview →</small>
          </div>
        </div>
      </div>
    </section>
  );
}
