import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavItem = (props) => {
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

  if (props.type === 1) {
    return (
      <NavLink className={classNameFunc} end to={props.urlLink}>
        {props.title}
      </NavLink>
    );
  } else {
    return props.urlPath === props.urlLink ? (
      <Link
        // urlPath={"tes"}
        to={props.id}
        spy={true}
        smooth={true}
        offset={props.offset}
        duration={props.duration}
      >
        {props.title}
      </Link>
    ) : (
      <HashLink to={props.idLink}>{props.title}</HashLink>
    );
  }
};
export default NavItem;
