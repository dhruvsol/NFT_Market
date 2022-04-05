import Link from "next/link";
import Web3 from "web3";
export const Navbar = () => {
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No wallet installed");
    }
  };

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
            <li
              onClick={() => loadWeb3()}
              className="bg-blue-main p-3 px-5 rounded-md text-white font-bold cursor-pointer"
            >
              Connect Wallet
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
