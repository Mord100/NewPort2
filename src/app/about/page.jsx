import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About" title="">
        <p>
          Meet The Team
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">     
          <p className="font-bold">
            Mordecai Chingolo - CEO and Lead Software Engineer
          </p>  
          <h2>BSc (Hons) Computing (Information Systems)</h2>
          <p>
            Special Focus: Computer Systems and Internet Technologies | Object Oriented Programming | Systems Development | Software Engineering | Application Development | Professional Project Management | User Interface Design | Agile Development with SCRUM | Data and Web Analytics | Web Programming Information Analysis and Visualisation | Database Management and Administration | Information and Content Management | Human Computer Interaction and Design
          </p>
        
          <p className="font-bold">
            Charles Nthani - CTO and Software Engineer
          </p> 
          <h2>BSc in Information Technology</h2>
          <p>
            Specialized in Information Technology, our team member Charles Nthani serves as the CTO and Software Engineer, bringing expertise in areas such as IT infrastructure, cybersecurity, and software development.
          </p>
      
          <p className="font-bold">
            Tiwonge Sikwese - CFO and Chief Operations Officer
          </p>
          <h2>BSc in Internal Auditing</h2>
          <p>
            With a background in Internal Auditing, Tiwonge Sikwese serves as the CFO and Chief Operations Officer, bringing valuable insights into risk management, compliance, and process optimization.
          </p>
   
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3" label="Underpaid employees" />
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
