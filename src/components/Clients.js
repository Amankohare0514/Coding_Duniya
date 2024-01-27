import React from "react"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Card } from "@material-tailwind/react";
function Clients() {
  return (
    <div className="bg-[#2c55eaf6]">
      <h1 className="text-3xl text-center font-bold text-white">What they think about our services</h1>
      <div className=" px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16 lg:space-y-0 lg:flex lg:space-x-8">
          <Card className="flex flex-col items-center bg-gray-300 p-8 text-center shadow-lg">
            <blockquote className="relative flex-1">
           <FormatQuoteIcon/>
              <p className="text-lg font-medium text-gray-900">
                "They have a professional team with wide understanding of clients need. Despite of the distance they are
                always available just a message away. Very professional and absolute delight to work with. Highly
                recommended."
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <div className="text-lg font-medium text-blue-600">Aman</div>
            </figcaption>
          </Card>
          <Card className="flex flex-col items-center bg-gray-300  p-8 text-center shadow-lg">
            <blockquote className="relative flex-1">
            <FormatQuoteIcon/>
              <p className="text-lg font-medium text-gray-900">
                "Did what I asked, did a good job of it aswell. Site was a process but in the end their priority was that
                I got the website exactly the way I had envisioned it. I could not be happier, 5/5 stars."
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <div className="text-lg font-medium text-blue-600">Piyush</div>
            </figcaption>
          </Card>
          <Card className="flex flex-col items-center bg-gray-300  p-8 text-center shadow-lg">
            <blockquote className="relative flex-1">
            <FormatQuoteIcon/>
              <p className="text-lg font-medium text-gray-900">
                "Excellent Team. Patient, knowledgeable. Beside delays from my side, they kept on working and delivered
                beyond expectations. Multiple changes in blog, php, mysql db. All done multiple times, without any issue.
                Highly recommended."
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <div className="text-lg font-medium text-blue-600">Ratnesh</div>
            </figcaption>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Clients