import React from "react";
import Link from "next/link";
import LargeProjectCard from "../ProjectCards/LargeProjectCard";
import { Icon } from "@iconify/react";
import { projectsData } from "@/project-data/projects-data";
import { useState } from "react";
const OtherProjects = ({ project }) => {
  const [otherProj, setOtherProj] = useState([]);
  const otherProjects = projectsData.slice(0, 4);

  const matchProjects = (currentProject) => currentProject === project;

  const projectIndex = projectsData.findIndex(matchProjects);
  const updatedProjects = projectsData.toSpliced(projectIndex, 1);
  const fourProjects = updatedProjects.toSpliced(4, Infinity);

  return (
    <div className="iproj-other-wrapper">
      <h2 className="iproj__header iproj__header--mglg">Other projects:</h2>
      <div className="iproj-other-proj-wrapper">
        {fourProjects.map((project) => (
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
