import React from "react";
import slogam from "../assets/img/logo-slogan1.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-gray-700 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="mb-6 md:mb-0">
          <img src={slogam} alt="Pegas Touristik Logo" className="h-10" />
          <p className="text-sm mt-2">Ежедневно</p>
          <p className="text-xs text-gray-500">10:00 - 22:00</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 text-sm">
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

        <div className="text-sm mt-6 md:mt-0">
          <p className="font-semibold">+7 (495) 641-51-38</p>
          <p className="text-xs text-gray-500">Обратный звонок</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
