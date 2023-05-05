import LargeProjectCard from "@/components/ProjectCards/LargeProjectCard";
import React from "react";
import { projectsData } from "@/project-data/projects-data";

const projects = () => {
  return (
    <div className="projects">
      <h2 className="projects__header">Projects</h2>
      <div className="projects-wrapper">
        {projectsData.map((project) => (
          <LargeProjectCard
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
};

export default projects;
