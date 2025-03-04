import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";

import { motion } from "framer-motion";
import { slideInLeftVariants } from "@constants/animation.constants";
const Header = ({ hamOpen, setHamOpen }) => {
  return (
    <header>
      <Link
        onClick={() => setHamOpen(false)}
        href="/"
        className="header__title"
      >
        <motion.div>Peter Hodnefield</motion.div>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
