import { Icon } from "@iconify/react/dist/iconify.js";
import { memo } from "react";

type CircleIconProps = {
  icon: string;
  size?: string;
  styles?: string;
};
export const IconifyIcon = memo<CircleIconProps>(
  ({ icon, size = "1.5", styles }) => {
    return <Icon icon={icon} className={`text-${size} ${styles}`} />;
  }
);
