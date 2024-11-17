import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      <h3 className="text-3xl">Registration</h3>
      <div className="flex justify-center items-center  bg-slate-300 w-1/3 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control  w-full ">
            <div className="label">
              <span className="label-text text-lg">Name</span>
            </div>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered w-full "
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>
          <label className="form-control  w-full ">
            <div className="label">
              <span className="label-text text-lg">Email</span>
            </div>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>
          <label className="form-control  w-full ">
            <div className="label">
              <span className="label-text text-lg">Password</span>
            </div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full "
              {...register("password", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>

          <input type="submit" value={"Register"} className="cursor-pointer btn w-full my-4" />
        </form>
      </div>
    </div>
  );
};

export default Register;
