import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { services } from "../../constants/services";

const ServicesSlider = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "slide",
        perPage: 3,
        speed: 1000,
        perMove: 1,
        breakpoints: {
          1024: {
            perPage: 2,
          },
        },
      }}
    >
      {services.map((service, index) => (
        <SplideSlide key={index}>
          <div className="flex flex-col justify-between p-5 rounded-2xl  bg-fill mx-4 h-full">
            <h3 lang={service.lang} className="text-lg font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm flex-grow">{service.text}</p>
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-square rounded-lg mt-4 self-center object-cover"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ServicesSlider;
