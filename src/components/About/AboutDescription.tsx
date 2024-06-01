"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pete from "../../../public/assets/images/Pete.jpg";
import { RESUME_LINK } from "@constants/resumeLink";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { fadeInVariants } from "animationVariants/animationVariants";
import { ActionButton } from "@components/Buttons/ActionButton";
const AboutDescription = () => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1,
        duration: 0.5,
      }}
      className="about-wrapper"
    >
      {/* Photo */}
      <div className="about-photo">
        <Link
          target="__blank"
          href={"https://www.linkedin.com/in/petehodnefield/"}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className="about-photo-wrapper"
          >
            <Image
              src={Pete}
              className="about__photo"
              alt="Full stack developer Peter Hodnefield smiling into the camera."
            />
          </motion.div>
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
          Dynamic and innovative Full-Stack Developer with proficiency in
          front-end and back-end technologies, including React, TypeScript,
          Node, and Python. Passionate about building products that leverage
          artificial intelligence to enhance user experiences and drive
          innovation. Known for a growth mindset, constantly seeking new
          challenges and opportunities to expand technical skills and knowledge.
          Eager to contribute to a forward-thinking team where continuous
          learning and applying cutting-edge technologies are highly valued.
        </p>
        <p className="about__text about__text--mglg">
          When I am not coding, I am usually writing guitar loops for hip hop
          producers using my project Meloroids.
        </p>
        <ActionButton buttonText="Resume" />
        <Link
          className="btn--large btn--link rounded"
          href={RESUME_LINK}
          target="__blank"
        >
          Resume
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutDescription;
