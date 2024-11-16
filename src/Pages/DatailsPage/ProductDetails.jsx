import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  //   const parsIn = parsInt(id);
  const currentProduct = loaderData?.find((item) => item.id === parseInt(id));
  console.log(loaderData);
  return (
    <div className="max-w-7xl ms-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <h1>{currentProduct.name}</h1>
      </div>
      <div>ok</div>
    </div>
  );
};

export default ProductDetails;
