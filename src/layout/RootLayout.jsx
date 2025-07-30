import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import ScrollToAnchor from "../utils/ScrollToAnchor";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToAnchor />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
