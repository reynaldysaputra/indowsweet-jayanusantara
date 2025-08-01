/* eslint-disable @next/next/no-img-element */
"use client"
import { useTranslation } from "@/hooks/useTranslations"

type Props = {
  slug: string
}

export default function ProductDetailClient({ slug }: Props) {
  const { t } = useTranslation()

  const product = t(`OurProductsDetails.${slug}`) as unknown as {
    title: string
    description: string
    list: string[]
  }

  if (!product?.title) {
    return (
      <div className="p-7 w-full relative h-[100vh] px-16 pt-[20vh]">
        <h1 className="text-3xl font-bold text-red-600">Product not found</h1>
      </div>
    )
  }

  return (
    <div className="p-7 w-full relative h-auto px-16 pt-[15vh] lg:pt-[20vh]">
      <div className="w-full py-20 flex flex-col lg:flex-row pt-15 space-x-7">
        <div className="w-full lg:w-4/12 border border-gray-300 p-10 pt-0 flex justify-center items-center mb-15 lg:mb-0">
          <img src={`/products/${slug}.png`} alt={product.title} className="w-full h-full" />
        </div>
        <div className="w-full lg:w-7/12">
          <h2 className="text-3xl font-bold text-accent">{product.title}</h2>
          <p className="text-gray-700 mt-10 text-lg">{product.description}</p>
          <ul className="list-disc mt-10 px-5 text-gray-700 text-md leading-10">
            {product.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
