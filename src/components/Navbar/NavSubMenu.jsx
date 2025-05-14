import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavSubMenu = ({ item, openMenu, setOpenMenu }) => {
  const isOpen = openMenu;

  return (
    <li
      onMouseEnter={() => {
        console.log("Mouse entered:", item.title);
        setOpenMenu(item.title);
      }}
      onMouseLeave={() => {
        console.log("Mouse left:", item.title);
        setOpenMenu(null);
      }}
      className="relative py-6"
    >
      <button className=" flex flex-row items-center gap-[10px] text-base ">
        {item.title}
        {item.icon && (
          <FontAwesomeIcon
            icon={item.icon}
            className={`transition-transform duration-300 ${
              openMenu === item.title ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 ">
        <div className="h-[40px] bg-transperant"></div>
        {item.submenu && isOpen === item.title && (
          <div className="">
            <ul
              onMouseLeave={() => setOpenMenu(null)}
              className="bg-white shadow-lg py-2 px-4 rounded-md min-w-[180px]"
            >
              {item.submenu.map((menu, index) => (
                <li key={index} className="hover:bg-gray-100 px-2 py-1 rounded">
                  <Link to={menu.path} className="block w-full">
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default NavSubMenu;
