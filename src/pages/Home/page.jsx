import AboutUs from "./components/aboutus";
import Categories from "./components/categories";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import ProductSlider from './components/ProductSlider';
import OutfitSlider from './components/OutfitSlider';

export default function Home() {
  return (
    <main>
      <Welcome />
      <Categories />
      <ProductSlider />
      <OutfitSlider />
      <AboutUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
