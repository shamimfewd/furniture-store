import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";

const AddProduct = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const { name, description } = data;

    const productInfo = {
      name: data.name,
      description: data.description,
      price: data.price,
    };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("ok");
          console.log(data.insertedId);
        }
      });
  };

  return (
    <div className="bg-[#FDFDFE]">
      <SectionTitle title={"Add Product"} />
      <div className=" ">
        <form onSubmit={handleSubmit(onSubmit)} className="ml-20">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              {/* Name and Description Area  ==================*/}
              <div className="border p-5 bg-[#FFFFFF] rounded-md shadow-sm">
                <div className="p-2">
                  <h4 className="text-lg pb-4">General Information</h4>
                  <label className="text-gray-600 text-sm" htmlFor="name">
                    Product Name
                  </label>
                  <input
                    className="w-full  bg-[#f2f2f2a0] p-2 rounded-md border-none outline-none"
                    {...register("name", { required: true })}
                    placeholder="Product Name"
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.name && <span>This field is required</span>}
                </div>

                <div className="p-2">
                  <label
                    className="text-gray-600 text-sm"
                    htmlFor="description"
                  >
                    Product Description
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="w-full bg-[#f2f2f2a0] p-2 rounded-md border-none outline-none"
                    {...register("description", { required: true })}
                    placeholder="Product Description"
                  ></textarea>

                  {/* errors will return when field validation fails  */}
                  {errors.description && <span>This field is required</span>}
                </div>
              </div>

              {/* Pricing Area============================= */}
              <div className="border p-5 mt-4 bg-[#FFFFFF] rounded-md shadow-sm">
                <div className="p-2">
                  <h4 className="text-lg pb-4">Pricing</h4>
                  <label className="text-gray-600 text-sm" htmlFor="name">
                    Base Price
                  </label>
                  <input
                    className="w-full  bg-[#f2f2f2a0] p-2 rounded-md border-none outline-none"
                    {...register("price", { required: true })}
                    placeholder="$ 25.50"
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.price && <span>This field is required</span>}
                </div>
              </div>
            </div>
            <div className="mr-8">
              {/* Media Area================ */}
              <div className="border p-5 bg-[#FFFFFF] rounded-md shadow-sm mb-4">
                <div className="p-2">
                  <h4 className="text-lg pb-4">Product Media</h4>
                  <label className="text-gray-600 text-sm" htmlFor="name">
                    Product Photo
                  </label>
                  <input
                    type="file"
                    className="w-full text-gray-400 file-input-ghost cursor-pointer bg-[#f2f2f2a0] p-2 rounded-md border-none outline-none"
                    {...register("image", { required: true })}
                    placeholder=""
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.image && <span>This field is required</span>}
                </div>
              </div>
              {/* Category Area============================= */}
              <div className="border p-5 bg-[#FFFFFF] rounded-md shadow-sm">
                <div className="p-2">
                  <h4 className="text-lg pb-4">Category</h4>

                  <label className="text-gray-600 text-sm" htmlFor="name">
                    Product Photo
                  </label>
                  <select className="select  w-full rounded-md bg-[#f2f2f2a0]">
                    <option disabled selected>
                      Chose a Category
                    </option>
                    <option>Dining Room</option>
                    <option>Office</option>
                    <option>Living Room</option>
                    <option>Bedroom</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                {" "}
                <input
                  type="submit"
                  className="cursor-pointer bg-[#1F2937] w-full transition-all	 hover:bg-[#415A77] text-white rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
