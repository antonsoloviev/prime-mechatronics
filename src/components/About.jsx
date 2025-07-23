import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col gap-6 container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
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
          <h1 className="text-3xl sm:text-6xl font-bold mb-2">О нас</h1>
          <p className="sm:text-xl">
            PrimeMechatronics - инжиниринговая компания, специализирующаяся на
            разработке индивидуальных приборов, робототехнике, автоматизации,
            лазерном и измерительном оборудовании, а также оптических приборах.
            Наша команда предлагает высококвалифицированные инженерные решения,
            сжатые сроки и конкурентоспособные цены.
          </p>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap justify-center xl:justify-between">
        <div className="flex flex-col gap-6 xl:max-w-xs 2xl:max-w-xl">
          <p className="sm:text-xl">
            Мы гордимся нашими специалистами, которые готовы воплощать в жизнь
            самые сложные проекты, обеспечивая клиентам высочайший уровень
            профессионализма и качества
          </p>
          <a
            href="#About"
            className="border border-black px-8 py-3 rounded-2xl max-w-fit"
          >
            Наши услуги
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
