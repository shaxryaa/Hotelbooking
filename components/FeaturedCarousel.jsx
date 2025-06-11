"use client";
import React from "react";

const FeaturedCarousel = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Deluxe Suite",
      description:
        "Spacious suite with sea view, king bed, and private balcony.",
      image: "/hotelimage1.jpg",
    },
    {
      id: 2,
      title: "Spa & Wellness",
      description: "Rejuvenate with our premium spa and wellness facilities.",
      image: "/hotelimage2.webp",
    },
    {
      id: 3,
      title: "Fine Dining",
      description: "Enjoy gourmet meals from world-class chefs.",
      image: "/hotelimage3.jpg",
    },
    {
      id: 4,
      title: "Deluxe Hotel",
      description: "Enjoy best view",
      image: "/hotelimage4.webp",
    },
    {
      id: 5,
      title: "Radisson Blu",
      description: "Enjoy gourmet meals from world-class chefs.",
      image: "/hotelimage5.jpeg",
    },
    {
      id: 6,
      title: "Emerald",
      description: "Rejuvenate with our premium spa and wellness facilities.",
      image: "/hotelimage6.webp",
    },
  ];
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Hotels</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] max-w-xs bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm my-2">{item.description}</p>
              <button className="mt-2 text-blue-600 hover:underline">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCarousel;