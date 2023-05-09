import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import meloroids from "../../../public/assets/project-images/meloroids.jpg";
import IndividualProjectsText from "@/components/IndividualProjectsText.js/IndividualProjectsText";
const IndividualProjectPage = () => {
  return (
    <section className="iproj">
      <div className="iproj-text-img-wrapper">
        <IndividualProjectsText />
        <div className="iproj-img-wrapper">
          <Image className="iproj__img" src={meloroids} />
        </div>
      </div>
      {/* Tech used */}
      <h3 className="iproj__subheader iproj__subheader--mgsm">
        Technologies used:
      </h3>
      <ul className="iproj__ul">
        <li className="iproj__li">MongoDB</li>
        <li className="iproj__li">Node.js</li>
        <li className="iproj__li">Node.js</li>
        <li className="iproj__li">Node.js</li>
        <li className="iproj__li">Node.js</li>
        <li className="iproj__li">Node.js</li>
        <li className="iproj__li">Node.js</li>
      </ul>
    </section>
  );
};

export default IndividualProjectPage;
