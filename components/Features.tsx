"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureGSAP } from "@/lib/anim";

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const lottieAnimRef = useRef<any>(null);

  useEffect(() => {
    ensureGSAP();
    const el = ref.current;
    const container = lottieContainerRef.current;
    if (!el || !container) return;

    let destroyed = false;
    let anim: any = null;

    import("lottie-web").then((lottieMod) => {
      if (destroyed) return;
      const lottie = (lottieMod as any).default || lottieMod;
      anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/features-lottie.json",
      });
      lottieAnimRef.current = anim;

      anim.addEventListener("DOMLoaded", () => {
        if (destroyed) return;
        const totalFrames = anim.totalFrames;

        ScrollTrigger.create({
          trigger: el.querySelector(".features-inner"),
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            if (destroyed) return;
            const frame = self.progress * (totalFrames - 1);
            anim.goToAndStop(frame, true);
          },
        });
      });
    });

    const head = el.querySelector<HTMLElement>(".features-headline h2");
    if (head) {
      const words = head.querySelectorAll<HTMLElement>(".w");
      gsap.set(words, { y: 30, opacity: 0 });
      gsap.to(words, {
        y: 0,
        opacity: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }

    return () => {
      destroyed = true;
      if (anim) anim.destroy();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && el.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={ref} className="features" data-nav-dark>
      <div className="features-desktop">
        <div className="features-headline">
          <div className="features-headline-inner">
            <h2>
              <span className="w">Revolutionize</span>{" "}
              <span className="w dim">your</span>{" "}
              <span className="w dim">working day</span>
            </h2>
          </div>
        </div>
        <div className="features-inner">
          <div className="sticky-wrap">
            <div className="section-layer-1">
              <div
                ref={lottieContainerRef}
                className="lottie"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
