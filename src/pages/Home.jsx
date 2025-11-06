import React from "react";
import Greeting from "../components/Greeting";
import About from "../components/About";
import ProjectsSlider from "../components/ProjectsSlider";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { ScrollRestoration } from "react-router";

const Home = () => {
  return (
    <div>
      <ScrollRestoration />
      <Greeting />
      <About />
      <ProjectsSlider />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
