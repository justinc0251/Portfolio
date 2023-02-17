import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
