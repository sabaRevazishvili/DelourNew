import React from "react";
import Crews from "./crews";
import News from "./News";

const CrewAndNewsSection = () => {
  return (
    <section className="flex flex-col gap-5 mx-40">
      <Crews />
      <News />
    </section>
  );
};

export default CrewAndNewsSection;
