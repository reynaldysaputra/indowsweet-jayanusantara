/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from '@/hooks/useTranslations';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='w-full bg-primary flex flex-col lg:flex-row space-x-10 justify-between px-14 py-20 space-y-8 lg:space-y-0'>
      <img src={"/logo-light.png"} width={100} height={100} alt='IndoSweet' />
      <div className='w-full lg:w-6/12'>
        <p className='text-highlight font-bold'>{t("Footer.text1")}</p>
      </div>
      <div className='w-full lg:w-6/12 flex flex-col space-y-5 lg:justify-center lg:items-center mt-6 lg:mt-0'>
        <div className='flex space-x-8'>
          <a href="https://www.instagram.com/gowla.hanau" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-highlight cursor-pointer text-3xl hover:text-accent transition" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61578418765388" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="text-highlight cursor-pointer text-3xl hover:text-accent transition" />
          </a>
          <a href="https://www.linkedin.com/company/indosweet-jaya-nusantara" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-highlight cursor-pointer text-3xl hover:text-accent transition" />
          </a>
        </div>
        <div>
          <h2 className='text-highlight mb-1'><span className='font-bold'>Email:</span> info@indosweetjn.com</h2>
          <h2 className='text-highlight'><span className='font-bold'>Whatsapp:</span> +6288-2000-200-578</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer