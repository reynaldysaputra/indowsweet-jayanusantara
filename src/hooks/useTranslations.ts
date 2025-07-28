/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import en from "@/locales/en.json"
import id from "@/locales/id.json"

type Locale = "en" | "id"
type Messages = typeof en // asumsikan struktur sama

const fallbackLang: Locale = "en"

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(fallbackLang)
  const [messages, setMessages] = useState<Messages>(en)

  useEffect(() => {
    const storedLang = localStorage.getItem("locale") as Locale
    const activeLang = storedLang || fallbackLang
    setLocale(activeLang)
    setMessages(activeLang === "id" ? id : en)
  }, [])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = messages

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }

    return value
  }

  return { t, locale }
}
