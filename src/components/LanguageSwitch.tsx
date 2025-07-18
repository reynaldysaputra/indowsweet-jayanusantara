'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

import EnglishFlag from '../assets/english-flag.png';
import IndonesiaFlag from '../assets/indonesia-flag.png';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<'en' | 'id'>('en');

  // Deteksi locale dari URL
  useEffect(() => {
    const pathLocale = pathname.split('/')[1];
    if (pathLocale === 'id') setLocale('id');
    else setLocale('en');
  }, [pathname]);

  const handleChangeLanguage = (newLocale: string) => {
    const pathParts = pathname.split('/');
    pathParts[1] = newLocale;
    const newPath = pathParts.join('/');
    router.replace(newPath);
    setOpen(false);
  };

  const isEnglish = locale === 'en';

  return (
    <div className="bg-white shadow w-fit max-w-full space-y-1">
      {/* Trigger Button */}
      <div
        className="flex items-center space-x-3 cursor-pointer p-2"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={isEnglish ? EnglishFlag : IndonesiaFlag}
          alt={isEnglish ? 'English Flag' : 'Indonesian Flag'}
          width={40}
          height={40}
        />
        <h2 className="font-bold text-xl">{isEnglish ? 'EN' : 'ID'}</h2>
        <MdOutlineKeyboardArrowUp
          size={24}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {/* Dropdown option */}
      {open && (
        <div
          className="group flex space-x-3 items-center cursor-pointer hover:bg-amber-300 transition p-2"
          onClick={() => handleChangeLanguage(isEnglish ? 'id' : 'en')}
        >
          <Image
            src={isEnglish ? IndonesiaFlag : EnglishFlag}
            alt={isEnglish ? 'Indonesian Flag' : 'English Flag'}
            width={40}
            height={40}
          />
          <h2 className="font-bold text-xl transition group-hover:text-white">
            {isEnglish ? 'ID' : 'EN'}
          </h2>
        </div>
      )}
    </div>
  );
}
