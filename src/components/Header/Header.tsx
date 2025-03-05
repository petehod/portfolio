"use client";
import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";

import { motion } from "framer-motion";
import { slideInLeftVariants } from "@constants/animation.constants";
import { MailIcon } from "@components/Icons/MailIcon";
const Header = () => {
  return (
    <header className="w-full px-12 xl:px-0 max-w-70">
      <Link href="/" className="header__title">
        <motion.div>Peter Hodnefield</motion.div>
      </Link>
      <Nav />
      <MailIcon
        containerStyles="absolute right-6 lg:hidden"
        fontSize={18}
        height="h-10"
        width="w-10"
      />
    </header>
  );
};

export default Header;
