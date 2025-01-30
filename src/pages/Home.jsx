import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Skills from "../components/skills/Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
