"use client";
import React from "react";
import { projectsData } from "@data/projects-data";
import { ProjectCard } from "@components/ProjectCards";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__header">Projects</h2>
      <div className="projects-wrapper">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.shortDescription}
            alt={project.alt}
            repository={project.repository}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
}
