import { NftCard } from "./NftCard";

export const MarketHero = () => {
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
    {
      id: 10,
      img: "/11.jpg",
    },
    {
      id: 11,
      img: "/12.jpg",
    },
    {
      id: 12,
      img: "/13.jpeg",
    },
  ];
  return (
    <>
      <div className="h-max bg-back pt-24">
        <div className="px-16">
          <h1 className="text-white text-4xl font-bold py-7">Market</h1>
          {/* <p className="text-white text-xl">
            {
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a"
            }
          </p>
          <p className="text-white text-xl">
            {"document or a typeface without relying on meaningful content. "}
          </p> */}
        </div>
        <div className="px-16 pt-10">
          <h1 className="text-white pb-4">Filter By:</h1>
          <div className="flex gap-4 text-white">
            <button className="border p-3 px-4 rounded-lg">
              Has List Price
            </button>
            <button className="border p-3 px-4 rounded-lg">
              Has Open Offer
            </button>
            <button className="border p-3 px-4 rounded-lg">
              Owned By Creator
            </button>
            <button className="border p-3 px-4 rounded-lg">Has Sold</button>
            <button className="border p-3 px-4 rounded-lg">
              Reserverd Price
            </button>
          </div>
          <div className="text-white pt-5">
            <h1 className="py-3">Sort By:</h1>
            <button className="border p-3 px-10 rounded-lg">Filter</button>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <div className="grid  grid-cols-3 gap-10 ">
            {data.map(({ id, img }) => {
              return (
                <div key={id}>
                  <NftCard image={img} name="Inner State : Joy" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center text-white gap-10 items-center py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white hover:text-blue-button cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <h1 className="cursor-pointer hover:text-blue-button">1</h1>
          <h1 className="cursor-pointer hover:text-blue-button">2</h1>
          <h1 className="cursor-pointer hover:text-blue-button">3</h1>
          <h1 className="cursor-pointer hover:text-blue-button">4</h1>
          <h1 className="cursor-pointer hover:text-blue-button">5</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 hover:text-blue-button cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
