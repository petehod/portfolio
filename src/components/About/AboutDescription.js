import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Pete from "../../../public/assets/images/Pete.jpg";
import { resumeLink } from "@/utils/resumeLink";

const AboutDescription = () => {
  return (
    <div className="about-wrapper">
      {/* Photo */}
      <div className="about-photo">
        <Link
          target="__blank"
          href={"https://www.linkedin.com/in/petehodnefield/"}
        >
          <div className="about-photo-wrapper">
            <Image
              src={Pete}
              className="about__photo"
              alt="Full stack developer Peter Hodnefield smiling into the camera."
            />
          </div>
        </Link>
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
          I am a Fullstack Web Developer utilizing a background in Audio
          Engineering and Psychology to build practical applications for those
          with a growth mindset. In 2022, I earned a certificate in Full Stack
          Web Development through the University of Minnesota coding bootcamp.
          Strong skills in HTML, CSS, & JavaScript, as well as strong
          fundamentals in MongoDB, REST APIs, and GraphQL.
        </p>
        <p className="about__text about__text--mgsmall">
          I have a BA in Psychology through the University of Minnesota and
          previously studied at the Berklee School of Music in Boston, MA. My
          love for Psychology, Neuroscience, and Music have shaped most of the
          coding projects I have built thus far.
        </p>
        <p className="about__text about__text--mglg">
          When I am not coding, I am usually writing guitar loops for hip hop
          producers using my project Meloroids.
        </p>
        <Link
          className="btn--large btn--link rounded"
          href={resumeLink}
          target="__blank"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default AboutDescription;
