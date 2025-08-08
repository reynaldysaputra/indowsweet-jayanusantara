/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from '@/hooks/useTranslations'
import React from 'react'

function OurComitment() {
  const { t: text } = useTranslation()

  return (
    <div className="relative">
      <main className="w-full h-[93vh] overflow-hidden relative z-0">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center absolute -z-10 py-10"
          style={{ backgroundImage: "url('/assets/our-comitment-main.jpg')" }}
        />
        <div className='w-full h-full bg-primary -z-10 opacity-95 absolute' />
        <div className='w-full h-full z- px-10 lg:px-20 flex flex-col justify-center space-y-8 mt-4 lg:mt-0'>
          <h2 className="sm:text-sm md:text-2xl lg:text-4xl font-bold text-accent">{text("OurComitment.text1")}</h2>
          <p className='text-sm md:text-lg text-highlight'>{text("OurComitment.text2")}</p>
          <p className='text-sm md:text-lg text-highlight'>{text("OurComitment.text3")}</p>
          <p className='text-sm md:text-lg text-highlight'>{text("OurComitment.text4")}</p>
        </div>
      </main>

      {/* Mission */}
      <div className='w-full my-20 flex flex-col-reverse lg:flex-row'>
        <div className='w-full lg:w-[50%] p-14 px-10 lg:px-14 bg-[#1a2a22]'>
          <div className='flex flex-col space-y-5'>
            <h2 className='mb-10 text-gray-300'>{text("OurComitment.text5")}</h2>
            <div className='flex flex-row space-x-5'>
              <div className='px-4 h-14 bg-accent rounded-xl flex justify-center items-center'>
                <h2 className='text-3xl font-bold text-primary'>S</h2>
              </div>
              <div>
                <h2 className='text-accent text-xl font-bold'>{text("OurComitment.text6")}</h2>
                <p className='text-gray-300 text-sm leading-5'>{text("OurComitment.text7")}</p>
              </div>
            </div>
            <div className='flex flex-row space-x-5 items-center'>
              <div className='px-3 h-14 bg-accent rounded-xl flex justify-center items-center'>
                <h2 className='text-3xl font-bold text-primary'>W</h2>
              </div>
              <div>
                <h2 className='text-accent text-xl font-bold'>{text("OurComitment.text8")}</h2>
                <p className='text-gray-300 text-sm leading-5'>{text("OurComitment.text9")}</p>
              </div>
            </div>
            <div className='flex flex-row space-x-5 items-center'>
              <div className='px-4 h-14 bg-accent rounded-xl flex justify-center items-center'>
                <h2 className='text-3xl font-bold text-primary'>E</h2>
              </div>
              <div>
                <h2 className='text-accent text-xl font-bold'>{text("OurComitment.text10")}</h2>
                <p className='text-gray-300 text-sm leading-5'>{text("OurComitment.text11")}</p>
              </div>
            </div>
            <div className='flex flex-row space-x-5 items-center'>
              <div className='px-4 h-14 bg-accent rounded-xl flex justify-center items-center'>
                <h2 className='text-3xl font-bold text-primary'>E</h2>
              </div>
              <div>
                <h2 className='text-accent text-xl font-bold'>{text("OurComitment.text12")}</h2>
                <p className='text-gray-300 text-sm leading-5'>{text("OurComitment.text13")}</p>
              </div>
            </div>
            <div className='flex flex-row space-x-5 items-center'>
              <div className='px-4 h-14 bg-accent rounded-xl flex justify-center items-center'>
                <h2 className='text-3xl font-bold text-primary'>T</h2>
              </div>
              <div>
                <h2 className='text-accent text-xl font-bold'>{text("OurComitment.text14")}</h2>
                <p className='text-gray-300 text-sm leading-5'>{text("OurComitment.text15")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[50%] overflow-hidden h-full relative'>
          <img src="/assets/palm-tree-arenga.jpg" alt="comitment-section" className='w-full bg-contain bg-center' />
          <div className='w-[20%] lg:w-[50%] h-22 bg-background absolute top-0' />
          <div className='w-[50%] lg:w-[20%] h-10 bg-background absolute bottom-0 right-0' />
        </div>
      </div>
    </div>
  )
}

export default OurComitment