import Image from "next/image";
export const HomeCard = () => {
  return (
    <>
      <div className="flex overflow-hidden gap-20">
        <div className="p-3 bg-blue-nft rounded-xl">
          <Image src="/1.png" alt=".." width={240} height={250} />
          <h1 className="text-white">Minature Paintin- Indian art</h1>
          <div>
            <div className="flex items-center py-3 gap-2">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
          </div>
          <hr className="border-grey " />
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-white py-3">
              <h1>Current Bid:</h1>
              <h1 className="text-lg ">2.00 DDC</h1>
            </div>
            <button className="px-8 h-10 text-white  bg-blue-button rounded-xl">
              Place a bid
            </button>
          </div>
        </div>
        {/* <div className="p-5 bg-blue-nft rounded-xl absolute right-[-10rem] overflow-hidden">
          <Image src="/1.png" alt=".." width={400} height={450} />
          <h1 className="text-white">Minature Paintin- Indian art</h1>
          <div>
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
          </div>
          <hr className="border-grey " />
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-white py-3">
              <h1>Current Bid:</h1>
              <h1 className="text-xl font-bold">2.00 DDC</h1>
            </div>
            <button className="px-10 h-14  bg-blue-button rounded-xl">
              Place a bid
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};
