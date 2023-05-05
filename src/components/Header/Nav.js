import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__li">
        <Link className="nav__a" href={"/about"}>
          About
        </Link>
      </li>
      <li className="nav__li">
        <Link className="nav__a" href={"/projects"}>
          Projects
        </Link>
      </li>
      <li className="nav__li">
        <Link className="nav__a" href={"/resume"}>
          Resume
        </Link>
      </li>
      <li className="nav__li nav__li--email">
        <Link
          className="nav__a nav__a--email"
          href={"mailto:pete.hod1@gmail.com"}
        >
          {" "}
          <Icon icon="material-symbols:mail-outline" />
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
