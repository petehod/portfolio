import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
const IndividualProjectsText = () => {
  return (
    <div className="iproj-text-wrapper">
      <h2 className="iproj__header">Meloroids</h2>
      <h3 className="iproj__subheader iproj__subheader--mglg">
        Applying Pareto’s Principle to melody creation
      </h3>
      <p className="iproj__text iproj__text--mgsm">
        Meloroids is what I use on a daily basis to write melodies. It is a
        database populated with the most successful chord progressions in the
        genres I write in the most.
      </p>
      <p className="iproj__text iproj__text--mglg">
        Meloroids takes the guess work out of writing melodies, and formats your
        music production file name, which is a seemingly small but taxing task.
      </p>
      {/* Links wrapper */}
      <div className="iproj-links-wrapper">
        <Link href={""} className="btn--link btn--large rounded">
          {" "}
          <Icon icon="ph:github-logo" className="iproj__icon" />
          Repository
        </Link>
        <Link href={""} className="btn--link btn--large rounded ">
          {" "}
          <div className="iproj__link-live">
            <Icon icon="fluent:live-20-regular" className="iproj__icon" />
            Live
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IndividualProjectsText;
