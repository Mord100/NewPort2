import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <h1>EDUCATION</h1>
          <h2>BSc (Hons) Computing (Information Systems)</h2>
          <p>
          
Special Focus: Computer Systems and Internet Technologies | Object Oriented Programming | Systems Development | Software Engineering | Application Development | Professional Project Management | User Interface Design | Agile Development with SCRUM | Data and Web Analytics | Web Programming Information Analysis and Visualisation | Database Management and Administration | Information and Content Management | Human Computer Interaction and Design
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="1" label="Underpaid employees" />
          <StatListItem value="1" label="Placated clients" />
          <StatListItem value="MK" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
