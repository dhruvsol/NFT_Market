import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="flex bg-back text-white justify-around pt-20">
        <div>
          <h1 className="text-4xl">
            Our Superior <br /> Features For You
          </h1>
          <p className="py-5">
            Art is a shared liquidity NFT market smart contract <br />
            which is used by multiple websites to provide the <br />
            users with the best possible experience.
          </p>
          <button className="bg-blue-button p-3 px-7 rounded-3xl ">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <h1 className="text-xl">Transparant Method</h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h1 className="text-xl">
              Qualified and <br /> revied artworks
            </h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h1>
              Audited and <br />
              safe
            </h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h1>
              Easy and <br /> happy Bidding
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-back flex justify-around py-20">
        <div className="text-white text-xl ">
          <h1 className="py-5">logo</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            <br />
            tristique placerat eleifend aliquam pellentesque facilisis ultrices.
            <br />
            Imperdiet mus urna egestas at tellus.
            <br />
          </p>
        </div>
        <div>
          <ul className="flex flex-col text-white gap-4">
            <li className="font-bold text-2xl">About</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>How it Works</li>
            <li>Support</li>
            <li>Become a Partner</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col text-white gap-4">
            <li className="font-bold text-2xl">Community</li>
            <li>Token</li>
            <li>Discussion</li>
            <li>Voting</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col text-white gap-4">
            <li className="font-bold text-2xl">Social Media</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="text-white bg-back flex justify-between px-20 pb-5">
        <div className="flex gap-5">
          <h1 className="cursor-pointer">Privacy Policy</h1>
          <h1 className="cursor-pointer">Terms and Condition</h1>
        </div>
        <h1 className="cursor-pointer">Copyright </h1>
      </div>
    </>
  );
};
