import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const principles = [
  {
    title: "Meticulous",
    description: "We pay attention to every detail, ensuring that our work meets the highest standard of quality and precision.",
  },
  {
    title: "Efficient",
    description: "We work smart and optimise our processes to deliver results without wasted motion.",
  },
  {
    title: "Adaptable",
    description: "Change is inevitable. We stay flexible and respond to new challenges without losing momentum.",
  },
  {
    title: "Honest",
    description: "Honesty and integrity are the foundation of every client relationship and every internal decision.",
  },
  {
    title: "Loyal",
    description: "We are committed to our clients' success and build partnerships based on trust that endures past delivery.",
  },
  {
    title: "Innovative",
    description: "We continuously seek better ideas, tools, and approaches — not for novelty, but because the work demands it.",
  },
];

const ProcessPage = () => {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">

      {/* ── HERO ── */}
      <div className="bg-neutral-950 pt-48 pb-0 overflow-hidden">
        <Container>
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
              01 — Our Process
            </p>
            <h1
              className="font-display font-medium text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
            >
              How we<br />
              build.
            </h1>
            <div className="flex items-end justify-between mt-16 border-t border-neutral-800 pt-8 pb-16">
              <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
                Rigorous by design. We follow a three-phase process that removes ambiguity and keeps every project moving with clarity and intent.
              </p>
              <p className="text-neutral-600 text-sm tabular-nums hidden sm:block">3 phases</p>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* ── PHASES ── */}
      <Discover />
      <Build />
      <Deliver />

      {/* ── PRINCIPLES ── */}
      <section className="py-32 border-t border-neutral-100">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-6 mb-16">
              <div className="col-span-12 lg:col-span-3">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                  02 — Principles
                </p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight max-w-lg">
                  What we hold ourselves to.
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed mt-4 max-w-lg">
                  Six principles that govern how we work, who we work with, and what we ship.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3" />
              <div className="col-span-12 lg:col-span-9">
                <div className="divide-y divide-neutral-100">
                  {principles.map((p, i) => (
                    <div key={p.title} className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                      <div className="flex items-start gap-6">
                        <span className="text-[10px] font-mono text-blue-600 w-6 flex-shrink-0 mt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-medium text-neutral-950">{p.title}</p>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed lg:pl-0 pl-12">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── CTA ── */}
      <ContactSection />
    </main>
  );
};

export default ProcessPage;
