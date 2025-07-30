import React from "react";
import Greeting from "../components/Greeting";
import About from "../components/About";
import ProjectsSlider from "../components/ProjectsSlider";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Greeting />
      <About />
      <ProjectsSlider />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
