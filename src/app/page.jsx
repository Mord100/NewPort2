import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { FadeInStagger } from "@/components/FadeIn";
import ServiceIcon from "@/components/ServiceIcon";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Web development",
    shortTitle: "Web",
    subtitle: "development",
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

const remainingServices = services.slice(1);
const serviceIconKeys = ["web", "app", "ecommerce", "cms", "graphics", "social", "branding"];

// Grayed high-contrast hero background (swap with your own asset)
const SERVICES_HERO_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80";

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
      <section className="border-b border-neutral-100 overflow-hidden" id="services">
        {/* Section label + conceptual headline (in container) */}
        <Container>
          <div className="grid grid-cols-12 gap-6 lg:gap-8 pt-24 lg:pt-32 pb-12 lg:pb-16">
            <div className="col-span-12 lg:col-span-3">
              <FadeIn>
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                  02 — Services
                </p>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <FadeIn>
                <p
                  className="font-display font-medium text-neutral-950 leading-none tracking-tight"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                >
                  We don&apos;t do one thing.
                  <br />
                  <span className="text-neutral-500">We do yours.</span>
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>

        {/* Image section: full-bleed image + overlapping diagonal content panel */}
        <FadeIn>
          <div className="relative min-h-[55vh] lg:min-h-[62vh] overflow-hidden">
            {/* Image — full width, sits behind; subtle blue tint in the shadows */}
            <div className="absolute inset-0">
              <Image
                src={SERVICES_HERO_IMAGE}
                alt=""
                fill
                className="object-cover grayscale contrast-[1.15] brightness-[0.5]"
                sizes="100vw"
                priority
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-60"
                style={{ background: "linear-gradient(135deg, transparent 40%, #0f172a 100%)" }}
                aria-hidden
              />
            </div>

            {/* Content panel — mobile: lower so image shows; desktop: right, diagonal left edge */}
            <div
              className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 mt-[38vh] lg:mt-0 ml-0 lg:ml-auto lg:w-[58%] lg:min-h-[62vh] lg:pl-28 lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)] bg-neutral-950"
            >
              <div className="max-w-md">
                <span className="text-[11px] font-mono text-neutral-500 tracking-widest">01</span>
                <h2
                  className="font-display font-medium text-white leading-[0.92] tracking-tight mt-3"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
                >
                  {services[0].shortTitle}
                  <span className="text-white/50"> {services[0].subtitle}</span>
                </h2>
                <p className="text-neutral-400 text-sm lg:text-base mt-4 leading-relaxed">
                  {services[0].description}
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="text-neutral-300 text-sm font-medium hover:text-white transition-colors"
                  >
                    Start a project →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* Editorial list: number-led rows, no cards — manifesto-style */}
        <div className="border-t border-neutral-200 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto lg:max-w-none pt-4">
              <FadeInStagger faster className="divide-y divide-neutral-200">
                {remainingServices.map((service, i) => (
                  <FadeIn key={service.title}>
                    <article className="group/row flex flex-wrap items-baseline gap-x-8 gap-y-3 py-8 lg:py-10 transition-colors hover:bg-neutral-50/70 -mx-6 px-6 lg:-mx-8 lg:px-8 rounded-lg">
                      <span className="text-[32px] lg:text-[40px] font-mono font-medium text-neutral-200 tabular-nums w-14 lg:w-16 flex-shrink-0">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <ServiceIcon
                          name={serviceIconKeys[i + 1]}
                          className="w-5 h-5 text-neutral-400 group-hover/row:text-blue-600 transition-colors"
                        />
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="font-display font-medium text-neutral-950 tracking-tight text-lg lg:text-xl">
                          {service.title}
                        </h3>
                        <p className="text-neutral-500 text-sm lg:text-base mt-1 leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                ))}
                <FadeIn>
                  <Link
                    href="/contact"
                    className="group/row flex flex-wrap items-center gap-x-8 gap-y-3 py-8 lg:py-10 -mx-6 px-6 lg:-mx-8 lg:px-8 rounded-lg bg-neutral-950 hover:bg-neutral-900 transition-colors block"
                  >
                    <span className="text-[32px] lg:text-[40px] font-mono font-medium text-neutral-600 tabular-nums w-14 lg:w-16 flex-shrink-0">
                      08
                    </span>
                    <ServiceIcon name="cta" className="w-5 h-5 text-neutral-500 group-hover/row:text-blue-400 transition-colors flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="font-display font-medium text-white tracking-tight text-lg lg:text-xl">
                        Let&apos;s build something.
                      </span>
                      <span className="text-neutral-400 text-sm ml-2 group-hover/row:text-blue-400 transition-colors">
                        Get in touch →
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              </FadeInStagger>
            </div>
          </Container>
        </div>
      </section>

      {/* ── CTA ── */}
      <ContactSection />
    </main>
  );
}
