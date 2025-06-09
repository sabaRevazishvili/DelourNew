import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import partnersImgs from "../../constants/partnersImgs";

const PartnersSlider = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        perPage: 6,
        arrows: false,
        pagination: false,
        drag: false,
        gap: "1rem",
        autoScroll: {
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      {partnersImgs.map((image, index) => (
        <SplideSlide className="h-15" key={index}>
          <img className="size-full" src={image} alt={`Slide ${index + 1}`} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default PartnersSlider;
