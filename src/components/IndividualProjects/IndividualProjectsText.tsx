import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Project } from "@constants/projects.constants";
type IndividualProjectsText = {
  project: Project;
};
const IndividualProjectsText = ({ project }: IndividualProjectsText) => {
  const { description, live, logLine, testCredentials, title, repo } = project;

  const projectLinks = [
    {
      href: repo,
      text: "Repository",
      icon: <Icon icon="ph:github-logo" className="iproj__icon" />,
    },
    {
      href: live,
      text: "Live",
      icon: <Icon icon="fluent:live-20-regular" className="iproj__icon" />,
    },
  ];
  return (
    <div className="iproj-text-wrapper">
      <h2 className="iproj__header">{title}</h2>
      <h3 className="iproj__subheader iproj__subheader--mglg">{logLine}</h3>
      <p className="iproj__text iproj__text--mglg">{description}</p>

      {/* Links wrapper */}
      <div className="iproj-links-wrapper">
        {projectLinks.map((link) =>
          !link.href ? null : (
            <Link
              key={link.text}
              href={link.href}
              target="__blank"
              className="btn--link btn--large rounded"
            >
              {link.icon}
              {link.text}
            </Link>
          )
        )}
      </div>
      {testCredentials && (
        <div className="iproj__credentials-wrapper">
          <h3 className="iproj__credentials-header">Test Credentials:</h3>
          <p className="iproj__credential">
            Username: <span className="bold">{testCredentials.username}</span>
          </p>
          <p className="iproj__credential">
            Password:
            <span className="bold"> {testCredentials.password}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default IndividualProjectsText;
