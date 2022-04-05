import React from "react";
import Image from "next/image";
export const ArticleCard = ({ width, heading, des }) => {
  return (
    <>
      <div className="bg-blue-nft p-5 rounded-2xl h-[32rem] ">
        <Image src="/1.png" alt=".." width={width} height={300} />
        <h1 className="text-white text-xl font-bold py-5">{heading}</h1>
        <div className="flex items-center gap-5 py-2s">
          <Image src="/avatar.png" alt="ph" width={60} height={60} />
          <h1 className="text-white">Name</h1>
        </div>
        <p className="text-md text-white">{des}</p>
      </div>
    </>
  );
};
