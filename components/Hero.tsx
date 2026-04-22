"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CDN } from "@/lib/assets";

const TITLE_TOP = "BPM ent";
const TITLE_BOTTOM = "One";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // desktop
    const letters = el.querySelectorAll<HTMLElement>(
      ".hero-desktop .hero-title .letter"
    );
    const right = el.querySelector<HTMLElement>(".hero-side-right");
    const bot = el.querySelector<HTMLElement>(".hero-bottom-copy");
    const eye = el.querySelector<HTMLElement>(".hero-eyebrow");
    const video = el.querySelector<HTMLElement>(".hero-video");
    const center = el.querySelector<HTMLElement>(".hero-center");
    const paragraph = el.querySelector<HTMLElement>(".hero-paragraph");

    // mobile
    const mLetters = el.querySelectorAll<HTMLElement>(
      ".hero-mobile .letter-m"
    );
    const mCopy = el.querySelectorAll<HTMLElement>(
      ".hero-mobile .copy-below > *"
    );

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 1.4,
    });

    if (letters.length) {
      tl.to(eye, { opacity: 1, y: 0, duration: 0.6 }, 0)
        .to(
          letters,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: { each: 0.06, from: "start" },
          },
          "-=0.2"
        )
        .to(right, { opacity: 1, duration: 0.8 }, "-=0.4")
        .to(bot, { opacity: 1, duration: 0.8 }, "-=0.6");
    }

    if (mLetters.length) {
      tl.to(
        mLetters,
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.04 },
        "-=0.9"
      );
    }
    if (mCopy.length) {
      gsap.set(mCopy, { y: 30, opacity: 0 });
      tl.to(
        mCopy,
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );
    }

    // scroll-driven hero transition
    const desktop = el.querySelector<HTMLElement>(".hero-desktop");
    if (desktop) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: desktop,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // zoom background
      if (video) {
        scrollTl.fromTo(
          video,
          { scale: 1 },
          { scale: 1.25, ease: "none" },
          0
        );
      }

      // big headline fades and moves up-left
      if (center) {
        scrollTl.fromTo(
          center,
          { opacity: 1, y: 0, scale: 1 },
          { opacity: 0, y: -60, scale: 0.9, ease: "power2.in" },
          0
        );
      }

      // right side text fades out
      if (right) {
        scrollTl.fromTo(
          right,
          { opacity: 1 },
          { opacity: 0, ease: "power2.in" },
          0
        );
      }

      // eyebrow fades out
      if (eye) {
        scrollTl.fromTo(
          eye,
          { opacity: 1 },
          { opacity: 0, ease: "power2.in" },
          0
        );
      }

      // paragraph fades in
      if (paragraph) {
        scrollTl.fromTo(
          paragraph,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.3
        );
      }
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && el.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
  }, []);

  const top = Array.from(TITLE_TOP);
  const bot = Array.from(TITLE_BOTTOM);

  return (
    <section ref={ref} className="hero" data-nav-dark>
      {/* DESKTOP */}
      <div className="hero-desktop">
        <div className="hero-stage">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={CDN.heroImage}
          >
            <source src={CDN.heroVideo} type="video/mp4" />
            <source src={CDN.heroVideoWebm} type="video/webm" />
          </video>
          <div className="hero-video-tint" />

          <div className="hero-eyebrow">{TITLE_TOP}</div>

          <div className="hero-center">
            <h1
              className="hero-title"
              aria-label={`${TITLE_TOP} ${TITLE_BOTTOM}`}
            >
              <span style={{ display: "flex", gap: "0.02em" }}>
                {top.map((c, i) => (
                  <span className="letter" key={`t${i}`}>
                    {c}
                  </span>
                ))}
              </span>
              <span style={{ display: "flex", gap: "0.02em" }}>
                {bot.map((c, i) => (
                  <span className="letter" key={`b${i}`}>
                    {c}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          <div className="hero-side-right">
            <div>The world&apos;s brightest desk luminaire.</div>
            <div className="muted">Scroll to learn more.</div>
          </div>

          <div className="hero-paragraph">
            <h2 className="hero-tag">{TITLE_TOP} {TITLE_BOTTOM}</h2>
            <p className="hero-paragraph-text">
              <span className="is-white">Brightens up your workday</span>,{" "}
              reduces tiredness and improves your sleep.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="hero-mobile">
        <div className="media">
          <video autoPlay muted loop playsInline poster={CDN.heroImage}>
            <source src={CDN.heroVideo} type="video/mp4" />
          </video>
          <div className="overlay-title" aria-label={`${TITLE_TOP} ${TITLE_BOTTOM}`}>
            <div className="small-mark">
              {top.map((c, i) => (
                <span className="letter-m" key={`ms${i}`}>
                  {c}
                </span>
              ))}
            </div>
            <div className="big-name">
              {bot.map((c, i) => (
                <span className="letter-m" key={`mb${i}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="copy-below">
          <h2>The world&apos;s brightest desk luminaire.</h2>
          <p>
            Brightens up your workday, reduces fatigue, and improves your
            sleep.
          </p>
          <a href="#order" className="btn">
            Order now
          </a>
        </div>
      </div>
    </section>
  );
}
