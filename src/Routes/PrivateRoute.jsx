import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
