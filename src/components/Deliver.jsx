import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Placeholder
        </p>
        <p>
        Placeholder
        </p>
        <p>
        Placeholder
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{" "}
          retainer.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage,  Placeholder
        </ListItem>
        <ListItem title="Infrastructure">
        Placeholder
        </ListItem>
        <ListItem title="Support">
        Placeholder
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
