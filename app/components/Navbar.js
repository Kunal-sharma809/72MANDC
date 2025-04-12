"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 overflow-hidden">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/logo.jpg" className="h-8" alt="72MANDC Logo" />
                    <span className="self-center text-2xl font-semibold">72MANDC</span>
                </a>
                <button onClick={()=> {toggleNavbar()}} onBlur={() => {setTimeout(() => {setIsOpen(!isOpen)},100)}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="navbar-default" className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <Link href="/" className="block py-2 px-3 rounded-sm md:p-0" aria-current="page">Home</Link>
                        <Link href="/about" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">About Us</Link>
                        <Link href="/projects" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Our Projects</Link>
                        <Link href="/sustainability" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Sustainability</Link>
                        <Link href="/news" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">News</Link>
                        <Link href="/career" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Career</Link>
                        <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Contact Us</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar