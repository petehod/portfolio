import Link from "next/link";
import React from "react";

const AboutDescription = () => {
  return (
    <div>
      <div className="about-text">
        <h2 className="about__header">About me</h2>
        <p className="about__text about__text--mgsmall">
          I am a full-stack web developer utilizing a background in Audio
          Engineering and Psychology to help build practical applications and
          services for musicians.{" "}
        </p>
        <p className="about__text about__text--mglg">
          I earned a certificate in full stack web development through the
          University of Minnesota coding bootcamp in 2022. Skills in HTML, CSS,
          & JavaScript, as well as strong UI/UX design skills in Figma.
        </p>
        <Link
          className="btn--large btn--link rounded"
          type="download"
          href={""}
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default AboutDescription;
