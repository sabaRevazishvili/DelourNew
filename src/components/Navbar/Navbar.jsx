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
      <nav className="flex box-border items-center justify-between w-full bg-[white]  px-[50px] shadow-md z-1000 fixed top-0 left-0 right-0">
        <img src={delourLogo} alt="Delour Logo" className="h-[40px]" />
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
          <button
            className="w-[80px] h-[40px] bg-[red]"
            onClick={searchHandler}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
          </button>
          <Link to="/contact">კონტაქტი</Link>
        </div>
      </nav>
      {openSearch && <Search setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default Navbar;
