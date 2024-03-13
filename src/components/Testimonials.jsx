import React from "react";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

const Testimonials = ({ children, client, className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
           
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
