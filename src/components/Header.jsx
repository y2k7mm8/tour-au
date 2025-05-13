import logo from "../assets/img/logo-slogan1.svg";
import {
  BiLogoTelegram,
  BiLogoVk,
  BiLogoWhatsapp,
  BiLogoFacebook,
} from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = ["Визы", "Круизы"];
const addresses = [
  "51 Ridge Road: +61 412 345 678",
  "13 Loris Way: +61 412 345 678",
];

export default function Header() {
  const [showServices, setShowServices] = useState(false);
  const [showAddresses, setShowAddresses] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-50 border-b border-none shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-3 sm:px-6 gap-y-2">
        <div className="flex items-center mb-2 sm:mb-0">
          <img
            src={logo}
            alt="Pegas Logo"
            className="h-10 sm:h-12 drop-shadow"
          />
        </div>

        <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6  w-full sm:w-auto">
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="hover:text-blue-600 text-sm sm:text-base">
              Наши услуги
            </button>
            {showServices && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white border-none shadow-lg rounded-lg p-2 text-sm z-10">
                {services.map((service, index) => (
                  <div key={index} className="py-1 hover:bg-blue-100">
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/About"
            className="hover:text-blue-600 text-sm sm:text-base"
          >
            О компании
          </Link>
          <Link
            to="/Contact"
            className="hover:text-blue-600 text-sm sm:text-base"
          >
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:space-x-4 overflow-x-auto">
          <a
            href="https://t.me/y2k7mm8"
            target="_blank"
            className="text-blue-500"
          >
            <BiLogoTelegram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://vk.com/" target="_blank" className="text-blue-500">
            <BiLogoVk className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://wa.me/" target="_blank" className="text-green-500">
            <BiLogoWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            className="text-blue-500"
          >
            <BiLogoFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <div className="flex items-center space-x-2 ml-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
              alt="Flag"
              className="w-5 sm:w-7 rounded shadow"
            />
            <div
              className="relative"
              onMouseEnter={() => setShowAddresses(true)}
              onMouseLeave={() => setShowAddresses(false)}
            >
              <button className="hover:text-blue-600 text-xs sm:text-base">
                +61 412 345 678
              </button>
              {showAddresses && (
                <div className="absolute top-full right-0 mt-2 w-48 sm:w-64 bg-white border shadow-lg rounded-lg p-2 text-xs sm:text-sm z-10">
                  {addresses.map((address, index) => (
                    <div
                      key={index}
                      className="py-1 hover:bg-blue-100 break-words"
                    >
                      {address}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <span className="text-gray-700 text-xs sm:text-base whitespace-nowrap">
            Наши адреса
          </span>
        </div>
      </div>
    </header>
  );
}
