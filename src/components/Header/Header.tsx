import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import Hamburger from "./Hamburger";
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
        <motion.div
          variants={slideInLeftVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
          }}
        >
          Peter Hodnefield
        </motion.div>
      </Link>
      <Nav />
      <Hamburger hamOpen={hamOpen} setHamOpen={setHamOpen} />
    </header>
  );
};

export default Header;
