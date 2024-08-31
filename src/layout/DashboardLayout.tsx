/* eslint-disable @typescript-eslint/no-explicit-any */
import { CgProfile } from "react-icons/cg";
import { FaBars, FaHome, FaUsers } from "react-icons/fa";
import { MdDirectionsBike, MdElectricBike } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { RiCoupon3Fill } from "react-icons/ri";

const DashboardLayout = () => {
  const { user } = useAppSelector((state) => state?.auth);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 ">
        <label
          htmlFor="my-drawer-2"
          className="btn  btn-active btn-ghost drawer-button lg:hidden"
        >
          <FaBars></FaBars>{" "}
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className=" drawer-side  lg:bg-gray-900">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60  border-r-2 border-gray-500 bg-gray-900 opacity-90 min-h-full text-xl">
          {/* Sidebar content here */}
          {user && user?.role !== "admin" ? (
            <>
              <li className="text-white">
                <NavLink to="/dashboard/user-profile">
                  <CgProfile />
                  Profile
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/dashboard/my-rentals">
                  <MdDirectionsBike />
                  My Rentals
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-white">
                <NavLink to="/dashboard/admin-profile">
                  <CgProfile />
                  Profile
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/dashboard/bike-management">
                  <MdElectricBike />
                  Bike Manage
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/dashboard/user-management">
                  <FaUsers />
                  User Manage
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/return-rental-bike">
                  <MdElectricBike />
                  Return Bike
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/dashboard/coupon-manage">
                  <RiCoupon3Fill />
                  Coupon
                </NavLink>
              </li>
            </>
          )}
          <div className="divider divider-neutral"></div>
          <li className="text-white">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <button
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
