/* eslint-disable @next/next/no-img-element */
"use client";
import GallerySlider from '@/components/MediaGallery';
import { useTranslation } from '@/hooks/useTranslations';
import React from 'react'
import CountUp from 'react-countup';

function AboutUs() {
  const { t: text } = useTranslation();

  return (
    <div className="relative">
      <main className="w-full h-[93vh] overflow-hidden relative z-0">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center absolute -z-10"
          style={{ backgroundImage: "url('/assets/about-us-img.jpg')" }}
        />
        <div className='w-full h-full bg-primary -z-10 opacity-95 absolute' />
        <div className='w-full h-full z-40 px-10 lg:px-20 flex flex-col justify-center space-y-8'>
          <h2 className="text-4xl font-bold text-accent">{text("AboutUs.text1")}</h2>
          <div className='w-full flex flex-col lg:flex-row space-y-7  justify-between space-x-5 items-center lg:space-y-0'>
            <h2 className='text-2xl text-highlight'><CountUp start={1} end={20000} duration={5} separator="," className='font-bold' />+ M2 {text("AboutUs.text2")}</h2>
            <h2 className='text-2xl text-highlight'><CountUp start={1} end={60000} duration={5} separator="," className='font-bold' />+ KG {text("AboutUs.text3")}</h2>
            <h2 className='text-2xl text-highlight'><CountUp start={1} end={720000} duration={5} separator="," className='font-bold' />+ KG {text("AboutUs.text4")}</h2>
          </div>
        </div>
      </main>

      {/* About */}
      <div className='px-4 lg:px-16 my-10 relative w-full'>
        <h2 className="font-extrabold text-2xl mb-5">{text("AboutUs.text5")}</h2>
        <p className='text-md lg:text-xl mb-5'>{text("AboutUs.text6")}</p>
        <p className='text-lg lg:text-xl mb-5'>{text("AboutUs.text7")}</p>
      </div>

      {/* Mission */}
      <div className='w-full mt-20 flex flex-col-reverse lg:flex-row'>
        <div className='w-full lg:w-[50%] p-14 bg-[#1a2a22]'>
          <h2 className='text-accent text-2xl font-extrabold'>{text("AboutUs.text8")}</h2>
          <p className='text-background mt-5'>{text("AboutUs.text9")}</p>
          <h2 className='text-accent text-2xl font-extrabold mt-10'>{text("AboutUs.text10")}</h2>
          <ol className='list-decimal mt-5'>
            <li className='text-background'>{text("AboutUs.text11")}</li>
            <li className='text-background'>{text("AboutUs.text12")}</li>
            <li className='text-background'>{text("AboutUs.text13")}</li>
            <li className='text-background'>{text("AboutUs.text14")}</li>
            <li className='text-background'>{text("AboutUs.text15")}
            </li>
          </ol>
          <a
            href="https://drive.google.com/file/d/15sSq-CeNBH0a1XYOn1P5qwF_rlu_-x3H/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-accent text-accent hover:bg-accent transition hover:text-white px-6 py-3 rounded-md font-bold cursor-pointer mt-10">
              {text("AboutUs.text16")}
            </button>
          </a>
        </div>
        <div className='w-full lg:w-[50%] overflow-hidden h-9/12 relative'>
          <img src="/assets/about-section.jpg" alt="about-section" className='w-full bg-contain bg-center' />
          <div className='w-[50%] h-22 bg-background absolute bottom-0 -top-10 z-50' />
          <div className='w-[20%] h-10 bg-background absolute bottom-0 right-0' />
        </div>
      </div>

      {/* Gallery */}
      <div className='px-4 lg:px-16 mt-20 relative w-full'>
        <h2 className="font-extrabold text-2xl mb-5">Gallery</h2>
        <GallerySlider />
      </div>
    </div>
  )
}

export default AboutUs