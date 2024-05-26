import {
  Navbar,
  BigSidebar,
  FlashSales,
} from './components';
import { Hero } from './pages/Dashboard';
import {
  categories_card,
  iphones,
} from './components/Data';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import BestSellingProducts from './components/BestSellingProducts';
import BigCard from './components/BigCard';
import ExploreProducts from './components/ExploreProducts';
import NewArrival from './components/NewArrival';

function App() {
  return (
    <>
      <Navbar />
      <BigSidebar images={iphones} />
      <Carousel />
      <Categories images={categories_card} />
      <BestSellingProducts />
      <BigCard />
      <ExploreProducts />
      <NewArrival />
    </>
  );
}

export default App;
