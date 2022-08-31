import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Pictures/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import GalleryDropdown from "./GalleryDropdown";
import NavbarLanguage from "./NavbarLanguage";
// import navlink

import NavItem from "./NavItem";

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");
const Navbar = ({ language, setLanguage, urlPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();
  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  return (
    <div className="nav-container dis-flex-sb-ac">
      <ul className="navbar-list">
        <li>
          <NavLink className={classNameFunc} end to="/">
            <img className="logo-container" src={Logo} alt="DJKoval Logo" />
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-list nav-links">
        <li>
          <NavLink className={classNameFunc} end to="/">
            Hello
          </NavLink>
        </li>
        <li>
          <NavItem
            urlLink="/"
            idLink="/#Lorem_1"
            id="Lorem_1"
            title="Lorem 1"
            type={2}
            offset={-200}
            duration={200}
            urlPath={urlPath}
          />
        </li>
        <li>
          <NavItem
            urlLink="/"
            idLink="/#Lorem_2"
            id="Lorem_2"
            title="Lorem 2"
            type={2}
            offset={-200}
            duration={200}
            urlPath={urlPath}
          />
        </li>
        <li>
          <NavItem
            urlLink="/"
            idLink="/#Lorem_3"
            id="Lorem_3"
            title="Lorem 3"
            type={2}
            offset={-200}
            duration={200}
            urlPath={urlPath}
          />
        </li>
        <li>
          <NavItem
            urlLink="/"
            idLink="/#contact"
            id="contact"
            title="Contact"
            type={2}
            offset={-450}
            duration={200}
            urlPath={urlPath}
          />
        </li>
        {/* <li>
          <a onClick={() => scroll.scrollToTop()}>Scroll To Bottom</a>
        </li> */}
        <li className="li-dropdown">
          <button
            className="btn-dropdown-action"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            ref={btnRef}
          >
            GALLERY <FontAwesomeIcon icon={faAngleDown} size="1x" />
          </button>
          <GalleryDropdown classNameFunc={classNameFunc} isOpen={isOpen} />
        </li>
        <li>
          <NavbarLanguage setLanguage={setLanguage} language={language} />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
