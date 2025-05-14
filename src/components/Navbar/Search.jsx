import React, { useState } from "react";
import { topics } from "../../constants/topics";
import { Link } from "react-router-dom";

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

  return (
    <div className="mt-[100px] px-[50px]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        onChange={inputHandler}
        value={value}
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
    </div>
  );
};

export default Search;
