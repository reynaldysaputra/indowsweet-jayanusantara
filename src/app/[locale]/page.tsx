import { useTranslations } from "next-intl"
import Image from "next/image"
import MainProduct from '../../../public/assets/main-product.png'
import BgPattern from '../../../public/assets/bg-pattern.png'
import JawaCetak from '../../../public/assets/products/jawa_cetak.png'
import ArenSemut from '../../../public/assets/products/aren_semut.png'
import JawaSirup from '../../../public/assets/products/jawa_sirup.png'
import { ImOffice } from "react-icons/im";
import { SiCoffeescript } from "react-icons/si";
import { GiTreeBranch } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";

// export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }];
}

export default function HomePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="relative">
      <main className="w-full h-[93vh] bg-primary flex items-center justify-center overflow-hidden relative z-0">

        <div className="w-11/12 flex justify-between items-center space-x-10 z-30">
          <div>
            <h3 className="text-2xl text-accent">{t("text1")}</h3>
            <p className="text-4xl font-extrabold text-highlight mb-6">{t("text2")}</p>
            <div className="flex justify-between w-fit space-x-4">
              <button className="p-3 border border-highlight text-highlight cursor-pointer font-bold rounded-lg transition duration-200 hover:bg-highlight hover:text-primary">{t("text3")}</button>
              <button className="p-3 border border-highlight text-highlight cursor-pointer font-bold rounded-lg transition duration-200 hover:bg-highlight hover:text-primary">{t("text4")}</button>
            </div>
          </div>
          <Image src={MainProduct} alt="IndoSweet" className="w-6/12 mt-56 hidden lg:block" />
        </div>
        <Image src={BgPattern} alt="BgPattern" className="w-[300vw max-w-none h-auto absolute lg:w-12/12  z-10 opacity-5 lg:-top-30 lg:-right-70 top-0 -right-150 md:-right-100 md:top-40"
        />
      </main>


      <div className="w-full bg-background p-10 md:p-16">
        <h3 className="text-3xl font-extrabold mb-6 lg:mb-10">{t("text20")}</h3>

        {/* Products */}
        <div className="block lg:flex justify-between md:space-x-3">
          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between mb-0">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("text5")}</h2>
              <p className="mt-5 tracking-tight">{t("text6")}</p>
              <Image src={JawaCetak} alt="Gula Aren Cetak" width={200} height={200} className="mx-auto" />
            </div>
            <button className="w-full  p-3 bg-transparent border border-accent text-accent transition hover:bg-accent hover:text-background cursor-pointer rounded mt-10 md:mt-7">
              {t("text7")}
            </button>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between mb-0 mt-10 md:mt-0">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("text8")}</h2>
              <p className="mt-5 tracking-tight">{t("text9")}</p>
              <Image src={ArenSemut} alt="Aren Semut" width={200} height={200} className="mx-auto" />
            </div>
            <button className="w-full  p-3 bg-transparent border border-accent text-accent transition hover:bg-accent hover:text-background cursor-pointer rounded mt-10 md:mt-7">
              {t("text7")}
            </button>
          </div>

          <div className="w-full lg:w-[32%] p-10 shadow flex flex-col justify-between mt-10 md:mt-0">
            <div className="space-y-5">
              <h2 className="font-extrabold text-xl">{t("text10")}</h2>
              <p className="mt-5 tracking-tight">{t("text11")}</p>
              <Image src={JawaSirup} alt="Jawa Sirup" width={200} height={200} className="mx-auto" />
            </div>
            <button className="w-full  p-3 bg-transparent border border-accent text-accent transition hover:bg-accent hover:text-background cursor-pointer rounded mt-10 md:mt-7">{t("text7")}</button>
          </div>

        </div>
        <h1 className="mt-8 mx-auto w-fit text-accent font-bold cursor-pointer hover:text-highlight transition">{t("text21")} {">"}</h1>

        {/* Targets */}
        <div className="w-full mt-32">
          <h1 className="text-3xl font-extrabold text-left lg:text-center mb-6 lg:mb-14">{t("text22")}</h1>
          <div className="w-full flex flex-col lg:flex-row space-x-3 justify-between space-y-3">
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <ImOffice size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("text12")}</h1>
                <p>{t("text13")}</p>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <SiCoffeescript size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("text14")}</h1>
                <p>{t("text15")}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row space-x-3 justify-between mt-5 space-y-3">
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <GiTreeBranch size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("text16")}</h1>
                <p>{t("text17")}</p>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex space-x-8 items-center px-5 py-2">
              <div className="h-full flex items-center">
                <FaUserGroup size={35} />
              </div>
              <div>
                <h1 className="font-bold text-xl">{t("text18")}</h1>
                <p>{t("text19")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
