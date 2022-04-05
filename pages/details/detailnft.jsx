import Image from "next/image";
import { DetailMiddle } from "../../components/DetailMiddle";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

const detailnft = () => {
  return (
    <>
      <div className="top-0 sticky z-10">
        <Navbar />
      </div>
      <div className="bg-back">
        <div className="flex justify-center px-24 gap-20 pt-20 w-full">
          <Image src="/1.png" alt="..." width={550} height={600} />
          <div className="flex text-white flex-col">
            <h1 className="text-5xl pb-5">
              Geometrical heart-fire <br /> dispersion{" "}
            </h1>
            <p className="text-xl">
              A fragmental dispersion of the heart. I used many photoshop
              geometrical
              <br /> brushes with different random size and opacity, in order to
              emphatize the <br /> contrast between front and background spaces,
              enhancing better the main <br /> subject exposure.
            </p>
            <div className="pt-10">
              <ul className="grid grid-cols-4  gap-5">
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Blue Color
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Cold
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Crypto Art
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Blue Filter
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Defragmentation
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Hexagon
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Light
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Motion
                </li>
                <li className="text-white px-4 p-2  rounded-lg bg-blue-nft">
                  Sparks
                </li>
              </ul>
            </div>
            <div className="flex gap-10 py-5">
              <div>
                <h1 className="font-bold text-2xl pb-2">Artist</h1>
                <div className="flex items-center gap-3">
                  <Image src="/avatar.png" alt="ph" width={50} height={50} />
                  <h1 className="text-white text-2xl">Name</h1>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-2xl pb-2">Owner</h1>
                <div className="flex items-center gap-3">
                  <Image src="/avatar.png" alt="ph" width={50} height={50} />
                  <h1 className="text-white text-2xl">Name</h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl pb-2 text-grey">List Price:</h1>
              <div className="flex gap-10">
                <h1 className="text-white text-2xl">0.442DDC</h1>
                <h1 className="text-white text-xl">$1.22</h1>
              </div>
              <div className="flex gap-10 pt-10">
                <button className="px-8 p-3 rounded-lg bg-blue-button">
                  Place A Bid
                </button>
                <button className="px-8 p-3 border rounded-lg">Share</button>
              </div>
            </div>
          </div>
        </div>
        <DetailMiddle />
        <div className="flex justify-center ">
          <div className="bg-blue-connect flex flex-col justify-center gap-10 items-center h-[30rem] rounded-md text-center w-2/3">
            <h1 className="text-5xl  text-white">
              Stay in the loop on CryptoArt and NFTs
            </h1>
            <p className="text-xl text-white">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating MetaDee.
            </p>
            <div className="flex justify-center w-full pt-12 gap-2">
              <input
                type="text"
                placeholder="Your Email"
                className="w-2/3 bg-blue-nft border  border-blue-connect rounded-md focus:outline-none placeholder:font-bold placeholder:text-white placeholder:px-5 px-10"
              />
              <button className="bg-blue-button  text-white p-3 px-5 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default detailnft;
