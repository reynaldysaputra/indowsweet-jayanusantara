import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-primary">{t("title")}</h1>
      <p className="mt-4 text-gray-700">
        {t("description")}
      </p>
    </main>
  );
}
