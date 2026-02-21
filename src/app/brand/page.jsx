import Image from "next/image";
import Container from "@/components/Container";

export const metadata = {
  title: "Brand Guidelines",
};

export default function BrandPage() {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">

      {/* ── HERO ── */}
      <div className="bg-neutral-950 pt-48 pb-0 overflow-hidden">
        <Container>
          <div className="pb-0">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-16">
              Brand Identity Guidelines — 2026
            </p>
            <h1
              className="font-display font-medium text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(72px, 12vw, 180px)" }}
            >
              DiV
            </h1>
            <h1
              className="font-display font-medium leading-none tracking-tight"
              style={{ fontSize: "clamp(72px, 12vw, 180px)", color: "#2563eb" }}
            >
              Dynamics.
            </h1>
            <div className="flex items-end justify-between mt-16 border-t border-neutral-800 pt-8 pb-12">
              <p className="text-neutral-400 text-base max-w-sm leading-relaxed">
                A software engineering agency built on the conviction that design and technology are inseparable.
              </p>
              <p className="text-neutral-600 text-sm tabular-nums">Malawi, Africa</p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── IDENTITY ── */}
      <div className="py-32 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 sticky top-24">
                01 — Identity
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6">Position</p>
                  <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight">
                    The studio for founders who refuse to compromise on software quality.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6">Mission</p>
                  <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight">
                    Make your software dreams a reality.
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-neutral-100 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    label: "Craft",
                    text: "Every line of code and every pixel is considered. We don't ship work we're not proud of.",
                  },
                  {
                    label: "Precision",
                    text: "We use exact language and exact execution. Ambiguity is the enemy of great software.",
                  },
                  {
                    label: "Partnership",
                    text: "Your success is the only metric that matters. We build with you, not for you.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">{item.label}</p>
                    <p className="text-neutral-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── LOGO ── */}
      <div className="py-32 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 sticky top-24">
                02 — Logo
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-16">
                <div className="bg-white border border-neutral-100 rounded-2xl flex items-center justify-center py-20 px-12">
                  <Image
                    src="/divwev.png"
                    alt="DiV Dynamics — Primary"
                    width={180}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="bg-neutral-950 rounded-2xl flex items-center justify-center py-20 px-12">
                  <Image
                    src="/divwev-inverted.png"
                    alt="DiV Dynamics — Reversed"
                    width={180}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 divide-y divide-neutral-100">
                {[
                  { spec: "Minimum width", value: "80px digital · 25mm print" },
                  { spec: "Clear space", value: "Equal to cap-height of 'D' on all sides" },
                  { spec: "On light backgrounds", value: "Primary mark only" },
                  { spec: "On dark backgrounds", value: "Reversed mark only" },
                  { spec: "Unacceptable uses", value: "Stretching, recolouring, rotating, drop shadows" },
                  { spec: "File formats", value: "SVG (preferred) · PNG · WebP" },
                ].map((row) => (
                  <div key={row.spec} className="flex justify-between py-4 gap-8">
                    <p className="text-sm text-neutral-500 flex-shrink-0">{row.spec}</p>
                    <p className="text-sm text-neutral-950 text-right">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── COLOUR ── */}
      <div className="py-32 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 sticky top-24">
                03 — Colour
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight max-w-lg">
                A two-tone foundation — near-black and white — with a single electric accent used with intention.
              </p>
            </div>
          </div>
        </Container>

        {/* Full-bleed colour bands */}
        <div className="divide-y divide-neutral-200">
          {[
            {
              name: "Ink",
              hex: "#0a0a0a",
              tailwind: "neutral-950",
              role: "Primary — headers, navigation, dark surfaces",
              bg: "bg-neutral-950",
              text: "text-white",
              meta: "text-neutral-500",
            },
            {
              name: "Electric Blue",
              hex: "#2563eb",
              tailwind: "blue-600",
              role: "Accent — CTAs, highlights, interactive states",
              bg: "bg-blue-600",
              text: "text-white",
              meta: "text-blue-300",
            },
            {
              name: "White",
              hex: "#ffffff",
              tailwind: "white",
              role: "Ground — main content background, reversed type",
              bg: "bg-white border-t border-b border-neutral-100",
              text: "text-neutral-950",
              meta: "text-neutral-400",
            },
            {
              name: "Smoke",
              hex: "#525252",
              tailwind: "neutral-600",
              role: "Secondary — body copy, descriptions",
              bg: "bg-neutral-600",
              text: "text-white",
              meta: "text-neutral-400",
            },
            {
              name: "Mist",
              hex: "#d4d4d4",
              tailwind: "neutral-300",
              role: "Structural — borders, dividers, rules",
              bg: "bg-neutral-300",
              text: "text-neutral-950",
              meta: "text-neutral-500",
            },
          ].map((colour) => (
            <div
              key={colour.name}
              className={`${colour.bg} px-6 lg:px-8 py-8`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto lg:max-w-none flex items-center justify-between gap-8">
                  <div className="flex items-center gap-10">
                    <p className={`text-xl font-medium ${colour.text}`}>{colour.name}</p>
                    <p className={`text-sm font-mono ${colour.meta} hidden sm:block`}>{colour.hex}</p>
                    <p className={`text-sm font-mono ${colour.meta} hidden lg:block`}>{colour.tailwind}</p>
                  </div>
                  <p className={`text-sm ${colour.meta} text-right max-w-xs`}>{colour.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TYPOGRAPHY ── */}
      <div className="py-32 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 sticky top-24">
                04 — Typography
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="flex items-start justify-between gap-8 flex-wrap">
                <div>
                  <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight mb-4">Mona Sans</p>
                  <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                    A variable typeface with a 700-unit weight axis and a 50-point width axis. Used exclusively across all DiV Dynamics touchpoints.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["200", "300", "400", "500", "600", "700", "800", "900"].map((w) => (
                    <div key={w} className="border border-neutral-200 rounded-lg px-3 py-1.5 text-center min-w-[52px]">
                      <p className="text-xs text-neutral-950" style={{ fontWeight: w }}>{w}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Type specimen */}
          <div className="divide-y divide-neutral-100">
            {[
              {
                label: "Display",
                meta: "72–180px · Medium · −0.025em",
                className: "font-display font-medium tracking-tight text-neutral-950",
                style: { fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1 },
                sample: "Software",
              },
              {
                label: "Title",
                meta: "48px · Medium · −0.025em",
                className: "font-display font-medium tracking-tight text-neutral-950",
                style: { fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.05 },
                sample: "Make it real.",
              },
              {
                label: "Heading",
                meta: "30px · Semibold · 0em",
                className: "font-display font-semibold text-neutral-950",
                style: { fontSize: "30px", lineHeight: 1.1 },
                sample: "Web Development",
              },
              {
                label: "Body Large",
                meta: "20px · Regular · 0em",
                className: "text-neutral-700",
                style: { fontSize: "20px", lineHeight: 1.6 },
                sample: "We navigate challenges with unwavering dedication, consistently pushing the boundaries of what's possible.",
              },
              {
                label: "Body",
                meta: "16px · Regular · 0em",
                className: "text-neutral-600",
                style: { fontSize: "16px", lineHeight: 1.7 },
                sample: "Building digital products with precision and care.",
              },
              {
                label: "Label",
                meta: "11px · Medium · 0.2em · Uppercase",
                className: "font-medium text-neutral-500 uppercase",
                style: { fontSize: "11px", letterSpacing: "0.2em" },
                sample: "Services",
              },
            ].map((t) => (
              <div key={t.label} className="py-10 grid grid-cols-12 gap-6 items-baseline">
                <div className="col-span-3 hidden lg:block">
                  <p className="text-xs text-neutral-400">{t.label}</p>
                  <p className="text-xs font-mono text-neutral-300 mt-1 leading-relaxed">{t.meta}</p>
                </div>
                <div className="col-span-12 lg:col-span-9">
                  <p className={t.className} style={t.style}>{t.sample}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── VOICE ── */}
      <div className="py-32 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 sticky top-24">
                05 — Voice
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight mb-16 max-w-lg">
                We write the way we build — with clarity, confidence, and no unnecessary words.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="border border-neutral-100 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-neutral-100">
                    <p className="text-xs font-medium text-neutral-950 uppercase tracking-wider">Write like this</p>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    {[
                      "Make your software dreams a reality.",
                      "We build with precision and purpose.",
                      "Shipped on time. Built to last.",
                      "Your vision, engineered.",
                    ].map((line) => (
                      <div key={line} className="flex gap-3 items-start">
                        <div className="w-1 h-1 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        <p className="text-sm text-neutral-700 leading-relaxed">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-neutral-100 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-neutral-100">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Not like this</p>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    {[
                      "We try to make really good software.",
                      "We're a passionate team of innovators.",
                      "Hopefully we can help grow your business.",
                      "We leverage cutting-edge solutions.",
                    ].map((line) => (
                      <div key={line} className="flex gap-3 items-start">
                        <div className="w-1 h-px bg-neutral-300 mt-2 flex-shrink-0" />
                        <p className="text-sm text-neutral-400 leading-relaxed line-through decoration-neutral-300">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── SPACING & GRID ── */}
      <div className="py-32">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 sticky top-24">
                06 — Grid
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <p className="text-2xl font-medium text-neutral-950 tracking-tight mb-16 max-w-lg leading-snug">
                A 12-column grid with an 8px base unit. Every spacing decision is a multiple of 8.
              </p>
              <div className="space-y-0 divide-y divide-neutral-100">
                {[
                  { token: "4px", mult: "0.5×", use: "Icon gaps, tight inline pairs" },
                  { token: "8px", mult: "1×", use: "Base unit — internal component spacing" },
                  { token: "16px", mult: "2×", use: "Card padding, small gaps" },
                  { token: "24px", mult: "3×", use: "Form fields, medium gaps" },
                  { token: "32px", mult: "4×", use: "Component separation" },
                  { token: "48px", mult: "6×", use: "Section internal padding" },
                  { token: "64px", mult: "8×", use: "Between major components" },
                  { token: "96px", mult: "12×", use: "Section margins, mobile" },
                  { token: "128px", mult: "16×", use: "Section margins, desktop" },
                ].map((s) => (
                  <div key={s.token} className="py-3 grid grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-blue-600 rounded-sm flex-shrink-0"
                        style={{ width: s.token, height: "3px", minWidth: "3px", maxWidth: "96px" }}
                      />
                    </div>
                    <p className="text-sm font-mono text-neutral-950">{s.token}</p>
                    <p className="text-sm font-mono text-neutral-400">{s.mult}</p>
                    <p className="text-sm text-neutral-500 hidden lg:block">{s.use}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-neutral-100">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8">Radius Scale</p>
                <div className="flex items-end gap-6 flex-wrap">
                  {[
                    { label: "Full", radius: "9999px", class: "rounded-full", w: "56px", h: "24px" },
                    { label: "2XL", radius: "16px", class: "rounded-2xl", w: "56px", h: "56px" },
                    { label: "XL", radius: "12px", class: "rounded-xl", w: "56px", h: "56px" },
                    { label: "LG", radius: "8px", class: "rounded-lg", w: "56px", h: "56px" },
                    { label: "MD", radius: "6px", class: "rounded-md", w: "56px", h: "56px" },
                  ].map((r) => (
                    <div key={r.label} className="flex flex-col items-center gap-3">
                      <div
                        className={`bg-neutral-950 ${r.class}`}
                        style={{ width: r.w, height: r.h }}
                      />
                      <p className="text-xs text-neutral-950 font-medium">{r.label}</p>
                      <p className="text-xs font-mono text-neutral-400">{r.radius}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </main>
  );
}
