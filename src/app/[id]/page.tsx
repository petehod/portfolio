"use client";
import IndividualProjectsText from "@components/IndividualProjects/IndividualProjectsText";
import { PORTFOLIO_PROJECTS } from "@constants/projects.constants";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ProjectCard } from "@components/ProjectCards";

export default function Project() {
  const params = useParams();
  const id = params.id;
  const project = useMemo(
    () => PORTFOLIO_PROJECTS.find((project) => project.id === id),
    [id]
  );

  const OTHER_PROJECTS = useMemo(
    () => PORTFOLIO_PROJECTS.filter((project) => project.id !== id),
    [id]
  );

  if (!project) return null;
  return (
    <section className="iproj  w-full">
      <div className="flex flex-col lg:flex-row  justify-between  w-full mb-8">
        <IndividualProjectsText project={project} />
        <Link
          className="iproj-img-wrapper relative"
          target="__blank"
          href={`${project?.id}`}
        >
          <Image
            className="iproj__img relative"
            priority={true}
            fill
            alt={`Preview image for ${project.title}`}
            src={project.imagePath}
          />
        </Link>
      </div>
      <div className="iproj-tech-wrapper">
        {/* Tech used */}
        <h3 className="iproj__subheader iproj__subheader--mgsm">
          Technologies used:
        </h3>
        <ul className="iproj__ul">
          {project?.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Other projects */}
      <div className="iproj-other-wrapper">
        <h2 className="iproj__header iproj__header--mglg">Other projects:</h2>
        {project && (
          <div className="iproj-other-proj-wrapper">
            {OTHER_PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
