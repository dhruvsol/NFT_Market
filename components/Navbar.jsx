import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import Image from "next/image";
export const Navbar = () => {
  const [address, setAddress] = useState("Connect Wallet");
  const [active, setActive] = useState(true);
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      loadData();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No wallet installed");
    }
  };

  const ConnectRef = useRef();
  const loadData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);
    console.log(ConnectRef.current.innerHTML);
    ConnectRef.current.innerHTML = setAddress;
    setActive(false);
  };

  return (
    <>
      <div className="flex justify-between px-16 bg-back h-20 items-center">
        <div className="text-white">
          <Image src="/logo.png" alt="logo" width={240} height={42} />
        </div>
        <div className="flex items-center">
          <ul className="flex justify-around gap-5 items-center ">
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
              <Link href="/Trade">Trade</Link>
            </li>
            <li className="text-grey">
              <Link href="#">Community</Link>
            </li>
            {active && (
              <li
                value={address}
                ref={ConnectRef}
                onClick={() => loadWeb3()}
                className="bg-blue-main p-3 px-5 rounded-md text-white font-bold  cursor-pointer"
              >
                {address}
              </li>
            )}
            {active === false && (
              <li
                ref={ConnectRef}
                className="bg-blue-main p-3 px-5 rounded-md text-white font-bold  cursor-pointer"
              >
                {address}
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
