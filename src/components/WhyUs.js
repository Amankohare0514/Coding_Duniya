import React from "react"
export default function WhyUs() {
  return (
    <>
    <div className="bg-[#2c55eaf6] text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2">
          <img
            alt="Isometric graphics"
            className="mb-4"
            height="400"
            src="whyuslogo.png"
            width="600"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <p className="text-xl">
          Coding Duniya is a vibrant online platform that revolutionizes the way individuals learn and engage
           with coding. This dynamic website offers users a plethora of free courses, providing a gateway 
           for enthusiasts to enhance their coding skills without any financial barriers. The platform 
           covers a diverse range of programming languages, frameworks, and technologies, ensuring that 
           learners have access to a comprehensive curriculum. What sets Coding Duniya apart is its 
           commitment to not only theoretical knowledge but also practical application. Users can delve 
           into a multitude of projects that serve as hands-on exercises, allowing them to apply their
            newly acquired skills in real-world scenarios. 
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

