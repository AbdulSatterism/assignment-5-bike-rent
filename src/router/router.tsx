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
import BikeManagement from "../pages/dashboard/admin/BikeManagement";
import UserManagement from "../pages/dashboard/admin/UserManagement";
import ReturnRentalBike from "../pages/dashboard/admin/ReturnRentalBike";
import NotFound from "../pages/NotFound";
import Contact from "../pages/home/contact/Contact";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoute";
import AdminProtected from "./AdminProtected";
import Coupon from "../pages/dashboard/admin/Coupon";
import ViewBikes from "../pages/dashboard/user/bikeManagement/ViewBikes";

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
        path: "/all-bike",
        element: <AllBike />,
      },
      {
        path: "/bike-details/:id",
        element: <BikeDetails />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-testimonial",
        element: <AllTestimonial />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
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
        path: "view-bikes",
        element: <ViewBikes />,
      },

      // admin routes
      {
        index: true,
        element: (
          <AdminProtected>
            <UserProfile />
          </AdminProtected>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <AdminProtected>
            {" "}
            <UserProfile />
          </AdminProtected>
        ),
      },
      {
        path: "bike-management",
        element: (
          <AdminProtected>
            <BikeManagement />
          </AdminProtected>
        ),
      },
      {
        path: "user-management",
        element: (
          <AdminProtected>
            {" "}
            <UserManagement />
          </AdminProtected>
        ),
      },
      {
        path: "return-rental-bike",
        element: (
          <AdminProtected>
            <ReturnRentalBike />
          </AdminProtected>
        ),
      },
      {
        path: "coupon-manage",
        element: (
          <AdminProtected>
            <Coupon />
          </AdminProtected>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
