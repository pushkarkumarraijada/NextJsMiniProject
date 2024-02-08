"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import Home from '@/app/home/page';
import Services from '@/app/services/page';
import About from '@/app/about/page';
import ContactUS from '@/app/contact-us/page';


const page = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    function toggleNav(){
        setIsNavOpen(!isNavOpen);
    }

  return (
    <div>
        <nav className='md:flex justify-between'>
            {/* Brand and Icon */}
            <div className='flex flex-row justify-between md:block'>
                <h1>Brand</h1>
                {/* icon only for mobile */}
                <h1 className='md:hidden' onClick={toggleNav}>
                    {
                        isNavOpen ? <a><Image src={"/close.svg"} width={30} height={30}/> </a> 
                                : <a><Image src={"/hamburger-menu.svg"}  width={30} height={30}/> </a>
                    }
                </h1>
            </div>
            
            <div className={`md:block ${isNavOpen ? 'block' : 'hidden'}`}>

           
                <ul className={'md:flex h-screen md:h-auto justify-center items-center'}>
                     {/* + isNavOpen ? "flex-col":"flex-row" */}
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
    </div>
  )
}

export default page