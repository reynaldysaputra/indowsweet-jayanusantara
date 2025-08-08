/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslation } from '@/hooks/useTranslations';
import Link from 'next/link';
import React from 'react'

function OurProductsPage() {
  const { t: text } = useTranslation();

  return (
    <div className="relative mb-20">
      <main className="w-full h-[93vh] overflow-hidden relative z-0">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center absolute -z-10"
          style={{ backgroundImage: "url('/assets/our-products-section.jpg')" }}
        />
        <div className='w-full h-full bg-primary -z-10 opacity-95 absolute' />
        <div className='w-full h-full z-40 px-10 lg:px-20 flex flex-col justify-center space-y-8'>
          <h2 className="text-4xl font-bold text-accent">{text("OurProducts.text1")}</h2>
          <p className='text-accent text-lg lg:text-xl'>Discover Gowla Hanau and Gowla Java — two natural sweetener lines made from 100% palm sap. Available in block, syrup, and granulated forms, each product delivers consistent quality for both industrial and retail needs.</p>
          <a
            href="https://drive.google.com/file/d/1ZgwHPb2QSWWLeRem_dBzGVSHmB2fJl3W/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-accent text-accent hover:bg-accent transition hover:text-white px-6 py-3 rounded-md font-bold cursor-pointer">
              {text("AboutUs.text16")}
            </button>
          </a>
        </div>
      </main>

      <div className="w-full bg-background p-10 md:pb-0 md:p-16">
        <h3 className="text-3xl font-extrabold mb-6 lg:mb-10">{text("OurProducts.text2")}</h3>

        {/* Products */}
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between">
            <div className="space-y-5 flex flex-col flex-1">
              <h2 className="font-extrabold text-xl">{text("HomePage.text6")}</h2>
              <p className="text-md text-gray-700">{text("OurProducts.text3")}</p>
              <div className="flex-1 flex items-center justify-center">
                <img src={"/assets/products/aren_cetak.png"} alt="Gula Aren Cetak" className="w-44 h-44 object-contain" />
              </div>
              <Link href={"/our-products/arenga-sugar-block"} className="w-full p-3 border border-accent text-accent hover:bg-accent hover:text-white cursor-pointer text-md font-bold transition text-center">
                {text("HomePage.text7")}
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between">
            <div className="space-y-5 flex flex-col flex-1">
              <h2 className="font-extrabold text-xl">{text("HomePage.text8")}</h2>
              <p className="text-md text-gray-700">{text("OurProducts.text4")}</p>
              <div className="flex-1 flex items-center justify-center">
                <img src={"/assets/products/aren_semut.png"} alt="Aren Semut" className="w-44 h-44 object-contain" />
              </div>
              <Link href={"/our-products/arenga-sugar-granulated"} className="w-full p-3 border border-accent text-accent hover:bg-accent hover:text-white cursor-pointer text-md font-bold transition text-center">
                {text("HomePage.text7")}
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between">
            <div className="space-y-5 flex flex-col flex-1">
              <h2 className="font-extrabold text-xl">{text("HomePage.text11")}</h2>
              <p className="text-md text-gray-700">{text("OurProducts.text5")}</p>
              <div className="flex-1 flex items-center justify-center">
                <img src={"/assets/products/aren_sirup.png"} alt="Aren Sirup" className="w-44 h-44 object-contain" />
              </div>
              <Link href={"/our-products/arenga-sugar-syrup"} className="w-full p-3 border border-accent text-accent hover:bg-accent hover:text-white cursor-pointer text-md font-bold transition text-center">
                {text("HomePage.text7")}
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between">
            <div className="space-y-5 flex flex-col flex-1">
              <h2 className="font-extrabold text-xl">{text("HomePage.text5")}</h2>
              <p className="text-md text-gray-700">{text("OurProducts.text6")}</p>
              <div className="flex-1 flex items-center justify-center">
                <img src={"/assets/products/jawa_cetak.png"} alt="Gula Aren Cetak" className="w-44 h-44 object-contain" />
              </div>
              <Link href={"/our-products/coconut-sugar-block"} className="w-full p-3 border border-accent text-accent hover:bg-accent hover:text-white cursor-pointer text-md font-bold transition text-center">
                {text("HomePage.text7")}
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between">
            <div className="space-y-5 flex flex-col flex-1">
              <h2 className="font-extrabold text-xl">{text("HomePage.text9")}</h2>
              <p className="text-md text-gray-700">{text("OurProducts.text7")}</p>
              <div className="flex-1 flex items-center justify-center">
                <img src={"/assets/products/jawa_semut.png"} alt="Jawa Semut" className="w-44 h-44 object-contain" />
              </div>
              <Link href={"/our-products/coconut-sugar-granulated"} className="w-full p-3 border border-accent text-accent hover:bg-accent hover:text-white cursor-pointer text-md font-bold transition text-center">
                {text("HomePage.text7")}
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between">
            <div className="space-y-5 flex flex-col flex-1">
              <h2 className="font-extrabold text-xl">{text("HomePage.text10")}</h2>
              <p className="text-md text-gray-700">{text("OurProducts.text8")}</p>
              <div className="flex-1 flex items-center justify-center">
                <img src={"/assets/products/jawa_sirup.png"} alt="Jawa Sirup" className="w-44 h-44 object-contain" />
              </div>
              <Link href={"/our-products/coconut-sugar-syrup"} className="w-full p-3 border border-accent text-accent hover:bg-accent hover:text-white cursor-pointer text-md font-bold transition text-center">
                {text("HomePage.text7")}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurProductsPage