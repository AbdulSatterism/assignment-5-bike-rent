import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AllTestimonial from "../pages/home/Testimonial/AllTestimonial";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../pages/dashboard/user/UserProfile";
import AllBike from "../pages/dashboard/user/bikeManagement/AllBike";
import BikeDetails from "../pages/dashboard/user/bikeManagement/BikeDetails";
import MyRentalPage from "../pages/dashboard/user/MyRentalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "//all-testimonial",
        element: <AllTestimonial />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      //user part
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "my-rentals",
        element: <MyRentalPage />,
      },
      {
        path: "all-bikes",
        element: <AllBike />,
      },
      {
        path: "bike-details/:id",
        element: <BikeDetails />,
      },
    ],
  },
]);

export default router;
