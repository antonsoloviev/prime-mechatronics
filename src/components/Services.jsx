import React from "react";
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <section
      id="Services"
      className="relative container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-6xl font-bold mb-2 text-left">
          Услуги
        </h1>
        <p className="sm:text-xl mb-8 text-center">
          Услуги и сервисы которые мы предлагаем
        </p>
        <div>
          <ul className="flex flex-col items-left">
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">Проектирование автоматизации</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">
                Проектирование лазерных и оптических приборов
              </p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">Разработка роботов</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">Подготовка ТЗ и ТП, визуализация</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <img src={assets.icon_check} alt="item" className="w-6 h-6" />
              <p className="sm:text-xl">Мехатроника и точная механика</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
