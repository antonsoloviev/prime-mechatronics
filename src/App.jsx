import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="relative overflow-clip">
      <div className="relative bg-[#030712]">
        <div className="white-gradient" />
        <Header />
        <Greeting />
      </div>
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
