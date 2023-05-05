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
        {/* Project card */}
        <div className="about-project">
          <div className="about-project-img-wrapper">
            <Image
              className="about-project__img"
              src={Pete}
              alt="Landing page for project "
            />
          </div>
          <h3 className="about-project__title">BeatGenius</h3>
          <div className="about-project-links-wrapper">
            <Link className="about__link about__link--sm" href={""}>
              {" "}
              <Icon icon="ph:github-logo" />
            </Link>
            <Link className="about__link about__link--sm" href={""}>
              {" "}
              <Icon icon="fluent:live-20-regular" />
            </Link>
          </div>
        </div>
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
    </div>
  );
};

export default AboutProjects;
