import React from "react"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AdsClickIcon from '@mui/icons-material/AdsClick';
function Footer() {
  return (
    <footer className="dark bg-[#0d0d0eec] text-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-12">
          <div className="flex items-center space-x-2">
            <AdsClickIcon className="h-6 w-6" />
            <span className="text-2xl font-bold">Coding Duniya</span>
          </div>
          <nav className="flex space-x-4">
          <a className="hover:underline" href="#">
            Home
            </a>
            <a className="hover:underline" href="#">
            Services
            </a>
            <a className="hover:underline" href="#">
              About us
            </a>
            <a className="hover:underline" href="#">
            Courses
            </a>
            <a className="hover:underline" href="#">
            Projects
            </a>
          </nav>
          <div className="flex space-x-4">
            <a className="hover:text-gray-100" href="#">
              <FacebookOutlinedIcon className="h-6 w-6" />
            </a>
            <a className="hover:text-gray-100" href="#">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a className="hover:text-gray-100" href="#">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="text-sm text-gray-400">© 2023 CodingDuniya. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}


export default  Footer