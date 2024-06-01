"use client";
import { LargeProjectCard } from "@components/ProjectCards/LargeProjectCard";
import React from "react";
import { projectsData } from "@data/projects-data";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__header">Projects</h2>
      <div className="projects-wrapper">
        {projectsData.map((project) => (
          <LargeProjectCard
            key={project.projectTitle}
            projectKey={project.projectTitle}
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            projectShortDescription={project.projectShortDescription}
            projectImageAlt={project.projectImageAlt}
            projectRepository={project.projectRepository}
            projectLive={project.projectLive}
          />
        ))}
      </div>
    </div>
  );
}
