import React from "react";

const Tour = () => {
  const tours = [
    {
      id: 1,
      price: "56 465P",
      title: "Throne Beach Resort & Spa (Ex. Nitabahr Resort & Spa) 5*",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      price: "97 998P",
      title: "Rehana Royal Beach Resort Aqua Park & Spa 5*",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      price: "73 33P",
      title: "Millennium Plaza Downtown Sheikh Zayed Road 5*",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 4,
      price: "60 440P",
      title: "Towers Rotana",
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 5,
      price: "60 682P",
      title: "Garuada (Parus) 4*",
      image: "https://via.placeholder.com/300x400",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">• Горящие туры</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                {tour.price} за номер
              </span>
              <p className="text-gray-700 text-sm">{tour.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
