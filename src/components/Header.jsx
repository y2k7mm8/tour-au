// filepath: c:\Users\jesin\Desktop\fan projects\school\tour-au\src\components\Header.jsx
import logo from "../assets/img/logo-slogan1.svg";
import {
  BiLogoTelegram,
  BiLogoVk,
  BiLogoWhatsapp,
  BiLogoFacebook,
} from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom"; // Добавлено

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
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <img src={logo} alt="Pegas Logo" className="h-10" />
        </div>

        <nav className="flex items-center space-x-6">
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="hover:text-blue-600">Наши услуги ▾</button>
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
          <Link to="/About" className="hover:text-blue-600">
            О компании
          </Link>{" "}
          {/* Ссылка на About */}
          <Link to="/Contact" className="hover:text-blue-600">
            Контакты
          </Link>{" "}
          {/* Ссылка на Contact */}
        </nav>

        <div className="flex items-center space-x-4">
          <BiLogoTelegram />
          <BiLogoVk />
          <BiLogoWhatsapp />
          <BiLogoFacebook />

          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
              alt="Flag"
              className="w-6"
            />
            <div
              className="relative"
              onMouseEnter={() => setShowAddresses(true)}
              onMouseLeave={() => setShowAddresses(false)}
            >
              <button className="hover:text-blue-600">+61 412 345 678 ▾</button>
              {showAddresses && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border shadow-lg rounded-lg p-2 text-sm z-10">
                  {addresses.map((address, index) => (
                    <div key={index} className="py-1 hover:bg-blue-100">
                      {address}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <span className="text-gray-700">Наши адреса ▾</span>
        </div>
      </div>
    </header>
  );
}
