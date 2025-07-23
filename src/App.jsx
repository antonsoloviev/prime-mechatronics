import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden flex-col">
      <Header />
      <Greeting />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
