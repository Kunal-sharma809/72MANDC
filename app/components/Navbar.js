"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (href) => pathname === href ? "font-semibold" : "";

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/logo.jpg" className="h-8" alt="72MANDC Logo" />
                    <span className="self-center text-2xl font-semibold">72MANDC</span>
                </Link>

                <button onClick={toggleNavbar} onBlur={() => { setTimeout(() => { setIsOpen(!isOpen) }, 100) }}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About Us" },
                            { href: "/projects", label: "Our Projects" },
                            { href: "/sustainability", label: "Sustainability" },
                            { href: "/services", label: "Our Services" },
                            { href: "/career", label: "Career" },
                            { href: "/contact", label: "Contact Us" }
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className={`${isActive(href)} block py-2 px-3 text-gray-900 rounded-sm md:p-0 hover:font-semibold`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
