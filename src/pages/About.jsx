import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold mb-4">
            Туристическое Агентство «КАМ АНД ФЛАЙ» - PEGAS Touristik
          </h2>
          <p className="text-gray-700 mb-4">
            Официальное представительство PEGAS Touristik (Туристическое
            Агентство «КАМ АНД ФЛАЙ»), работает с 2008 года как официальная
            точка продаж туристических услуг.
          </p>
          <p className="text-gray-700 mb-4">
            Ежегодно мы входим в ТОП 10 агентств по продажам туристических
            услуг, являемся лидерами продаж, а соответственно лидерами самых
            низких цен и самого качественного отдыха.
          </p>
          <p className="text-gray-700">
            Мы предлагаем отдых в самых красивых местах: Турция, Россия, Египет,
            Тунис, Индия, Таиланд, Индонезия, Иордания, Израиль, Кипр, Куба,
            ОАЭ, Вьетнам, Мексика, Болгария, Мальдивы, Грузия, Азербайджан,
            Армения, Узбекистан, Казахстан, Танзания, Венесуэла и Ямайка.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">
            ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "КАМ АНД ФЛАЙ"
          </h2>
          <p className="text-gray-700 mb-4">
            (сокращенное наименование ООО "КАМ АНД ФЛАЙ")
          </p>
          <p className="text-gray-700 mb-4">
            ИНН 7706692500 КПП: 770501001 Юридический адрес: 115114 г. Москва,
            Кожевническая ул. д. 7, стр1
          </p>
          <p className="text-gray-700 mb-4">
            Фактический адрес: 115114 г. Москва, Кожевническая ул. д. 7, стр1
          </p>
          <p className="text-gray-700 mb-4">
            Телефон/факс:{" "}
            <a
              href="tel:+74956415138"
              className="text-blue-600 hover:underline"
            >
              +7 (495) 641-51-38
            </a>
            ,{" "}
            <a
              href="tel:+79013844303"
              className="text-blue-600 hover:underline"
            >
              +7 (901) 384-43-03
            </a>
          </p>
          <p className="text-gray-700">
            Наша почта:{" "}
            <a
              href="mailto:come-fly@mail.ru"
              className="text-blue-600 hover:underline"
            >
              come-fly@mail.ru
            </a>
            ,{" "}
            <a
              href="mailto:kukrus.pegas@mail.ru"
              className="text-blue-600 hover:underline"
            >
              kukrus.pegas@mail.ru
            </a>
            ,{" "}
            <a
              href="mailto:kukrus.pegas@yandex.ru"
              className="text-blue-600 hover:underline"
            >
              kukrus.pegas@yandex.ru
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
