import React from "react";
import { FaCamera, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#244D3F] p-2 md:py-6 px-4 mt-10">
      <div className="max-w-280 mx-auto mt-4">
        <div className="text-center space-y-3 text-white">
          <h1 className="text-3xl md:text-5xl font-bold ">KeenKeeper</h1>
          <p className="text-[15px] md:text-4 max-w-150 mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h3 className="text-[20px] md:text-2xl font-semibold">
            Social Links
          </h3>
          <div className="flex justify-center items-center gap-3 mb-3">
            <FaCamera className="w-6 h-6 cursor-pointer" />
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaSquareXTwitter className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <hr className="text-gray-600" />
        <div className="flex flex-col space-y-2 items-center md:flex-row md:justify-between md:space-y-0 mt-3 text-gray-400 ">
          <p className="text-[15px] md:text-4 text-center">© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex gap-5">
            <li className="text-[14px] md:text-4 cursor-pointer">Privacy Policy</li>
            <li className="text-[14px] md:text-4 cursor-pointer">Terms of Service</li>
            <li className="text-[14px] md:text-4 cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
