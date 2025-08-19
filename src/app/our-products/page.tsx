import { Metadata } from "next";
import en from "@/locales/en.json";
import id from "@/locales/id.json";
import { getLanguageFromSearchParams } from "@/hooks/getLanguageFromSearchParams";
import OurProductsContent from "./OurProductsContent";

export async function generateMetadata(
  props: unknown
): Promise<Metadata> {
  const lang = getLanguageFromSearchParams(props || {});
  const dictionary = lang === "id" ? id : en;

  return {
    title: dictionary.OurProducts.metaTitle,
    description: dictionary.OurProducts.metaDescription,
    keywords: dictionary.OurProducts.metaKeywords,
    robots: dictionary.OurProducts.metaRobots,
    authors: [{ name: dictionary.OurProducts.metaAuthor }],
    publisher: dictionary.OurProducts.metaPublisher,
    openGraph: {
      title: dictionary.OurProducts.metaTitle,
      description: dictionary.OurProducts.metaDescription,
      url: "https://indosweetjn.com/our-products",
      siteName: "IndoSweetJn",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://indosweetjn.com/our-products",
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

export default function OurProductsPage() {
  return <OurProductsContent />
}
