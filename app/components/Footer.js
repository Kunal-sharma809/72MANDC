import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from "react";
import emailjs from "emailjs-com";


const Footer = () => {
	const form = useRef();

  	const sendEmail = (e) => {
    	e.preventDefault();

    	emailjs.sendForm(
      	"service_3k09epe",
      	"template_pnlv11r",
      	form.current,
      	"QnwRj8gbpAP_wSM-B"
    	)
    	.then(
      	(result) => {
        console.log(result.text);
        alert("Message sent successfully ✅");
      	},
      	(error) => {
        console.log(error.text);
        alert("Oops! Something went wrong ❌");
      }
    );
  };
  return (
    <div>
      <div className='first-half bg-[#b6d0bf] w-[90vw] rounded-lg relative mt-32 mx-auto p-14 flex justify-between items-center max-lg:p-8 max-lg:gap-8'>

        <div className="container flex justify-between gap-12 w-[95vw] max-md:flex-col max-md:h-[400px]">
          <Image className='w-[40%] absolute -top-[30%] max-xl:-top-[20%] shadow-lg max-md:w-[80%]' src="/footer_section.png" alt="" />
          <div className='h-[40%]'></div>

          <div className="content w-[50%] flex flex-col gap-2 max-xl:right-8 max-lg:gap-0 max-md:absolute max-md:bottom-10 max-md:w-[80%]">
            <h3 className='font-semibold text-sm text-[#191e23b3]'>NEWSLETTER</h3>
            <h2 className='font-bold text-2xl max-lg:text-xl'>Receive the latest 72MANDC news updates directly in your inbox.</h2>
            <p className='text-sm'>Get the 72MANDC news first. Keep up with our latest news,investor updates, and media releases.</p>
            <form ref={form} onSubmit={sendEmail} className="submit bg-white w-fit p-1 rounded-lg mt-3">
              <input className='px-4 py-2 outline-none' type="email" placeholder='Enter your email'  name='user_email' required/>
              <input className='bg-[#c7a74a] p-2 rounded-lg mx-1 text-white' type="submit" value={"Subscribe"} />
            </form>
          </div>

        </div>
      </div>

      <div className="second-half bg-[#fcf7ea] w-[90vw] rounded-lg mt-12 mx-auto flex flex-col justify-center items-center px-34 py-8 relative">
        <div className='flex justify-between items-center w-[80vw] gap-12'>
          <div className="left w-[30%]">
            <Image className='w-32 max-lg:w-24' height={54} src="logo.jpg" alt="" />
          </div>
          <div className="right">
            <ul className='flex flex-wrap gap-18 text-sm max-xl:gap-8 max-lg:gap-4'>
              <Link href={"/about"}><li className='cursor-pointer'>About Us</li></Link>
              <Link href={"projects"}><li className='cursor-pointer'>Our Projects</li></Link>
              <Link href={"/sustainability"}><li className='cursor-pointer'>Sustainability</li></Link>
              <Link href={"/services"}><li className='cursor-pointer'>News</li></Link>
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
