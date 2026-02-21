import Image from "next/image";
import Container from "@/components/Container";
import ExportButton from "@/components/ExportButton";

export const metadata = {
  title: "Marketing Assets",
};

export default function MarketingAssetsPage() {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">

      {/* ── HEADER ── */}
      <div className="bg-neutral-950 pt-48 pb-24">
        <Container>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-16">
            Marketing — Template Library
          </p>
          <h1
            className="font-display font-medium text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            Assets.
          </h1>
          <div className="flex items-end justify-between mt-16 border-t border-neutral-800 pt-8">
            <p className="text-neutral-400 text-base max-w-sm leading-relaxed">
              Production-ready templates for every DiV Dynamics channel. Use as-is or adapt within the brand system.
            </p>
            <div className="text-right hidden sm:block">
              <p className="text-neutral-600 text-xs tabular-nums">4 categories</p>
              <p className="text-neutral-600 text-xs tabular-nums">16 templates</p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── 01 SOCIAL POSTS 1:1 ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <div className="flex items-baseline justify-between mb-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">01 — Social Posts</p>
              <p className="text-neutral-500 text-sm">1080 × 1080px · Instagram · LinkedIn · Facebook</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

            {/* A — Dark editorial */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">A — Service · Dark</p>
                <ExportButton targetId="asset-post-a" filename="div-dynamics-A-service-dark" />
              </div>
              <div id="asset-post-a" className="aspect-square bg-neutral-950 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={80} height={32} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-500">Web Development</p>
                </div>
                <div>
                  <div className="w-8 h-px bg-blue-600 mb-6" />
                  <p
                    className="font-medium text-white tracking-tight leading-none mb-5"
                    style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
                  >
                    We build software that performs.
                  </p>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    From architecture to deployment — engineered to scale.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-neutral-800" />
                    <p className="text-neutral-600 text-xs">divdynamics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* B — Light editorial */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">B — Service · Light</p>
                <ExportButton targetId="asset-post-b" filename="div-dynamics-B-service-light" />
              </div>
              <div id="asset-post-b" className="aspect-square bg-white border border-neutral-100 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <Image src="/divwev.png" alt="DiV Dynamics" width={80} height={32} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400">App Development</p>
                </div>
                <div>
                  <div className="w-8 h-px bg-blue-600 mb-6" />
                  <p
                    className="font-medium text-neutral-950 tracking-tight leading-none mb-5"
                    style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
                  >
                    Ideas deserve great execution.
                  </p>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Cross-platform applications built for performance and longevity.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-neutral-100" />
                    <p className="text-neutral-400 text-xs">divdynamics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* C — Brand statement */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">C — Brand Statement</p>
                <ExportButton targetId="asset-post-c" filename="div-dynamics-C-brand-statement" />
              </div>
              <div
                id="asset-post-c"
                className="aspect-square rounded-2xl overflow-hidden flex flex-col items-start justify-end p-8"
                style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #0a0a0a 50%, #1a3a8f 100%)" }}
              >
                <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-8">DiV Dynamics · Malawi</p>
                <p
                  className="font-medium text-white tracking-tight leading-none mb-6"
                  style={{ fontSize: "clamp(36px, 6vw, 52px)" }}
                >
                  Software.<br />Reimagined.
                </p>
                <div className="flex items-center gap-4 w-full border-t border-neutral-800 pt-5">
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                  <div className="w-px h-4 bg-neutral-800" />
                  <p className="text-neutral-500 text-xs">New Gen Digital Innovations</p>
                </div>
              </div>
            </div>

            {/* D — Services index */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">D — Services Index</p>
                <ExportButton targetId="asset-post-d" filename="div-dynamics-D-services-index" />
              </div>
              <div id="asset-post-d" className="aspect-square bg-neutral-950 rounded-2xl overflow-hidden flex flex-col p-8">
                <div className="flex items-center justify-between mb-auto pb-8 border-b border-neutral-800">
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-600">What We Build</p>
                </div>
                <div className="space-y-0 divide-y divide-neutral-800 pt-4">
                  {[
                    "Web Development",
                    "App Development",
                    "E-Commerce",
                    "Brand & Design",
                    "Social Media",
                    "Custom CMS",
                  ].map((s, i) => (
                    <div key={s} className="flex items-center gap-4 py-2.5">
                      <span className="text-[10px] font-mono text-neutral-700 w-4 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-white text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* E — Case study / project */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">E — Project Launch</p>
                <ExportButton targetId="asset-post-e" filename="div-dynamics-E-project-launch" />
              </div>
              <div id="asset-post-e" className="aspect-square border border-neutral-100 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <Image src="/divwev.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-blue-600">New Work</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-4">Case Study — 2025</p>
                  <p
                    className="font-medium text-neutral-950 tracking-tight leading-tight mb-4"
                    style={{ fontSize: "clamp(28px, 4vw, 38px)" }}
                  >
                    Zanyumba — Real Estate, Redefined.
                  </p>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    A next-generation property platform connecting buyers and sellers across Malawi.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-neutral-100" />
                    <p className="text-blue-600 text-xs font-medium">View project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* F — Minimal lock-up */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">F — Brand Mark</p>
                <ExportButton targetId="asset-post-f" filename="div-dynamics-F-brand-mark" />
              </div>
              <div id="asset-post-f" className="aspect-square bg-neutral-50 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-10">
                <Image src="/divwev.png" alt="DiV Dynamics" width={130} height={52} className="object-contain mb-10" />
                <div className="w-8 h-px bg-blue-600 mb-8" />
                <p
                  className="font-medium text-neutral-950 tracking-tight leading-tight"
                  style={{ fontSize: "clamp(22px, 3vw, 30px)" }}
                >
                  New Gen<br />Digital Innovations
                </p>
                <p className="text-neutral-400 text-xs mt-6 tracking-wider">Malawi · Africa</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 02 STORIES ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <div className="flex items-baseline justify-between mb-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">02 — Stories</p>
              <p className="text-neutral-500 text-sm">1080 × 1920px · Instagram · TikTok</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Story A */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">A — Dark</p>
                <ExportButton targetId="asset-story-a" filename="div-dynamics-story-A-dark" />
              </div>
              <div
                id="asset-story-a"
                className="w-full bg-neutral-950 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
                style={{ aspectRatio: "9/16" }}
              >
                <div>
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                </div>
                <div>
                  <div className="w-6 h-px bg-blue-600 mb-5" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-3">Opportunity</p>
                  <p className="text-xl font-medium text-white leading-snug tracking-tight mb-4">
                    We're building the future of software in Africa.
                  </p>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Join a team where craft and ambition meet.
                  </p>
                  <div className="mt-8 border border-neutral-800 rounded-full py-2 px-4 text-center">
                    <p className="text-white text-xs">Apply</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story B */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">B — Gradient</p>
                <ExportButton targetId="asset-story-b" filename="div-dynamics-story-B-gradient" />
              </div>
              <div
                id="asset-story-b"
                className="w-full rounded-2xl overflow-hidden flex flex-col justify-between p-6"
                style={{ aspectRatio: "9/16", background: "linear-gradient(180deg, #1d4ed8 0%, #0a0a0a 70%)" }}
              >
                <div>
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                </div>
                <div>
                  <p
                    className="font-medium text-white tracking-tight leading-none mb-4"
                    style={{ fontSize: "clamp(48px, 8vw, 64px)" }}
                  >
                    100%
                  </p>
                  <div className="w-6 h-px bg-blue-400 mb-4" />
                  <p className="text-blue-200 text-sm font-medium mb-2">Client Satisfaction</p>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    We measure our success by yours.
                  </p>
                  <p className="text-neutral-600 text-xs mt-8">divdynamics.com</p>
                </div>
              </div>
            </div>

            {/* Story C */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">C — Light Process</p>
                <ExportButton targetId="asset-story-c" filename="div-dynamics-story-C-light-process" />
              </div>
              <div
                id="asset-story-c"
                className="w-full bg-white border border-neutral-100 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
                style={{ aspectRatio: "9/16" }}
              >
                <div>
                  <Image src="/divwev.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-6">How We Work</p>
                  <div className="space-y-0 divide-y divide-neutral-100">
                    {[
                      { n: "01", t: "Discover", d: "Understand the problem deeply." },
                      { n: "02", t: "Design", d: "Beautiful and functional solutions." },
                      { n: "03", t: "Build", d: "Precision engineering, on time." },
                      { n: "04", t: "Deliver", d: "Launch, iterate, grow." },
                    ].map((step) => (
                      <div key={step.n} className="flex gap-4 items-start py-3">
                        <span className="text-[10px] font-mono text-blue-600 w-4 flex-shrink-0 mt-0.5">{step.n}</span>
                        <div>
                          <p className="text-sm font-medium text-neutral-950">{step.t}</p>
                          <p className="text-xs text-neutral-400 leading-relaxed">{step.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-neutral-300 text-xs mt-6">divdynamics.com</p>
                </div>
              </div>
            </div>

            {/* Story D */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">D — Bold Brand</p>
                <ExportButton targetId="asset-story-d" filename="div-dynamics-story-D-bold-brand" />
              </div>
              <div
                id="asset-story-d"
                className="w-full bg-blue-600 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
                style={{ aspectRatio: "9/16" }}
              >
                <p className="text-[10px] tracking-widest uppercase text-white/50">DiV Dynamics</p>
                <div>
                  <p
                    className="font-medium text-white tracking-tight leading-none mb-6"
                    style={{ fontSize: "clamp(36px, 6vw, 48px)" }}
                  >
                    Software.<br />Reimagined.
                  </p>
                  <div className="w-8 h-px bg-white/30 mb-6" />
                  <p className="text-blue-100 text-xs leading-relaxed mb-8">
                    Engineering digital products that shape the future of Africa's technology landscape.
                  </p>
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={80} height={32} className="object-contain" />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 03 BANNERS ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <div className="mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">03 — Banners</p>
            <p className="text-neutral-500 text-sm">LinkedIn, email headers, and digital display advertising</p>
          </div>

          <div className="space-y-5">

            {/* LinkedIn 1584×396 — Dark */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">LinkedIn Cover — 1584 × 396px · Dark</p>
                <ExportButton targetId="asset-banner-linkedin-dark" filename="div-dynamics-banner-linkedin-dark" />
              </div>
              <div
                id="asset-banner-linkedin-dark"
                className="w-full bg-neutral-950 rounded-2xl overflow-hidden flex items-center justify-between px-10 py-0"
                style={{ aspectRatio: "4/1" }}
              >
                <div className="flex items-center gap-8">
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={110} height={44} className="object-contain" />
                  <div className="w-px h-10 bg-neutral-800" />
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-1">Software Engineering Agency</p>
                    <p className="text-xl font-medium text-white tracking-tight">New Gen Digital Innovations</p>
                  </div>
                </div>
                <div className="text-right hidden lg:block">
                  <p className="text-neutral-600 text-xs">Malawi, Africa</p>
                  <p className="text-blue-600 text-xs mt-1">divdynamics.com</p>
                </div>
              </div>
            </div>

            {/* LinkedIn 1584×396 — Blue */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">LinkedIn Cover — 1584 × 396px · Blue</p>
                <ExportButton targetId="asset-banner-linkedin-blue" filename="div-dynamics-banner-linkedin-blue" />
              </div>
              <div
                id="asset-banner-linkedin-blue"
                className="w-full rounded-2xl overflow-hidden flex items-center justify-between px-10 py-0"
                style={{ aspectRatio: "4/1", background: "linear-gradient(120deg, #1d4ed8 0%, #0a0a0a 55%)" }}
              >
                <div className="flex items-center gap-8">
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={110} height={44} className="object-contain" />
                  <div className="w-px h-10 bg-white/10" />
                  <p className="text-2xl font-medium text-white tracking-tight leading-snug">
                    Make your software<br />dreams a reality.
                  </p>
                </div>
                <div className="border border-white/20 rounded-full px-5 py-2 hidden lg:block">
                  <p className="text-white text-xs font-medium">Work with us</p>
                </div>
              </div>
            </div>

            {/* Email Header 600×180 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">Email Header — 600 × 180px</p>
                <ExportButton targetId="asset-banner-email" filename="div-dynamics-banner-email-header" />
              </div>
              <div className="max-w-xl">
                <div
                  id="asset-banner-email"
                  className="w-full bg-neutral-950 rounded-xl overflow-hidden flex items-center justify-between px-8"
                  style={{ aspectRatio: "10/3" }}
                >
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={90} height={36} className="object-contain" />
                  <div className="text-right">
                    <p className="text-neutral-500 text-xs">Software Engineering</p>
                    <p className="text-neutral-300 text-xs mt-0.5">Malawi, Africa</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 04 PITCH DECK ── */}
      <section className="py-32">
        <Container>
          <div className="mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">04 — Pitch Deck</p>
            <p className="text-neutral-500 text-sm">1920 × 1080px · 16:9 · Presentations and proposals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Slide 1 — Title */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">01 — Title</p>
                <ExportButton targetId="asset-deck-01" filename="div-dynamics-deck-01-title" />
              </div>
              <div
                id="asset-deck-01"
                className="w-full bg-neutral-950 rounded-2xl overflow-hidden flex flex-col justify-between p-10"
                style={{ aspectRatio: "16/9" }}
              >
                <div className="flex items-center justify-between">
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={80} height={32} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-600">Confidential</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-4">Company Overview · 2026</p>
                  <p
                    className="font-medium text-white tracking-tight leading-none mb-3"
                    style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
                  >
                    DiV Dynamics
                  </p>
                  <div className="w-8 h-px bg-blue-600 mb-3" />
                  <p className="text-neutral-500 text-sm">New Gen Digital Innovations · Malawi, Africa</p>
                </div>
              </div>
            </div>

            {/* Slide 2 — Section divider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">02 — Section Divider</p>
                <ExportButton targetId="asset-deck-02" filename="div-dynamics-deck-02-section-divider" />
              </div>
              <div
                id="asset-deck-02"
                className="w-full rounded-2xl overflow-hidden flex flex-col items-start justify-end p-10"
                style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #2563eb 0%, #0a0a0a 100%)" }}
              >
                <p className="text-[10px] tracking-widest uppercase text-white/40 mb-4">Section 01</p>
                <p
                  className="font-medium text-white tracking-tight leading-none"
                  style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
                >
                  Our Services
                </p>
              </div>
            </div>

            {/* Slide 3 — Content */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">03 — Content</p>
                <ExportButton targetId="asset-deck-03" filename="div-dynamics-deck-03-content" />
              </div>
              <div
                id="asset-deck-03"
                className="w-full bg-neutral-950 rounded-2xl overflow-hidden flex flex-col justify-between p-10"
                style={{ aspectRatio: "16/9" }}
              >
                <div className="flex items-center justify-between border-b border-neutral-800 pb-5">
                  <p className="text-[10px] tracking-widest uppercase text-blue-500">What We Do</p>
                  <p className="text-[10px] text-neutral-700">divdynamics.com</p>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {["Web Dev", "App Dev", "Branding", "E-Commerce", "UI Design", "Marketing"].map((s) => (
                    <div key={s} className="border border-neutral-800 rounded-xl p-3">
                      <div className="w-4 h-px bg-blue-600 mb-2" />
                      <p className="text-white text-xs font-medium">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide 4 — Closing CTA */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">04 — Closing</p>
                <ExportButton targetId="asset-deck-04" filename="div-dynamics-deck-04-closing" />
              </div>
              <div
                id="asset-deck-04"
                className="w-full bg-white border border-neutral-100 rounded-2xl overflow-hidden flex flex-col justify-between p-10"
                style={{ aspectRatio: "16/9" }}
              >
                <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
                  <Image src="/divwev.png" alt="DiV Dynamics" width={70} height={28} className="object-contain" />
                  <p className="text-[10px] text-neutral-400">divdynamics.com</p>
                </div>
                <div>
                  <p
                    className="font-medium text-neutral-950 tracking-tight leading-tight mb-6"
                    style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}
                  >
                    Ready to build something<br />
                    <span className="text-blue-600">extraordinary?</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-neutral-950 rounded-full px-5 py-2">
                      <p className="text-white text-xs font-medium">hello@divdynamics.com</p>
                    </div>
                    <p className="text-neutral-400 text-xs">Malawi, Africa</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 05 BRAND AWARENESS ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <div className="mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">05 — Brand Awareness</p>
            <p className="text-neutral-500 text-sm">Social posts and LinkedIn assets built around the brandmark</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

            {/* G — Mark hero, dark */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">G — Mark Hero · Dark</p>
                <ExportButton targetId="asset-brand-g" filename="div-dynamics-G-mark-hero-dark" />
              </div>
              <div id="asset-brand-g" className="aspect-square bg-neutral-950 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-widest uppercase text-neutral-600">DiV Dynamics</p>
                  <p className="text-[10px] tracking-widest uppercase text-neutral-600">Malawi</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 py-8">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={120} height={120} className="object-contain invert" />
                </div>
                <div className="border-t border-neutral-800 pt-5">
                  <p className="text-white text-xl font-medium tracking-tight">New Gen Digital Innovations.</p>
                  <p className="text-neutral-600 text-xs mt-1">divdynamics.com</p>
                </div>
              </div>
            </div>

            {/* H — Manifesto */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">H — Manifesto</p>
                <ExportButton targetId="asset-brand-h" filename="div-dynamics-H-manifesto" />
              </div>
              <div id="asset-brand-h" className="aspect-square bg-white border border-neutral-100 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={36} height={36} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400">DiV Dynamics</p>
                </div>
                <div>
                  <div className="w-6 h-px bg-blue-600 mb-6" />
                  <p className="text-neutral-950 font-medium tracking-tight leading-snug" style={{ fontSize: "clamp(20px, 3vw, 26px)" }}>
                    Software is never just software.
                    It's the thing your business runs on.
                    The gap between where you are and where you're going.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-neutral-100 pt-5">
                  <p className="text-neutral-400 text-xs">We build it.</p>
                  <p className="text-neutral-300 text-xs">divdynamics.com</p>
                </div>
              </div>
            </div>

            {/* I — Origin */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">I — Origin</p>
                <ExportButton targetId="asset-brand-i" filename="div-dynamics-I-origin" />
              </div>
              <div id="asset-brand-i" className="aspect-square rounded-2xl overflow-hidden flex flex-col justify-between p-8"
                style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #0f1f5c 100%)" }}>
                <div className="flex items-center gap-3">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={32} height={32} className="object-contain invert" />
                  <div className="w-px h-4 bg-neutral-700" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-500">Est. Malawi</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-blue-400 mb-4">Built here.</p>
                  <p className="font-medium text-white tracking-tight leading-none mb-4"
                    style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>
                    Africa's software is being written now.
                  </p>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    We're among those writing it.
                  </p>
                </div>
              </div>
            </div>

            {/* J — Mark on white, typographic */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">J — Mark · Light</p>
                <ExportButton targetId="asset-brand-j" filename="div-dynamics-J-mark-light" />
              </div>
              <div id="asset-brand-j" className="aspect-square bg-neutral-50 rounded-2xl overflow-hidden flex flex-col p-8">
                <div className="flex items-start justify-between">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={56} height={56} className="object-contain" />
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400 mt-1">2026</p>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="w-6 h-px bg-neutral-300 mb-6" />
                  <p className="font-medium text-neutral-950 tracking-tight leading-none mb-3"
                    style={{ fontSize: "clamp(36px, 6vw, 52px)" }}>
                    Precision.<br />Purpose.<br />Progress.
                  </p>
                  <p className="text-neutral-400 text-xs mt-4">DiV Dynamics · Malawi, Africa</p>
                </div>
              </div>
            </div>

            {/* K — Blue accent awareness */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">K — Accent Blue</p>
                <ExportButton targetId="asset-brand-k" filename="div-dynamics-K-accent-blue" />
              </div>
              <div id="asset-brand-k" className="aspect-square bg-blue-600 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-widest uppercase text-white/50">DiV Dynamics</p>
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={32} height={32} className="object-contain brightness-0 invert" />
                </div>
                <div>
                  <p className="font-medium text-white tracking-tight leading-none mb-5"
                    style={{ fontSize: "clamp(30px, 5vw, 42px)" }}>
                    The work speaks.
                  </p>
                  <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                    Every product we ship is a statement about what software can be when it's built with intention.
                  </p>
                </div>
                <p className="text-white/40 text-xs">divdynamics.com</p>
              </div>
            </div>

            {/* L — Minimal mark lockup */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">L — Minimal Lockup</p>
                <ExportButton targetId="asset-brand-l" filename="div-dynamics-L-minimal-lockup" />
              </div>
              <div id="asset-brand-l" className="aspect-square bg-neutral-950 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-10">
                <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={80} height={80} className="object-contain invert mb-8" />
                <div className="w-6 h-px bg-neutral-700 mb-8" />
                <p className="text-white text-sm font-medium tracking-wider uppercase mb-1">DiV Dynamics</p>
                <p className="text-neutral-600 text-xs tracking-widest uppercase">Malawi · Africa</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 06 LINKEDIN POSTS ── */}
      <section className="py-32">
        <Container>
          <div className="mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">06 — LinkedIn Posts</p>
            <p className="text-neutral-500 text-sm">1200 × 628px · LinkedIn feed image format</p>
          </div>

          <div className="grid grid-cols-1 gap-5">

            {/* LI-A — Brand awareness */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">LI-A — Brand Awareness · Dark</p>
                <ExportButton targetId="asset-li-a" filename="div-dynamics-LI-A-brand-awareness" />
              </div>
              <div id="asset-li-a" className="w-full bg-neutral-950 rounded-2xl overflow-hidden flex items-center gap-0"
                style={{ aspectRatio: "1200/628" }}>
                {/* Left — mark */}
                <div className="w-2/5 h-full flex items-center justify-center border-r border-neutral-800 flex-shrink-0">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={140} height={140} className="object-contain invert" />
                </div>
                {/* Right — copy */}
                <div className="flex-1 flex flex-col justify-between h-full p-10">
                  <p className="text-[10px] tracking-widest uppercase text-neutral-600">DiV Dynamics · Malawi</p>
                  <div>
                    <div className="w-6 h-px bg-blue-600 mb-5" />
                    <p className="font-medium text-white tracking-tight leading-tight mb-4"
                      style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}>
                      Software is never just software.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      It's the infrastructure behind every ambitious idea in Africa. We build it with precision and purpose.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={80} height={32} className="object-contain" />
                    <div className="w-px h-4 bg-neutral-800" />
                    <p className="text-neutral-600 text-xs">divdynamics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LI-B — Thought leadership */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">LI-B — Thought Leadership · Light</p>
                <ExportButton targetId="asset-li-b" filename="div-dynamics-LI-B-thought-leadership" />
              </div>
              <div id="asset-li-b" className="w-full bg-white border border-neutral-100 rounded-2xl overflow-hidden flex items-center"
                style={{ aspectRatio: "1200/628" }}>
                {/* Left — copy */}
                <div className="flex-1 flex flex-col justify-between h-full p-10">
                  <div className="flex items-center gap-3">
                    <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={36} height={36} className="object-contain" />
                    <p className="text-[10px] tracking-widest uppercase text-neutral-400">DiV Dynamics</p>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-950 tracking-tight leading-tight mb-4"
                      style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}>
                      Africa has some of the world's most ambitious founders.
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      They deserve world-class software. That's the work.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/divwev.png" alt="DiV Dynamics" width={80} height={32} className="object-contain" />
                    <div className="w-px h-4 bg-neutral-100" />
                    <p className="text-neutral-400 text-xs">Malawi, Africa</p>
                  </div>
                </div>
                {/* Right — mark accent */}
                <div className="w-2/5 h-full flex items-center justify-center bg-neutral-950 flex-shrink-0">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={120} height={120} className="object-contain invert" />
                </div>
              </div>
            </div>

            {/* LI-C — Blue gradient */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-widest uppercase text-neutral-400">LI-C — Brand Statement · Blue</p>
                <ExportButton targetId="asset-li-c" filename="div-dynamics-LI-C-brand-statement" />
              </div>
              <div id="asset-li-c" className="w-full rounded-2xl overflow-hidden flex items-center justify-between px-14"
                style={{ aspectRatio: "1200/628", background: "linear-gradient(120deg, #1d4ed8 0%, #0a0a0a 60%)" }}>
                <div className="flex-1">
                  <p className="text-[10px] tracking-widest uppercase text-white/40 mb-6">New Gen Digital Innovations</p>
                  <p className="font-medium text-white tracking-tight leading-none mb-6"
                    style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                    Software.<br />Reimagined.
                  </p>
                  <Image src="/divwev-inverted.png" alt="DiV Dynamics" width={90} height={36} className="object-contain" />
                </div>
                <div className="w-2/5 flex items-center justify-center flex-shrink-0">
                  <Image src="/brandmark.png" alt="DiV Dynamics Mark" width={160} height={160}
                    className="object-contain opacity-20 invert" />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}
