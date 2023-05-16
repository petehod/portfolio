import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const HamburgerMenu = ({ hamOpen, setHamOpen }) => {
  return (
    <div
      className={`ham-menu ${!hamOpen ? "ham-menu--closed" : "ham-menu--open"}`}
    >
      <div className="ham-icon-wrapper">
        <Icon
          onClick={() => setHamOpen(false)}
          icon="ic:round-close"
          className="ham__icon"
        />
      </div>
      <ul className="ham__ul">
        <li className="ham__li">
          <Link
            className="ham__link"
            onClick={() => setHamOpen(false)}
            href={"/"}
          >
            About
          </Link>
        </li>
        <li className="ham__li">
          <Link
            className="ham__link"
            onClick={() => setHamOpen(false)}
            href={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li className="ham__li">
          <Link
            className="ham__link"
            onClick={() => setHamOpen(false)}
            href="https://www.dropbox.com/s/7so60w7lwd9ycwn/Peter%20Hodnefield%27s%20Resume.pdf?dl=0"
            target="__blank"
          >
            Resume
          </Link>
        </li>
        <li className="ham__li">
          <Link
            className="ham__link"
            onClick={() => setHamOpen(false)}
            href={"mailto:pete.hod1@gmail.com"}
            target="__blank"
          >
            Email
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
