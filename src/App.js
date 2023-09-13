import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./index.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
