"use client"
import React from 'react'
import Image from 'next/image'
import { Link, Element } from 'react-scroll';

const ProductsClientPage = () => {
    return (
        <div>
            <div className="flex justify-center flex-col items-center gap-12">
                <div className="contact_section h-[85vh] w-full bg-[url('../public/contact_page.jpg')] bg-cover bg-center relative p-34">
                    <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
                        <h1 className='text-4xl font-bold'>Versatile Mineral Solutions for Every Industry Need</h1>
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
                <div className="technology flex flex-col jsutify-center items-center w-[90vw] mx-auto mt-12 mb-34 bg-[#ece5cd] py-16 px-16 max-lg:px-8">
                    <div className="flex jsutify-center items-center gap-3 flex-col w-full mx-auto ">
                        <h3 className="font-semibold text-xl">Our Products</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">What We Do at 72 Minerals & Chemical</h1>
                    </div>
                    <div className="flex w-full justify-between mt-22 items-center max-xl:flex-col max-xl:gap-8 w-[80vw]">
                        <div>
                            <p>At 72 Minerals & Chemical, we offer a wide spectrum of mineral solutions including sodium bentonite, calcium bentonite, and their refined forms, tailored to meet the unique needs of various industries. Our products play a vital role in sectors such as iron ore pelletisation, foundry, drilling, civil engineering, animal feed, cosmetics, and more. With years of experience and a strong supply chain, we ensure high-grade, consistent mineral materials that power both industrial applications and everyday essentials.</p>
                            <div className='flex justify-center items-center'>
                                <ul className='list-disc flex flex-col gap-4 mt-5 justify-center'>
                                    <li>
                                        <span className='text-lg font-bold'>🧱 Iron Ore Pelletisation: </span>
                                        <p>Bentonite is used as a binder in iron ore pelletisation to improve strength and reduce dust. It enhances balling properties and provides excellent binding.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🔩 Foundry: </span>
                                        <p>In foundry applications, bentonite helps create mold strength and thermal stability, ensuring better casting precision and smooth surface finishes.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>⛏️ Drilling: </span>
                                        <p>Bentonite is essential in oil and gas or water well drilling. It stabilizes boreholes, cools drill bits, and carries cuttings to the surface efficiently.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🏗️ Civil Engineering & Construction: </span>
                                        <p>Used in trenchless technology, diaphragm walls, and tunneling, bentonite offers high viscosity and sealing capacity for soil stabilization.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>📄 Paper Industry: </span>
                                        <p>Bentonite aids in pitch control, improving paper quality and brightness. It also enhances retention and drainage in papermaking.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🐄 Animal Feed: </span>
                                        <p>As a feed additive, bentonite binds toxins, improving digestion and nutrient absorption, especially in poultry and livestock diets.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🌱 Fertiliser & Pesticide: </span>
                                        <p>Bentonite acts as a carrier and flow control agent in fertilizer and pesticide formulations, helping ensure even nutrient distribution in soil.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🍷 Wine Industry: </span>
                                        <p>In winemaking, bentonite clarifies wines by removing proteins and other particles, enhancing clarity and taste stability.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🧴 Cosmetics & Detergents: </span>
                                        <p>Its natural absorbent properties make bentonite ideal for face masks, soaps, and detergents, offering cleansing and detoxifying effects.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🌩️ Earthing: </span>
                                        <p>Bentonite enhances conductivity and moisture retention in electrical earthing systems, improving safety and efficiency in installations.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🐱 Cat Litter: </span>
                                        <p>Its high absorbency and clumping nature make bentonite perfect for cat litter products, helping control odor and maintain hygiene.</p>
                                    </li>
                                    <li>
                                        <span className='text-lg font-bold'>🧽 Bleaching Earth: </span>
                                        <p>Used in the refining of edible oils and fats, bleaching earth made from bentonite removes impurities, color, and contaminants effectively.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default ProductsClientPage
