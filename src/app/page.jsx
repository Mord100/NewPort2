import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { LuConstruction } from "react-icons/lu";
import { IoConstructSharp } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { BoxRevealDemo } from "@/components/BoxRevealTest";



export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <p className="text-[15px] flex gap-1 items-center font-medium tracking-tight text-neutral-950">
            <GoRocket className="animate-bounce" /> New Gen Digital Innovations...
          </p>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            
            <br />
            <br />
            Make your <span className="text-blue-700">Software</span> dreams a reality!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a Software Dev/Engineering Digital Agency passionate about the intricate fusion of design and technology. In the dynamic landscape of our work,
            We navigate challenges with unwavering dedication, consistently pushing the boundaries of innovation.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Services />
      <BoxRevealDemo />
      <ContactSection />
    </main>
  );
}
