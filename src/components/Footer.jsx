import React from "react";
import slogam from "../assets/img/logo-slogan1.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-gray-700 mt-10 border-t">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start px-4">
        <div className="mb-4 md:mb-0 flex flex-col items-start">
          <img src={slogam} alt="Pegas Touristik Logo" className="h-10" />
          <p className="text-sm mt-2">Ежедневно</p>
          <p className="text-xs text-gray-500">10:00 - 22:00</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 text-sm w-full md:w-auto">
          <div>
            <h4 className="font-semibold mb-2">Покупателю</h4>
            <p className="mb-1">Доставка и оплата</p>
            <p className="mb-1">Помощь</p>
            <p>О компании</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Клиентам</h4>
            <p className="mb-1">Арендодателям</p>
            <p>Поставщикам</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Информация</h4>
            <p className="mb-1">Контакты</p>
            <p>Реквизиты</p>
          </div>
        </div>

        <div className="text-sm mt-4 md:mt-0 flex flex-col items-start">
          <p className="font-semibold whitespace-nowrap">+7 (495) 641-51-38</p>
          <p className="text-xs text-gray-500">Обратный звонок</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
