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
              <ArticleCard
                width={1000}
                des="as ddcoin is a blockchain based platform that looks to greatly improve the experience offering investors a way to generate a passive income stream"
                heading="if you're wondering which cryptocurrency to buy,look no further than ddcoin"
              />
            </div>
            <ArticleCard
              width={500}
              heading="many market commentators believe that ddcoin is best cryptocurrency to invest n 2022"
              des="for exposure to the metaverse.dd coin is a blockchain based virtual world where users can create avatars and purchase land"
            />
            <ArticleCard
              width={500}
              heading="DDcoin Great Crypto Project "
              des="DD coin is crptocurrency to buy if you're looking for an alternative to ethereum  as blockchain
platform employs a Proof-Of-STAKE algorithm to achieve consensus"
            />
            <ArticleCard
              width={500}
              des="DDcoin is an exicting crypto project and open-source that enavles low-cost transfer around the world"
              heading="DDcoin is a highly scalable blockchain platform network to benefit from faster speed and lower gas fees"
            />
            <ArticleCard
              width={500}
              heading="many market commentators believe that ddcoin is best cryptocurrency to invest n 2022"
              des="for exposure to the metaverse.dd coin is a blockchain based virtual world where users can create avatars and purchase land"
            />
          </div>
        </div>
      </div>
    </>
  );
};
