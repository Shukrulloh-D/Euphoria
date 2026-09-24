import { HeroSlider } from "widgets/home-sections/hero-slider/hero-slider";
import { PromoBanners } from "widgets/home-sections/promo-banners/promo-banners";
import { NewArrival } from "widgets/home-sections/new-arrival/new-arrival";
import { BigSaving } from "widgets/home-sections/big-saving/big-saving";
import { BrandBanner } from "widgets/home-sections/brand-banner/brand-banner";
import { CategoriesMen } from "widgets/home-sections/categories-men/categories-men";
import { CategoriesWomen } from "widgets/home-sections/categories-women/categories-women";
import { TopBrands } from "widgets/home-sections/top-brands/top-brands";
import { Limelight } from "widgets/home-sections/limelight/limelight";
import { Feedback } from "widgets/home-sections/feedback/feedback";

export const HomePage = () => (
  <div className="pageFadeIn">
    <HeroSlider />
    <PromoBanners />
    <NewArrival />
    <BigSaving />
    <BrandBanner />
    <CategoriesMen />
    <CategoriesWomen />
    <TopBrands />
    <Limelight />
    <Feedback />
  </div>
);
