import React from "react";
import { Icon } from "@iconify/react";
import { Project } from "@constants/projects.constants";

import { Button } from "@components/Button";
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
    <div className="flex flex-col items-center lg:items-start flex-1">
      <h2 className="iproj__header">{title}</h2>
      <h3 className="iproj__subheader iproj__subheader--mglg">{logLine}</h3>
      <p className="iproj__text iproj__text--mglg">{description}</p>

      {/* Links wrapper */}
      <div className="flex w-full justify-center lg:justify-start gap-3 mb-12 lg:mb-0">
        {projectLinks.map((link) =>
          !link.href ? null : (
            <Button
              key={link.text}
              as="a"
              href={link.href as string}
              target="__blank"
              borderColor="border-dark"
              backgroundColor="bg-transparent"
              textColor="text-dark"
            >
              {link.icon}
              {link.text}
            </Button>
          ),
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
