import React from "react";
import { NavLink } from "react-router-dom";

const GalleryDropdown = ({ classNameFunc, isOpen, btnRef1 }) => {
  return (
    <div className={`gallery-dropdown` + (isOpen ? " open-nav" : " close")}>
      <ul>
        <li>
          <NavLink
            className={classNameFunc}
            end
            to="/gallery-wedding"
            ref={btnRef1}
          >
            WEDDING
          </NavLink>
        </li>
        <li>
          <NavLink className={classNameFunc} end to="/gallery-birthday">
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
  );
};
export default GalleryDropdown;
