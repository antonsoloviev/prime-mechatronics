import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      id="Header"
      className="min-h-20 mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
    >
      <Navbar />
    </div>
  );
};

export default Header;
