import React from "react";

const Cookies = ({ setCookies }) => {
  return (
    <div className="cookies-container">
      <div className="cookie-box">
        <div className="cookie-text">
          <h3>Cookies.</h3>
          <p>
            By using this website, you automatically accept that we use cookies.{" "}
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <button
            onClick={() => {
              //Set Cookies
              let cookiesValues = { cookies: "accepted" };
              document.cookie = JSON.stringify(cookiesValues);
              setCookies(true);
            }}
            className="cookie-btn-accept"
          >
            UNDERSTOOD
          </button>
        </form>
      </div>
    </div>
  );
};
export default Cookies;
