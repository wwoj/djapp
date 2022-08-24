import React from "react";
import USAFlag from "../Pictures/USAFlag.png";
import PolandFlag from "../Pictures/PolandFlag.png";

const LanguageSelector = (props) => {
  return (
    <div className="language-container">
      <ul className="ul-language dis-flex-sb-ac">
        <li>
          <div className="selected-language-ico">
            <img src={USAFlag} alt="English" />
          </div>
        </li>
        <li>
          <div className="selected-language-ico">
            <img src={PolandFlag} alt="English" />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default LanguageSelector;
