import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const NavSubMenu = ({ item, openMenu, setOpenMenu }) => {
  const isOpen = openMenu === item.title;

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.li
      onMouseEnter={() => {
        setOpenMenu(item.title);
      }}
      onMouseLeave={() => {
        setOpenMenu(null);
      }}
      className="relative py-6 cursor-pointer"
      whileHover="hovered"
      initial="initial"
    >
      <span className="opacity-0 pointer-events-none w-full flex flex-row items-center gap-[10px] text-base">
        {item.title}
        {item.icon && <FontAwesomeIcon icon={item.icon} />}
      </span>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center ]">
        <motion.button
          variants={{
            initial: { y: 0, opacity: 1 },
            hovered: { y: 20, opacity: 0 },
          }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className=" w-full flex flex-row items-center gap-[10px] text-base cursor-pointer "
        >
          {item.title}
          {item.icon && (
            <FontAwesomeIcon
              icon={item.icon}
              className={`transition-transform duration-300 ${
                openMenu === item.title ? "rotate-180" : ""
              }`}
            />
          )}
        </motion.button>
        <motion.button
          variants={{
            initial: { y: -20, opacity: 0 },
            hovered: { y: 0, opacity: 1 },
          }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className=" w-full absolute top-0 left-0 text-blue-700 flex flex-row items-center gap-[10px] text-base cursor-pointer "
        >
          {item.title}
          {item.icon && (
            <FontAwesomeIcon
              icon={item.icon}
              className={`transition-transform duration-300 ${
                openMenu === item.title ? "rotate-180" : ""
              }`}
            />
          )}
        </motion.button>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 z-[10] ">
        <div className="h-[40px] bg-transperant"></div>
        <AnimatePresence>
          {item.submenu && isOpen && (
            <motion.ul
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white shadow-lg p-2 rounded-md min-w-[180px] z-[1000]"
            >
              {item.submenu.map((menu, index) => (
                <li
                  key={index}
                  className="hover:bg-accent-light px-2 py-1 rounded"
                >
                  <Link to={menu.path} className="block w-full">
                    {menu.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default NavSubMenu;
