import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full overflow-hidden flex-col">
      <Header />
      <div
        className="container min-h-fit text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
        style={{ backgroundImage: "url('/header_img.jpg')" }}
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-4xl">
          Инженерия высокого класса
        </h2>
        <p>Индивидуальный подход к вашему успеху</p>
        <div>
          <a href="http://">Узнать больше</a>
        </div>
      </div>
      <div class="flex justify-center sm:px-12 p-8 h-screen">
        <img
          class="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
          src="https://dummyimage.com/600x400/000/fff"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
