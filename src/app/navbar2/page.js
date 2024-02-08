"use client";

import React, { useState } from 'react'
import Home from '@/app/home/page';
import Services from '@/app/services/page';
import About from '@/app/about/page';
import ContactUS from '@/app/contact-us/page';

function page() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    function toggleNav(){
        setIsNavOpen(!isNavOpen);
    }

  return (
    <nav>
        <div className='flex flex-col md:flex-row justify-between mx-10 '>
            {/* Brand & Icon */}
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-4xl bg-red-100 p-5'>Brand</h1>
                <button onClick={toggleNav} className='md:hidden'>
                    {
                        isNavOpen ? <h1 className=' bg-yellow-300 p-2 rounded '>CLOSED</h1> : <h1 className=' bg-yellow-300 p-2 rounded '>OPEN</h1>
                    }
                </button>
            </div>
            {/* Links */}
            <div className='hidden md:block'>
                <ul className='flex flex-row space-x-10 h-full items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>ContactUS</li>
                </ul>
            </div>
            {
                isNavOpen && (
                    <div className='md:hidden'>
                        <ul className='flex flex-col space-y-10 h-full items-center'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>ContactUS</li>
                        </ul>
                    </div>
                )
            }

        </div>
        <Home/>
        <Services/>
        <About/>
        <ContactUS/>
    </nav>
  )
}

export default page