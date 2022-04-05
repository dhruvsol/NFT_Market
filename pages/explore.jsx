import { ExploreHero } from "../components/ExploreHero";
import { Navbar } from "../components/Navbar";
import { PopularArt } from "../components/PopularArt";
import { Footer } from "../components/Footer";
const explore = () => {
  return (
    <>
      <div className="top-0 sticky z-10">
        <Navbar />
      </div>
      <ExploreHero />
      <PopularArt />
      <Footer />
    </>
  );
};

export default explore;
