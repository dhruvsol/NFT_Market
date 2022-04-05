import React from "react";
import Image from "next/image";
export const ArticleCard = ({ width }) => {
  return (
    <>
      <div className="bg-blue-nft p-10 rounded-2xl h-[40rem] ">
        <Image src="/1.png" alt=".." width={width} height={350} />
        <h1 className="text-white text-xl font-bold py-5">
          Product Update: Personalized Activity Feed + New Ways to Discover
          Product Update
        </h1>
        <div className="flex items-center gap-5 py-2s">
          <Image src="/avatar.png" alt="ph" width={60} height={60} />
          <h1 className="text-white">Name</h1>
        </div>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit , sed do eiusmod
        </p>
      </div>
    </>
  );
};
