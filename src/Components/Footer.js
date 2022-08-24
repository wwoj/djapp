import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faSnapchat,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="footer-icon-container">
        <a
          href="https://www.facebook.com/"
          className="footer-icon-box"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a
          href="https://twitter.com/"
          className="footer-icon-box"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a
          href="https://snap.com/"
          className="footer-icon-box"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSnapchat} size="1x" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="footer-icon-box"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a
          href="https://www.youtube.com/"
          className="footer-icon-box"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
      </section>
      <section className="dis-flex-cc w100">
        <ul className="dis-flex-cc w100 footer-list">
          <li>Home</li>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="1x"
              className="footer-icon-bottom"
            />
            <a
              href="https://www.google.com/maps/place/Chicago+Metropolitan+Area,+Stany+Zjednoczone/@41.9344798,-88.0134847,9.17z/data=!4m5!3m4!1s0x880e444c8c99e083:0xda7b840a9a579334!8m2!3d41.7435073!4d-88.0118473"
              target="_blank"
              rel="noreferrer"
            >
              Illinois, Chicago area
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhone}
              size="1x"
              className="footer-icon-bottom"
            />
            <a href="tel:+48534073727">(+48)534-073-727</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="1x"
              className="footer-icon-bottom"
            />
            <a href="mailto:wojcik.wojtek@yahoo.pl">wojcik.wojtek@yahoo.pl</a>
          </li>
        </ul>
      </section>
      <div className="dis-flex-cc w100 footer-cc">Company name ©2010</div>
    </footer>
  );
};
export default Footer;
// {
/* <button
        onClick={() => {
          let test = { cookies: "" };
          document.cookie = JSON.stringify(test);
        }}
      >
        Cookie Write
      </button>
      <button
        onClick={() => {
          let user = document.cookie;
          console.log(JSON.parse(user));
        }}
      >
        Cookie Read
      </button> */
// }
