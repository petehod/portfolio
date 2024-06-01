"use client";
import React, { memo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

type ProjectCardSmallProps = {
  title: string;
  image: StaticImageData;
  description?: string;
  alt: string;
  repository: string;
  live: string;
};
export const ProjectCard = memo<ProjectCardSmallProps>(
  ({ description, title, image, alt, repository, live }) => {
    return (
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className="project-card"
      >
        <Link href={`/projects/${title}`}>
          <div className="project-card-img-wrapper">
            <Image
              className="project-card__img"
              priority={false}
              src={image}
              alt={alt}
            />
          </div>
        </Link>
        <h3 className="project-card__title ">{title}</h3>
        {description && (
          <h4 className="project-card__subtitle">{description}</h4>
        )}
        <div className="project-card-links-wrapper">
          {repository && (
            <Link
              className="card__link card__link--sm"
              href={repository}
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
  }
);
