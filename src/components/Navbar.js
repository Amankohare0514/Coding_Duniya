import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
  return (
    <nav className="bg-[#0052cc] ">
    <div className="container mx-auto flex items-center justify-between">
      <Link to="/">
      <a className="flex items-center" >
        <img
          alt="Logo"
          className="h-[90px] w-[150px] mr-3"  
          src="duniyalogo.png" 
        />
        </a>
        </Link>
        <div className="lg:flex items-center hidden">
          <ul className="flex space-x-8 mr-8">
            <li>
            <Link to="/services">
              <a className="text-gray-200 hover:text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold" >
             Services
              </a>
             </Link>
            
            </li>
            <li>
              <Link to="/about">
              <a className="text-gray-200 hover:text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold">
                About Us
              </a>
              </Link>
            </li>
            <li>
              <Link to="/courses">
              <a className="text-gray-200 hover:text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold" >
              Courses
              </a>
              </Link>
            </li>
            <li>
             <Link to="/projects">
              <a className="text-gray-200 hover:text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold">
               Projects
              </a>
              </Link>
            </li>
          </ul>
          <button className="bg-[#3385ff] hover:bg-stone-200 hover:text-black text-gray-200 font-semibold py-2 px-4 rounded-full shadow-md">
      <Link to="/contact">
      Contact Us
      </Link>     
          </button>
        </div>
        <div className="lg:hidden flex items-center pr-8">
          <button className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}


export default Navbar