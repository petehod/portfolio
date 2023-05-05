import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Pete from "../../../public/assets/images/Pete.jpg";
import Link from "next/link";
const AboutProjectCard = ({
  projectImage,
  projectTitle,
  projectImageAlt,
  projectRepository,
  projectLive,
}) => {
  return (
    <div className="about-project">
      <div className="about-project-img-wrapper">
        <Image
          className="about-project__img"
          src={projectImage}
          alt={projectImageAlt}
        />
      </div>
      <h3 className="about-project__title">{projectTitle}</h3>
      <div className="about-project-links-wrapper">
        <Link
          className="about__link about__link--sm"
          href={projectRepository}
          target="__blank"
        >
          {" "}
          <Icon icon="ph:github-logo" />
        </Link>
        <Link
          className="about__link about__link--sm"
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
