import "./App.css";
// Import pages
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Gallery from "./Views/Gallery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cookies from "./Components/Cookies";
//
import GalleryWedding from "./Views/GalleryWedding";
import GalleryBirthday from "./Views/GalleryBirthday";
import GalleryOther from "./Views/GalleryOther.js";

import "./Styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [cookies, setCookies] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setCookieChoice();
  });
  function setCookieChoice() {
    let cookiesMem = "";
    try {
      cookiesMem = JSON.parse(document.cookie);
    } catch (err) {
      cookiesMem = "";
    }
    setCookies(cookiesMem.cookies === "accepted" ? true : false);
  }
  return (
    <div className="App">
      <HashRouter>
        <Header language={language} setLanguage={setLanguage} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/gallery-wedding" element={<GalleryWedding />} />
          <Route exact path="/gallery-birthday" element={<GalleryBirthday />} />
          <Route exact path="/gallery-other" element={<GalleryOther />} />
        </Routes>
        <Footer />
        {cookies ? null : <Cookies setCookies={setCookies} />}
      </HashRouter>
    </div>
  );
}

export default App;
