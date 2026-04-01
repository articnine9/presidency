import BangaloreLife from "./components/LifeHero";
import BangaloreHighlights from "./components/BangaloreHighlights";
import LivingFoodSection from "./components/LivingFoodSection";
import WorldCuisines from "./components/WorldCuisines";
import InternationalSupport from "./components/InternationalSupport";
import SchoolHero from "./components/HeroSection";
import BangaloreTechSection from "./components/BangaloreTechSection";
import CareerSection from "./components/CareerSection";
import CostSection from "./components/CostSection";
import data from "./data/bangoloreLife.json";
const BangalorePage = () => {
  return (
    <>
      <SchoolHero data={data.hero} />
      <BangaloreTechSection data={data.BangaloreTechSection} />
      <CareerSection data={data.CareerSection} />
      <CostSection data={data.CostSection} />
      {/* <BangaloreLife /> */}
      {/* <BangaloreHighlights /> */}
      {/* <LivingFoodSection /> */}
      <WorldCuisines data = {data.WorldCuisines}/>
      <InternationalSupport data = {data.InternationalSupport}/>
    </>
  );
};

export default BangalorePage;
