import React, { useState } from "react";
import { topics } from "../../constants/topics";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Search = ({ setOpenSearch }) => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const filteredTopics = topics.filter((topic) =>
    topic.keywords.some((keyword) =>
      keyword.toLowerCase().includes(value.toLowerCase())
    )
  );

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
    <div className="fixed top-18 left-0 size-full bg-accent/40 flex justify-center z-10">
      <AnimatePresence>
        <motion.div className="w-3/4 bg-white h-110 pt-6 px-22 mt-10 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={inputHandler}
            value={value}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {value && (
            <ul className="mt-4 space-y-2">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, index) => (
                  <li key={index} className="text-gray-700">
                    <Link
                      onClick={() => {
                        setOpenSearch(false);
                      }}
                      to={topic.path}
                      className="hover:text-blue-500"
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-red-500">No results found</li>
              )}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Search;
