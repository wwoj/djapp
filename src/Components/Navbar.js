import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Pictures/Logo.png";
import USAFlag from "../Pictures/USAFlag.png";
import PolandFlag from "../Pictures/PolandFlag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import GalleryDropdown from "./GalleryDropdown";
const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");
const Navbar = ({ language, setLanguage }) => {
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
    <div className="nav-container">
      <ul className="navbar-list">
        <li>
          <img className="logo-container" src={Logo} alt="DJKoval Logo" />
        </li>
      </ul>
      <ul className="navbar-list nav-links">
        <li>
          <NavLink className={classNameFunc} end to="/">
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink className={classNameFunc} end to="/">
            Wedding
          </NavLink>
        </li>
        <li>
          <NavLink className={classNameFunc} end to="/">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className={classNameFunc} end to="/contact">
            Contact
          </NavLink>
        </li>

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
          <div className="dis-flex lang-container">
            <div
              className={`lang-ico-container dis-flex ${
                language === "en" ? "ativeLanguage" : ""
              }`}
              onClick={() => {
                setLanguage("en");
                alert("Changed to English");
              }}
            >
              <img className="s" src={USAFlag} alt="languageIco" />
            </div>
            <div
              className={`lang-ico-container dis-flex${
                language === "pl" ? " ativeLanguage" : ""
              }`}
              onClick={() => {
                setLanguage("pl");
                alert("Changed to Polish");
              }}
            >
              <img className="s" src={PolandFlag} alt="languageIco" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
