"use client"
import React from 'react'
import { Link, Element } from 'react-scroll';
import Image from 'next/image';


const ServiceClientPage = () => {
    return (
        <div>
            <div className="flex justify-center flex-col items-center gap-12">
                <div className="contact_section h-[85vh] w-full bg-[url('../public/sustainability_page.jpg')] bg-cover bg-center relative p-34">
                    <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
                        <h1 className='text-4xl font-bold'>Our Services</h1>
                        <p>Reliable mining, mineral processing, and chemical supply services provider.</p>
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
                <div className="service flex jsutify-center items-center w-[95vw] mx-auto mt-24 mb-34">
                    <div className="content flex jsutify-center items-center gap-8 flex-col w-[95vw] mx-auto">
                        <h3 className="font-semibold text-xl">Our Services</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Bentonite and Bauxite</h1>
                        <div className="achievments flex justify-center items-center gap-3 flex-wrap">
                            <div className="card w-[320px] p-3 rounded-lg flex flex-col gap-2">
                                <Image className='rounded-lg shadow-xl' src="/service/photo_1.jpeg" alt="" />
                                <p className=" font-poppins"><span className='font-bold text-xl'>Hamla Mines</span> - Rich in high-quality bentonite, ideal for industrial-grade applications.</p>
                            </div>
                            <div className="card w-[320px] p-3 rounded-lg flex flex-col gap-2">
                                <Image className='rounded-lg shadow-xl' src="/service/photo_2.jpeg" alt="" />
                                <p className=" font-poppins"><span className='font-bold text-xl'>Vandh Mines</span> - Produces premium bentonite with excellent swelling and bonding properties.</p>
                            </div>
                            <div className="card w-[320px] p-3 rounded-lg flex flex-col gap-2">
                                <Image className='rounded-lg shadow-xl' src="/service/photo_3.jpg" alt="" />
                                <p className=" font-poppins"><span className='font-bold text-xl'>Kotdi Mines</span> - Consistent bentonite output supporting diverse industrial and construction needs.</p>
                            </div>
                            <div className="card w-[320px] p-3 rounded-lg flex flex-col gap-2">
                                <Image className='rounded-lg shadow-xl' src="/service/photo_4.jpg" alt="" />
                                <p className=" font-poppins"><span className='font-bold text-xl'>Laxmipur Mines</span> - Known for pure bentonite, meeting global quality and demand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            <div className="flex justify-center items-center w-[80vw] mx-auto mt-24 mb-34 max-md:w-[85vw]">
                <Image className='rounded-lg' src="/service/photo_5.jpg" alt="" />
            </div>

            <div className="technology flex flex-col jsutify-center items-center w-[90vw] mx-auto mt-12 mb-34 bg-[#ece5cd] py-16 px-16 max-lg:px-8">
                <div className="flex jsutify-center items-center gap-3 flex-col w-full mx-auto ">
                    <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">What We Do at 72 Minerals & Chemical</h1>
                </div>
                <div className="flex w-full justify-between mt-22 items-center max-xl:flex-col max-xl:gap-8 w-[80vw]">
                    <div>
                        <p>At 72 Minerals & Chemical, we&apos;re proud to be a reliable name in bentonite handling and transportation since 2018, based in Sherdi, Mandvi (Kutch). With over 7 years of experience and trusted mine connections, here&apos;s how we serve our clients:</p>
                        <div className='flex justify-center items-center'>
                            <ul className='list-disc flex flex-col gap-4 mt-5 justify-center'>
                                <li>
                                    <span className='text-lg font-bold'>🚛 Transportation Services: </span>
                                    <p>We provide reliable transportation of bentonite and other powder materials via both road and rail networks.</p>
                                </li>
                                <li>
                                    <span className='text-lg font-bold'>⛏️ Rake Loading & Material Handling: </span>
                                    <p>Efficient and well-managed loading operations at mining sites with end-to-end handling support.</p>
                                </li>
                                <li>
                                    <span className='text-lg font-bold'>🧪 Calcium Bentonite Powder: </span>
                                    <p>Naturally sourced calcium bentonite powder (Grade 8 to 12) used in a wide range of industrial applications..</p>
                                </li>
                                <li>
                                    <span className='text-lg font-bold'>💧 Sodium Bentonite Powder: </span>
                                    <p>High swelling grade available in 22 to 38 grade, ideal for drilling and sealing.</p>
                                </li>
                                <li>
                                    <span className='text-lg font-bold'>📦 Bulk Supply of Powder Materials: </span>
                                    <p>We ensure large-scale, consistent supply of bentonite and related materials with timely delivery.</p>
                                </li>
                                <li>
                                    <span className='text-lg font-bold'>🏞️ Mines We Work With: </span>
                                    <p>Direct access to top-quality bentonite from Hamla, Vandh, Kotdi, and Laxmipar mines — trusted sources for over a decade.</p>
                                </li>
                                <li>
                                    <span className='text-lg font-bold'>👷‍♂️ Skilled Workforce: </span>
                                    <p>Dedicated manpower for monitoring material from the point of loading to the final destination — ensuring smooth operations throughout.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[70vw] mt-16 mb-14 max-md:w-[85vw]">
                    <Image className='rounded-lg' src="/service/services.jpg" alt="" />
                </div>
            </div>




        </div>
    )
}

export default ServiceClientPage
