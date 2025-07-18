import { useTranslations } from "next-intl"

export default function AboutUs() {
  const t = useTranslations("AboutUs")

  return (
    <main className="p-8">
      <button className="bg-accent hover:bg-primary">Beli Sekarang</button>

      <h1 className="text-primary text-3xl font-bold text-bermuda">Selamat Datang</h1>
      <h1 className="text-1xl text-primary">{t("title")}</h1>
      <p className="mt-4 text-gray-700">{t("description")}</p>
    </main>
  )
}
