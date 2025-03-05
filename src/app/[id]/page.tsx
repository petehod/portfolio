"use client";
import IndividualProjectsText from "@components/IndividualProjects/IndividualProjectsText";
import { PORTFOLIO_PROJECTS } from "@constants/projects.constants";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ProjectCard } from "@components/ProjectCards/ProjectCard";
import { useModal } from "hooks/useModal";
import { ImageModal } from "@components/ImageModal";

export default function Project() {
  const { modalOpen, toggleModal } = useModal();
  const params = useParams();
  const id = params.id;
  const project = useMemo(
    () => PORTFOLIO_PROJECTS.find((project) => project.id === id),
    [id],
  );

  const OTHER_PROJECTS = useMemo(
    () => PORTFOLIO_PROJECTS.filter((project) => project.id !== id),
    [id],
  );

  if (!project) return null;
  return (
    <section className="iproj  w-full">
      {modalOpen && (
        <ImageModal
          alt={`Preview image for ${project.title}`}
          src={project.imagePath}
          onClose={toggleModal}
        />
      )}
      <div className="flex flex-col lg:flex-row gap-12  justify-between  w-full mb-8">
        <IndividualProjectsText project={project} />
        <div className="flex-1 h-88 relative" onClick={toggleModal}>
          <Image
            className="rounded cursor-pointer"
            priority={true}
            fill
            style={{ objectFit: "cover" }}
            alt={`Preview image for ${project.title}`}
            src={project.imagePath}
          />
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        {/* Tech used */}
        <h3 className="iproj__subheader iproj__subheader--mgsm">
          Technologies used:
        </h3>
        <ul className="grid grid-cols-[repeat(2,8rem)] m-0 list-disc gap-1 lg:pl-4">
          {project?.tech.map((tech) => <li key={tech}>{tech}</li>)}
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
