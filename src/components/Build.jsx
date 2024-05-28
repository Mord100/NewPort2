import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the insights we gathered during the discovery phase, we craft a detailed roadmap for your project. This roadmap is our guide as we begin turning your vision into reality, step by step.
        </p>
        <p>
          Our talented team of developers works diligently to bring each element of your product to life. We focus on creating a seamless and efficient development process, ensuring every feature is meticulously designed and implemented.
        </p>
        <p>
          Throughout the build phase, we maintain open communication with you, providing regular updates and welcoming your feedback. This collaborative approach ensures that the final product not only meets but exceeds your expectations.
        </p>
      </div>
      <Blockquote
        author={{ name: "Daphne Magela", role: "CEO Zanyumba LLC" }}
        className="mt-12"
      >
        "The dedication and expertise of the team at Div.Dynamics transformed our initial concept into a cutting-edge product. Their collaborative approach and attention to detail were outstanding."
      </Blockquote>
    </Section>
  );
};

export default Build;
