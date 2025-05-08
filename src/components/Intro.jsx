import React from "react";
import introImage from "../assets/img/intro.jpg";

export const Intro = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[300px] text-white"
      style={{ backgroundImage: `url(${introImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-2xl font-bold">
          ТУРИСТИЧЕСКОЕ АГЕНТСТВО «КАМ АНД ФЛАЙ» - PEGAS TOURISTIK
        </h1>
        <p className="mt-4 text-xs md:text-xl">
          Официальное представительство PEGAS Touristik Туристическое Агентство
          «КАМ АНД ФЛАЙ», работает с 2008 года как официальная точка продаж
          туристических услуг.
        </p>
      </div>
    </section>
  );
};
