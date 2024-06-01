import { memo } from "react";
import Link from "next/link";

type LinkWrapperProps = {
  link: string;
  children: React.ReactNode;
};
export const LinkWrapper = memo<LinkWrapperProps>(({ link, children }) => {
  return <Link href={link}>{children}</Link>;
});
