/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"

export default function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState<"en" | "id">("en")

  useEffect(() => {
    const storedLang = localStorage.getItem("locale") as "en" | "id"
    setLocale(storedLang || "en")
  }, [])

  const handleToggle = () => setIsOpen(prev => !prev)

  const handleChangeLanguage = (newLocale: "en" | "id") => {
    localStorage.setItem("locale", newLocale)
    setIsOpen(false)
    window.location.reload() // reload agar semua teks berubah
  }

  const isEnglish = locale === "en"
  const currentFlag = isEnglish ? "/assets/english-flag.png" : "/assets/indonesia-flag.png"
  const currentCode = isEnglish ? "EN" : "ID"
  const altFlag = isEnglish ? "/assets/indonesia-flag.png" : "/assets/english-flag.png"
  const altCode = isEnglish ? "ID" : "EN"

  return (
    <div className="relative bg-white shadow w-fit rounded overflow-hidden">
      <div className="flex items-center space-x-2 cursor-pointer p-1" onClick={handleToggle}>
        <img src={currentFlag} alt={`${currentCode} Flag`} width={40} height={40} />
        <h2 className="font-bold text-sm lg:text-lg">{currentCode}</h2>
        <MdOutlineKeyboardArrowUp size={24} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <div className={`transition-all duration-300 ease-in-out origin-top ${isOpen ? "scale-100 opacity-100 max-h-20" : "scale-95 opacity-0 max-h-0"}`}>
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-primary p-2 transition group"
          onClick={() => handleChangeLanguage(altCode.toLowerCase() as "en" | "id")}
        >
          <img src={altFlag} alt={`${altCode} Flag`} width={40} height={40} />
          <h2 className="font-bold text-sm lg:text-lg group-hover:text-white transition">{altCode}</h2>
        </div>
      </div>
    </div>
  )
}
