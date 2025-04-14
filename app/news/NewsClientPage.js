"use client"
import React from 'react'
import { Link, Element } from 'react-scroll';
import Image from 'next/image';


const NewsClientPage = () => {
    return (
        <div>
            <div className="flex justify-center flex-col items-center gap-12">
                <div className="contact_section h-[85vh] w-full bg-[url('../public/sustainability_page.jpg')] bg-cover bg-center relative p-34">
                    <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
                        <h1 className='text-4xl font-bold'>Newsroom</h1>
                        <p>Keep up with the latest 72MANDC news,stories,insights and much more.</p>
                        <Link to="aboutSection" smooth={true} duration={600}>
                            <button type="button" className="flex items-center gap-3 text-white font-semibold w-38 bg-gradient-to-r from-teal-600 to-lime-600 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                <span>Know More.</span>
                                <Image src="/downarrow.svg" alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <Element name="aboutSection">
            <div className="newsroom flex jsutify-center items-center w-[95vw] mx-auto mt-24 mb-34">
                <div className="content flex jsutify-center items-center gap-8 flex-col w-[95vw] mx-auto">
                    <h3 className="font-semibold text-xl">News Room</h3>
                    <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Latest News</h1>
                    <div className="achievments flex justify-center items-center gap-4 flex-wrap">
                        <div className="card w-[250px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/news/photo_1.svg" alt="" />
                            <h2 className="font-bold text-xl font-poppins">Badam Coal Block MDO awarded to 72MANDC by NTPC</h2>
                            <p className='text-sm font-bold text-gray-500'>2023</p>
                        </div>
                        <div className="card w-[280px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/news/photo_2.png" alt="" />
                            <h2 className="font-bold text-xl font-poppins">Sanghamitra Coal Block MDO awarded to 72MANDC by CCL</h2>
                            <p className='text-sm font-bold text-gray-500'>2024</p>
                        </div>
                        <div className="card w-[280px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/news/photo_1.svg" alt="" />
                            <h2 className="font-bold text-xl font-poppins">Kerendari - &quot;A&quot; Coal Block MDO awarded to 72MANDC by NTPC</h2>
                            <p className='text-sm font-bold text-gray-500'>2023</p>
                        </div>
                        <div className="card w-[280px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/news/photo_3.png" alt="" />
                            <h2 className="font-bold text-xl font-poppins">Kerendari - &quot;A&quot; Coal Block MDO awarded to 72MANDC by NTPC</h2>
                            <p className='text-sm font-bold text-gray-500'>2022</p>
                        </div>
                        <div className="card w-[280px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/news/photo_4.png" alt="" />
                            <h2 className="font-bold text-xl font-poppins">Kerendari - &quot;A&quot; Coal Block MDO awarded to 72MANDC by NTPC</h2>
                            <p className='text-sm font-bold text-gray-500'>2019</p>
                        </div>
                    </div>
                </div>
            </div>
            </Element>

            <div className="commendation flex jsutify-center items-center w-[90vw] mx-auto mt-24 mb-34">
                <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
                    <h3 className="font-semibold text-xl">Commendation</h3>
                    <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Achievements</h1>
                    <div className="achievments flex justify-center items-center gap-18 flex-wrap">
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/achievments/awards.png" alt="" />
                            <h2 className="font-bold text-xl">Awarded the best outsourcing agency for safety by NCL, BCCL, CCL and GMDC</h2>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/achievments/coal_production.png" alt="" />
                            <h2 className="font-bold text-xl">Coal production increased by 44.1% from 20 million to 28.82 million tonnes in FY 2022-23</h2>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
                            <Image src="/achievments/maniharpur_map.png" alt="" />
                            <h2 className="font-bold text-xl">Coal dispatches from Manoharpur increased by 44.64% from 5.56 million to 8 million tonnes in FY 2022-23</h2>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewsClientPage
