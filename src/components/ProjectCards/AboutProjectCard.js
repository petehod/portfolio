import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
const AboutProjectCard = ({
  projectImage,
  projectTitle,
  projectImageAlt,
  projectRepository,
  projectLive,
  projectKey,
}) => {
  return (
    <div key={projectKey} className="project-card">
      <Link href={`/projects/${projectTitle}`}>
        <div className="project-card-img-wrapper">
          <Image
            className="project-card__img"
            src={projectImage}
            alt={projectImageAlt}
          />
        </div>
      </Link>
      <h3 className="project-card__title ">{projectTitle}</h3>
      <div className="project-card-links-wrapper">
        <Link
          className="card__link card__link--sm"
          href={projectRepository}
          target="__blank"
        >
          {" "}
          <Icon icon="ph:github-logo" />
        </Link>
        <Link
          className="card__link card__link--sm"
          href={projectLive}
          target="__blank"
        >
          {" "}
          <Icon icon="fluent:live-20-regular" />
        </Link>
      </div>
    </div>
  );
};

export default AboutProjectCard;
