import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const team = [
  {
    name: "Mordecai Chingolo",
    title: "CEO and Lead Software Engineer",
    education: "BSc (Hons) Computing (Information Systems)",
    description:
      "Special focus areas: Computer Systems and Internet Technologies, Object Oriented Programming, Systems Development, Software Engineering, Application Development, Professional Project Management, User Interface Design, Agile Development with SCRUM, Data and Web Analytics, Web Programming, Database Management and Administration, Human Computer Interaction and Design.",
  },
  {
    name: "Charles Nthani",
    title: "CTO and Software Engineer",
    education: "BSc in Information Technology",
    description:
      "Specialized in Information Technology, Charles brings expertise across IT infrastructure, cybersecurity, and software development.",
  },
  {
    name: "Charlton Mopiha",
    title: "Sales and Marketing Manager",
    education: "Diploma in Business Information Technology · Advanced Diploma in Computing (With Business Management)",
    description:
      "Charlton leads sales and marketing, applying deep knowledge in market analysis, brand development, and customer engagement to drive business growth. He has cultivated strong client relationships that ensure our company's continued expansion.",
  },
];

const stats = [
  { value: "3", label: "Team members" },
  { value: "10+", label: "Years of combined experience" },
  { value: "100%", label: "Client satisfaction" },
];

export default function AboutPage() {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">

      {/* ── HERO ── */}
      <div className="bg-neutral-950 pt-48 pb-0 overflow-hidden">
        <Container>
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
              01 — About
            </p>
            <h1
              className="font-display font-medium text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
            >
              Built by a<br />
              small team.
            </h1>
            <div className="flex items-end justify-between mt-16 border-t border-neutral-800 pt-8 pb-16">
              <div className="max-w-lg">
                <p className="text-neutral-400 text-base leading-relaxed">
                  Div Dynamics is a software engineering studio based in Malawi. We build web platforms, mobile applications, and digital systems for businesses that need precise, scalable, and well-considered software.
                </p>
                <a
                  href="/certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-neutral-500 text-sm border-b border-neutral-700 hover:border-neutral-400 hover:text-neutral-300 transition-colors"
                >
                  View Registration Certificate
                </a>
              </div>
              <p className="text-neutral-600 text-sm tabular-nums hidden sm:block">Malawi, Africa</p>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* ── TEAM ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-6 mb-16">
              <div className="col-span-12 lg:col-span-3">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                  02 — Team
                </p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <p className="text-2xl font-medium text-neutral-950 leading-snug tracking-tight max-w-lg">
                  Three people. Every discipline covered.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3" />
              <div className="col-span-12 lg:col-span-9">
                <div className="divide-y divide-neutral-100">
                  {team.map((member, i) => (
                    <div key={member.name} className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      <div>
                        <p className="text-[10px] font-mono text-blue-600 mb-3">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 leading-relaxed">
                          {member.title}
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950 mb-3">
                          {member.name}
                        </p>
                        {member.education && (
                          <p className="text-xs font-mono text-neutral-400 mb-4 leading-relaxed">
                            {member.education}
                          </p>
                        )}
                        <p className="text-sm text-neutral-600 leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="py-32 border-b border-neutral-100">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-6 mb-16">
              <div className="col-span-12 lg:col-span-3">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                  03 — By the numbers
                </p>
              </div>
              <div className="col-span-12 lg:col-span-9" />
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3" />
              <div className="col-span-12 lg:col-span-9">
                <div className="divide-y divide-neutral-100">
                  {stats.map((stat) => (
                    <div key={stat.label} className="py-8 flex items-baseline justify-between gap-8">
                      <p
                        className="font-display font-medium text-neutral-950 leading-none tracking-tight"
                        style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-sm text-neutral-500">{stat.label}</p>
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
