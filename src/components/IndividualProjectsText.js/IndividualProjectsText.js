import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
const IndividualProjectsText = ({ project }) => {
  return (
    <div className="iproj-text-wrapper">
      <h2 className="iproj__header">{project.projectTitle}</h2>
      <h3 className="iproj__subheader iproj__subheader--mglg">
        {project.projectLogline}
      </h3>
      <p className="iproj__text iproj__text--mglg">
        {project.projectDescription}
      </p>

      {/* Links wrapper */}
      <div className="iproj-links-wrapper">
        {project.projectRepository ? (
          <Link
            href={`${project.projectRepository}`}
            target="__blank"
            className="btn--link btn--large rounded"
          >
            {" "}
            <Icon icon="ph:github-logo" className="iproj__icon" />
            Repository
          </Link>
        ) : (
          ""
        )}

        {project.projectLive ? (
          <Link
            href={`${project.projectLive}`}
            target="__blank"
            className="btn--link btn--large rounded "
          >
            {" "}
            <div className="iproj__link-live">
              <Icon icon="fluent:live-20-regular" className="iproj__icon" />
              Live
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default IndividualProjectsText;
