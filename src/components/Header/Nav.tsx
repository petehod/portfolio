import Link from "next/link";
import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { LINKS } from "@constants/link.constants";
import { motion } from "framer-motion";
import { IconCircle } from "@components/Icons";

const NAV_LINKS = [{ text: "Resume", href: LINKS.resume }];
export const Nav: FC = () => {
  return (
    <motion.ul className="nav">
      {NAV_LINKS.map((link) => (
        <li key={link.text} className="nav__li">
          <Link className="nav__a" href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
      <li className="nav__li">
        <Link href="mailto:pete.hod1@gmail.com">
          <IconCircle>
            <Icon icon="material-symbols:mail-outline" fontSize={16} />
          </IconCircle>
        </Link>
      </li>
    </motion.ul>
  );
};
