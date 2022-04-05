import { ExhibitionCard } from "../components/ExhibitionCard";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
const exhibition = () => {
  return (
    <>
      <div className="bg-back h-max">
        <div className="top-0 sticky z-10">
          <Navbar />
        </div>
        <div className="px-36">
          <h1 className="text-white font-bold py-5 text-5xl">Exhibition</h1>
          <p className="text-grey text-xl">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document <br /> or a typeface without relying on
            meaningful content.
          </p>
        </div>
        <div>
          <ExhibitionCard />
          <ExhibitionCard />
          <ExhibitionCard />
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
        <div className="flex justify-center ">
          <div className="bg-blue-connect flex flex-col justify-center gap-10 items-center h-[30rem] rounded-md text-center w-2/3">
            <h1 className="text-5xl  text-white">
              Stay in the loop on CryptoArt and NFTs
            </h1>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor
            </p>
            <div className="flex justify-center w-full pt-12 gap-2">
              <input
                type="text"
                placeholder="Your Email"
                className="w-2/3 bg-blue-nft border  border-blue-connect rounded-md focus:outline-none placeholder:font-bold placeholder:text-white placeholder:px-5 px-10"
              />
              <button className="bg-blue-button p-3 px-5 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default exhibition;
