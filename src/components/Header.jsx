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
    <header className="bg-white border-b border-none">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-2 sm:px-4 gap-y-2">
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={logo} alt="Pegas Logo" className="h-8 sm:h-10" />
        </div>

        <nav className="flex flex-col sm:flex-row items-center gap-2 sm:space-x-6 w-full sm:w-auto">
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="hover:text-blue-600 text-sm sm:text-base">
              Наши услуги ▾
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
          <BiLogoTelegram className="w-5 h-5 sm:w-6 sm:h-6" />
          <BiLogoVk className="w-5 h-5 sm:w-6 sm:h-6" />
          <BiLogoWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
          <BiLogoFacebook className="w-5 h-5 sm:w-6 sm:h-6" />

          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
              alt="Flag"
              className="w-5 sm:w-6"
            />
            <div
              className="relative"
              onMouseEnter={() => setShowAddresses(true)}
              onMouseLeave={() => setShowAddresses(false)}
            >
              <button className="hover:text-blue-600 text-xs sm:text-base">
                +61 412 345 678 ▾
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
            Наши адреса ▾
          </span>
        </div>
      </div>
    </header>
  );
}
