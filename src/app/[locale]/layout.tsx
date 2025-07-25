import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "../../i18n/routing"
import { FirebaseInitializer } from "@/components/FirebaseInitializer"
import LanguageSwitch from "@/components/LanguageSwitch"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "PT Indo Sweet Jaya Nusantara - Gula Aren Murni Dari Indonesia",
  // title: "Home",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon/favicon2.ico"
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${manrope.className} w-full h-full antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <FirebaseInitializer />
          <Navbar />
          {children}
          <Footer />
          <div className="bottom-10 right-10 fixed">
            <LanguageSwitch />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
