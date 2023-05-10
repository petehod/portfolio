import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import meloroids from "../../../public/assets/project-images/meloroids.jpg";
import IndividualProjectsText from "@/components/IndividualProjectsText.js/IndividualProjectsText";

import { projectsData } from "@/project-data/projects-data";
import TechUsed from "@/components/IndividualProjectsText.js/TechUsed";
import OtherProjects from "@/components/IndividualProjectsText.js/OtherProjects";

const IndividualProjectPage = () => {
  const [project, setProject] = useState({});
  //   console.log(project);
  const router = useRouter().query;
  const chosenProject = router.projectTitle;

  useEffect(
    () =>
      projectsData.forEach((project) => {
        if (project.projectTitle === chosenProject) {
          setProject(project);
        }
      }),
    [router, project]
  );
  if (!project) return <div>Loading....</div>;
  else
    return (
      <section className="iproj">
        <div className="iproj-text-img-wrapper">
          <IndividualProjectsText project={project} />
          <div className="iproj-img-wrapper">
            <Image
              className="iproj__img"
              alt={project.projectImageAlt}
              src={project.projectImage}
            />
          </div>
        </div>
        {/* Tech used */}
        <h3 className="iproj__subheader iproj__subheader--mgsm">
          Technologies used:
        </h3>
        {/* <TechUsed tech={project.projectTechUsed} /> */}
        <OtherProjects project={project} />
      </section>
    );
};

export default IndividualProjectPage;
