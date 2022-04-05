import Image from "next/image";
import { DetailCard } from "./DetailCard";

export const DetailMiddle = () => {
  return (
    <>
      <div className="flex  justify-center text-white gap-20 py-20">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold flex justify-start rounded-lg bg-blue-nft p-2 px-5 w-[25rem]">
            History
          </h1>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold flex justify-start rounded-lg w-[25rem] bg-blue-nft p-2 px-5">
            Bids
          </h1>

          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex items-center py-3 gap-3">
              <Image src="/avatar.png" alt="ph" width={50} height={50} />
              <h1 className="text-white">Name</h1>
            </div>
            <div>
              <p>Bid 1 DCC</p>
              <p>June 20 2021, 06:30 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-24">
          <h1 className="text-white text-5xl">More Works by CameronWill </h1>
          <button className="px-5 p-3 bg-blue-button rounded-lg">
            See All
          </button>
        </div>
        <div className="flex  justify-center gap-20 py-10">
          <DetailCard />
          <DetailCard />
          <DetailCard />
        </div>
      </div>
    </>
  );
};
