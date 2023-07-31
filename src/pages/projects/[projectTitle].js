"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import meloroids from "../../../public/assets/project-images/meloroids.jpg";
import IndividualProjectsText from "@/components/IndividualProjectsText.js/IndividualProjectsText";

import { projectsData } from "@/project-data/projects-data";

const IndividualProjectPage = () => {
  const router = useRouter().query;
  const chosenProject = router.projectTitle;
  const [project, setProject] = useState({ chosenProject });

  useEffect(
    () =>
      projectsData.forEach((project) => {
        if (project.projectTitle === chosenProject) {
          setProject(project);
        }
      }),
    [router]
  );
  console.log('project', project)

  if (!project) return <div>Loading....</div>;
  else
    return (
      <section className="iproj">
        <div className="iproj-text-img-wrapper">
          <IndividualProjectsText project={project} />
          <Link
            className="iproj-img-wrapper"
            target="__blank"
            href={`${project.projectLive}`}
          >
            <Image
              className="iproj__img"
              priority={true}
              alt={project.projectImageAlt}
              src={project.projectImage}
            />
          </Link>
        </div>
        <div className="iproj-tech-wrapper">
          {/* Tech used */}
          <h3 className="iproj__subheader iproj__subheader--mgsm">
            Technologies used:
          </h3>{" "}
          <ul className="iproj__ul">
            {project.projectTechUsed
              ? project.projectTechUsed.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))
              : ""}
          </ul>
        </div>

        {/* Other projects */}
        <div className="iproj-other-wrapper">
          {" "}
          <h2 className="iproj__header iproj__header--mglg">Other projects:</h2>
          {project ? (
            <div className="iproj-other-proj-wrapper">
              {projectsData.map((project) =>
                project.projectTitle === chosenProject ? (
                  ""
                ) : (
                  <div key={project.projectTitle} className="project-card">
                    <Link href={`/projects/${project.projectTitle}`}>
                      {/* Image container */}
                      <div className="project-card-img-wrapper">
                        <Image
                          className="project-card__img"
                          priority={false}
                          src={project.projectImage}
                          alt={project.projectImageAlt}
                        />
                      </div>
                    </Link>
                    <h3 className="project-card__title project-card__title-mgsmall">
                      {project.projectTitle}
                    </h3>
                    <h4 className="project-card__subtitle">
                      {project.projectShortDescription}
                    </h4>
                    {/* links */}
                    <div className="project-card-links-wrapper">
                      <Link
                        className="card__link card__link--sm"
                        href={`${project.projectRepository}`}
                        target="__blank"
                      >
                        {" "}
                        <Icon icon="ph:github-logo" />
                      </Link>
                      {project.projectLive ? (
                        <Link
                          className="card__link card__link--sm"
                          href={`${project.projectLive}`}
                          target="__blank"
                        >
                          {" "}
                          <Icon icon="fluent:live-20-regular" />
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    );
};

export default IndividualProjectPage;
