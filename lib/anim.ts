"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

let registered = false;
export function ensureGSAP() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

/**
 * Split an element into lines and apply a width-mask reveal scrubbed by scroll.
 * Mirrors the technique used on the reference site: each line gets a pseudo
 * "line-mask" overlay whose width collapses from 100% → 0% as the line passes
 * through the viewport.
 */
export function splitLinesReveal(
  root: HTMLElement | null,
  selector: string,
  opts: { maskColor?: string; trigger?: HTMLElement | null } = {}
) {
  if (!root) return;
  ensureGSAP();
  const nodes = root.querySelectorAll<HTMLElement>(selector);
  nodes.forEach((el) => {
    // idempotent: don't re-split
    if (el.dataset.splitDone === "1") return;
    el.dataset.splitDone = "1";
    const split = new SplitType(el, { types: "lines,words" });
    const lines = split.lines || [];
    lines.forEach((line) => {
      const mask = document.createElement("div");
      mask.className = "line-mask";
      if (opts.maskColor) mask.style.background = opts.maskColor;
      line.style.position = line.style.position || "relative";
      line.style.overflow = "hidden";
      line.appendChild(mask);
      gsap.to(mask, {
        width: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: opts.trigger || line,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });
  });
}

/** Simple scroll-triggered fade + rise for children matching selector. */
export function fadeUp(
  root: HTMLElement | null,
  selector: string,
  stagger = 0.1
) {
  if (!root) return;
  ensureGSAP();
  const els = root.querySelectorAll<HTMLElement>(selector);
  if (!els.length) return;
  gsap.set(els, { y: 28, opacity: 0 });
  gsap.to(els, {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: "power3.out",
    stagger,
    scrollTrigger: {
      trigger: root,
      start: "top 75%",
    },
  });
}

/** Subtle parallax (translateY) across full scroll range of an element. */
export function parallaxY(
  root: HTMLElement | null,
  selector: string,
  amount = 80
) {
  if (!root) return;
  ensureGSAP();
  root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { y: -amount / 2 },
      {
        y: amount / 2,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

/** Scale-in on image while its container is in viewport. */
export function scaleIn(
  root: HTMLElement | null,
  selector: string,
  from = 1.15,
  to = 1
) {
  if (!root) return;
  ensureGSAP();
  root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { scale: from },
      {
        scale: to,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}
