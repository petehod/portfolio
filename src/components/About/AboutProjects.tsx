"use client";
import React from "react";
import { ProjectCard } from "@components/ProjectCards";
import { motion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@constants/projects.constants";
const AboutProjects = () => {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <motion.div className="about-projects">
      <h2 className="about__header about__header--lg">Projects</h2>

      <div className="about-projects-wrapper">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutProjects;
