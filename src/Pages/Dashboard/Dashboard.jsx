import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" ">
        {/*  */}
        <div className="drawer lg:drawer-open w-64 bg-gray-600 h-[100vh]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}

              <li>
                <Link to={"/"}>Go Home</Link>
              </li>
              <li>
                <NavLink to={"/dashboard/adminHome"}>Admin Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addProduct"}>Add Product</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/*  */}
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
