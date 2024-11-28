'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaTag } from 'react-icons/fa'
import Image from "next/image"

export default function ProjectCard({ title, imageSrc, description, githubLink, liveLink, tags = [] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {Array.isArray(tags) && tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              <FaTag className="w-3 h-3" />
              {tag}
            </Badge>
          ))}
        </div>
        <CardDescription 
          className={`text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-full' : 'max-h-20'
          }`}
        >
          {description}
        </CardDescription>
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 w-full text-black hover:text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <FaChevronUp className="mr-2 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <FaChevronDown className="mr-2 h-4 w-4" />
              Show More
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-black p-4 bg-gray-50">
        <Button variant="outline" size="sm" asChild className="w-[48%] transition-colors duration-300 hover:bg-primary hover:text-black">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button variant="default" size="sm" asChild className="w-[48%] bg-primary hover:bg-primary/90 transition-colors duration-300">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <FaExternalLinkAlt className="mr-2 h-4 w-4" />
            Live Site
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
