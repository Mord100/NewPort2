import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Something Something Smething
        </p>
        <p>
        Something Something Smething
        </p>
        <p>
          WSomething Something Smething
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
          Our projects always have 100% test coverage, Something Something Smething
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Something Something Smething
        </ListItem>
        <ListItem title="Support">
        Something Something Smething
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
