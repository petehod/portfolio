"use client";
import Link from "next/link";
import React from "react";
import { projectsData } from "@data/projects-data";
import { ProjectCard } from "@components/ProjectCards";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { fadeInVariants } from "@constants/animation.constants";
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
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            alt={project.alt}
            repository={project.repository}
            live={project.live}
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
