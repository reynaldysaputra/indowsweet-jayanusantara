'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LanguageRedirectWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const locale = localStorage.getItem('locale') || 'en'
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.get('lang') !== locale) {
      searchParams.set('lang', locale)
      router.replace(`?${searchParams.toString()}`)
    }
  }, [router])

  return <>{children}</>
}
