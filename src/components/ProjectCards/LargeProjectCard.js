import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
const LargeProjectCard = ({
  projectImage,
  projectImageAlt,
  projectTitle,
  projectShortDescription,
  projectRepository,
  projectLive,
  projectKey,
}) => {
  return (
    <div key={projectKey} className="project-card">
      <Link href={`/projects/${projectTitle}`}>
        {/* Image container */}
        <div className="project-card-img-wrapper">
          <Image
            className="project-card__img"
            src={projectImage}
            alt={projectImageAlt}
          />
        </div>
      </Link>
      <h3 className="project-card__title project-card__title-mgsmall">
        {projectTitle}
      </h3>
      <h4 className="project-card__subtitle">{projectShortDescription}</h4>
      {/* links */}
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
        </Link>{" "}
      </div>
    </div>
  );
};

export default LargeProjectCard;
