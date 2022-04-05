import { Navbar } from "../components/Navbar";
import { MarketHero } from "../components/MarketHero";
import { Footer } from "../components/Footer";

const market = () => {
  return (
    <>
      <div className="top-0 sticky z-10">
        <Navbar />
      </div>
      <MarketHero />
      <Footer />
    </>
  );
};

export default market;
