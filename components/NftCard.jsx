import Image from "next/image";

export const NftCard = ({ image, name }) => {
  return (
    <>
      <div className="bg-blue-nft p-5 flex w-max flex-col rounded-xl">
        <Image src={image} alt="nft" width={400} height={350} />
        <h1 className="text-white pt-5 pb-2 text-2xl">{name}</h1>
        <div className="text-white flex justify-between ">
          <div>
            <h1 className="text-xl text-grey">List Price:</h1>
            <h1 className="font-bold text-xl">0.444 DDC</h1>
            <h1>$ 1.22</h1>
          </div>
          <div>
            <h1 className="text-xl text-grey">Last sale Price:</h1>
            <h1 className="font-bold text-xl">0.444 DDC</h1>
            <h1>$ 1.22</h1>
          </div>
        </div>
        <div className="flex justify-between pt-7">
          <div>
            <h1 className="text-white pb-3 pl-1 font-bold text-xl">Artist</h1>
            <div className="flex items-center gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
          </div>
          <div>
            <h1 className="text-white pb-3 pr-1 font-bold text-xl">Owner</h1>
            <div className="flex items-center gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
