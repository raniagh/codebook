import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProduct";
import { Hero } from "./components/Hero";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Faq />
    </main>
  );
};
