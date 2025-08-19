import HomeContent from "./HomeContent";

import { Metadata } from "next";
import en from "@/locales/en.json";
import id from "@/locales/id.json";
import { getLanguageFromSearchParams } from "@/hooks/getLanguageFromSearchParams";

export async function generateMetadata(
  props: unknown
): Promise<Metadata> {
  const lang = getLanguageFromSearchParams(props || {});
  const dictionary = lang === "id" ? id : en;

  return {
    title: dictionary.HomePage.metaTitle,
    description: dictionary.HomePage.metaDescription,
    keywords: dictionary.HomePage.metaKeywords,
    robots: dictionary.HomePage.metaRobots,
    authors: [{ name: dictionary.HomePage.metaAuthor }],
    publisher: dictionary.HomePage.metaPublisher,
    openGraph: {
      title: dictionary.HomePage.metaTitle,
      description: dictionary.HomePage.metaDescription,
      url: "https://indosweetjn.com/",
      siteName: "IndoSweetJn",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://indosweetjn.com/",
    },
    icons: {
      icon: "/favicon/favicon2.ico"
    },
    metadataBase: new URL("https://indosweetjn.com/"),
    // Tambahan opsional (kalau ingin menggunakan 'lang' di <html lang=""> tag secara otomatis)
    other: {
      lang: dictionary.HomePage.metaLang
    }
  };
}


export default function HomePage() {
  return <HomeContent />
}
