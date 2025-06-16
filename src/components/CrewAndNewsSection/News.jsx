import React from "react";
import NewsSlider from "./NewsSlider";

const News = () => {
  return (
    <div className="grid grid-cols-[1.5fr_0.5fr] place-items-center h-60 box-border gap-4">
      <div className="size-full rounded-2xl bg-fill">
        <NewsSlider />
      </div>
      <div className="flex flex-col size-full h-full rounded-2xl py-10 px-5 gap-5  bg-fill">
        <h1 lang="ka">სიახლეები</h1>
      </div>
    </div>
  );
};

export default News;
