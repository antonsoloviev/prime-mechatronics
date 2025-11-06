import { assets, projectsData } from "../assets/assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./ProjectsSlider.css";
import "swiper/css";
import { sliderSettings } from "../utils/common";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const ProjectsSlider = () => {
  const { t } = useTranslation("projects");

  return (
    <section
      id="Projects"
      className="relative container mx-auto py-4 pt-20 px-4 sm:px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-3xl sm:text-6xl font-bold mb-4 text-left">
          {t("projects.title")}
        </h1>
        <p className="sm:text-xl text-left mb-2 max-w-80">
          {t("projects.comment")}
        </p>
        <Link to="/projects" className="flex gap-4 items-center group">
          <span className="sm:text-xl group-hover:text-gray-500">
            {t("projects.view all")}
          </span>
          <svg
            className="ease-in-out transition duration-300 group-hover:translate-x-4 group-hover:stroke-gray-500 stroke-black "
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 12.0004H18.0005M18.0005 12.0004L13.5 8M18.0005 12.0004L13.5 16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButtons />
        {projectsData.map((card, i) => (
          <SwiperSlide key={i}>
            <Link to={`/projects/${card.id}`}>
              <div
                key={i}
                className="project-card flex flex-col gap-4 pt-14 rounded-xl max-w-xs m-auto transition-all duration-300 ease-in h-full"
              >
                <div className="">
                  <img
                    src={card.image}
                    alt={t([`${card.title}`], { lng: "en" })}
                    className="rounded-xl"
                  />
                </div>
                <div className=" flex justify-start">
                  <div className="line-clamp-2 px-4 py-1 hover:line-clamp-none">
                    <h2 className="sm:text-xl font-semibold text-gray-800">
                      {t([`${card.title}`])}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsSlider;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute z-1 top-0 right-0 self-end flex justify-end items-center">
      <button
        onClick={() => swiper.slidePrev()}
        className="cursor-pointer p-2 bg-gray-200 rounded-xl mr-3"
        aria-label="Previous Project"
      >
        <img src={assets.left_arrow} alt="Previous" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="cursor-pointer p-2 bg-gray-200 rounded-xl mr-3"
        aria-label="Next Project"
      >
        <img src={assets.right_arrow} alt="Next" />
      </button>
    </div>
  );
};
