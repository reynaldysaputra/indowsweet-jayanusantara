"use client"

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"

import EnglishFlag from "../assets/english-flag.png"
import IndonesiaFlag from "../assets/indonesia-flag.png"

export default function LanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState<"en" | "id">("en")

  // Deteksi locale dari URL
  useEffect(() => {
    const urlLocale = pathname.split("/")[1]
    setLocale(urlLocale === "id" ? "id" : "en")
  }, [pathname])

  const handleToggle = () => setIsOpen(prev => !prev)

  const handleChangeLanguage = (newLocale: string) => {
    const parts = pathname.split("/")
    parts[1] = newLocale
    router.replace(parts.join("/"))
    setIsOpen(false)
  }

  const isEnglish = locale === "en"

  const currentFlag = isEnglish ? EnglishFlag : IndonesiaFlag
  const currentCode = isEnglish ? "EN" : "ID"

  const altFlag = isEnglish ? IndonesiaFlag : EnglishFlag
  const altCode = isEnglish ? "ID" : "EN"

  return (
    <div className="relative bg-white shadow w-fit rounded overflow-hidden">
      {/* Trigger */}
      <div className="flex items-center space-x-2 cursor-pointer p-1" onClick={handleToggle}>
        <Image src={currentFlag} alt={`${currentCode} Flag`} width={40} height={40} />
        <h2 className="font-bold text-sm lg:text-lg">{currentCode}</h2>
        <MdOutlineKeyboardArrowUp
          size={24}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown transition */}
      <div
        className={`transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "scale-100 opacity-100 max-h-20" : "scale-95 opacity-0 max-h-0"
        }`}
      >
        <div
          className="flex items-center space-x-3 cursor-pointer hover:bg-primary p-2 transition group"
          onClick={() => handleChangeLanguage(altCode.toLowerCase())}
        >
          <Image src={altFlag} alt={`${altCode} Flag`} width={40} height={40} />
          <h2 className="font-bold text-sm lg:text-lg group-hover:text-white transition">{altCode}</h2>
        </div>
      </div>
    </div>
  )
}
