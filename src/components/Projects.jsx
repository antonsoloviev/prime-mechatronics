import { assets, projectsData } from "../assets/assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Projects.css";
import "swiper/css";
import { sliderSettings } from "../utils/common";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="relative container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-3xl sm:text-6xl font-bold mb-2 text-left">
          Проекты
        </h1>
        <p className="sm:text-xl text-lef mb-2 max-w-80">
          Изучи наше портфолио
        </p>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButtons />
        {projectsData.map((card, i) => (
          <SwiperSlide key={i}>
            <div
              key={i}
              className="project-card flex flex-col gap-2.5 pt-16 border-transparent rounded-xl w-max m-auto transition-all duration-300 ease-in"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full max-h-50 rounded-xl"
              />
              <div className=" flex justify-start">
                <div className="inline-bloc w-3/4 px-4 py-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {card.title}
                  </h2>
                  <p>{card.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute z-1 top-0 right-0 self-end flex justify-end items-center">
      <button
        onClick={() => swiper.slidePrev()}
        className="cursor-pointer p-3 bg-gray-200 rounded-xl mr-3"
        aria-label="Previous Project"
      >
        <img src={assets.left_arrow} alt="Previous" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="cursor-pointer p-3 bg-gray-200 rounded-xl mr-3"
        aria-label="Next Project"
      >
        <img src={assets.right_arrow} alt="Next" />
      </button>
    </div>
  );
};
