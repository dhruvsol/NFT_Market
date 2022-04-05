import { Footer } from "../components/Footer";
import { MarketHero } from "../components/MarketHero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="top-0 sticky z-10">
        <Navbar />
      </div>
      <MarketHero />
      <Footer />
    </>
  );
}
