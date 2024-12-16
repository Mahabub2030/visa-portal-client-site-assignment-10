import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import AllVisa from "../components/AllVisa";
import AddVisa from "../components/AddVisa";
import MyAddedVisa from "../components/MyAddedVisa";
import MyVisaApplication from "../components/MyVisaApplication";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:3000/visa"),
  },
  {
    path: "allvisa",
    element: (
      <PrivateRouter>
        <AllVisa></AllVisa>,
      </PrivateRouter>
      
    ),
    loader: () => fetch("http://localhost:3000/visa"),
  },

  {
    path: "/AddVisa",
    element: (
      <PrivateRouter>
        <AddVisa></AddVisa>,
      </PrivateRouter>
    ),
    loader: () => fetch("http://localhost:3000/visa"),

    // PRIVET ROUTE
  },
  {
    path: "/MyAddedVisa",
    element: (
      <PrivateRouter>
        <MyAddedVisa></MyAddedVisa>
      </PrivateRouter>
    ),
    // PRIVET ROUTE
  },
  {
    path: "/MyVisaApplication",
    element: (
      <PrivateRouter>
        <MyVisaApplication></MyVisaApplication>,
      </PrivateRouter>
    ),
    // PRIVET ROUTE
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Register",
    element: <Register></Register>,
  },
]);

export default routes;
