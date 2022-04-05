import Image from "next/image";
import { NewArt } from "./NewArt";

export const ExploreHero = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  return (
    <>
      <div className="bg-back h-max">
        <div className="px-24 pt-12 text-white">
          <h1 className="text-5xl font-bold">Explore Now</h1>
          <div className="flex justify-center pt-12 gap-2">
            <input
              type="text"
              placeholder="Search Crypto Art, Article, Favorite Artist or Collector"
              className="w-2/3 bg-blue-nft border  border-blue-connect rounded-md focus:outline-none placeholder:font-bold placeholder:text-white placeholder:px-5 px-10"
            />
            <button className="bg-blue-button p-3 px-5 rounded-md">
              Search Now
            </button>
          </div>
        </div>
        <div className="text-white px-24 pt-10">
          <h1 className="text-5xl font-bold pb-5">New Artist</h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-y-10 gap-x-32">
              {data.map(({ id }) => {
                return (
                  <div key={id} className="flex gap-9 items-center">
                    <h1 className="font-bold text-2xl">{id}</h1>
                    <Image src="/avatar.png" alt="ph" width={70} height={70} />
                    <div className="flex justify-between flex-col">
                      <h1 className="font-bold text-2xl">Arlene McCoy</h1>
                      <p>@ArleneMc</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex justify-between px-24 text-white">
            <h1 className="text-5xl font-bold">New CryptoArt</h1>
            <button className="bg-blue-button p-3 px-6 rounded-xl">
              View All
            </button>
          </div>
          <div className="flex justify-center pt-20">
            <div className="grid grid-cols-3 gap-x-28 gap-y-16">
              {data.map(({ id }) => {
                return (
                  <>
                    <div key={id}>
                      <NewArt image="/1.png" name="Inner State : Joy" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
