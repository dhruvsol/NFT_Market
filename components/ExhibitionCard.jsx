import Image from "next/image";
export const ExhibitionCard = () => {
  return (
    <>
      <div className="flex justify-around pt-20 ">
        <Image src="/1.png" alt="..." width={350} height={250} />
        <div className="text-white flex flex-col gap-4">
          <h1 className="text-xl">June 16,2021</h1>
          <h1 className="text-4xl">Geometrical heart - fire dispersion </h1>
          <p>
            A fragmental dispersion of the heart. I used many photoshop
            geometrical brushes <br /> with different random size and opacity,
            in order to emphatize the contrast between
            <br /> in order to emphatize the contrast between
          </p>
          <div className="py-3">
            <ul className="flex justify-start gap-5">
              <li className="bg-blue-nft text-white p-2 px-4 rounded-lg">
                Cold
              </li>
              <li className="bg-blue-nft text-white p-2 px-4 rounded-lg">
                Blue Color
              </li>
              <li className="bg-blue-nft text-white p-2 px-4 rounded-lg">
                Crypto Art
              </li>
              <li className="bg-blue-nft text-white p-2 px-4 rounded-lg">
                Blue Filter
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-3xl pb-3">Featured Artist</h1>
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-3">
                <Image src="/avatar.png" alt="ph" width={50} height={50} />
                <h1 className="text-white">Name</h1>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/avatar.png" alt="ph" width={50} height={50} />
                <h1 className="text-white">Name</h1>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/avatar.png" alt="ph" width={50} height={50} />
                <h1 className="text-white">Name</h1>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/avatar.png" alt="ph" width={50} height={50} />
                <h1 className="text-white">Name</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
