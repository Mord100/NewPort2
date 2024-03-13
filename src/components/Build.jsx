import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. Something Something Smething
        </p>
        <p>
          Each client is assigned a key account manager to keep lines of
          communication open and obscure the actual progress of the project.
          Something Something Smething
        </p>
        <p>
        Something Something Smething
        </p>
      </div>
      <Blockquote
        author={{ name: "Daphne Magela", role: "CEO Zanyumba LLC" }}
        className="mt-12"
      >
        MORD.DEV were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
