import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/" className="header__title">
        Peter Hodnefield
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
