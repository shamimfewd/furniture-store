import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import ProductCard from "../../Components/ProductCard";
import Button from "../../Components/Button";
import useAxios from "../../Hook/useAxios";

const Products = () => {
  const test = useAxios();
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(12);

  const handleLoadMore = () => {
    setVisible((prevData) => prevData + 4);
  };

  const handleLoadLess = () => {
    setVisible((prevData) => prevData - 4);
  };

  // fetch all data
  const getData = async () => {
    const { data } = await test.get("/getProducts");
    setProducts(data);
  };

  getData();
  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <SectionTitle heading={"Products"} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {products.slice(0, visible).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length > visible ? (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="w-full btn px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-sm lg:w-auto hover:bg-[#415A77] "
          >
            Load More
          </button>

          <button
            onClick={handleLoadLess}
            className="w-full btn px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-sm lg:w-auto hover:bg-[#415A77] "
          >
            READ LESS
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={handleLoadLess}
            className="w-full btn px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-sm lg:w-auto hover:bg-[#415A77] "
          >
            READ LESS
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
