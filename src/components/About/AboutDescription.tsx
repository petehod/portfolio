"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pete from "../../../public/assets/images/Pete.jpg";
import { LINKS } from "@constants/link.constants";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const ABOUT_LINKS = [
  { href: LINKS.github, icon: <Icon icon="ph:github-logo" /> },
  { href: LINKS.linkedIn, icon: <Icon icon="ph:linkedin-logo" /> },
  { href: LINKS.email, icon: <Icon icon="material-symbols:mail-outline" /> },
];

const AboutDescription = () => {
  return (
    <motion.div className="about-wrapper">
      {/* Photo */}
      <div className="about-photo">
        <Link target="__blank" href={LINKS.linkedIn}>
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
          <h2 className="text-white">Contact</h2>
          <div className="about-links-wrapper">
            {ABOUT_LINKS.map((link) => (
              <Link
                key={link.href}
                className="about__link about__link--lg"
                href={link.href}
                target="__blank"
              >
                {link.icon}
              </Link>
            ))}
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

        <Link
          className="btn--large btn--link rounded"
          href={LINKS.resume}
          target="__blank"
        >
          Resume
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutDescription;
