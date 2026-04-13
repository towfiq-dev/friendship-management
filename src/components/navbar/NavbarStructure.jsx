import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarStructure = ({children, to, className}) => {
  return (
    <div>
      <li>
        <NavLink 
        to={to} 
        className={({isActive})=> 
        `${className} 
        ${isActive === true? 
        'bg-[#244D3F] text-white'
        : ''}`}>
          {children}
          </NavLink>
      </li>
    </div>
  );
};

export default NavbarStructure;