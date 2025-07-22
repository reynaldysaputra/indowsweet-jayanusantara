import { useTranslations } from "next-intl"
import Image from "next/image"
import MainProduct from '../../assets/main-product.png'
import BgPattern from '../../assets/bg-pattern.png'

export default function HomePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="relative h-[200vh]">
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
    </div>
  )
}
