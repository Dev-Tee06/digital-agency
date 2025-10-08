import React from "react";
import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Mobilemenu } from "./Components/Mobilemenu";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
