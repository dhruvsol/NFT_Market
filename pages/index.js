import { HomeCard } from "../components/HomeCard";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-back h-screen overflow-x-hidden ">
        <div className="top-0 sticky z-10 w-full">
          <Navbar />
        </div>
        <div className="flex justify-evenly pt-20  overflow-x-hidden ">
          <div className="pt-16">
            <h1 className="text-white text-4xl font-bold ">
              Unique NFT marketplace for Art <br /> and Entertainment
            </h1>
            <div className="text-white flex gap-3 pt-20">
              <button
                onClick={() => router.push("/market")}
                className="bg-blue-button px-5 p-3 rounded-md"
              >
                Start Collecting
              </button>
              <button
                onClick={() => router.push("/explore")}
                className="border border-white px-5 p-3 rounded-md"
              >
                Discovery Art
              </button>
              <button className="bg-blue-button px-5 p-3 rounded-md">
                Invest
              </button>
            </div>
          </div>
          <div className="overflow-x-hidden">
            <HomeCard />
          </div>
        </div>
      </div>
    </>
  );
}
