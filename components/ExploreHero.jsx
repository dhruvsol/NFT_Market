import Image from "next/image";
import { NewArt } from "./NewArt";

export const ExploreHero = () => {
  const data = [
    {
      id: 1,
      img: "/2.jpeg",
    },
    {
      id: 2,
      img: "/3.jpg",
    },
    {
      id: 3,
      img: "/4.jpeg",
    },
    {
      id: 4,
      img: "/5.jpg",
    },
    {
      id: 5,
      img: "/6.jpeg",
    },
    {
      id: 6,
      img: "/7.jpeg",
    },
    {
      id: 7,
      img: "/8.jpg",
    },
    {
      id: 8,
      img: "/9.jpeg",
    },
    {
      id: 9,
      img: "/10.jpeg",
    },
  ];
  return (
    <>
      <div className="bg-back h-max">
        <div className="px-16 pt-12 text-white">
          <h1 className="text-4xl font-bold">Explore Now</h1>
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
        <div className="text-white px-16 pt-10">
          <h1 className="text-4xl font-bold pb-5">New Artist</h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-y-10 gap-x-32">
              {data.map(({ id }) => {
                return (
                  <div key={id} className="flex gap-9 items-center">
                    <h1 className="font-bold text-2xl">{id}</h1>
                    <Image src="/avatar.png" alt="ph" width={70} height={70} />
                    <div className="flex justify-between flex-col">
                      <h1 className="font-bold text-xl">Arlene McCoy</h1>
                      <p>@ArleneMc</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex justify-between px-16 text-white">
            <h1 className="text-4xl font-bold">New CryptoArt</h1>
            <button className="bg-blue-button p-3 px-6 rounded-xl">
              View All
            </button>
          </div>
          <div className="flex justify-center pt-20">
            <div className="grid grid-cols-3 gap-x-16 gap-y-16">
              {data.map(({ id, img }) => {
                return (
                  <>
                    <div key={id}>
                      <NewArt image={img} name="Inner State : Joy" />
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
