import React from "react";
import NavbarStructure from "./NavbarStructure";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Navlogo from "../../assets/asset/navlogo.png";

const Navbar = () => {
  const links = (
    <>
      <NavbarStructure to={"/"}>
        <IoHomeOutline className="text-xl" />
        <span>Home</span>
      </NavbarStructure>
      <NavbarStructure to={"/timeline"}>
        <RiTimeLine className="text-xl" />
        <span>Timeline</span>
      </NavbarStructure>
      <NavbarStructure to={"/stats"}>
        <ImStatsDots className="text-xl" />
        <span>Stats</span>
      </NavbarStructure>
    </>
  );
  return (
    <header className="sticky top-0 z-50 bg-base-300 shadow-sm">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar h-20 px-0">
          <div className="navbar-start">
            <div className="flex items-center gap-2">
              <img className="h-8 w-auto" src={Navlogo} alt="KeenKeeper Logo" />
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 p-0">
              {links}
            </ul>
          </div>
        
          <div className="navbar-end lg:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52 border border-gray-100">
                {links}
                <div className="divider my-1"></div>
                <li><a className="bg-[#244D3F] text-white py-2 justify-center">Sign In</a></li>
              </ul>
            </div>
            
            <a className="btn bg-[#244D3F] hover:bg-[#1a3a30] text-white border-none ml-4 hidden sm:flex">
              Sign In
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;