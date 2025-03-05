"use client";
import { BUTTON_VARIANTS } from "@constants/animation.constants";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonBaseProps = {
  children: React.ReactNode;
  size?: "large" | "small";
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  as?: "button" | "a";
  containerStyles?: string;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  maxWidth?: string;
};

type MotionButtonProps = HTMLMotionProps<"button"> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type MotionAnchorProps = HTMLMotionProps<"a"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonBaseProps &
  (MotionButtonProps | MotionAnchorProps);
const SHARED_BUTTON_STYLE = `w-full rounded flex items-center justify-center outline-none`;
const SMALL_BUTTON_STYLE = ``;
const LARGE_BUTTON_STYLE = `h-12`;

export const Button = ({
  children,
  icon,
  disabled,
  size = "large",
  iconPosition = "left",
  backgroundColor = "bg-primary",
  borderColor,
  containerStyles,
  maxWidth = "md:max-w-64",
  as = "button",
  textColor = "text-white",
  ...props
}: ButtonProps) => {
  const Component = motion[as] as React.ElementType;

  const sizeStyle = size === "large" ? LARGE_BUTTON_STYLE : SMALL_BUTTON_STYLE;

  const styles = `${SHARED_BUTTON_STYLE} ${sizeStyle} ${textColor}  ${backgroundColor} ${
    borderColor && `border-1`
  } ${borderColor} ${containerStyles} ${maxWidth}`;

  return (
    <Component
      className={styles}
      disabled={disabled && as === "button" ? true : undefined}
      variants={BUTTON_VARIANTS}
      initial="initial"
      whileHover="hover"
      whileTap="press"
      animate="initial"
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Component>
  );
};
