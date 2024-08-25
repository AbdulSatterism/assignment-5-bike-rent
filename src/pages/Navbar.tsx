import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/">Home</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/all-products">All Products</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/dashboard">Manage Product</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-xl text-white  hover:text-[#0fb89c]">
        <Link to="/about-us">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-[#04211c]  max-w-screen-xl mx-auto print:hidden">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
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
              className="menu menu-sm dropdown-content  bg-[#04211c] z-10 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="avatar w-20 text-white items-center">
            <img className="" src="" alt="" />
            <h1 className="text-2xl font-bold">Bike Share</h1>
          </div>
        </div>
        <div className="hidden navbar-center  lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItem}</ul>
        </div>
        {/* <div className="navbar-end">
          <Link to="/cart-details">
            <div className="text-2xl flex text-white mr-2">
              <MdShoppingCartCheckout />
              <div className="badge shadow-xl  font-bold text-[#070811]">
                +{cartProduct?.length}
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
