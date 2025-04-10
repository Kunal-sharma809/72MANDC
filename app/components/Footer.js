import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className='first-half bg-[#b6d0bf] w-[90vw] rounded-lg relative mt-32 mx-auto p-14 flex justify-between items-center max-lg:p-8 max-lg:gap-8 max-md:flex-col'>

        <div className="container flex justify-between w-[95vw]">
          <img className='w-[40%] absolute -top-[30%] max-xl:-top-[20%] shadow-lg' src="/footer_img.png" alt="" />
          <div></div>

          <div className="content w-[50%] flex flex-col gap-2 max-xl:right-10">
            <h3 className='font-semibold text-sm text-[#191e23b3]'>NEWSLETTER</h3>
            <h2 className='font-bold text-2xl'>Receive the latest 72MANDC news updates directly in your inbox.</h2>
            <p className='text-sm'>Get the 72MANDC news first. Keep up with our latest news,investor updates, and media releases.</p>
            <form className="submit bg-white w-fit p-1 rounded-lg mt-3">
              <input className='px-4 py-2 outline-none' type="email" placeholder='Enter your email' required/>
              <input className='bg-[#c7a74a] p-2 rounded-lg mx-1 text-white' type="submit" value={"Subscribe"} />
            </form>
          </div>

        </div>
      </div>

      <div className="second-half bg-[#fcf7ea] w-[90vw] rounded-lg mt-12 mx-auto flex flex-col justify-center items-center px-34 py-8 relative">
        <div className='flex justify-between items-center w-[80vw]'>
          <div className="left">
            <img className='w-32' src="logo.jpg" alt="" />
          </div>
          <div className="right">
            <ul className='flex flex-wrap gap-18 text-sm'>
              <Link href={"/about"}><li className='cursor-pointer'>About Us</li></Link>
              <Link href={"projects"}><li className='cursor-pointer'>Our Projects</li></Link>
              <Link href={"/sustainability"}><li className='cursor-pointer'>Sustainability</li></Link>
              <Link href={"/news"}><li className='cursor-pointer'>News</li></Link>
              <Link href={"/career"}><li className='cursor-pointer'>Career</li></Link>
              <Link href={"/contact"}><li className='cursor-pointer'>Contact Us</li></Link>
            </ul>
          </div>
        </div>

        <div className='flex justify-center mt-12'>
        <p className='text-sm absolute bottom-0'>&copy;2025.72MANDC Mining & Infra Pvt. Ltd..All Rights Reserved.</p>
        </div>

      </div>

    </div>
  )
}

export default Footer
