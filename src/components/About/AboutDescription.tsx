"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pete from "../../../public/assets/images/Pete.jpg";
import { LINKS } from "@constants/link.constants";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@components/Button";
import { BUTTON_VARIANTS } from "@constants/animation.constants";

const ABOUT_LINKS = [
  {
    href: LINKS.github,
    icon: <Icon icon="ph:github-logo" />,
  },
  {
    href: LINKS.linkedIn,
    icon: <Icon icon="ph:linkedin-logo" />,
  },
  {
    href: LINKS.email,
    icon: <Icon icon="material-symbols:mail-outline" />,
  },
];

const ABOUT_TEXT = [
  "I’m a full-stack developer who loves building tools that create real value. When I’m not coding, I’m writing and recording guitar melodies, collaborating with producers, or teaching the art of melody creation (I even wrote a book on it!). I’m also passionate about bodybuilding—always pushing limits, whether in the gym or in my work.",
  ,
  "Let’s build something incredible. 🚀",
];

const AnimatedLink = motion(Link);
const AboutDescription = () => {
  return (
    <motion.div className="flex flex-col lg:flex-row gap-4 lg:gap-12 py-8 lg:py-16 w-full max-w-70 justify-center px-6">
      {/* Photo */}
      <div className="flex flex-col items-center">
        <Link target="__blank" href={LINKS.linkedIn}>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.5,
              },
            }}
            whileTap={{ scale: 0.9 }}
            className="about-photo-wrapper"
          >
            <Image
              src={Pete}
              className="rounded-full"
              alt="Full stack developer Peter Hodnefield smiling into the camera."
            />
          </motion.div>
        </Link>
        <div className="about-contact-wrapper">
          <h2 className="mb-1">Contact</h2>
          <div className="about-links-wrapper">
            {ABOUT_LINKS.map((link) => (
              <AnimatedLink
                variants={BUTTON_VARIANTS}
                initial="initial"
                whileHover="hover"
                whileTap="press"
                animate="initial"
                key={link.href}
                className="about__link about__link--lg"
                href={link.href}
                target="__blank"
              >
                {link.icon}
              </AnimatedLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-660">
        <h2 className="about__header about__header--lg">About me</h2>
        {ABOUT_TEXT.map((text, index) => (
          <p
            className={`max-w-660 ${index === ABOUT_LINKS.length - 1 ? "mb-6 font-medium" : "mb-4"} `}
            key={text}
          >
            {text}
          </p>
        ))}

        <Button
          as={"a"}
          href={LINKS.resume}
          backgroundColor="bg-white"
          borderColor="border-dark"
          textColor="text-dark"
          target="_blank"
        >
          Resume
        </Button>
      </div>
    </motion.div>
  );
};

export default AboutDescription;
