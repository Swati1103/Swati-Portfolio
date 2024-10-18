import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 h-14 px-10 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src="https://img.freepik.com/premium-vector/sw-letter-logo-design-black-background-initial-monogram-letter-sw-logo-design-vector-template_634196-1211.jpg" alt="logo" className="h-8 w-8 mr-2 rounded-full" />
        <div className="text-white text-lg">Swati.io</div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            Home
          </div>
        </Link>
        <Link to="/about">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            About
          </div>
        </Link>
        <Link to="/skills">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            Skills
          </div>
        </Link>
        <Link to="/education">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            Education
          </div>
        </Link>
        <Link to="/projects">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            Projects
          </div>
        </Link>
        <Link to="/experience">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            Experience
          </div>
        </Link>
        <Link to="/contact">
          <div className="border border-white px-4 py-1 text-white text-lg rounded-2xl hover:bg-gray-400 hover:underline hover:text-black hover:border-2">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
