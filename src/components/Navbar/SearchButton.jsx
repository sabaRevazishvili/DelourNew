import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const SearchButton = ({ setOpenSearch, openSearch }) => {
  const searchHandler = (e) => {
    e.stopPropagation();
    setOpenSearch((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={searchHandler}
        className="relative h-8 w-8 flex items-center justify-center "
      >
        <AnimatePresence mode="wait">
          {openSearch ? (
            <motion.div
              key="xmark"
              initial={{ y: 50, opacity: 0, rotate: 90 }}
              animate={{ y: 120, opacity: 1, rotate: 0 }} // Animate to the top position
              exit={{ y: 50, opacity: 0, rotate: -90 }} // Exit back to halfway position
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-4xl text-red-600"
              />
            </motion.div>
          ) : (
            <motion.div
              key="search"
              initial={{ y: 50, opacity: 0, rotate: 90 }} // Start from halfway position
              animate={{ y: 0, opacity: 1, rotate: 0 }} // Animate up to top position
              exit={{ y: 50, opacity: 0, rotate: -90 }} // Exit back to halfway position
              transition={{ type: "tween", duration: 0.3, ease: "easeIn" }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-3xl text-accent"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default SearchButton;
