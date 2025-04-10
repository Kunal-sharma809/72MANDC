import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="section w-full">
        <div className="section-video h-[90vh] w-full flex justify-center items-center relative">
          <video className="object-cover brightness-[50%] h-[90vh] w-full" src="/mining video.mp4" autoPlay muted loop></video>
          <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[50%]">
            <h2 className="text-4xl font-bold">Our efforts contribute to a brighter & more defined future.</h2>
            <p>We provide essential materials for the world&apos;s continued growth, and aids in the progression to cleaner energy.</p>
            <button type="button" className="text-gray-800 font-semibold w-34 bg-gradient-to-r from-teal-600 to-lime-600 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Know More.</button>

          </div>
        </div>
      </div>

      <div className="about bg-gradient-to-b from-[#fcf7ea] to-[#fff] py-22 px-14 flex flex-col items-center justify-center gap-24 mx-auto">
        <div className="container flex justify-between w-[90vw] mx-auto">
          <div className="content flex jsutify-center items-center gap-5 flex-col w-[45vw] text-center max-xl:w-[90vw]">
            <h3 className="font-semibold text-xl">About Us</h3>
            <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Journey</h1>
            <p>An inspiring journey spanning over 3 decades of pioneering initiatives, best business practices, and the establishment of new benchmarks for operational efficiency has aided us to emerge as one of the largest mining companies in India.</p>
            <p>Our core expertise is in OB removal, mineral extraction and transportation. Being a company that&apos;s consistently eager for greater challenges we have forayed into Mine Development & Operations (MDO) to add to a repertoire of contracts.</p>
            <button className="text-[#7e651c] font-semibold">Know More</button>
          </div>
          <div className="w-[448px] max-xl:hidden">
            <Image className="rounded-lg" src="/mining_photo.jpeg" alt="" />
          </div>
        </div>

        <div className="container flex justify-between w-[90vw] mx-auto max-lg:flex-col max-lg:justify-center max-lg:mx-auto max-lg:w-[80vw] max-lg:items-center max-lg:gap-5">
          <div className="w-[500px]">
            <Image className="rounded-lg" src="/mining_photo_2.png" alt="" />
          </div>
          <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-lg:w-[80vw]">
            <h3 className="font-semibold text-xl">What we do</h3>
            <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Mining & Extraction</h1>
            <p>Apart from electricity, coal is an essential raw material for the production of iron and steel, as well as the primary energy fuel used in the production of cement, aluminium, and other energy-intensive industrial products.</p>
            <button className="text-[#7e651c] font-semibold">Know More</button>
          </div>
        </div>
      </div>

      <div className="container flex justify-between items-center w-[90vw] rounded-lg p-12 mx-auto bg-[#f0ebdc] max-xl:flex-col max-xl:justify-center max-xl:mx-auto max-xl:w-[80vw] max-xl:items-center max-xl:gap-5">
        <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[70vw]">
          <h3 className="font-semibold text-xl">Our Presence</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">72MANDC Across India</h1>
          <p className="max-xl:text-center">With 9 of our ongoing projects that include 4 MDO projects spread across the country, we are dedicated to making India a world-leading coal extractor. Our cost-effectiveness in completing mission-critical tasks on schedule has secured high productivity and profitability for our stakeholders time and time again.</p>
        </div>
        <div className="w-[500px]">
          <Image className="rounded-lg" src="/presence.png" alt="" />
        </div>
      </div>

      <div className="environment bg-gradient-to-t from-[#fcf7ea] to-[#fff] py-22 px-14 flex items-center justify-center gap-24 mx-auto mt-14 max-xl:flex-col max-xl:justify-center max-xl:mx-auto max-xl:w-[80vw] max-xl:items-center max-xl:gap-5">
        <div className="w-[500px]">
          <Image className="rounded-lg" src="/environment.png" alt="" />
        </div>
        <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[70vw]">
          <h3 className="font-semibold text-xl">Environmental Safety</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Nature Commitment</h1>
          <p>72MANDC is an ISO 14001:2015 certified company that acknowledges and commits to being an environmentally sensitive company for all its on-site activities.</p>
          <p>We seamlessly align our operational objectives & targets with the regulatory requirements of our Environmental Policy. Measurable performance indicators that impact energy and water consumption, wastes and waste streams, air and water quality, noise levels, first-aid and lost-time incidents are a major part of our day-to-day operations.Mining activities use generous amounts of energy to fulfil their daily tasks such as the transport of individuals, equipment, material, waste and debris. They also require extra ventilation and cooling, power refining, and metalworking. All these activities require monitoring as they have various impacts on the environment and as a responsible mining company, 72MANDC commits to making the mining site environmentally inhabitable for all the individuals and elements on site and also around.</p>
        </div>

      </div>

      <div className="collab flex jsutify-center items-center w-[90vw] mx-auto mt-24">
        <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
          <h3 className="font-semibold text-xl">Our Collaborations</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Companies that Believe In Us</h1>
          <div className="companies flex flex-wrap justify-center items-center gap-18 max-xl:gap-10 max-lg:gap-8 max-md:gap-4 max-sm:gap-2">
            <Image src="/gmdc.svg" alt="" />
            <Image src="/coal_india.svg" alt="" />
            <Image src="/wbpdcl.svg" alt="" />
            <Image src="/sccl.svg" alt="" />
            <Image src="/coal_india_2.svg" alt="" />
            <Image src="/secl.svg" alt="" />
            <Image src="/omc.svg" alt="" />
            <Image src="/vedanta.svg" alt="" />
            <Image src="/nlc.svg" alt="" />
            <Image src="/icvl.svg" alt="" />
            <Image src="/ocpl.svg" alt="" />
            <Image className="w-[110px]" src="/ntpc.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="commendation flex jsutify-center items-center w-[90vw] mx-auto mt-34 mb-34">
        <div className="content flex jsutify-center items-center gap-8 flex-col w-[90vw] mx-auto">
          <h3 className="font-semibold text-xl">Commendation</h3>
          <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block">Our Achievements</h1>
          <div className="achievments flex justify-center items-center gap-18 flex-wrap">
            <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
              <Image src="/awards.png" alt="" />
              <h2 className="font-bold text-xl">Awarded the best outsourcing agency for safety by NCL, BCCL, CCL and GMDC</h2>
            </div>
            <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
              <Image src="/coal_production.png" alt="" />
              <h2 className="font-bold text-xl">Coal production increased by 44.1% from 20 million to 28.82 million tonnes in FY 2022-23</h2>
            </div>
            <div className="card bg-[#f0ebdc] w-[350px] p-3 rounded-lg flex flex-col gap-2">
              <Image src="/maniharpur_map.png" alt="" />
              <h2 className="font-bold text-xl">Coal dispatches from Manoharpur increased by 44.64% from 5.56 million to 8 million tonnes in FY 2022-23</h2>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}
