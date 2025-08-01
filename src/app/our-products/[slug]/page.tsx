// app/our-products/[slug]/page.tsx
import ProductDetailClient from "./ProductDetailClient"

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "arenga-sugar-block" },
    { slug: "arenga-sugar-granulated" },
    { slug: "arenga-sugar-syrup" },
    { slug: "coconut-sugar-block" },
    { slug: "coconut-sugar-granulated" },
    { slug: "coconut-sugar-syrup" },
  ];
}

export default async function Page({ params }: Props) {
  const { slug } = await params; // Await the params Promise

  return <ProductDetailClient slug={slug} />
}
