import React from "react"

function Navbar() {
  return (
    <nav className="bg-[#0052cc] ">
    <div className="container mx-auto flex items-center justify-between">
      <a className="flex items-center" href="#">
        <img
          alt="Logo"
          className="h-[100px] w-[150px] mr-3"  
          src="duniyalogo.png" 
        />
        </a>
        <div className="lg:flex items-center hidden">
          <ul className="flex space-x-8 mr-8">
            <li>
              <a className="text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-white text-sm font-semibold border-b-2 border-transparent hover:border-white hover:font-bold" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="bg-[#3385ff] hover:bg-stone-200 hover:text-black text-white font-semibold py-2 px-4 rounded-full shadow-md">
            Request a free quote
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