import { memo } from "react";
import { motion } from "framer-motion";
import { IconifyIcon } from "./IconifyIcon";
type IconCircleProps = {
  height?: string;
  width?: string;
  backgroundColor?: string;
  icon: string;
  iconSize?: string;
};
export const IconCircle = memo<IconCircleProps>(
  ({
    height = "24",
    width = "2",
    backgroundColor = "dark",
    icon,
    iconSize,
  }) => {
    return (
      <motion.div
        className={`h-16 w-16 flex items-center justify-center bg-dark  border-2 border-solid border-dark}`}
      >
        <IconifyIcon icon={icon} size={iconSize} styles="h-full w-full" />
      </motion.div>
    );
  }
);
