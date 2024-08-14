import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../../Images/007.png'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleclick = () => setNav(!nav)
    return (
        <div >
            <nav id="header" class="fixed w-full z-30 top-0 backdrop-blur-lg text-white">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-5">
                    <div class="pl-4 flex ">
                        <a class="toggleColour items-center text-white inline-flex no-underline hover:no-underline font-bold text-3xl lg:text-4xl z-50" href="#">
                            <img width="150" class="z-50" src={logo} loading="lazy "></img>
                           
                        </a>
                    </div>

                    <div class=" flex items-center w-auto   mt-0 bg-transparent text-black  p-0 z-20" id="nav-content">
                        <ul class="list-reset lg:flex justify-end flex-1 items-center hidden xs:visible">
                        <a href="#" class="text-gray-500  hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-lg font-bold"><Link to="home" smooth={true} duration={500}>Home</Link></a>
                            <a href="#" class="text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-lg font-bold"><Link to="aboutus" smooth={true} duration={500}>About</Link></a>
                            <a href="#" class="text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-lg font-bold"><Link to="services" smooth={true} duration={500}>Services</Link></a>
                            <a href="#" class="text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-lg font-bold"><Link to="projects" smooth={true} duration={500}>Projects</Link></a>
                            <button
                                id="navAction"
                                class="mx-auto lg:mx-0 hover:underline bg-blue-500 text-gray-200 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-90 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                                <Link to="contactus" smooth={true} duration={500}>Contact Us</Link>
                            </button>
                        </ul>
                        <div onClick={handleclick} className='md:hidden z-10 hover:cursor-pointer' style={{ width: '50px' }}>
                            {!nav ? <FaBars color='rgb(59 130 246)' size={30} /> : <FaTimes color='rgb(59 130 246)' size={30} />}
                        </div>
                        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-gray-950 flex flex-col justify-center items-center'}>
                            <li className='py-5 text-blue-500 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className='py-5 text-blue-500 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="aboutus" smooth={true} duration={500}>About</Link></li>
                            <li className='py-5 text-blue-500 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="services" smooth={true} duration={500}>Services</Link></li>
                            <li className='py-5 text-blue-500 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="projects" smooth={true} duration={500}>Projects</Link></li>
                            <li className='py-5 text-blue-500 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="contactus" smooth={true} duration={500}>Contact Us</Link></li>
                        </ul>

                    </div>
                </div>
                <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </div>
    )
}

export default NavBar