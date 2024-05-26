import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, imageSrc, description, githubLink, liveLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-md mb-3" />
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-800 flex items-center">
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-800 flex items-center">
          <FaExternalLinkAlt className="mr-2" /> Live Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
