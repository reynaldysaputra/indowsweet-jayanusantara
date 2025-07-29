/* eslint-disable @next/next/no-img-element */
"use client";
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
        <div className='w-full h-full bg-primary -z-10 opacity-90 absolute' />
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
        <h2 className="font-extrabold text-2xl mb-5">At a Glance</h2>
        <p className='text-lg lg:text-xl mb-5'>Rooted in the natural richness of Indonesia, we transform traditional, natural ingredients into modern sweeteners that are pure, healthy, and premium in quality. Created from 100% palm sap, our products are the ideal choice for those who seek sweetness that is natural, clean, and better for your health—whether for personal use or industrial needs.</p>
        <p className='text-lg lg:text-xl mb-5'>We believe sweetness should never come at the cost of wellness. That’s why we’re here— Our sweetness meets your sweet needs!</p>
      </div>

      <div className='w-full mt-20 flex flex-col-reverse lg:flex-row'>
        <div className='w-full lg:w-[50%] p-14 bg-[#1a2a22]'>
          <h2 className='text-accent text-2xl font-extrabold'>Our Vision</h2>
          <p className='text-background mt-5'>To be the global face of Indonesia’s natural sweeteners—pure, high-quality, healthy, and responsibly made.</p>
          <h2 className='text-accent text-2xl font-extrabold mt-10'>Our Mission</h2>
          <ol className='list-decimal mt-5'>
            <li className='text-background'>To craft 100% palm sap -based sweeteners using sustainable and hygienic manufacturing practices.</li>
            <li className='text-background'>To deliver consistent, premium quality—100% in-house.</li>
            <li className='text-background'>To introduce Indonesia’s natural sweetness to the global market.</li>
            <li className='text-background'>To build long-term partnerships with clients who value authenticity, health, and innovation.</li>
            <li className='text-background'>To empower local communities through fair sourcing and job creation
            </li>
          </ol>
        </div>
        <div className='w-full lg:w-[50%] overflow-hidden h-8/12 relative'>
          <img src="/assets/about-section.jpg" alt="about-section" className='w-full bg-contain bg-center' />
          <div className='w-[50%] h-22 bg-background absolute bottom-0 -top-10 z-50' />
          <div className='w-[20%] h-10 bg-background absolute bottom-0 right-0' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs