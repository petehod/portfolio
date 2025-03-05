export const slideInLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export const slideInRightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const BUTTON_VARIANTS = {
  initial: {
    scale: 1,
    opacity: 1,

    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.03,

    transition: { duration: 0.2, type: "spring", stiffness: 300 },
  },
  press: {
    scale: 0.97,

    transition: { duration: 0.1 },
  },
};
