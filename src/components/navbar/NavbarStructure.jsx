import React from "react";
import { NavLink } from "react-router-dom";

const NavbarStructure = ({ children, to }) => {
  return (
    
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium
        ${isActive === true ? "bg-[#244D3F] text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          {children}
        </NavLink>
      </li>
    
  );
};

export default NavbarStructure;
