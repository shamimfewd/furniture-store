import { useForm } from "react-hook-form";

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
    <div className="bg-gray-600 flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.name && <span>This field is required</span>}
        <br />
        <br />
        <input {...register("description", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.description && <span>This field is required</span>}
        <br />
        <br />
        <input type="submit" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default AddProduct;
