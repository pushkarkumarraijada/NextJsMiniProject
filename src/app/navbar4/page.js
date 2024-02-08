"use client";

import React, { useState } from 'react'
import Home from '@/app/home/page';
import Services from '@/app/services/page';
import About from '@/app/about/page';
import ContactUS from '@/app/contact-us/page';

function page() {

    const [navOpen, setNavOpen] = useState(false);

  return (
    <main>
        <nav className=''>
            
            <div className='fixed w-full flex justify-between h-20 p-8 bg-slate-400 z-20'>
                {/* Logo & Icon */}
                <div className='flex justify-between w-full h-full md:w-auto items-center'>
                    <h1>Pushkar</h1>
                    <button className='md:hidden ' onClick={()=>{setNavOpen(!navOpen)}}>
                        { navOpen ? "CLOSE": "OPEN"}
                    </button>
                </div>
                <ul className='hidden md:flex md:flex-row md:space-x-3 md:items-center'>
                    <li className='text-center'><a href='#about'>About</a></li>
                    <li className='text-center'><a href='#home' >Home</a></li>
                    <li className='text-center'><a href='#services' >Services</a></li>
                    <li className='text-center'><a href='#contact-us' >Contact Us</a></li>
                </ul>
            </div>

            {/* small screen */}
            <div className={"absolute h-screen w-full top-20 bg-green-100 transition-all duration-300 " + (navOpen ? " translate-y-0" : " -translate-y-full") }>
                    <ul className='space-y-6 pt-6'>
                        <li className='text-center'><a href='#about'>About</a></li>
                        <li className='text-center'><a href='#home' >Home</a></li>
                        <li className='text-center'><a href='#services' >Services</a></li>
                        <li className='text-center'><a href='#contact-us' >Contact Us</a></li>
                    </ul>
            </div>
          
        </nav>
        <Home/>
        <Services/>
        <About/>
        <ContactUS/>
    </main>

  )
}

export default page