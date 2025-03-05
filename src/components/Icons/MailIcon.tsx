import { CircleFrame, CircleFrameProps } from "@components/CircleFrame";
import { BUTTON_VARIANTS } from "@constants/animation.constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from "next/link";

type MailIconProps = Omit<CircleFrameProps, "children"> & {
  containerStyles?: string;
  fontSize?: number;
};

const AnimatedLink = motion(Link);

export const MailIcon = ({
  containerStyles,
  fontSize = 20,
  ...rest
}: MailIconProps) => {
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
      <CircleFrame borderColor="border-medium" {...rest}>
        <Icon
          icon="material-symbols:mail-outline"
          className="text-medium"
          fontSize={fontSize}
        />
      </CircleFrame>
    </AnimatedLink>
  );
};
