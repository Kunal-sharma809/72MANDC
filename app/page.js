"use client"
import React from "react";
import Image from "next/image";
import { Link, Element } from 'react-scroll';

export default function Home() {

  return (
    <>
      <div className="section w-full">
        <div className="section-video h-[95vh] w-full flex justify-center items-center relative">
          <video className="object-cover brightness-[50%] h-[95vh] w-full" src="/mining video.mp4" autoPlay muted loop></video>
          <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[50%] max-xl:w-[80%] max-md:p-10">
            <h2 className="text-4xl font-bold">Our efforts contribute to a brighter & more defined future.</h2>
            <p>We provide essential materials for the world&apos;s continued growth, and aids in the progression to cleaner energy.</p>
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
        <div className="about bg-gradient-to-b from-[#fcf7ea] to-[#fff] py-22 px-14 flex flex-col items-center justify-center gap-24 mx-auto  max-md:px-8">
          <div className="container flex justify-between w-[90vw] mx-auto">
            <div className="content flex jsutify-center items-center gap-5 flex-col w-[45vw] text-center max-xl:w-[80vw]">
              <h3 className="font-semibold text-xl">About Us</h3>
              <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Journey</h1>
              <p>An inspiring journey spanning over 10 years of pioneering initiatives, best business practices, and the establishment of new benchmarks for operational efficiency has aided us to emerge as one of the largest mining companies in India.</p>
              <p>We are pleased to introduced 72 Minerals & Chemical as one of the very established in the field of bentonite ,Sodium ,Rake Loading &Transportation from last 07 years.We are providing transportation services By road And rail. We are involved with various companies for Transportation and Bentonite Handling services.</p>
              <a href={"/about"} className="text-[#7e651c] font-semibold">Know More</a>
            </div>
            <div className="w-[448px] max-xl:hidden">
              <Image className="rounded-lg w-[448px] max-xl:hidden" src="/mining_photo.jpeg" alt="" />
            </div>
          </div>

          <div className="container flex justify-between w-[90vw] mx-auto max-lg:flex-col max-lg:justify-center max-lg:mx-auto max-lg:w-[80vw] max-lg:items-center max-lg:gap-5 max-md:px-8">
            <div className="w-[500px] max-md:w-full">
<<<<<<< HEAD
              <Image className="rounded-lg object-cover" src="/mining_photo_2.jpg" alt="" />
=======
              <Image className="rounded-lg w-[500px] max-md:w-[70vw]" src="/mining_photo_2.png" alt="" />
>>>>>>> 915d9d50c5b39cc6b1a11f6eddde37bc68ae6a45
            </div>
            <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-lg:w-[80vw]">
              <h3 className="font-semibold text-xl">What we do</h3>
              <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Mining & Extraction</h1>
              <p>With over a decade of experience, we are actively involved in the exploration and operations of Bentonite mines across key locations including Hamla, Vandh, Kotdi, and Laxmipar. Their deep familiarity with these sites highlights their expertise and long-standing presence in the mining industry.</p>
              <a href={"/projects"} className="text-[#7e651c] font-semibold">Know More</a>
            </div>
          </div>
        </div>
      </Element>

      <div className="container flex justify-between items-center w-[90vw] rounded-lg py-12 px-12 mx-auto bg-[#f0ebdc] max-xl:flex-col max-xl:justify-center max-xl:mx-auto max-xl:w-[80vw] max-xl:items-center max-xl:gap-5 max-xl:px-4">
        <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[70vw]">
          <h3 className="font-semibold text-xl">Our Presence</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">72MANDC Across India</h1>
          <p className="max-xl:text-center">With 03 of our ongoing projects spread across the country, we are dedicated to making India a world-leading bentonite extractor. Our cost-effectiveness in completing mission-critical tasks on schedule has secured high productivity and profitability for our stakeholders time and time again.</p>
        </div>
<<<<<<< HEAD
        <div className="w-[500px] max-md:w-full">
          <Image className="rounded-lg" src="/presence.jpg" alt="" />
=======
        <div className="w-[500px] max-md:w-[70vw]">
          <Image className="rounded-lg w-[500px] max-md:w-[70vw]" src="/presence.jpg" alt="" />
>>>>>>> 915d9d50c5b39cc6b1a11f6eddde37bc68ae6a45
        </div>
      </div>

      <div className="environment bg-gradient-to-t from-[#fcf7ea] to-[#fff] py-22 px-14 flex items-center justify-center gap-24 mx-auto mt-14 max-xl:flex-col max-xl:justify-center max-xl:mx-auto max-xl:w-[80vw] max-xl:items-center max-xl:gap-5 max-xl:px-4">
        <div className="w-[500px] max-md:w-[70vw]">
          <Image className="rounded-lg w-[500px] max-md:w-[70vw]" src="/environment.png" alt="" />
        </div>
        <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[70vw]">
          <h3 className="font-semibold text-xl text-center">Environmental Safety</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Nature Commitment</h1>
          <p>72MANDC acknowledges and commits to being an environmentally sensitive company for all its on-site activities.</p>
          <p>We seamlessly align our operational objectives & targets with the regulatory requirements of our Environmental Policy. Measurable performance indicators that impact energy and water consumption, wastes and waste streams, air and water quality, noise levels, first-aid and lost-time incidents are a major part of our day-to-day operations.Mining activities use generous amounts of energy to fulfil their daily tasks such as the transport of individuals, equipment, material, waste and debris. They also require extra ventilation and cooling, power refining, and metalworking. All these activities require monitoring as they have various impacts on the environment and as a responsible mining company, 72MANDC commits to making the mining site environmentally inhabitable for all the individuals and elements on site and also around.</p>
        </div>

      </div>

      {/* <div className="collab flex jsutify-center items-center w-[90vw] mx-auto mt-24">
        <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
          <h3 className="font-semibold text-xl text-center">Our Collaborations</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Companies that Believe In Us</h1>
          <div className="companies flex flex-wrap justify-center items-center gap-18 max-xl:gap-10 max-lg:gap-8 max-md:gap-4 max-sm:gap-2">
            <Image src="/collaborations/gmdc.svg" alt="" />
            <Image src="/collaborations/coal_india.svg" alt="" />
            <Image src="/collaborations/wbpdcl.svg" alt="" />
            <Image src="/collaborations/sccl.svg" alt="" />
            <Image src="/collaborations/coal_india_2.svg" alt="" />
            <Image src="/collaborations/secl.svg" alt="" />
            <Image src="/collaborations/omc.svg" alt="" />
            <Image src="/collaborations/vedanta.svg" alt="" />
            <Image src="/collaborations/nlc.svg" alt="" />
            <Image src="/collaborations/icvl.svg" alt="" />
            <Image src="/collaborations/ocpl.svg" alt="" />
            <Image className="w-[110px]" src="/ntpc.jpeg" alt="" />
          </div>
        </div>
      </div> */}

      {/* <div className="commendation flex jsutify-center items-center w-[90vw] mx-auto mt-34 mb-34">
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
      </div> */}



    </>
  );
}
