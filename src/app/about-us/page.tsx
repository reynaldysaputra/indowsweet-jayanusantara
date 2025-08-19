import { Metadata } from "next";
import en from "@/locales/en.json";
import id from "@/locales/id.json";
import { getLanguageFromSearchParams } from "@/hooks/getLanguageFromSearchParams";
import AboutContent from "./AboutContent";

export async function generateMetadata(
  props: unknown
): Promise<Metadata> {
  const lang = getLanguageFromSearchParams(props || {});
  const dictionary = lang === "id" ? id : en;

  return {
    title: dictionary.AboutUs.metaTitle,
    description: dictionary.AboutUs.metaDescription,
    keywords: dictionary.AboutUs.metaKeywords,
    robots: dictionary.AboutUs.metaRobots,
    authors: [{ name: dictionary.AboutUs.metaAuthor }],
    publisher: dictionary.AboutUs.metaPublisher,
    openGraph: {
      title: dictionary.AboutUs.metaTitle,
      description: dictionary.AboutUs.metaDescription,
      url: "https://indosweetjn.com/about-us",
      siteName: "IndoSweetJn",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://indosweetjn.com/about-us",
    },
    icons: {
      icon: "/favicon/favicon2.ico",
    },
    metadataBase: new URL("https://indosweetjn.com"),
    other: {
      lang: lang === "id" ? "id" : "en",
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
