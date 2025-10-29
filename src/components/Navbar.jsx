import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Languages } from "../utils/common";
import { useEffect } from "react";
import { Link } from "react-router";
import LangSelector from "./Selectors/LangSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("main");

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [language, setLanguage] = useState(Languages[0]);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-16 lg:px-32 bg-transparent">
        <Link to="/">
          <div className="flex justify-center gap-4">
            <div
              className="flex justify-center h-screen"
              style={{ height: "48px" }}
            >
              <img src={assets.logo} alt="" className="object-scale-down" />
            </div>
            <div className="hidden lg:flex flex-col items-left">
              <span className="text-base text-gray-300">Prime</span>
              <span className="text-base text-gray-300">Mechatronics</span>
            </div>
          </div>
        </Link>

        <ul className="hidden sm:flex gap-8">
          <Link to={{ pathname: "/", hash: "#Projects" }}>
            <li className=" text-gray-300 hover:text-white text-xl py-2">
              {t("navbar.projects")}
            </li>
          </Link>
          <Link to={{ pathname: "/", hash: "#Services" }}>
            <li className=" text-gray-300 hover:text-white text-xl py-2">
              {t("navbar.services")}
            </li>
          </Link>
          <Link to={{ pathname: "/", hash: "#About" }}>
            <li className=" text-gray-300 hover:text-white text-xl py-2">
              {t("navbar.about")}
            </li>
          </Link>
          <Link
            to={{ pathname: "/", hash: "#Contact" }}
            className="hidden sm:flex text-gray-300 hover:text-white text-xl py-2"
          >
            {t("navbar.contact us")}
          </Link>
        </ul>
        {/* <Link
          to={{ pathname: "/", hash: "#Contact" }}
          className="hidden sm:flex text-gray-300 hover:text-white text-xl py-2"
        >
          Contact Us
        </Link> */}
        <LangSelector
          options={Languages}
          currentOption={language}
          onChange={setLanguage}
        />
        <div
          className="flex items-center h-8"
          onClick={() => setShowMobileMenu(true)}
        >
          <img
            src={assets.menu}
            className="sm:hidden cursor-pointer"
            alt="menu"
          />
        </div>
      </div>
      {/* ----------- Mobile menu ---------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.menuClose}
            className="w-7"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-3 mt-5 px-5 text-xl font-medium">
          <Link to={{ pathname: "/" }} onClick={() => setShowMobileMenu(false)}>
            <li className="px-4 py-2 inline-block">{t("navbar.home")}</li>
          </Link>
          <Link
            to={{ pathname: "/", hash: "#About" }}
            onClick={() => setShowMobileMenu(false)}
          >
            <li className="px-4 py-2 inline-block">{t("navbar.about")}</li>
          </Link>
          <Link
            to={{ pathname: "/", hash: "#Projects" }}
            onClick={() => setShowMobileMenu(false)}
          >
            <li className="px-4 py-2 inline-block">{t("navbar.projects")}</li>
          </Link>
          <Link
            to={{ pathname: "/", hash: "#Services" }}
            onClick={() => setShowMobileMenu(false)}
          >
            <li className="px-4 py-2 inline-block">{t("navbar.services")}</li>
          </Link>
          <Link
            to={{ pathname: "/", hash: "#Contact" }}
            onClick={() => setShowMobileMenu(false)}
          >
            <li className="px-4 py-2 inline-block">{t("navbar.contact us")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
