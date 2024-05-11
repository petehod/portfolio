import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = ({ hamOpen, setHamOpen }) => {
  return (
    <header>
      <Link
        onClick={() => setHamOpen(false)}
        href="/"
        className="header__title"
      >
        Peter Hodnefield
      </Link>
      <Nav />
      <Hamburger hamOpen={hamOpen} setHamOpen={setHamOpen} />
    </header>
  );
};

export default Header;
