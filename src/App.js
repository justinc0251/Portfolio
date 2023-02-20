import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
