import React from "react"
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
function OurSerives() {
  return (
    <section className="bg-[#2c55eaf6] w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-white font-bold text-sm  tracking-tighter sm:text-3xl md:text-4xl">Our Services</h2>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-lg overflow-hidden hover:border">
            <div className="p-6">
              <AddToPhotosIcon className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">Projects</h3>
              <p className="text-gray-300 mb-4">find projects based on your skills</p>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden hover:border">
            <div className="p-6">
              <AddRoadIcon className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">courses</h3>
              <p className="text-gray-300 mb-4">find many courses and gain skills</p>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden hover:border">
            <div className="p-6">
              <FileCopyIcon className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">Documentation</h3>
              <p className="text-gray-300 mb-4">follow the documentation and learn</p>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default OurSerives