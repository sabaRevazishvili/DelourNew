import React from "react";

const News = () => {
  return (
    <div className="grid grid-cols-[1.5fr_0.5fr] place-items-center h-60 gap-4">
      <div className="flex flex-col size-full rounded-2xl py-10 px-5 gap-5  bg-fill"></div>
      <div className="grid grid-cols-[0.2fr_1fr_1fr_1fr] place-items-center size-full rounded-2xl gap-3 p-3  bg-fill"></div>
    </div>
  );
};

export default News;
