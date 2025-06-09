import React from "react";
import About from "../../components/About/About";
import WhyUs from "../../components/WhyUsSection/WhyUs";
import Services from "../../components/ServicesSection/Services";
import Partners from "../../components/PartnersSection/Partners";
import CrewAndNewsSection from "../../components/CrewAndNewsSection/CrewAndNewsSection";

const Main = () => {
  return (
    <main className="">
      <About />
      <Partners />
      <WhyUs />
      <CrewAndNewsSection />
      <Services />
    </main>
  );
};

export default Main;
