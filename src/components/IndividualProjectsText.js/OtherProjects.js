import React from "react";
import Link from "next/link";
import LargeProjectCard from "../ProjectCards/LargeProjectCard";
import { Icon } from "@iconify/react";
import { projectsData } from "@/project-data/projects-data";
const OtherProjects = ({ project }) => {
  const otherProjects = projectsData.slice(0, 4);

  return (
    <div className="iproj-other-wrapper">
      <h2 className="iproj__header iproj__header--mglg">Other projects:</h2>
      <div className="iproj-other-proj-wrapper">
        {otherProjects.map((project) => (
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
};

export default OtherProjects;
