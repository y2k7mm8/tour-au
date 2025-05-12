import React from "react";

export const Reviews = () => {
  return (
    <section className="py-8 bg-slate-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Отзывы наших клиентов
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              text: "Спасибо агентству за отличный отдых! Всё было организовано на высшем уровне, обязательно обратимся снова.",
              name: "Анна Петрова",
            },
            {
              text: "Очень понравился сервис и внимательность сотрудников. Помогли подобрать тур под наш бюджет и пожелания.",
              name: "Игорь Смирнов",
            },
            {
              text: "Путешествие прошло идеально! Документы оформили быстро, всё объяснили, поддерживали на связи.",
              name: "Мария Кузнецова",
            },
          ].map((review, idx) => (
            <li key={idx}>
              <figure className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-xl shadow-slate-900/10 h-full flex flex-col">
                <svg
                  aria-hidden="true"
                  width="40"
                  height="32"
                  className="mb-2 fill-blue-100"
                  viewBox="0 0 40 32"
                >
                  <path d="M10 32c-2.5 0-4.7-.6-6.6-2-1.9-1.4-3.3-3.3-4.4-5.8C-1.1 21.7-2 18.5-2 14.8c0-3.1.5-6.1 1.6-9 1.1-2.9 2.8-5.3 5-7.7C7.2-3.1 9.8-4.5 12.7-5.2L17.2 4.8c-3.3 1.3-6 3-8 5.1-1.9 2.1-2.9 3.9-2.9 5.4 0 .7.2 1.4.6 2 .5.7 1.4 1.5 2.9 2.3 2.1 1.2 3.5 2.5 4.3 3.9.8 1.3 1.3 2.8 1.3 4.5 0 2.6-1 4.7-2.9 6.3-1.9 1.6-4.2 2.4-7.1 2.4Zm20 0c-2.5 0-4.7-.6-6.6-2-1.9-1.4-3.3-3.3-4.4-5.8C18.9 21.7 18 18.5 18 14.8c0-3.1.5-6.1 1.6-9 1.1-2.9 2.8-5.3 5-7.7C27.2-3.1 29.8-4.5 32.7-5.2L37.2 4.8c-3.3 1.3-6 3-8 5.1-1.9 2.1-2.9 3.9-2.9 5.4 0 .7.2 1.4.6 2 .5.7 1.4 1.5 2.9 2.3 2.1 1.2 3.5 2.5 4.3 3.9.8 1.3 1.3 2.8 1.3 4.5 0 2.6-1 4.7-2.9 6.3-1.9 1.6-4.2 2.4-7.1 2.4Z" />
                </svg>
                <blockquote className="flex-1">
                  <p className="text-base sm:text-lg tracking-tight text-slate-900">
                    {review.text}
                  </p>
                </blockquote>
                <figcaption className="mt-4 flex items-center border-t border-slate-100 pt-4">
                  <div className="font-display text-sm sm:text-base text-slate-900 font-semibold">
                    {review.name}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
