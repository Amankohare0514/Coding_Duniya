import React from "react";

export default function Thanks() {
  return (
    <section className="bg-[#2c55eaf6]  w-full py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className=" text-4xl font-bold tracking-tighter  text-white">
              Welcome to Our Website
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
              Enter your email to stay up to date with our latest news and updates.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex flex-col space-y-2 items-center">
              <input
                className="w-full px-4 py-2 border bg border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                type="email"
              />
              <button
              onClick={()=>alert("thanks for Subscribe!!")}
                type="submit"
                className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-blue-300 focus:outline-none focus:ring focus:border-blue-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
