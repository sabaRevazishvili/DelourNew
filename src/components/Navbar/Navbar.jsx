import React, { useState } from "react";
import { navbarList } from "../../constants/navbarList";
import delourLogo from "../../assets/images/Delour-logo.png";
import NavSubMenu from "./NavSubMenu";

import { Link } from "react-router-dom";
import Search from "./Search";
import AnimatedLi from "./AnimatedLi";
import SearchButton from "./SearchButton";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between w-full bg-white/30 backdrop-blur-3xl px-15 shadow-8xl z-1000 fixed top-0 left-0 right-0  font-big">
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
              <AnimatedLi key={index} title={item.title} path={item.path} />
            )
          )}
        </ul>
        <div className="flex items-center justify-center gap-[30px]">
          <SearchButton setOpenSearch={setOpenSearch} openSearch={openSearch} />
          <Link className="button" to="/contact">
            კონტაქტი
          </Link>
        </div>
      </nav>
      {openSearch && <Search setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default Navbar;
