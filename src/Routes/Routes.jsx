import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    Children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

 
]);

export default router;
