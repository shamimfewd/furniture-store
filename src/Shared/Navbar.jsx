import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [test, setTest] = useState(false);
  const handleCheck = () => {
    setTest(true);
  };
  console.log(test);
  const navOptions = (
    <>
      <ul className=" lg:flex lg:space-x-4">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Products</NavLink>
        </li>
        <li>
          <NavLink>Dashboard</NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <Link to={"/"} className="text-2xl font-bold">
                {" "}
                <span className="text-red-400">Comfort</span> Cove
              </Link>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {!isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8h16M4 16h16"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative mt-4 lg:mt-0 lg:mx-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                placeholder="Search"
              />
            </div>
            <div
              className={`lg:flex lg:items-center lg:justify-between ${
                isOpen ? "" : "hidden"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                {navOptions}
                <ul
                  onTouchMove={handleCheck}
                  className="menu menu-horizontal px-1 "
                >
                  <li>
                    <details className="">
                      <summary>Blogs</summary>
                      <ul className="p-2 w-screen">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>

              <div className="flex  mt-6 lg:flex lg:mt-0 lg:-mx-2 gap-6">
                <button className="relative">
                  <span className="w-[20px] h-[20px] bg-red-500 text-white p-2 rounded-full absolute flex items-center justify-center -right-1 -top-1">
                    12
                  </span>
                  <IoIosHeartEmpty className="text-3xl " />
                </button>
                <button className="relative">
                  <span className="w-[20px] h-[20px] bg-red-500 text-white p-2 rounded-full absolute flex items-center justify-center -right-1 -top-1">
                    12
                  </span>
                  <BsBag className="text-2xl" />
                </button>


                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="">
                    <div className="">
                      <button
                        className="flex justify-evenly border 
                      rounded-3xl items-center px-2 py-1 gap-2 "
                      >
                        <span className="">
                          <RxHamburgerMenu className="text-2xl" />
                        </span>

                        <img
                          className="rounded-full w-8 h-8 
                             "
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>

                {/* ================= */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
