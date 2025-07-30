import React from "react";
import { assets } from "../assets/assets";
import "./Greeting.css";

const Greeting = () => {
  return (
    <section className="w-full flex justify-center items-center bg-gray-950">
      <div className="relative container w-full h-80 sm:h-90 md:h-100 lg:h-120">
        <div className=" z-1 gradient absolute w-full h-full "></div>
        <img
          src={assets.greeting_1}
          alt="greeting"
          className="z-0 p-0.5 absolute w-full h-full object-cover block overflow-hidden"
          fetchPriority="high"
        />
        <div className="absolute z-1 top-0 container text-left mx-auto py-14 px-6 max-[360px]:px-4 sm:px-12 md:px-20 lg:px-32 text-white">
          <div className="flex flex-col gap-8 md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] max-w-4xl">
                Инженерия высокого класса
              </h2>
              <p className="text-xl sm:text-2xl">Индивидуальный подход</p>
            </div>

            <a
              href="#About"
              className="border border-white px-8 py-3 rounded-2xl max-w-fit"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
