import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("main");

  return (
    <section
      id="Services"
      className="relative container mx-auto py-4 pt-20 px-4 sm:px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-6xl font-bold mb-2 text-left">
          {t("services.title")}
        </h1>
        <p className="sm:text-xl mb-8 text-center">{t("services.comment")}</p>
        <div>
          <ul className="flex flex-col items-left">
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">{t("services.service1")}</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">{t("services.service2")}</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">{t("services.service3")}</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">{t("services.service4")}</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">{t("services.service5")}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
