import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { IconifyIcon } from "./IconifyIcon";
type IconCircleProps = {
  children: ReactNode;
};
export const IconCircle = memo<IconCircleProps>(({ children }) => {
  return (
    <motion.div
      className={`h-12 w-12 flex items-center justify-center  border-1 rounded-full border-solid border-dark}`}
    >
      {children}
    </motion.div>
  );
});
