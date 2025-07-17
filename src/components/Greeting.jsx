import React from "react";

const Greeting = () => {
  return (
    <div
      className="container min-h-fit text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
    >
      <div className="flex flex-col gap-24 pb-64">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl pt-64 sm:text-6xl md:text-[82px] max-w-4xl">
            Инженерия высокого класса
          </h2>
          <p className="text-2xl">Индивидуальный подход</p>
        </div>
        <div>
          <a
            href="#About"
            className="border border-white px-8 py-3 rounded-2xl"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
