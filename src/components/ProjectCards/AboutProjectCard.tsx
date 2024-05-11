import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const AboutProjectCard = ({
  projectImage,
  projectTitle,
  projectImageAlt,
  projectRepository,
  projectLive,
  projectKey,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      key={projectKey}
      className="project-card"
    >
      <Link href={`/projects/${projectTitle}`}>
        <div className="project-card-img-wrapper">
          <Image
            className="project-card__img"
            priority={false}
            src={projectImage}
            alt={projectImageAlt}
          />
        </div>
      </Link>
      <h3 className="project-card__title ">{projectTitle}</h3>
      <div className="project-card-links-wrapper">
        {projectRepository ? (
          <Link
            className="card__link card__link--sm"
            href={projectRepository}
            target="__blank"
          >
            {" "}
            <Icon icon="ph:github-logo" />
          </Link>
        ) : (
          ""
        )}

        <Link
          className="card__link card__link--sm"
          href={projectLive}
          target="__blank"
        >
          {" "}
          <Icon icon="fluent:live-20-regular" />
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutProjectCard;
