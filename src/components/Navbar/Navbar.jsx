import React, { useEffect, useState } from "react";
import { navbarList } from "../../constants/navbarList";
import delourLogo from "../../assets/images/Delour-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavSubMenu from "./NavSubMenu";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);

  const searchHandler = () => {
    setOpenSearch((prev) => !prev);
  };
  useEffect(() => {
    console.log("Menu state changed:", openMenu);
  }, [openMenu]);

  return (
    <>
      <nav className="flex items-center justify-between w-full bg-linear-180 from-primary via-primary to-sky px-[50px] shadow-10xl z-1000 fixed top-0 left-0 right-0">
        <img src={delourLogo} alt="Delour Logo" className="h-12" />
        <ul className="flex items-center justify-center gap-[40px]">
          {navbarList.map((item, index) =>
            item.submenu ? (
              <NavSubMenu
                key={index}
                item={item}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            ) : (
              <li className="py-5" key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )
          )}
        </ul>
        <div className="flex items-center justify-center gap-[30px]">
          <button className=" cursor-pointer" onClick={searchHandler}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-2xl font-extrabold text-accent"
            />
          </button>
          <Link
            // className="px-4 py-2 border border-accent rounded-full bg-accent hover:bg-sky hover:text-black transition-colors duration-300"
            className="button"
            to="/contact"
          >
            კონტაქტი
          </Link>
        </div>
      </nav>
      {openSearch && <Search setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default Navbar;
