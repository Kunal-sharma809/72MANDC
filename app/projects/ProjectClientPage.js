"use client"
import React from 'react'
import Image from 'next/image'
import { Link, Element } from 'react-scroll';


const ProjectClientPage = () => {
    return (
        <>
            <div className="flex justify-center flex-col items-center gap-12">
                <div className="contact_section h-[85vh] w-full bg-[url('../public/contact_page.jpg')] bg-cover bg-center relative p-34">
                    <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
                        <h1 className='text-4xl font-bold'>72MANDC is one of the leading Mine Developers &amp; Operators in India.</h1>
                        <p>We strive to empower communities, that in turn help make the world a better place.</p>
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
            <div className="about w-full bg-gradient-to-b from-[#fcf7ea] to-[#fff] py-22 px-14 flex flex-col items-center justify-center gap-34">
                <div className="projects flex justify-between w-[85vw] max-xl:flex-col max-xl:gap-8 max-xl:items-center">
                    <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[85vw] mx-auto">
                        <h3 className="font-semibold text-xl">Our Projects</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Our Completed Projects</h1>
                        <p className='text-center mt-3'>Spanning over 18 locations, 72MANDC has successfully completed 50 projects both locally and internationally with utmost efficiency, environmental care and significant employment contribution to the society.</p>
                        <div className='flex gap-2 items-center mt-8'>
                            <h2 className='text-4xl text-[#407050] font-[900]'>50+</h2>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="w-[448px] max-md:w-full">
                        <Image className="rounded-lg" src="/projects/projects_2.png" alt="" />
                    </div>
                </div>


                <div className="ongoing_projects flex justify-between w-[85vw] max-xl:flex-col max-xl:gap-8 max-xl:items-center">
                    <div className="w-[448px] max-md:w-full">
                        <Image className="rounded-lg" src="/projects/ongoing_projects.png" alt="" />
                    </div>
                    <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[85vw]">
                        <h3 className="font-semibold text-xl">Our</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Ongoing Projects</h1>
                        <p className="text-center mt-8">With three active projects strategically spread across the length and breadth of India, we are steadfast in our mission to position the nation as a global leader in coal extraction. Each project reflects our commitment to innovation, sustainable practices, and powering India&apos;s future through responsible mining.</p>
                    </div>
                </div>
            </div>
            </Element>


            <div className="technology flex flex-col jsutify-center items-center w-[90vw] mx-auto mt-12 mb-34 bg-[#ece5cd] py-16 px-16 max-lg:px-8">
                <div className="flex jsutify-center items-center gap-3 flex-col w-full mx-auto ">
                    <h3 className="font-semibold text-xl">World class</h3>
                    <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Fleet & Technology</h1>
                </div>
                <div className="flex w-full justify-between mt-22 items-center max-xl:flex-col max-xl:gap-8">
                    <div className="w-[550px] max-md:w-full">
                        <Image className="rounded-lg" src="/projects/projects_3.png" alt="" />
                    </div>
                    <div className="w-[40vw] max-xl:w-[70vw]">
                        <div>
                            <p>72MANDC continues to pioneer technical advances in mining. Global positioning satellites, real-time monitoring systems and computerized dispatching technologies improve operating efficiency by working hand in hand with skilled manpower. Our maintenance reliability program uses sophisticated analytics to enhance operator safety and equipment availability.</p>
                            <ul className='list-disc flex flex-col gap-5 mt-5 items-start'>
                                <li>Procured equipment from the world&apos;s leading OEM&apos;S - Volvo, CAT, Komatsu, Sany, Hitachi, Wirtgen, Liebherr & Scania</li>
                                <li>Achieved optimal ratio of dump trucks to excavators.</li>
                                <li>Optimal utilisation of fleet to maximise the production levels</li>
                                <li>Using AUTO-CAD, MINEX and other software for constant improvement and increased productivity.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3 w-full mx-auto mt-12 flex-wrap">
                    <Image src="/projects/scania_logo.svg" alt="" />
                    <Image src="/projects/volvo_logo.svg" alt="" />
                    <Image src="/projects/cat_logo.svg" alt="" />
                    <Image src="/projects/sany_logo.svg" alt="" />
                    <Image src="/projects/wirtgen_logo.svg" alt="" />
                    <Image src="/projects/hitachi_logo.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default ProjectClientPage
