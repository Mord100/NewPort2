import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, I develop a comprehensive roadmap
          for each product and start working towards delivery. Something Something Smething
        </p>
        <p>
        Placeholder
        </p>
        <p>
        Placeholder
        </p>
      </div>
      <Blockquote
        author={{ name: "Daphne Magela", role: "CEO Zanyumba LLC" }}
        className="mt-12"
      >
        MORD.DEV  Placeholder
      </Blockquote>
    </Section>
  );
};

export default Build;
