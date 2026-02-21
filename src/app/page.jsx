import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Web development",
    description:
      "End-to-end web platforms built with Next.js, React, and modern infrastructure. Fast, accessible, and engineered to scale.",
  },
  {
    title: "Application development",
    description:
      "Cross-platform mobile and desktop applications. Native performance where it matters, shared logic where it makes sense.",
  },
  {
    title: "E-commerce",
    description:
      "Custom storefronts and transaction systems built for conversion. Integrated payments, inventory, and fulfilment — without the overhead.",
  },
  {
    title: "Custom content management",
    description:
      "CMS architectures designed around how your team actually works. No bloated platforms — just the structure your content needs.",
  },
  {
    title: "Graphics design",
    description:
      "Visual systems grounded in brand strategy. Identity, print, and digital design that works across every surface.",
  },
  {
    title: "Social media marketing",
    description:
      "Campaigns built around the data. Strategy, creative, and execution — managed as one coherent system.",
  },
  {
    title: "Branding",
    description:
      "Brand identity from the ground up. Positioning, naming, visual language, and guidelines that hold under pressure.",
  },
];

export default function Home() {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">

      {/* ── HERO ── */}
      <div className="bg-neutral-950 pt-48 pb-0 overflow-hidden">
        <Container>
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
              01 — New Gen Digital Innovations
            </p>
            <h1
              className="font-display font-medium text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
            >
              Software built<br />
              for the next<br />
              generation.
            </h1>
            <div className="flex items-end justify-between mt-16 border-t border-neutral-800 pt-8 pb-16">
              <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
                We design and engineer digital products — from web platforms to mobile applications — that perform at the intersection of precision and purpose.
              </p>
              <p className="text-neutral-600 text-sm tabular-nums hidden sm:block">Malawi, Africa</p>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* ── TECH STACK ── */}
      <Clients />

      {/* ── SERVICES ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-6 mb-16">
              <div className="col-span-12 lg:col-span-3">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                  02 — Services
                </p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight max-w-lg">
                  From concept to code — we handle the full stack.
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed mt-4 max-w-lg">
                  We take on complex software challenges and deliver products that are precise, scalable, and built to last.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3" />
              <div className="col-span-12 lg:col-span-9">
                <div className="divide-y divide-neutral-100">
                  {services.map((service, i) => (
                    <div key={service.title} className="py-8 flex items-start gap-6">
                      <span className="text-[10px] font-mono text-blue-600 w-6 flex-shrink-0 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-medium text-neutral-950 mb-2">{service.title}</p>
                        <p className="text-sm text-neutral-500 leading-relaxed">{service.description}</p>
                      </div>
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
}
