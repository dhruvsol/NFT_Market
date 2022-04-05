import Image from "next/image";

export const DetailCard = () => {
  return (
    <>
      <div className="p-5  rounded-lg bg-blue-nft">
        <Image src="/1.png" alt=".." width={400} height={400} />
        <h1 className="text-3xl text-white">Inner State : Joy</h1>
        <div className="flex items-center py-3 gap-3">
          <Image src="/avatar.png" alt="ph" width={50} height={50} />
          <h1 className="text-white">Name</h1>
        </div>
        <div className="flex  justify-between py-5">
          <div className="text-white">
            <h1>Current Bid:</h1>
            <h1 className="text-2xl">0.4435 DDC</h1>
          </div>
          <div className="text-white">
            <h1>End in :</h1>
            <h1 className="text-2xl">10h 12m 32s</h1>
          </div>
        </div>
        <button className="p-3 px-8 w-full rounded-xl bg-blue-button">
          Place a bid
        </button>
      </div>
    </>
  );
};
