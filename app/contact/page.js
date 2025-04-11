"use client"
import React, { use } from 'react'
import { useRef } from "react";
import emailjs from "emailjs-com";
import Image from 'next/image';

const Page = () => {
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
        <div className='flex justify-center flex-col items-center gap-12'>
            <div className="contact-img h-[85vh] w-full bg-[url('../public/contact_page.jpg')] bg-cover bg-center relative p-34">
                <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
                    <h1 className='text-4xl font-bold'>Our products contribute to a brighter &amp; more defined future.</h1>
                    <p>We produce essential materials for the world&apos;s continued growth,
                        and our products will aid in the progression to cleaner energy.</p>

                </div>

            </div>

            <div className='contact-section w-[90vw] bg-[#fdfaf3] rounded-lg flex flex-col justify-center items-center mx-auto py-12'>
                <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
                    <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Get In Touch</h1>
                    <p className='w-[40vw] text-center max-lg:w-[80vw]'>Do you want to contact 72MANDC? Check if our page answers your question. Otherwise, sends us a message or contact us directly.</p>
                </div>

                <div className="contact-details flex justify-between items-center w-full py-18 px-22 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-12">
                    <div className="left w-[50%] flex flex-col gap-8 justify-center">
                        <div>
                            <h2 className='text-2xl'>Contact Details</h2>
                            <p className='max-lg:w-[80vw]'>Find our contact number, email id and office address.</p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className='flex items-center gap-4 max-lg:gap-8'>
                                <Image src="/phone.svg" alt="" />
                                <span>+91 999999999</span>
                            </div>
                            <div className='flex items-center gap-4 max-lg:gap-8'>
                                <Image src="/email.svg" alt="" />
                                <span>careers@72mandc.com</span>
                            </div>
                            <div className='flex items-center gap-4 max-lg:gap-8'>
                                <Image src="/location.svg" alt="" />
                                <span>Location</span>
                            </div>

                        </div>
                    </div>

                    <div className="right w-[45vw] flex flex-col gap-4 max-lg:w-[70vw]">
                        <div>
                            <h2 className='text-2xl'>Send Us A Message</h2>
                        </div>
                        <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col flex-wrap gap-4'>
                            <div className='flex gap-6 justify-between w-full max-lg:flex-wrap'>
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-[48%] outline-none max-lg:w-full' type="text" placeholder='Enter your first name' required />
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-[48%] outline-none max-lg:w-full' type="text" placeholder='Enter your last name' required />
                            </div>
                            <div className='flex gap-6 justify-between w-full max-lg:flex-wrap'>
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-[48%] outline-none max-lg:w-full' type="number" placeholder='Enter your phone number' required />
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-[48%] outline-none max-lg:w-full' type="email" placeholder='Enter your email' required />
                            </div>
                            <textarea className='py-3 px-5 rounded-lg bg-[#ece5cd] w-full h-32 resize-none outline-none' name="" id="" placeholder='Enter your message' required></textarea>
                            <input className='bg-[#c7a74a] text-white w-fit px-8 py-3 rounded-lg cursor-pointer' type="submit" value={"Submit"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
