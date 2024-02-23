import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "./logo.png"


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center h-16">
      <div className= " flex-shrink-0 flex items-center">
      <img className=" w-16 p-0 self-center " src={Logo} />
          <span className="text-white font-bold text-lg">CineMelodies</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/movieContainer" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME / RECOMMENDED</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
