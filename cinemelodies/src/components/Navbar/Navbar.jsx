import React from 'react';
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="bg-yellow-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center h-16">
        <div className="flex-shrink-0">
          <span className="text-white font-bold text-lg">CineMelodies</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ABOUT</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
