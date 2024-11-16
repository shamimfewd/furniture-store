import { useLoaderData, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();

  const currentProduct = loaderData?.find((item) => item.id === parseInt(id));
  
  const {
    material,
    images,
    name,
    price,
    description,
    category,
    brand,
    color,
    dimensions,
    rating,
  } = currentProduct;
  return (
    <div>
      <div className="max-w-7xl ms-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
        <div>
          <img src={images} alt="" />
        </div>
        <div className="ml-20">
          <div className="flex gap-2 ">
            <h3 className="text-3xl">{name}</h3>
            <p className="mt-3">({rating}% ratings)</p>
          </div>
          <div className="flex gap-2">
            <p className="text-2xl text-orange-500">${price}</p>
            <p className="text-sm mt-2  line-through font-bold">$500</p>
          </div>
          <p className="mt-8">{description}</p>

          {/* product details */}

          <div className="overflow-x-auto mt-8">
            <table className="table ">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="font-bold">Category :</td>
                  <td>{category}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="font-bold">Material :</td>
                  <td>{material}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="font-bold">Brand :</td>
                  <td>{brand}</td>
                </tr>
                <tr>
                  <td className="font-bold">Width :</td>
                  <td>{dimensions.width}</td>
                </tr>
                <tr>
                  <td className="font-bold">Height :</td>
                  <td>{dimensions.height}</td>
                </tr>
                <tr>
                  <td className="font-bold">Depth :</td>
                  <td>{dimensions.depth}</td>
                </tr>
                <tr>
                  <td className="font-bold">Color :</td>
                  <td>{color}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* add to cart btn */}
          <div className="flex gap-4 mt-8">
            <div className="flex justify-center items-center gap-8 bg-slate-200 px-4 ">
              <FaMinus className="text-2xl" />

              <p className="text-2xl ">0</p>

              <FaPlus className="text-2xl" />
            </div>
            <button className="btn rounded-none">Add to Cart</button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <RelatedProduct loaderData={loaderData} currentProduct={currentProduct} />
    </div>
  );
};

export default ProductDetails;
