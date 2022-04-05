import Link from "next/link";
export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-24 bg-back h-20 items-center">
        <div className="text-white">logo</div>
        <div className="flex items-center">
          <ul className="flex justify-around gap-10 items-center ">
            <li className="text-grey">
              <Link href="/">Home</Link>
            </li>
            <li className="text-grey">
              <Link href="/market">Market</Link>
            </li>
            <li className="text-grey">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="text-grey">
              <Link href="/exhibition">Exhibition</Link>
            </li>
            <li className="text-grey">
              <Link href="#">Artist & Collectors</Link>
            </li>
            <li className="text-grey">
              <Link href="#">Community</Link>
            </li>
            <li className="bg-blue-main p-3 px-5 rounded-md text-white font-bold">
              <Link href="#">Connect Wallet</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
