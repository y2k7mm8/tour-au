import React from "react";
import introImage from "../assets/img/intro.jpg";

export const Intro = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[220px] sm:min-h-[300px] flex items-center justify-center"
      style={{ backgroundImage: `url(${introImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-2 sm:px-4">
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold leading-tight drop-shadow-md">
          ТУРИСТИЧЕСКОЕ АГЕНТСТВО «КАМ АНД ФЛАЙ»
          <br className="hidden xs:inline" /> - PEGAS TOURISTIK
        </h1>
        <p className="mt-2 sm:mt-4 text-xs sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow">
          Официальное представительство PEGAS Touristik (Туристическое Агентство
          «КАМ АНД ФЛАЙ»), работает с 2008 года как официальная точка продаж
          туристических услуг.
        </p>
      </div>
    </section>
  );
};
