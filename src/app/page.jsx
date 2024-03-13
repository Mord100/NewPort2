import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your Software dreams a reality with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We are a collective of developers, passionate about the intricate fusion of design and technology. In the dynamic landscape of our work, 
          our team navigates challenges with unwavering dedication, consistently pushing the boundaries of innovation.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        In the realm of software development, where code meets creativity, innovation is not just a choice; 
        it's the keystroke that writes the future.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
