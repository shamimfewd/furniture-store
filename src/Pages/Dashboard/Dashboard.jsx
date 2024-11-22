import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-600 h-[100vh]">
        <ul>
          <li>
            <Link to={"/"}>Go Home</Link>
          </li>
          <li>
            <NavLink to={"/dashboard/adminHome"}>Admin Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addProduct"}>Add Product</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addProduct"}>Add Product</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addProduct"}>Add Product</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
