"use client";
import Link from "next/link";
import React from "react";
import { projectsData } from "@data/projects-data";
import AboutProjectCard from "../ProjectCards/AboutProjectCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { fadeInVariants } from "animationVariants/animationVariants";
const AboutProjects = () => {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 2,
        duration: 0.5,
      }}
      className="about-projects"
    >
      <h2 className="about__header about__header--lg">Projects</h2>
      {/* Projects wrapper */}
      <div className="about-projects-wrapper">
        {featuredProjects.map((project) => (
          <AboutProjectCard
            key={project.projectTitle}
            projectKey={project.projectTitle}
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
    </motion.div>
  );
};

export default AboutProjects;
