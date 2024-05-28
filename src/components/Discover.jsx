import React from "react";
import Section from "./Section";

import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We love partnering closely with our clients to get a clear picture of their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          aspirations. By diving into their daily operations, we get to know what makes their business truly unique.
        </p>
        <p>
          With our rich experience in software development and project management, we tailor our approach to each{" "}
          <strong className="font-semibold text-neutral-950">business's</strong> specific challenges and opportunities. This personalized touch ensures we can spot the best opportunities and tackle any hurdles together.
        </p>
        <p>
          After completing a thorough audit, we’ll come back to you with a detailed
          <strong className="font-semibold text-neutral-950">action plan</strong> and, just as important, a well-thought-out budget that aligns with your goals.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What's included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Comprehensive questionnaires</TagListItem>
        <TagListItem>In-depth feasibility studies</TagListItem>
        <TagListItem>Insightful employee surveys</TagListItem>
        <TagListItem>Innovative proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
