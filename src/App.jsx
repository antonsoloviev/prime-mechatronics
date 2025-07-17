import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-full overflow-hidden flex-col">
      <Header />
      <Greeting />
      <About />
    </div>
  );
};

export default App;
