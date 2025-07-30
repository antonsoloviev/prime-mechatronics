import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      id="Header"
      className="min-h-20 flex items-center w-full overflow-hidden bg-gray-950"
    >
      <Navbar />
    </div>
  );
};

export default Header;
