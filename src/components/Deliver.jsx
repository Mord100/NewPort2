import React from "react";
import Section from "./Section";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We're thrilled to bring your vision to life and deliver the finished product to you. This is the culmination of our hard work and collaboration, and we're excited to see how it empowers your business.
        </p>
        <p>
          As we hand over the product, we provide comprehensive training and documentation to ensure your team can hit the ground running. We're here to support you every step of the way as you integrate the new solution into your operations.
        </p>
        <p>
          Additionally, we offer ongoing maintenance and support services to keep your product running smoothly. Our dedicated team is just a call or email away, ready to assist you with any questions or issues that may arise.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What's included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, ensuring quality and reliability from day one. We take pride in delivering a product that exceeds your expectations.
        </ListItem>
        <ListItem title="Infrastructure">
          We handle all aspects of infrastructure setup and configuration, ensuring your product is deployed on a secure and scalable platform.
        </ListItem>
        <ListItem title="Support">
          Our support doesn't end at delivery. We're committed to providing ongoing assistance and guidance to help you maximize the value of your investment.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
