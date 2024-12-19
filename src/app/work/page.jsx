import React from "react";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";

const WorkPage = () => {
  const projects = [
    {
      title: "Zanyumba Real Estate Digital Product",
      imageSrc: "https://i.ibb.co/yszBC7G/zanyumba.jpg",
      description: "A comprehensive digital platform for the real estate market, Zanyumba offers users seamless property search, detailed listings, and integrated tools to connect buyers, sellers, and property seekers.",
      githubLink: "https://github.com/Mord100",
      liveLink: "https://zanyumba.onrender.com/"
    },
    {
      title: "Mental Health Matters Brand Website",
      imageSrc: "https://i.ibb.co/RCjtmNQ/mhm-screenshot.png",
      description: "A full responsive website for a Brand dedicated to bringing mental health awareness to the community. Mental Health Matters: fashion meets mental health awareness, infusing hope and style with positivity in each garment.",
      githubLink: "https://github.com/Mord100",
      liveLink: "https://mentalhealthmw.org/"
    },
    {
      title: "Rosalyn's Beach Hotel Website",
      imageSrc: "https://i.ibb.co/3SkvtGF/rosalyns-Snip.jpg",
      description: "A full responsive website for Rosalyn's Beach Hotel, offering a luxurious getaway experience with stunning lake views, modern amenities, and exceptional hospitality.",
      githubLink: "https://github.com/Mord100",
      liveLink: "https://rosalynsbeachhotel.com/"
    }
  ];

  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Proven solutions for real-world problems."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3xl gap-12 px-8 md:px-16 lg:px-40">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </>
  );
};

export default WorkPage;
