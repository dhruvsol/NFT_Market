import React from "react";
import { ArticleCard } from "./ArticleCard";

export const PopularArt = () => {
  return (
    <>
      <div className="bg-back py-20">
        <div className="flex justify-between px-16 pb-10 text-white">
          <h1 className="text-4xl font-bold">Popular Articles</h1>
          <button className="bg-blue-button px-5 p-3 rounded-md">
            View All Articles
          </button>
        </div>
        <div className="flex justify-center px-16">
          <div className="grid grid-cols-3 gap-5   gap">
            <div className="col-span-2">
              <ArticleCard width={1200} />
            </div>
            <ArticleCard width={600} />
            <ArticleCard width={600} />
            <ArticleCard width={600} />
            <ArticleCard width={600} />
          </div>
        </div>
      </div>
    </>
  );
};
