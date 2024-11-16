import ProductCard from "../../Components/ProductCard";

const RelatedProduct = ({ loaderData, currentProduct }) => {
  const currentItem = loaderData.filter(
    // eslint-disable-next-line react/prop-types
    (item) => item.category == currentProduct.category
  );
  console.log(currentItem);
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl text-center my-24">Related Products</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-24">
        {currentItem.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
