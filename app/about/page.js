import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div className="about-img h-[85vh] w-full bg-[url('../public/about_page.jpg')] bg-cover bg-center relative p-34">
                <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[50%] max-xl:w-[80%] max-md:p-10">
                    <h1 className='text-4xl font-bold'>72MANDC is one of the leading Mine Developers & Operators in India.</h1>
                    <p>We strive to empower communities, that in turn help make the world a better place.</p>
                    <button type="button" className="text-white font-semibold w-34 bg-gradient-to-r from-teal-600 to-lime-600 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Know More.</button>
                </div>

            </div>

            <div className="about w-full bg-gradient-to-b from-[#fcf7ea] to-[#fff] py-22 px-14 flex flex-col items-center justify-center gap-34">
                <div className="vision flex justify-between w-[85vw] max-xl:flex-col max-xl:gap-8 max-xl:items-center">
                    <div className="content flex jsutify-center items-center gap-5 flex-col w-[45vw] max-xl:w-[85vw]">
                        <h3 className="font-semibold text-xl">Our Foundation</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Vision</h1>
                        <p className='text-center'>We envision 72MANDC becoming the most trusted and preferred Mining Company Globally</p>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Mission</h1>
                        <p className='text-center'>We are on a journey to become India&apos;s leading Mining Company by  2025 and provide value to its stakeholders by continuing our core principles of Quality, Safety and Accountability.</p>
                    </div>
                    <div className="w-[448px] max-md:w-full">
                        <Image className="rounded-lg" src="/mining_photo.jpeg" alt="" />
                    </div>
                </div>

                <div className="story flex jsutify-center items-center gap-8 w-[90vw]">
                    <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw]">
                        <h3 className="font-semibold text-xl">Our Story</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">72MANDC&apos;S Journey</h1>
                        <p className='text-center'>Envisioned in 1988 , We&apos;ve been advancing and contributing to industries, communities, and economies all across India.</p>
                        <div className=''>
                        <Image className='max-md:hidden' src="/journey.svg" alt="" />
                        <Image className='md:hidden w-[85vw]' src="/journey_2.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-12 bg-[#f0ebdc] shadow-xl w-[90vw] rounded-lg p-12 mx-auto">
                <div className="glance flex justify-between items-center max-xl:flex-col max-xl:justify-center  max-xl:w-[80vw] max-xl:items-center max-xl:gap-5">
                    <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[70vw]">
                        <h3 className="font-semibold text-xl">At a Glance</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">72MANDC Across India</h1>
                        <p className="max-xl:text-center">With 9 of our ongoing projects that include 4 MDO projects spread across the country, we are dedicated to making India a world-leading coal extractor. Our cost-effectiveness in completing mission-critical tasks on schedule has secured high productivity and profitability for our stakeholders time and time again.</p>
                    </div>
                    <div className="w-[500px] max-md:w-full">
                        <Image className="rounded-lg" src="/presence.png" alt="" />
                    </div>
                </div>

                <div className="numbers flex gap-10 justify-center items-center font-arial py-6 flex-wrap">
                    <div>
                        <h2 className='text-5xl font-bold text-[#407050]'>35+</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className="seperation h-8 w-[2px] bg-[#c7a74a]"></div>
                    <div>
                        <h2 className='text-5xl font-bold text-[#407050]'>09</h2>
                        <p>Ongoing Projects</p>
                    </div>
                    <div className="seperation h-8 w-[2px] bg-[#c7a74a]"></div>
                    <div>
                        <h2 className='text-5xl font-bold text-[#407050]'>900+</h2>
                        <p>Dump Trucks</p>
                    </div>
                    <div className="seperation h-8 w-[2px] bg-[#c7a74a]"></div>
                    <div>
                        <h2 className='text-5xl font-bold text-[#407050]'>8,000+</h2>
                        <p>Employees</p>
                    </div>
                    <div className="seperation h-8 w-[2px] bg-[#c7a74a]"></div>
                    <div>
                        <h2 className='text-5xl font-bold text-[#407050]'>3,200Cr+</h2>
                        <p>Annual Turnover</p>
                    </div>
                </div>

            </div>

            <div className="bg-gradient-to-t from-[#fcf7ea] to-[#fff] flex jsutify-center items-center mx-auto px-12 py-24">
                <div className="content flex jsutify-center flex-col gap-8 mx-auto">
                    <div className='flex justify-between w-[75vw] mx-auto max-lg:flex-col max-lg:gap-5'>
                        <div className='flex flex-col gap-3 text-center'>
                            <h3 className="font-semibold text-xl">About Us</h3>
                            <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Values</h1>
                            <p className='w-[35vw] max-md:w-full max-md:text-center'>We constantly evolve by seeking ways to contribute to a brighter and better future for our people, communities and the planet.</p>
                        </div>
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/safety.svg" alt="" />
                            <h2 className="font-bold text-2xl">Safety</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                    </div>
                    <div className="values flex justify-center items-center gap-12 flex-wrap">
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/customer.svg" alt="" />
                            <h2 className="font-bold text-2xl">Customer Focus</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/leadership.svg" alt="" />
                            <h2 className="font-bold text-2xl">Leadership</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/people.svg" alt="" />
                            <h2 className="font-bold text-2xl">People</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/excellence.svg" alt="" />
                            <h2 className="font-bold text-2xl">Excellence</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/integrity.svg" alt="" />
                            <h2 className="font-bold text-2xl">Integrity</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                        <div className="card bg-white shadow-xl w-[350px] p-3 rounded-lg flex flex-col gap-2 relative pt-34">
                            <Image className='h-[80px] absolute top-5 right-5' src="/sustainability.svg" alt="" />
                            <h2 className="font-bold text-2xl">Sustainability</h2>
                            <p>We commit to the welfare, safety and health of people around us first.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="members flex jsutify-center items-center w-[90vw] mx-auto mt-24 mb-34">
                <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
                    <h3 className="font-semibold text-xl">The Members</h3>
                    <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Board of Directors</h1>
                    <div className="achievments flex justify-center items-center gap-10 flex-wrap">
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2 justify-center items-center shadow-xl">
                            <Image className='object-cover rounded-lg h-[250px] w-[350px]' src="/avatar.avif" alt="" />
                            <h2 className="text-xl">Name</h2>
                            <p>Founder</p>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2 justify-center items-center shadow-xl">
                            <Image className='object-cover rounded-lg h-[250px] w-[350px]' src="/avatar.avif" alt="" />
                            <h2 className="text-xl">Name</h2>
                            <p>Co-Founder &amp; Managing Director</p>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2 justify-center items-center shadow-xl">
                            <Image className='object-cover rounded-lg h-[250px] w-[350px]' src="/avatar.avif" alt="" />
                            <h2 className="text-xl">Name</h2>
                            <p>Co-Founder &amp; Sr. Director</p>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2 justify-center items-center shadow-xl">
                            <Image className='object-cover rounded-lg h-[250px] w-[350px]' src="/avatar.avif" alt="" />
                            <h2 className="text-xl">Name</h2>
                            <p>Director</p>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2 justify-center items-center shadow-xl">
                            <Image className='object-cover rounded-lg h-[250px] w-[350px]' src="/avatar.avif" alt="" />
                            <h2 className="text-xl">Name</h2>
                            <p>Director</p>
                        </div>
                        <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2 justify-center items-center shadow-xl">
                            <Image className='object-cover rounded-lg h-[250px] w-[350px]' src="/avatar.avif" alt="" />
                            <h2 className="text-xl">Name</h2>
                            <p>Director</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
