"use client";

import { useState } from "react";

function Handle(){

    const [navOpen, setNavOpen] = useState(false);
    console.log("Currently Nav is open of not ? : "+ navOpen);



    return (    
        <nav className="bg-gray-100">
            <div className="flex flex-col justify-between bg-red-100 p-4 md:flex-row">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-4xl ">Brand</h1>
                    <button className="md:hidden" onClick={()=>{setNavOpen(!navOpen)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                
                <ul className={"md:flex space-x-0 space-y-4 text-2xl mr-4 md:flex-row items-center md:space-x-10 md:space-y-0 text-center transform duration-300 translate-x-full md:translate-x-0 " 
                    + (navOpen ? "translate-x-0": "translate-x-full")}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">ContactUS</a></li>
                </ul>

            </div>
            
        </nav>
    )
}


export default Handle;