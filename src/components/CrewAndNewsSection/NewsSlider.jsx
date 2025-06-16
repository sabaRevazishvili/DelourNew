import React from "react";
import { news } from "../../constants/news";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const NewsSlider = () => {
  return (
    <Splide
      id="news-slider"
      className="!py-0 !h-full"
      aria-label="My Favorite Images"
      options={{
        type: "slide",
        perPage: 2,
        speed: 1000,
        perMove: 2,
        pagination: false,
        gap: "20px",
        breakpoints: {
          1024: {
            perPage: 2,
          },
        },
      }}
    >
      {news.map((service, index) => (
        <SplideSlide key={index} className="!h-full relative py-5">
          <img
            src={service.img}
            alt={service.title}
            className="h-60 w-full object-cover rounded-lg"
          />
          <h3
            lang="ka"
            className="absolute z-10 bottom-10 text-left left-1/2 transform -translate-x-1/2 text-sky max-w-3xl"
          >
            {service.title}
          </h3>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default NewsSlider;
