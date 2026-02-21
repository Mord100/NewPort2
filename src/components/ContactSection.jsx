import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <div className="bg-neutral-950 mt-24 sm:mt-32 lg:mt-40 py-32">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 lg:sticky lg:top-24">
                Let's work
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Ready to build something?
              </h2>
              <div className="mt-8 flex">
                <Button href="/contact" invert>
                  Start a project
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3" />
            <div className="col-span-12 lg:col-span-9 border-t border-white/10 pt-10">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
                Our offices
              </p>
              <Offices invert className="grid grid-cols-1 gap-8 sm:grid-cols-2" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default ContactSection;
