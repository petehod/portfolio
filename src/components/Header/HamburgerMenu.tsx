import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { RESUME_LINK } from "@constants/resumeLink";
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
            href={RESUME_LINK}
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
