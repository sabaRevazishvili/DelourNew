import React from "react";
import { crew } from "../../constants/crew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRight } from "lucide-react";

const Crews = () => {
  return (
    <div className="grid grid-cols-[0.5fr_1.5fr] place-items-center h-60 gap-4">
      <div className="flex flex-col size-full rounded-2xl py-10 px-5 gap-5  bg-fill">
        <h4 lang="ka" className="text-xl font-medium">
          გაიცანით ჩვენი გუნდის წევრები
        </h4>
        <p>რაღაცა რაღაცა რაღაცა რაღაცა რაღაცა რაღაცა</p>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr_0.2fr] place-items-center size-full rounded-2xl gap-3 p-3  bg-fill">
        {crew.slice(0, 3).map((member, index) => (
          <div
            className=" rounded-xl size-full flex flex-col items-center justify-center gap-3 border border-[#eee]"
            key={index}
          >
            <img
              className="w-20 h-20 mx-auto rounded-full object-cover"
              src={member.image}
              alt="member"
            />
            <h2 lang="ka" className="text-lg font-semibold">
              {member.name}
            </h2>
            <p className="text-base text-gray-600">{member.position}</p>
            <div className=" flex justify-center gap-4">
              {member.icons.map((icon, iconIndex) => (
                <a
                  key={iconIndex}
                  href="#"
                  className="text-black hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={icon.icon} size="2xl" />
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="relative group">
          <a className="text-black bg-white rounded-xl  ">
            <ChevronRight size="lg" />
          </a>
          <p className="absolute top-12 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">მეტი</p>
        </div>
      </div>
    </div>
  );
};

export default Crews;
