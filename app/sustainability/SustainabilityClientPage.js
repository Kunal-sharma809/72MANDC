"use client"
import React from 'react'
import { Link, Element } from 'react-scroll';
import Image from 'next/image';


const SustainabilityClientPage = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-12">
        <div className="contact_section h-[85vh] w-full bg-[url('../public/sustainability_page.jpg')] bg-cover bg-center relative p-34">
          <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
            <h1 className='text-4xl font-bold'>Caring for the Earth</h1>
            <p>We are committed to offering clean coal mining solutions as an eco-friendly and ecologically conscious firm.</p>
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
        <div className="environment bg-gradient-to-t from-[#fcf7ea] to-[#fff] py-22 px-14 flex items-center justify-center gap-24 mx-auto mt-14 max-xl:flex-col max-xl:justify-center max-xl:mx-auto max-xl:w-[80vw] max-xl:items-center max-xl:gap-5 max-xl:px-4">
          <div className="w-[500px] max-md:w-full">
            <Image className="rounded-lg" src="/environment.png" alt="" />
          </div>
          <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[70vw]">
            <h3 className="font-semibold text-xl text-center">Environmental Safety</h3>
            <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Nature Commitment</h1>
            <p>72MANDC acknowledges and commits to being an environmentally sensitive company for all its on-site activities.</p>
            <p>We seamlessly align our operational objectives & targets with the regulatory requirements of our Environmental Policy. Measurable performance indicators that impact energy and water consumption, wastes and waste streams, air and water quality, noise levels, first-aid and lost-time incidents are a major part of our day-to-day operations.Mining activities use generous amounts of energy to fulfil their daily tasks such as the transport of individuals, equipment, material, waste and debris. They also require extra ventilation and cooling, power refining, and metalworking. All these activities require monitoring as they have various impacts on the environment and as a responsible mining company, 72MANDC commits to making the mining site environmentally inhabitable for all the individuals and elements on site and also around.</p>
          </div>

        </div>
      </Element>

      {/* <div className="social_governance flex jsutify-center items-center w-[90vw] mx-auto mt-34 mb-34">
        <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Social-Governance</h1>
          <div className="achievments flex justify-center items-center gap-18 flex-wrap">
            <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
              <Image src="/sustainability/photo_1.png" alt="" />
              <h2 className="font-bold text-xl">Free health check-ups organised near pachhwara</h2>
              <p className='text-sm font-bold text-gray-500'>Feb, 2022</p>
            </div>
            <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
              <Image src="/sustainability/photo_2.png" alt="" />
              <h2 className="font-bold text-xl">Inauguration of borewells in villages</h2>
              <p className='text-sm font-bold text-gray-500'>April, 2022</p>
            </div>
            <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
              <Image src="/sustainability/photo_3.png" alt="" />
              <h2 className="font-bold text-xl">Free distribution of blanket and essentials  in the villages</h2>
              <p className='text-sm font-bold text-gray-500'>Aug, 2022</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="about w-full bg-gradient-to-t from-[#fcf7ea] to-[#fff] py-22 px-14 flex flex-col items-center justify-center gap-12">
        <div className="health flex justify-between w-[85vw] max-xl:flex-col max-xl:gap-8 max-xl:items-center">
          <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[85vw] mx-auto">
            <h3 className="font-semibold text-xl">Our priority</h3>
            <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Health,Safety & Well-being</h1>
            <div className='mt-3'>
              <ul className='list-disc flex flex-col gap-5 mt-5 items-start'>
                <li>Safety Is of utmost priority at 72MANDC. Every day, at every operating location, we strive for zero incidents, accidents, occupational diseases, or property damage.</li>
                <li>Hundreds of safety observations are undertaken across 72MANDC on a daily basis to identify best practises and rapidly remedy potentially hazardous behaviours.</li>
              </ul>
            </div>
          </div>
          <div className="w-[448px] max-md:w-full">
            <Image className="rounded-lg h-[300px] object-cover" src="/sustainability/photo_4.jpg" alt="" />
          </div>
        </div>


        <div className="ecosystem flex justify-between w-[85vw] max-xl:flex-col max-xl:gap-8 max-xl:items-center">
          <div className="max-md:w-full">
            <Image className="rounded-lg object-cover w-[550px] h-[350px]" src="/sustainability/photo_5.jpg" alt="" />
          </div>
          <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[85vw]">
            <h3 className="font-semibold text-xl">Our Corporate Social Responsibility</h3>
            <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Giving back to the ecosystem we live in</h1>
            <p className="mt-8">72MANDC is more than a corporate and our values are more profound than merely being a profit making entity. At the behest of our value system is our belief in giving back manifold to the society and the ecosystem that we thrive in. We strive to constantly better the lives of the people in and around our work site.</p>
            <p>From the construction of Housing Projects, to offering employment to nearby villagers, supplying RO Purified drinking water to nearby villages, and conducting recreational events, We have always tried to go above and beyond to improve the lives of the people we meet along the way.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainabilityClientPage
