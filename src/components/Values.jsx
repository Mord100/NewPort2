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
        title="What we hold ourselves to."
      >
        <p>
          Six principles that govern how we work, who we work with, and what we ship.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We pay attention to every detail, ensuring that our work is of the highest quality and precision.
          </GridListItem>
          <GridListItem title="Efficient">
            We strive to work smart and optimize our processes to deliver results quickly and effectively.
          </GridListItem>
          <GridListItem title="Adaptable">
            Change is inevitable, and we embrace it by staying flexible and adapting to new challenges and opportunities.
          </GridListItem>
          <GridListItem title="Honest">
            Honesty and integrity are the foundation of our relationships with clients and colleagues alike.
          </GridListItem>
          <GridListItem title="Loyal">
            We're committed to our clients' success and build long-lasting partnerships based on trust and loyalty.
          </GridListItem>
          <GridListItem title="Innovative">
            We're not satisfied with the status quo. We continuously seek out new ideas and technologies to drive innovation and stay ahead of the curve.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
