"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import { ProjectGrid, ProjectFilter } from "@/components/ProjectShowcase";

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "ICO Connect",
      imageSrc: "/ico-connect.png",
      description: "A decentralized platform for launching and participating in Initial Coin Offerings (ICOs). Features include smart contract integration, real-time token price tracking, and secure wallet connections.",
      githubLink: "https://github.com/Mord100/ico-connect-v1.0.0",
      liveLink: "https://icoconnectdemo.netlify.app",
      category: "Web3",
      tags: ["React", "Node.js", "Solidity", "Ethereum"]
    },
    {
      title: "Open Banking Platform",
      imageSrc: "/OpenBanking.png",
      description: "A comprehensive platform integrating multiple bank accounts, providing robust transaction management and advanced budgeting tools. Utilized Plaid API to ensure high security and seamless connectivity.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://github.com/mord100",
      category: "Fintech",
      tags: ["React", "Node.js", "Plaid API", "Tailwind"]
    },
    {
      title: "Div Dynamics Agency",
      imageSrc: "/divdynamics.png",
      description: "A modern website for a creative digital agency with a clean and intuitive UI. Showcasing services, portfolio, and team with smooth animations and responsive design.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://divdynamicsmw.com/",
      category: "Web Development",
      tags: ["Next.js", "Tailwind", "Framer Motion", "Agency"]
    },
    {
      title: "ICT Aid Malawi",
      imageSrc: "/ictaidmalawi.png",
      description: "A modern website for a company in ICT with a modern and minimalistic UI. Features include service showcases, team profiles, and contact integration.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://ictaidmalawi.com/",
      category: "Web Development",
      tags: ["Next.js", "Tailwind", "Corporate", "Modern"]
    },
    {
      title: "Selecti Creative Studio",
      imageSrc: "/Selecti.png",
      description: "Innovation Creative Studio Website with bold design and interactive elements. Showcasing creative work and studio capabilities with stunning visual presentations.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://selecti-studio.netlify.app/",
      category: "Creative",
      tags: ["Next.js", "Tailwind", "Creative", "Portfolio"]
    },
    {
      title: "Div-Quotes",
      imageSrc: "/divquotes.png",
      description: "A business document creation app for generating invoices, receipts and quotations with a business analytics dashboard. Streamline your business documentation workflow.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://divquotes-v1.netlify.app/",
      category: "SaaS",
      tags: ["React", "Tailwind", "Business", "Analytics"]
    },
    {
      title: "Mental Health MW",
      imageSrc: "/mentalhealthmw.png",
      description: "A mental health awareness and support platform for Malawi, providing resources and information for mental health support. Building a supportive community.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://mentalhealthmw.org/",
      category: "Social Impact",
      tags: ["Next.js", "Tailwind", "Health", "Community"]
    },
    {
      title: "Zanyumba Property Listing",
      imageSrc: "/zanyumba.png",
      description: "A modern web application for listing and managing properties. Implemented features like user authentication, property search, and booking management with a clean and intuitive UI.",
      githubLink: "https://github.com/mord100",
      liveLink: "https://zanyumba.onrender.com",
      category: "Real Estate",
      tags: ["Next.js", "MongoDB", "Express", "Full Stack"]
    },
    {
      title: "Rosalyn's Beach Hotel",
      imageSrc: "https://i.ibb.co/3SkvtGF/rosalyns-Snip.jpg",
      description: "A full responsive website for Rosalyn's Beach Hotel, offering a luxurious getaway experience with stunning lake views, modern amenities, and exceptional hospitality.",
      githubLink: "https://github.com/Mord100",
      liveLink: "https://rosalynsbeachhotel.com/",
      category: "Hospitality",
      tags: ["React", "Hospitality", "Booking", "UI/UX"]
    }
  ];

  const categories = ["All", "Web Development", "Web3", "Fintech", "SaaS", "Creative", "Social Impact", "Real Estate", "Hospitality"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <PageIntro
        eyebrow="Our Work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the best value to our clients. 
          The primary way we do that is by working with cutting-edge technologies and design patterns.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
          <div className="flex-1 min-w-0">
            <ProjectFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          <span className="text-sm text-neutral-400 ml-4 flex-shrink-0">
            {filteredProjects.length}
          </span>
        </div>
      </Container>

      <Container className="mt-16">
        <ProjectGrid key={activeCategory} projects={filteredProjects} />
      </Container>
    </>
  );
};

export default WorkPage;
