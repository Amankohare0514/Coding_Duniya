import React from "react"
function Home() {
    return (
        <div className="bg-[#2c55eaf6]">
            <div className="container mx-auto px-4 py-12 md:flex md:items-center md:justify-between md:py-24">
                <div className="space-y-6 text-white md:w-1/2">
                    <div className="text-sm uppercase tracking-widest">hey everyone</div>
                    <h1 className="text-4xl font-bold leading-tight md:text-6xl">Welcome to Coding Duniya</h1>
                    <p className="text-xl">Your Gateway to Lifelong Learning!</p>
                    <p className="text-lg">
                    "Explore a world of knowledge with Coding Duniya,
                     your go-to destination for discovering new and free courses across diverse subjects."
                    </p>
                    <button className="bg-[#3385ff] text-white py-2 px-4 rounded-full shadow-md hover:bg-stone-200 hover:text-black">Get in touch</button>
                </div>
                <div className="md:w-1/2">
                    <img
                        alt="Infosparkles Illustration"
                        className="mt-8 md:mt-0  "
                        height="900"
                        src="homegif.gif" 
                        width="800"
                    />
                </div>
            </div>
        </div>
    )
}


export default Home