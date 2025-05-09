import React from "react";

const HotelCard = ({ image, name, location, price, isLarge }) => {
  return (
    <div
      className={`${
        isLarge ? "row-span-2 h-[33rem]" : "h-64"
      } bg-cover bg-center rounded-lg relative`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-opacity-50 rounded-5xl"></div>
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex justify-end mb-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            {price} сом
          </span>
        </div>
        <div className="flex flex-col justify-end mt-auto text-white">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-300">{location}</p>
        </div>
      </div>
    </div>
  );
};

const Tour = () => {
  const hotels = [
    {
      image:
        "https://assets.atdw-online.com.au/images/082abec166a817adfae646daff53ad70.jpeg?rect=0%2C0%2C2048%2C1536&w=1600&h=1200&&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjIzYzkyZDVmMTU2NTA0NWQ4MTBkMiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlkZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9?w=1600&h=1200&fm=jpg",
      name: "Sydney Opera House Tour",
      location: "Сидней, Австралия",
      price: "120 000",
      isLarge: true,
    },
    {
      image:
        "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/csbclwq9eit1zfe595j9.webp",
      name: "Great Barrier Reef Adventure",
      location: "Квинсленд, Австралия",
      price: "150 000",
    },
    {
      image:
        "https://www.ayersrockresort.com.au/_next/image?url=https%3A%2F%2Faccount.ayersrockresort.com.au%2Fsites%2Fdefault%2Ffiles%2F2024-07%2FSJ_Hero_HighRes.jpg&w=1920&q=75",
      name: "Uluru Sunrise Experience",
      location: "Северная территория, Австралия",
      price: "110 000",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/74/a6/b4/caption.jpg?w=500&h=400&s=1",
      name: "Melbourne City Tour",
      location: "Мельбурн, Австралия",
      price: "95 000",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/58f742c146c3c424ad7a127c/1690431807088-YUA3O7H3YDIMU06HKRZ1/image-asset.jpeg?format=2500w",
      name: "Bondi Beach Relaxation",
      location: "Сидней, Австралия",
      price: "80 000",
    },
  ];

  return (
    <div className=" text-white min-h-screen">
      <div className="container mx-auto p-4">
        <h2 className="text-black text-2xl font-bold mb-4">Горячие туры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel, index) => (
            <HotelCard
              key={index}
              image={hotel.image}
              name={hotel.name}
              location={hotel.location}
              price={hotel.price}
              isLarge={hotel.isLarge || false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tour;
