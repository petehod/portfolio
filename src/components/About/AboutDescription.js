import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Pete from "../../../public/assets/images/Pete.jpg";

const AboutDescription = () => {
  return (
    <div className="about-wrapper">
      {/* Photo */}
      <div className="about-photo">
        <div className="about-photo-wrapper">
          <Image
            src={Pete}
            className="about__photo"
            alt="Full stack developer Peter Hodnefield smiling into the camera."
          />
        </div>
        <div className="about-contact-wrapper">
          <h2 className="about__header about__header--sm">Contact</h2>
          <div className="about-links-wrapper">
            <Link
              className="about__link about__link--lg"
              href={"https://github.com/petehodnefield"}
              target="__blank"
            >
              <Icon icon="ph:github-logo" />
            </Link>
            <Link
              className="about__link about__link--lg"
              href={"https://www.linkedin.com/in/petehodnefield/"}
              target="__blank"
            >
              <Icon icon="ph:linkedin-logo" />
            </Link>
            <Link
              className="about__link about__link--lg"
              href={"mailto:pete.hod1@gmail.com"}
            >
              {" "}
              <Icon icon="material-symbols:mail-outline" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-text">
        <h2 className="about__header about__header--lg">About me</h2>
        <p className="about__text about__text--mgsmall">
          I am a frontend web developer utilizing a background in Audio
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
          href="https://www.dropbox.com/s/pliol9uv4j1vwzl/Peter%20Hodnefield%27s%20Resume.pdf?dl=0"
          target="__blank"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default AboutDescription;
