import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
    console.log(data);
  };

  return (
    <div className="p-10 bg-slate-400 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="flex justify-center items-center  py-4 bg-[#F7F7F7]  w-full h-full">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="mb-4">
                <h3 className="text-3xl">Registration</h3>
              </div>
              <label className="form-control  w-full ">
                <div className="label">
                  <span className="label-text text-lg text-gray-600">
                    Name :<span className="text-orange-700">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="name"
                  className=" input-bordered md:w-[20rem] lg:w-[30rem] w-full  bg-gray-200 border-none outline-none p-3 rounded-full "
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </label>
              <label className="form-control  w-full ">
                <div className="label">
                  <span className="label-text text-lg text-gray-600">
                    Email :<span className="text-orange-700">*</span>
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="email"
                  className=" input-bordered md:w-[20rem] lg:w-[30rem] w-full  bg-gray-200 border-none outline-none p-3 rounded-full"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </label>
              <label className="form-control  w-full ">
                <div className="label">
                  <span className="label-text text-lg text-gray-600">
                    Password :<span className="text-orange-700">*</span>
                  </span>
                </div>
                <input
                  type="password"
                  placeholder="password"
                  className="input-bordered md:w-[20rem] lg:w-[30rem] w-full  bg-gray-200 border-none outline-none p-3 rounded-full "
                  {...register("password", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </label>

              <input
                type="submit"
                value={"Register"}
                className="cursor-pointer btn w-full my-4 bg-gray-200 rounded-full text-gray-600"
              />
            </form>

            {/* social login */}
            <div className="flex w-full flex-col border-opacity-50">
              <p className="text-sm">
                Already you have an account please{" "}
                <Link to={"/login"} className="text-blue-800">
                  Log In
                </Link>{" "}
              </p>
              <div className="divider">OR</div>
              <div className="flex justify-center gap-4 place-items-center">
                <FcGoogle className="text-4xl" />
                <FaFacebook className="text-4xl text-[#0862F7]" />
                <FaTwitter className="text-4xl text-[#1C9BE9]" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
