import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import ProductDetails from "../Pages/DatailsPage/ProductDetails";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: () => fetch("/productData.json"),
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
