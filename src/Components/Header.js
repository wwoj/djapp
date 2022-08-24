// Temporary navigation
import React from "react";
import Navbar from "./Navbar";
const Header = ({ language, setLanguage }) => {
  return (
    <header>
      <Navbar language={language} setLanguage={setLanguage} />
    </header>
  );
};

export default Header;
