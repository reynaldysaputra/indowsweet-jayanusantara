export function getLanguageFromSearchParams(
  searchParams: { lang?: string }
): "en" | "id" {
  const lang = searchParams.lang;
  return lang === "id" || lang === "en" ? lang : "en";
}
