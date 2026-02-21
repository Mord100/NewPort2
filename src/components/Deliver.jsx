import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

const deliverables = [
  {
    title: "Testing",
    description: "Full test coverage before anything ships. Quality and reliability are non-negotiable.",
  },
  {
    title: "Infrastructure",
    description: "Deployment on secure, scalable infrastructure — configured, documented, and handed over.",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and direct access to the team that built it. The relationship doesn't end at go-live.",
  },
];

const Deliver = () => {
  return (
    <section className="py-32 border-b border-neutral-100">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                Phase / 03
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Deliver
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3" />
            <div className="col-span-12 lg:col-span-9">
              <div className="space-y-5 text-base text-neutral-600 max-w-2xl">
                <p>
                  Delivery is structured, not sudden. We hand over the product with
                  comprehensive documentation and training so your team is ready
                  from day one.
                </p>
                <p>
                  Post-launch, we provide ongoing maintenance and support. We stay
                  accountable to the work we shipped.
                </p>
              </div>

              <div className="mt-12">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">
                  What's included
                </p>
                <div className="divide-y divide-neutral-100">
                  {deliverables.map((item) => (
                    <div key={item.title} className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
                        <p className="font-medium text-neutral-950">{item.title}</p>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed lg:pl-0 pl-5">{item.description}</p>
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

export default Deliver;
