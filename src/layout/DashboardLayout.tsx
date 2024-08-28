import { CgProfile } from "react-icons/cg";
import { FaBars, FaHome, FaUsers } from "react-icons/fa";
import { MdDirectionsBike, MdElectricBike } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
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
        <ul className="menu p-4 w-52   bg-gray-900 opacity-90 min-h-full text-xl">
          {/* Sidebar content here */}
          {/* user routes */}
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
          <li className="text-white">
            <NavLink to="/dashboard/all-bikes">
              <MdElectricBike />
              All Bikes
            </NavLink>
          </li>

          {/* admin */}
          <div className="divider divider-neutral"></div>
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

          <div className="divider divider-neutral"></div>

          <li className="text-white">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
