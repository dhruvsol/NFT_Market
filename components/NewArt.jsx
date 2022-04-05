import Image from "next/image";

export const NewArt = ({ image, name }) => {
  return (
    <>
      <div className="bg-blue-nft p-5 flex w-max flex-col rounded-xl">
        <Image src={image} alt="nft" width={400} height={350} />
        <h1 className="text-white pt-5 pb-2 text-2xl">{name}</h1>
        <div className="flex items-center gap-3">
          <Image src="/avatar.png" alt="ph" width={50} height={50} />
          <h1 className="text-white">Name</h1>
        </div>
        <div className="text-white flex justify-between pb-5">
          <div>
            <h1 className="text-xl text-grey">Price:</h1>
            <h1 className="font-bold text-xl">0.444 DDC</h1>
          </div>
          <div>
            <h1 className="text-xl text-grey">Available :</h1>
            <h1 className="font-bold text-xl">0.444 DDC</h1>
          </div>
        </div>
        <button className="border p-4 font-bold rounded-md   border-white text-white hover:border-0 hover:scale-105 hover:bg-blue-button">
          Place a bid
        </button>
      </div>
    </>
  );
};
