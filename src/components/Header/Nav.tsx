import React, { FC } from "react";
import { MailIcon } from "@components/Icons/MailIcon";

export const Nav: FC = () => {
  return (
    <ul className=" hidden lg:flex">
      <li className="nav__li">
        <MailIcon />
      </li>
    </ul>
  );
};
