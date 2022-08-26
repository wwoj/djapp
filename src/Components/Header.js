// Temporary navigation
import React from "react";
import Navbar from "./Navbar";
const Header = ({ language, setLanguage, urlPath }) => {
  return (
    <header>
      <Navbar language={language} setLanguage={setLanguage} urlPath={urlPath} />
    </header>
  );
};

export default Header;
