import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

import Logo from "../../Pictures/Logo.png";

const NavbarSmall = ({ language, setLanguage, urlPath }) => {
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [gallery, setGallery] = useState(false);

  return (
    <div>
      <nav className="nav-small-container">
        <NavLink end to="/" className={"logo-container-small"}>
          <img className="" src={Logo} alt="DJKoval Logo" />
        </NavLink>

        <button
          style={{ background: "transparent" }}
          onClick={() => {
            setShowMenu(!showMenu);
            setGallery(false);
          }}
        >
          <span
            ref={ref}
            className={`close-mark${showMenu ? " transform-main" : ""}`}
          ></span>
        </button>
        <div className={`nav-contsmall ${showMenu ? " list-1" : " list-0"}`}>
          <ul>
            <li className="li-navsmall">
              <NavLink className={classNameFunc} end to="/">
                Hello
              </NavLink>
            </li>
            <li className="li-navsmall">
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
            <li className="li-navsmall">
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
            <li className="li-navsmall">
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
            <li className="li-navsmall">
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
            <li className="li-navsmall">
              <button
                onClick={() => {
                  setGallery(!gallery);
                }}
                className="btn-gallery"
                aria-expanded={gallery}
              >
                GALLERY
              </button>
              <div className={`dropdown-gallery-nav${gallery ? " show" : ""}`}>
                <ul>
                  <li>
                    <NavLink
                      className={classNameFunc}
                      end
                      to="/gallery-wedding"
                    >
                      WEDDING
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classNameFunc}
                      end
                      to="/gallery-birthday"
                    >
                      BIRTHDAYS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={classNameFunc} end to="/gallery-other">
                      OTHER
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavbarSmall;
