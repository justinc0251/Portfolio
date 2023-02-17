import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills"
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
