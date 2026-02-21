import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

const Discover = () => {
  return (
    <section className="py-32 border-b border-neutral-100">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                Phase / 01
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Discover
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3" />
            <div className="col-span-12 lg:col-span-9">
              <div className="space-y-5 text-base text-neutral-600 max-w-2xl">
                <p>
                  We partner closely with each client to understand their{" "}
                  <strong className="font-semibold text-neutral-950">needs</strong> at
                  depth. By examining how the business actually operates, we identify
                  what's genuinely unique — and where the real opportunity lies.
                </p>
                <p>
                  Drawing on our experience across software engineering and project
                  management, we shape an approach specific to each{" "}
                  <strong className="font-semibold text-neutral-950">engagement</strong>.
                  No templates applied to problems they weren't built for.
                </p>
                <p>
                  Discovery ends with a detailed{" "}
                  <strong className="font-semibold text-neutral-950">action plan</strong>{" "}
                  — scope, architecture, and budget — that leaves nothing to assumption
                  before we build.
                </p>
              </div>

              <div className="mt-12">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">
                  What's included
                </p>
                <div className="divide-y divide-neutral-100">
                  {[
                    "Requirements analysis and questionnaires",
                    "Feasibility studies",
                    "Stakeholder interviews",
                    "Proof-of-concept prototypes",
                  ].map((item) => (
                    <div key={item} className="py-3 flex items-center gap-4">
                      <div className="w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
                      <p className="text-sm text-neutral-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Discover;
