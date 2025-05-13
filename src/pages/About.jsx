import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto px-2 py-8 sm:px-6">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-blue-100">
        <div>
          <h2 className="text-lg sm:text-3xl font-extrabold mb-4 sm:mb-4 tracking-tight">
            Туристическое Агентство «КАМ АНД ФЛАЙ» - PEGAS Touristik
          </h2>
          <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">
            Официальное представительство PEGAS Touristik (Туристическое
            Агентство «КАМ АНД ФЛАЙ»), работает с 2008 года как официальная
            точка продаж туристических услуг.
          </p>
          <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">
            Ежегодно мы входим в ТОП 10 агентств по продажам туристических
            услуг, являемся лидерами продаж, а соответственно лидерами самых
            низких цен и самого качественного отдыха.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Мы предлагаем отдых в самых красивых местах: Турция, Россия, Египет,
            Тунис, Индия, Таиланд, Индонезия, Иордания, Израиль, Кипр, Куба,
            ОАЭ, Вьетнам, Мексика, Болгария, Мальдивы, Грузия, Азербайджан,
            Армения, Узбекистан, Казахстан, Танзания, Венесуэла и Ямайка.
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-3xl font-extrabold mb-4 sm:mb-4 tracking-tight">
            ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "КАМ АНД ФЛАЙ"
          </h2>
          <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">
            (сокращенное наименование ООО "КАМ АНД ФЛАЙ")
          </p>
          <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base break-words">
            ИНН 7706692500 КПП: 770501001
            <br />
            Юридический адрес: 115114 г. Москва, Кожевническая ул. д. 7, стр1
          </p>
          <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base break-words">
            Фактический адрес: 115114 г. Москва, Кожевническая ул. д. 7, стр1
          </p>
          <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">
            Телефон/факс:{" "}
            <a
              href="tel:+74956415138"
              className="text-blue-600 hover:underline break-all"
            >
              +7 (495) 641-51-38
            </a>
            ,{" "}
            <a
              href="tel:+79013844303"
              className="text-blue-600 hover:underline break-all"
            >
              +7 (901) 384-43-03
            </a>
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Наша почта:{" "}
            <a
              href="mailto:come-fly@mail.ru"
              className="text-blue-600 hover:underline break-all"
            >
              come-fly@mail.ru
            </a>
            ,{" "}
            <a
              href="mailto:kukrus.pegas@mail.ru"
              className="text-blue-600 hover:underline break-all"
            >
              kukrus.pegas@mail.ru
            </a>
            ,{" "}
            <a
              href="mailto:kukrus.pegas@yandex.ru"
              className="text-blue-600 hover:underline break-all"
            >
              kukrus.pegas@yandex.ru
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
