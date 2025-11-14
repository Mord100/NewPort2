"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import FadeIn, { FadeInStagger } from "./FadeIn";

// Awwwards-inspired Project Card with hover reveal
export const ProjectCard = ({ project, index }) => {
  return (
    <FadeIn>
      <Link
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <article className="relative border border-neutral-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-lg">
          {/* Image Container */}
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Overlay with Project Info */}
            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                {/* Top - Category */}
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {project.category}
                  </span>
                </div>

                {/* Bottom - Title & Links */}
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  
                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="mt-6 flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-2 text-white">
                      View Project
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <span
                      className="text-neutral-400 transition-colors hover:text-white"
                    >
                      GitHub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info - Always Visible */}
          <div className="p-6 bg-white">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-medium tracking-tight text-neutral-950 transition-colors group-hover:text-blue-700 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className="flex-shrink-0 pt-1">
                <svg 
                  className="h-5 w-5 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-blue-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
};

// Asymmetric Grid Layout (Awwwards style)
export const ProjectGrid = ({ projects }) => {
  return (
    <FadeInStagger>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className={clsx(
              // First item spans 2 columns on larger screens
              index === 0 && "sm:col-span-2 lg:col-span-2",
              // Every 4th item after first spans 2 columns
              index > 0 && (index + 2) % 4 === 0 && "sm:col-span-2 lg:col-span-2"
            )}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </FadeInStagger>
  );
};

// Ultra-minimal filter with auto-scroll
export const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (category, event) => {
    onCategoryChange(category);
    
    // Scroll the clicked button into view with smooth animation
    if (scrollContainerRef.current && event.currentTarget) {
      event.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <FadeIn>
      <div className="relative -mx-6 px-6 sm:mx-0 sm:px-0">
        {/* Mobile: Horizontal scroll, Desktop: Wrap */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:overflow-visible sm:pb-0 scroll-smooth"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={(e) => handleCategoryClick(category, e)}
              className={clsx(
                "relative flex-shrink-0 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                activeCategory === category
                  ? "text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-950"
              )}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-neutral-950 animate-in slide-in-from-left duration-300" />
              )}
            </button>
          ))}
          {/* Spacer for scroll padding on mobile */}
          <div className="w-px flex-shrink-0 sm:hidden" />
        </div>
      </div>
    </FadeIn>
  );
};
