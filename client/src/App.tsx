import "react-multi-carousel/lib/styles.css";
import BannerCategories from "./ui/BannerCategories";
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Highlights";
import Categories from "./ui/Categories";
import Blog from "./ui/Blog";
import DiscountedBanner from "./ui/DiscountedBanner";
import ProductList from "./ui/ProductList";

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Hightlights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <Blog />
    </main>
  );
}

export default App;
