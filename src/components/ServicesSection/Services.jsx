import React from "react";
import ServicesSlider from "./ServicesSlider";

const Services = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-10 p-19 ">
      <h2 lang="ka" className="text-center font-normal text-5xl max-w-5xl">
        ცხოვრების ტრანსფორმაცია უფრო ჭკვიანური ფინანსური მიდგომით
      </h2>
      <p className="text-center  max-w-3xl tracking-wide">
        აღმოაჩინეთ ძლიერი ფუნქციები, რომლებიც შექმნილია ფულის მართვის
        გასამარტივებლად, პროგრესის თვალყურის დევნებისთვის და თქვენი ფინანსური
        მიზნების მარტივად მისაღწევად.
      </p>
      <ServicesSlider />
    </section>
  );
};

export default Services;
