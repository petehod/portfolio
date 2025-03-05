import { CircleFrame } from "@components/CircleFrame";
import { BUTTON_VARIANTS } from "@constants/animation.constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from "next/link";

type MailIconProps = {
  containerStyles?: string;
};

const AnimatedLink = motion(Link);

export const MailIcon = ({ containerStyles }: MailIconProps) => {
  return (
    <AnimatedLink
      variants={BUTTON_VARIANTS}
      initial="initial"
      whileHover="hover"
      whileTap="press"
      animate="initial"
      href="mailto:pete.hod1@gmail.com"
      className={containerStyles}
    >
      <CircleFrame borderColor="border-medium">
        <Icon
          icon="material-symbols:mail-outline"
          className="text-medium"
          fontSize={20}
        />
      </CircleFrame>
    </AnimatedLink>
  );
};
