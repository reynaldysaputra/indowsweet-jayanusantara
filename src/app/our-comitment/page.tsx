import { Metadata } from "next";
import en from "@/locales/en.json";
import id from "@/locales/id.json";
import { getLanguageFromSearchParams } from "@/hooks/getLanguageFromSearchParams";
import OurComitmentContent from "./OurComitmentContent";

export async function generateMetadata(
  props: unknown
): Promise<Metadata> {
  const lang = getLanguageFromSearchParams(props || {});
  const dictionary = lang === "id" ? id : en;

  return {
    title: dictionary.OurComitment.metaTitle,
    description: dictionary.OurComitment.metaDescription,
    keywords: dictionary.OurComitment.metaKeywords,
    robots: dictionary.OurComitment.metaRobots,
    authors: [{ name: dictionary.OurComitment.metaAuthor }],
    publisher: dictionary.OurComitment.metaPublisher,
    openGraph: {
      title: dictionary.OurComitment.metaTitle,
      description: dictionary.OurComitment.metaDescription,
      url: "https://indosweetjn.com/our-comitment",
      siteName: "IndoSweetJn",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://indosweetjn.com/our-comitment",
    },
    icons: {
      icon: "/favicon/favicon2.ico",
    },
    metadataBase: new URL("https://indosweetjn.com"),
    other: {
      lang: lang,
    },
  };
}


export default function OurComitmentPage() {
  return <OurComitmentContent />
}
