import { Metadata } from "next";
import en from "@/locales/en.json";
import id from "@/locales/id.json";
import { getLanguageFromSearchParams } from "@/hooks/getLanguageFromSearchParams";
import ContactUsContent from "./ContactUsContent";

export async function generateMetadata(
  props: unknown
): Promise<Metadata> {
  const lang = getLanguageFromSearchParams(props || {});
  const dictionary = lang === "id" ? id : en;

  return {
    title: dictionary.ContactUs.metaTitle,
    description: dictionary.ContactUs.metaDescription,
    keywords: dictionary.ContactUs.metaKeywords,
    robots: dictionary.ContactUs.metaRobots,
    authors: [{ name: dictionary.ContactUs.metaAuthor }],
    publisher: dictionary.ContactUs.metaPublisher,
    openGraph: {
      title: dictionary.ContactUs.metaTitle,
      description: dictionary.ContactUs.metaDescription,
      url: "https://indosweetjaya.com/contact-us",
      siteName: "IndoSweetJn",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://indosweetjaya.com/contact-us",
    },
    icons: {
      icon: "/favicon/favicon2.ico",
    },
    metadataBase: new URL("https://indosweetjaya.com"),
    other: {
      lang: lang === "id" ? "id" : "en",
    },
  };
}


export default function ContactUsPage() {
  return <ContactUsContent />
}
