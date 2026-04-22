"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CDN } from "@/lib/assets";
import { ensureGSAP, splitLinesReveal, fadeUp } from "@/lib/anim";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensureGSAP();
    const el = ref.current;
    if (!el) return;

    // parallax on the background image
    const bgImg = el.querySelector<HTMLElement>(".parallax-bg img");
    if (bgImg) {
      gsap.fromTo(
        bgImg,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: el.querySelector(".parallax-bg"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    splitLinesReveal(el, ".final-content h2", { maskColor: "#0f0f0f" });
    splitLinesReveal(el, ".final-content p", { maskColor: "#0f0f0f" });
    fadeUp(el, ".final-content .btn", 0);
    fadeUp(el, ".final-content .video-block", 0);

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && el.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={ref} className="final" data-nav-dark>
      <div className="parallax-bg">
        <img src={CDN.finalCtaBg} alt="" loading="lazy" />
      </div>
      <div className="final-content">
        <div className="container">
          <div className="inner">
            <div className="lhs">
              <h2>
                Order now and test
                <br />
                it risk-free for 30 days.
              </h2>
              <p>
                <strong>97% of all testers are already convinced.</strong> Try
                out HEAVN One for 30 days without obligation. Order risk-free in
                our online shop with our money-back guarantee, if you&apos;re not
                happy.
              </p>
              <a
                href="https://heavn-lights.com/products/heavn-one"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-light"
              >
                Order now
              </a>
            </div>
            <div className="rhs">
              <p className="tagline">
                Designed in <strong>Germany</strong>
              </p>
              <div className="video-block">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb%2F671697013cd04f7934cf8eac_product%20%281%29-poster-00001.jpg"
                >
                  <source src={CDN.heroVideo} type="video/mp4" />
                  <source src={CDN.heroVideoWebm} type="video/webm" />
                </video>
                <div className="play">
                  <button aria-label="Play">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
