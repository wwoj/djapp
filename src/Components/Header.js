// Temporary navigation
import React from "react";
import Navbar from "./Navbar/Navbar";
import Media from "react-media";
import NavbarSmall from "./Navbar/NavbarSmall";
const Header = ({ language, setLanguage, urlPath }) => {
  return (
    <header id="header">
      <Media
        queries={{
          small: "(max-width: 1069px)",
          // medium: "(min-width: 600px) and (max-width: 999px)",
          large: "(min-width: 1070px)",
        }}
      >
        {(matches) => (
          <div>
            {matches.small && (
              <NavbarSmall
                language={language}
                setLanguage={setLanguage}
                urlPath={urlPath}
              />
            )}
            {matches.large && (
              <Navbar
                language={language}
                setLanguage={setLanguage}
                urlPath={urlPath}
              />
            )}
          </div>
        )}
      </Media>
    </header>
  );
};

export default Header;
