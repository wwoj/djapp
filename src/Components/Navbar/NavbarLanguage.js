import React from "react";
import USAFlag from "../../Pictures/USAFlag.png";
import PolandFlag from "../../Pictures/PolandFlag.png";
const NavbarLanguage = ({ language, setLanguage }) => {
  return (
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
        <a href="/" style={{ width: "100%", margin: "0", padding: "0" }}>
          <img className="s" src={USAFlag} alt="languageIco" />
        </a>
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
        <a href="/pl-PL/" style={{ width: "100%", margin: "0", padding: "0" }}>
          <img className="s" src={PolandFlag} alt="languageIco" />
        </a>
      </div>
    </div>
  );
};

export default NavbarLanguage;
