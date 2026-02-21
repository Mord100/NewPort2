import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

const Build = () => {
  return (
    <section className="py-32 border-b border-neutral-100">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                Phase / 02
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Build
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3" />
            <div className="col-span-12 lg:col-span-9">
              <div className="space-y-5 text-base text-neutral-600 max-w-2xl">
                <p>
                  From discovery, we produce a detailed roadmap and begin engineering.
                  Each component is scoped, prioritised, and built with the full system
                  in mind — no feature islands.
                </p>
                <p>
                  Development runs in clearly defined cycles with regular reviews.
                  You're involved at every milestone, not just the handoff — which is
                  how scope stays clean and momentum stays consistent.
                </p>
                <p>
                  The build phase ends when the product does what it was designed to
                  do — precisely.
                </p>
              </div>

              <div className="mt-12 border-t border-neutral-100 pt-10 max-w-2xl">
                <div className="w-8 h-px bg-blue-600 mb-6" />
                <blockquote>
                  <p className="text-neutral-700 text-base leading-relaxed italic">
                    "The dedication and expertise of the team at Div.Dynamics
                    transformed our initial concept into a cutting-edge product. Their
                    collaborative approach and attention to detail were outstanding."
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-px h-4 bg-neutral-200" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">Daphne Magela</p>
                      <p className="text-xs text-neutral-500">CEO, Zanyumba LLC</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Build;
