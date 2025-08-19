"use client";

/* eslint-disable @next/next/no-img-element */
import { ImOffice } from "react-icons/im";
import { SiCoffeescript } from "react-icons/si";
import { GiTreeBranch } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { useTranslation } from "@/hooks/useTranslations";

export default function HomeContent() {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <main className="w-full h-[93vh] bg-primary flex items-center justify-center overflow-hidden relative z-0">

        <div className="w-11/12 flex justify-between items-center space-x-10 z-30">
          <div>
            <h3 className="text-2xl text-accent">{t("HomePage.text1")}</h3>
            <p className="text-4xl font-extrabold text-highlight mb-6">{t("HomePage.text2")}</p>
          </div>
          <img src={"/assets/main-product.png"} alt="IndoSweet" className="w-6/12 mt-56 hidden lg:block" />
        </div>
        <img src={"/assets/bg-pattern.png"} alt="BgPattern" className="w-[300vw max-w-none h-auto absolute lg:w-12/12  z-10 opacity-5 lg:-top-30 lg:-right-70 top-0 -right-150 md:-right-100 md:top-40"
        />
      </main>


      <div className="w-full bg-background p-10 md:p-16">
        <h3 className="text-3xl font-extrabold mb-6 lg:mb-10">{t("HomePage.text20")}</h3>

        {/* Products */}
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between h-full">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("HomePage.text6")}</h2>
              <img src={"/assets/products/aren_cetak.png"} alt="Gula Aren Cetak" className="w-44 h-44 mx-auto" />
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between h-full">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("HomePage.text8")}</h2>
              <img src={"/assets/products/aren_semut.png"} alt="Aren Semut" className="w-44 h-44 mx-auto" />
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between h-full">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("HomePage.text11")}</h2>
              <img src={"/assets/products/aren_sirup.png"} alt="Aren Sirup" className="w-44 h-44 mx-auto" />
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between h-full">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("HomePage.text5")}</h2>
              <img src={"/assets/products/jawa_cetak.png"} alt="Gula Aren Cetak" className="w-44 h-44 mx-auto" />
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between h-full">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("HomePage.text9")}</h2>
              <img src={"/assets/products/jawa_semut.png"} alt="Jawa Semut" className="w-44 h-44 mx-auto" />
            </div>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between h-full">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("HomePage.text10")}</h2>
              <img src={"/assets/products/jawa_sirup.png"} alt="Jawa Sirup" className="w-44 h-44 mx-auto" />
            </div>
          </div>
        </div>


        <div className="w-full flex justify-center">
          <button className="w-fit mx-auto mt-8 p-3 bg-transparent border border-accent text-accent transition hover:bg-accent hover:text-background cursor-pointer rounded md:mt-7">
            {t("HomePage.text7")}
          </button>
        </div>

        {/* Targets */}
        <div className="w-full mt-32">
          <h1 className="text-3xl font-extrabold text-left lg:text-center mb-6 lg:mb-14">{t("HomePage.text22")}</h1>
          <div className="w-full flex flex-col lg:flex-row space-x-3 justify-between space-y-3">
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <ImOffice size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("HomePage.text12")}</h1>
                <p className="text-sm mt-2 lg:text-base">{t("HomePage.text13")}</p>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <SiCoffeescript size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("HomePage.text14")}</h1>
                <p className="text-sm mt-2 lg:text-base">{t("HomePage.text15")}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row space-x-3 justify-between mt-5 space-y-3">
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <GiTreeBranch size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("HomePage.text16")}</h1>
                <p className="text-sm mt-2 lg:text-base">{t("HomePage.text17")}</p>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <FaUserGroup size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("HomePage.text18")}</h1>
                <p className="text-sm mt-2 lg:text-base">{t("HomePage.text19")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
