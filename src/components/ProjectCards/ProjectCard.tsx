"use client";
import React, { memo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Project } from "@constants/projects.constants";

export const ProjectCard = memo<
  Pick<Project, "title" | "description" | "imagePath" | "repo" | "live" | "id">
>(({ description, title, imagePath, repo, live, id }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      className="project-card"
    >
      <Link href={`/${id}`}>
        <div className="project-card-img-wrapper relative">
          <Image
            className="project-card__img"
            fill
            priority={false}
            src={imagePath}
            alt={`Preview of the project ${title}`}
          />
        </div>
      </Link>
      <h3 className="project-card__title ">{title}</h3>
      <div className="project-card-links-wrapper">
        {repo && (
          <Link
            className="card__link card__link--sm"
            href={repo}
            target="__blank"
          >
            {" "}
            <Icon icon="ph:github-logo" />
          </Link>
        )}

        <Link
          className="card__link card__link--sm"
          href={live}
          target="__blank"
        >
          {" "}
          <Icon icon="fluent:live-20-regular" />
        </Link>
      </div>
    </motion.div>
  );
});
