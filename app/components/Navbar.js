import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-[#e5e5e5]'>
            <nav className="flex justify-between items-center mx-10 p-4 relative w-full fixed top-0">
                <div className="logo font-bold text-4xl flex gap-2">
                    <img src="/logo.jpg" width={54} alt="" />
                    <span className='font-mono'>72 MANDC</span>
                </div>
                <ul className='flex gap-8'>
                    <Link href={"/"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer active:text-[#407050] active:font-semibold'>Home</li></Link>
                    <Link href={"/about"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer'>About Us</li></Link>
                    <Link href={"/projects"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer'>Our Projects</li></Link>
                    <Link href={"/sustainability"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer'>Sustainability</li></Link>
                    <Link href={"/news"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer'>News</li></Link>
                    <Link href={"/career"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer'>Career</li></Link>
                    <Link href={"/contact"}><li className='hover:font-semibold hover:underline hover:underline-offset-8 cursor-pointer'>Contact Us</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar
