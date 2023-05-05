import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Pete from "../../../public/assets/images/Pete.jpg";
import { projectsData } from "@/project-data/projects-data";
import AboutProjectCard from "./AboutProjectCard";
const AboutProjects = () => {
  return (
    <div className="about-projects">
      <h2 className="about__header about__header--lg">Projects</h2>
      {/* Projects wrapper */}
      <div className="about-projects-wrapper">
        {projectsData.map((project) => (
          <AboutProjectCard
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            projectImageAlt={project.projectImageAlt}
            projectRepository={project.projectRepository}
            projectLive={project.projectLive}
          />
        ))}
      </div>
      <Link
        className="btn--large btn--link rounded btn--white "
        href={"/projects"}
      >
        All projects
        <Icon className="btn-arrow-icon" icon="ph:arrow-bend-up-right" />
      </Link>
    </div>
  );
};

export default AboutProjects;
