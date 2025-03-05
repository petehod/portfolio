import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
export type CircleFrameProps = {
  height?: string;
  width?: string;
  borderColor?: string;
  children: ReactNode;
};
export const CircleFrame = memo<CircleFrameProps>(
  ({ height = "h-12", width = "w-12", children, borderColor }) => {
    const borderStyle = borderColor
      ? `border-solid border-1 ${borderColor}`
      : null;
    return (
      <motion.div
        className={`${height} ${width} ${borderStyle} flex items-center justify-center rounded-full }`}
      >
        {children}
      </motion.div>
    );
  },
);
