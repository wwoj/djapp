import "./App.css";
// Import pages
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Gallery from "./Views/Gallery";
import Header from "./Components/Header";

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Hello DJKoval
      <HashRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
