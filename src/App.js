import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
      </main>
    </>
  );
}

export default App;
