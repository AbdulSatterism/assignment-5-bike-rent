import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AllTestimonial from "../pages/home/Testimonial/AllTestimonial";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../pages/dashboard/user/UserProfile";

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
    ],
  },
]);

export default router;
