/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/features/auth/AuthSlice";
import { useEffect, useState } from "react";
// import { decodedToken } from "../utils/deocdedToken";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state?.auth);
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

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };

  const navItem = (
    <>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/">Home</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/about">About</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/dashboard">Dashboard</Link>
      </li>

      {token ? (
        <button
          onClick={handleLogout}
          className="btn btn-ghost text-xl btn-md hover:text-[#0fb89c] "
        >
          logout
        </button>
      ) : (
        <li className="text-xl text-white  hover:text-[#0fb89c]">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar border-b-2 shadow-lg border-blue-600  bg-gray-900 text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-gray-700 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-gray-700 z-10 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="avatar w-20 text-white items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold uppercase ">Bike Share</h1>
          </div>
        </div>
        <div className="hidden navbar-center  lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
