"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FEATURED_PRODUCTS,
  PORTFOLIO_PROJECTS,
} from "@constants/projects.constants";
import { ProjectCard } from "@components/ProjectCards/ProjectCard";
const AboutProjects = () => {
  return (
    <motion.div className="about-projects">
      <h2 className="about__header about__header--lg">Projects</h2>

      <div className="about-projects-wrapper">
        {FEATURED_PRODUCTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutProjects;
