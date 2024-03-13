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
        Something Something Something
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
          Something Something Something
          </GridListItem>
          <GridListItem title="Efficient">
          Something Something Something

          </GridListItem>
          <GridListItem title="Adaptable">
          Something Something Something

          </GridListItem>
          <GridListItem title="Honest">
          Something Something Something

          </GridListItem>
          <GridListItem title="Loyal">
          Something Something Something

          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. Something Something Something

          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
