import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { Mobilemenu } from "./Components/Mobilemenu";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Pricing from "./Components/Pricing";
import Career from "./Components/Career";
import Review from "./Components/Review";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Review />
              <Contact />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
