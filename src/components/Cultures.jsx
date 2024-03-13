import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          We prioritize loyalty as a core value, fostering a culture where mutual respect, commitment, and shared goals form the foundation of our success.
          </GridListItem>
          <GridListItem title="Trust" invert>
          We believe in open communication, reliability, and integrity, creating an environment where trust is the currency that strengthens our connections and fuels our collective success.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          We embrace a culture where dedication, perseverance, and a shared commitment to excellence drive our individual and collective success.







          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
