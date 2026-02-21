import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="From concept to code — we handle the full stack."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We take on complex software challenges and deliver products that are precise, scalable, and built to last.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              End-to-end web platforms built with Next.js, React, and modern infrastructure. Fast, accessible, and engineered to scale.
            </ListItem>
            <ListItem title="Application development">
              Cross-platform mobile and desktop applications. Native performance where it matters, shared logic where it makes sense.
            </ListItem>
            <ListItem title="E-commerce">
              Custom storefronts and transaction systems built for conversion. Integrated payments, inventory, and fulfilment — without the overhead.
            </ListItem>
            <ListItem title="Custom content management">
              CMS architectures designed around how your team actually works. No bloated platforms — just the structure your content needs.
            </ListItem>
            <ListItem title="Graphics design">
              Visual systems grounded in brand strategy. Identity, print, and digital design that works across every surface.
            </ListItem>
            <ListItem title="Social media marketing">
              Campaigns built around the data. Strategy, creative, and execution — managed as one coherent system.
            </ListItem>
            <ListItem title="Branding">
              Brand identity from the ground up. Positioning, naming, visual language, and guidelines that hold under pressure.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
