import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
        Placeholder
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
          Placeholder
          </GridListItem>
          <GridListItem title="Efficient">
          Placeholder

          </GridListItem>
          <GridListItem title="Adaptable">
          Placeholder

          </GridListItem>
          <GridListItem title="Honest">
          Placeholder

          </GridListItem>
          <GridListItem title="Loyal">
          Placeholder

          </GridListItem>
          <GridListItem title="Innovative">
            T Placeholder

          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
