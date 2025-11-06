import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("main");

  return (
    <section
      id="About"
      className="flex flex-col gap-6 container mx-auto pb-4 pt-20 px-4 sm:px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <div className="flex gap-8 flex-wrap justify-center xl:justify-between">
        <div className="flex justify-center max-w-xs 2xl:max-w-xl ">
          <img
            className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
            src={assets.about_img}
            alt=""
          />
        </div>
        <div className="flex flex-col xl:max-w-xl 2xl:max-w-xl">
          <h1 className="text-3xl sm:text-6xl font-bold mb-2">
            {t("about.title")}
          </h1>
          <p className="sm:text-xl">{t("about.part1")}</p>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap justify-center xl:justify-between">
        <div className="flex flex-col gap-6 xl:max-w-xs 2xl:max-w-xl">
          <p className="sm:text-xl">{t("about.part2")}</p>
          <a
            href="#Services"
            className="border border-black px-8 py-3 rounded-2xl max-w-fit"
          >
            {t("about.our services")}
          </a>
        </div>
        <div className="flex justify-center max-w-xs 2xl:max-w-xl ">
          <img
            className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
            src={assets.about_img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
