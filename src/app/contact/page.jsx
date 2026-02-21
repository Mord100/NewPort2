import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const ContactPage = () => {
  return (
    <main className="text-neutral-950 bg-white -mt-[92px]">

      {/* ── HERO ── */}
      <div className="bg-neutral-950 pt-48 pb-0 overflow-hidden">
        <Container>
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
              01 — Contact
            </p>
            <h1
              className="font-display font-medium text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
            >
              Start the<br />
              conversation.
            </h1>
            <div className="flex items-end justify-between mt-16 border-t border-neutral-800 pt-8 pb-16">
              <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
                Tell us what you're building. We'll tell you if we're the right team to build it with.
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* ── FORM ── */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 lg:sticky lg:top-24">
                02 — Get in touch
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9" />
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3" />
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <ContactDetails />
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
};

export default ContactPage;
