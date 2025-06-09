import React from "react";
import { reasons } from "../../constants/whyus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyUs = () => {
  return (
    <section className="px-40  py-15 flex justify-center items-center flex-col gap-10">
      <h2 lang="ka" className="text-6xl text-center font-normal max-w-6xl">
        გაიმარტივეთ თქვენი ფინანსები, მიაღწიეთ თქვენს მიზნებს.{" "}
      </h2>
      <p className="text-center  max-w-3xl tracking-wide">
        შეცვალეთ თქვენი მუშაობის წესი ძალისხმევის გარეშე - თვალყური ადევნეთ და
        შეასრულეთ დავალებები. გაამარტივეთ თქვენი სამუშაო პროცესი, გაზარდეთ
        პროდუქტიულობა და მიაღწიეთ მეტს.{" "}
      </p>
      <div className="grid grid-cols-3 gap-5 place-items-center ">
        {reasons.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-start justify-between h-55  border border-[#eee]  p-5 rounded-md"
            >
              <FontAwesomeIcon
                className="text-3xl bg-accent-light size-9 p-2 rounded-md text-accent mb-3"
                icon={item.icon}
              />
              <h3 lang="ka" className="text-2xl">
                {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
