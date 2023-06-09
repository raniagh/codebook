import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProduct";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Faq />
      <Testimonials />
    </main>
  );
};
