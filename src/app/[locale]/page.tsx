import { useTranslations } from "next-intl"
import { Link } from "../../i18n/navigation"

export default function HomePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <h1 className="font-bold text-3xl">{t("title")}</h1>
      <Link href="/about-us">{t("about")}</Link>
      <p className="mt-10">{t("description")}</p>
    </div>
  )
}
