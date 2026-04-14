import React from "react";
import NavbarStructure from "./NavbarStructure";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Navlogo from "../../assets/asset/navlogo.png";

const Navbar = () => {
  const links = (
    <div className="flex justify-center items-center gap-2 md:gap-6 text-gray-600">
      <NavbarStructure to={"/"}>
        <IoHomeOutline />
        Home
      </NavbarStructure>
      <NavbarStructure to={"/timeline"}>
        <RiTimeLine />
        Timeline
      </NavbarStructure>
      <NavbarStructure to={"/stats"}>
        <ImStatsDots />
        Stats
      </NavbarStructure>
    </div>
  );
  return (
    <header className="sticky top-0 z-50 bg-base-300 shadow-sm p-3">
      <nav className="navbar max-w-300 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-l justify-center dropdown-content bg-base-100 rounded-box z-1 mt-8 text-[14px] md:text-[18px] max-w-83 md:max-w-96 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="hidden sm:block" src={Navlogo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Sign In</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
