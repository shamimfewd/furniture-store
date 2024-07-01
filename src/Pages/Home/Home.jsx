import Offer from "../../Components/Offer";
import Blogs from "./Blogs";
import Feature from "./Feature";
import Hero from "./Hero";
import HorizontalScroll from "./HorizontalScroll";

import Parallex from "./Parallex";
import ProductShowcase from "./ProductShowcase";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <HorizontalScroll />
      <ProductShowcase />
      <Feature />
      <Offer />
      <Products />
      <Parallex />
      <Blogs />
    </div>
  );
};

export default Home;
