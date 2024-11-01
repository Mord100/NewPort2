import React from "react"
import Link from "next/link"
import ContactSection from "@/components/ContactSection"
import Container from "@/components/Container"
import Cultures from "@/components/Cultures"
import PageIntro from "@/components/PageIntro"
import { StatList, StatListItem } from "@/components/StatList"

const TeamMember = ({ name, title, education, description }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-1 text-black">{name}</h3>
    <p className="text-lg text-gray-700 mb-2">{title}</p>
    {education && <p className="text-sm text-gray-600 mb-3">{education}</p>}
    <p className="text-base leading-relaxed text-gray-800">{description}</p>
  </div>
)

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About">
        <p className="lead mb-8 text-gray-700">
          We are a dynamic software development company specializing in creating innovative digital solutions for businesses and organizations. From web applications and mobile solutions to custom software development, we transform ideas into powerful, user-friendly digital experiences. Our expertise spans across modern technologies and frameworks, ensuring scalable, secure, and efficient solutions for our clients.
        </p>
        <p className="lead mb-8 text-gray-700">
          Our team of dedicated professionals brings a wealth of experience and expertise to every project.
        </p>
        <a href="/certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-current text-black font-semibold hover:bg-black hover:text-white transition-colors">
          View Registration Certificate
        </a>
        
      </PageIntro>
      
      

      <Container className="mt-24">
        <h1 className="text-black text-3xl font-bold pb-20">Meet The Team</h1>
        <div className="space-y-16">
          
          <TeamMember
            name="Mordecai Chingolo"
            title="CEO and Lead Software Engineer"
            education="BSc (Hons) Computing (Information Systems)"
            description="Special Focus: Computer Systems and Internet Technologies | Object Oriented Programming | Systems Development | Software Engineering | Application Development | Professional Project Management | User Interface Design | Agile Development with SCRUM | Data and Web Analytics | Web Programming Information Analysis and Visualisation | Database Management and Administration | Information and Content Management | Human Computer Interaction and Design"
          />
          <TeamMember
            name="Charles Nthani"
            title="CTO and Software Engineer"
            education="BSc in Information Technology"
            description="Specialized in Information Technology, Charles brings expertise in areas such as IT infrastructure, cybersecurity, and software development."
          />
          <TeamMember
            name="Charlton Mopiha"
            title="Sales and Marketing Manager"
            education="Diploma in Business Information Technology | Advanced Diploma in Computing(With Business Management)"
            description="Charlton spearheads our sales and marketing initiatives, utilizing his extensive knowledge in market analysis, brand development, and customer engagement to propel business growth. With a keen eye for market trends and a talent for crafting compelling brand narratives, Charlton has successfully cultivated and maintained strong relationships with clients, ensuring our company's continued expansion and success."
          />
        </div>
      </Container>

      <Container className="mt-24">
        <StatList>
          <StatListItem value="3" label="Team members" />
          <StatListItem value="10+" label="Years of combined experience" />
          <StatListItem value="100%" label="Client satisfaction" />
        </StatList>
      </Container>

      <Cultures />
      <ContactSection />
    </>
  )
}

export default AboutPage