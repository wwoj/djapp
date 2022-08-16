// Temporary navigation
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink activeclassname="activeLinkClass" className="" end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeclassname="activeLinkClass"
            className=""
            end
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            activeclassname="activeLinkClass"
            className=""
            end
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
