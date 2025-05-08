import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-blue-100 border-b border-blue-300">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <img src="/path-to-logo.png" alt="Logo" className="h-10" />
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-blue-700 hover:text-blue-900">
            Наши услуги
          </a>
          <a href="#about" className="text-blue-700 hover:text-blue-900">
            О компании
          </a>
          <a href="#contacts" className="text-blue-700 hover:text-blue-900">
            Контакты
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="text-blue-700">
            <span className="font-bold">+7 (495) 641-51-38</span>
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-blue-700 font-bold focus:outline-none"
            >
              Наш адрес
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-300 rounded shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-blue-100">
                    Сидней: 123 George St
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100">
                    Мельбурн: 456 Collins St
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100">
                    Брисбен: 789 Queen St
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button className="text-blue-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
