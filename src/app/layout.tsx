import { Manrope } from "next/font/google"
import "./globals.css"
import { FirebaseInitializer } from "@/components/FirebaseInitializer"
import LanguageSwitch from "@/components/LanguageSwitch"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "react-hot-toast"
import LanguageRedirectWrapper from "@/components/LanguageRedirectWrapper"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
})

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <body className={`${manrope.className} w-full h-full antialiased`}>
        <FirebaseInitializer />
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <LanguageRedirectWrapper>
          {children}
        </LanguageRedirectWrapper>
        <Footer />
        <div className="bottom-10 right-10 fixed">
          <LanguageSwitch />
        </div>
      </body>
    </html>
  )
}
