"use client";
import { useEffect, useRef } from "react";
import { splitLinesReveal, fadeUp } from "@/lib/anim";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    splitLinesReveal(el, "h2");
    splitLinesReveal(el, ".rhs p");
    fadeUp(el, ".specs .row", 0.06);
    fadeUp(el, ".order", 0);
  }, []);

  return (
    <section ref={ref} className="cta" id="order">
      <div className="container">
        <div className="inner">
          <div className="lhs">
            <div className="eyebrow">30-day risk-free trial.</div>
          </div>
          <div className="rhs">
            <h2>Get yours now.</h2>
            <p>
              Order in our online store and try it without obligation. Return
              within 30 days for a full refund — no questions asked.
            </p>
            <div className="specs">
              <div className="row">
                <span className="k">Promise</span>
                <span>30-day money-back</span>
              </div>
              <div className="row">
                <span className="k">Delivery</span>
                <span>3 to 4 days</span>
              </div>
              <div className="row">
                <span className="k">Price</span>
                <span>€1,290</span>
              </div>
            </div>
            <a href="#" className="btn btn-lg btn-light order">
              Order now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
