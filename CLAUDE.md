# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for IndoSweet Jayanusantara (palm-sugar producer, brands "Gowla Hanau" / "Gowla Java"), deployed as pre-rendered HTML to Firebase Hosting at https://indosweetjn.com. Next.js 15 App Router + React 19 + Tailwind v4. There are no tests and no backend — every page is a static export.

## Commands

```bash
npm install
npm run dev                       # next dev --turbopack, port 3000
npm run build                     # next build; output: "export" writes to out/
npm run lint                      # next lint
npm run format                    # prettier --write .
firebase deploy --only hosting    # publishes out/ (project: indosweet-jayanusantara)
```

There is no `next export` step — that CLI command was removed in Next 15 and replaced by `output: "export"` in [next.config.ts](next.config.ts). `next build` alone writes `out/`; re-adding `next export` to the script will fail the build.

Deploy targets are Firebase Hosting (`out/` via [firebase.json](firebase.json)) and Vercel, which picks up the static export automatically. On Vercel the `NEXT_PUBLIC_FIREBASE_*` variables must be set in project settings — `.env.local` is gitignored, and their absence does not fail the build, it just silently breaks analytics at runtime.

## i18n — read this before touching any text

The site is EN/ID bilingual, but **next-intl is not the live mechanism**, despite still being wired up. Two systems coexist:

1. **Live (use this):** [src/hooks/useTranslations.ts](src/hooks/useTranslations.ts) — a hand-rolled client hook that reads `localStorage.locale`, imports [src/locales/en.json](src/locales/en.json) / [src/locales/id.json](src/locales/id.json) directly, and resolves dot-paths (`text("HomePage.text6")`). Because it reads localStorage in `useEffect`, **every page renders EN on first paint and swaps after hydration**. [LanguageSwitch](src/components/LanguageSwitch.tsx) writes localStorage and calls `window.location.reload()`.
2. **Dead:** [src/i18n/request.ts](src/i18n/request.ts) imports from `../../messages/{locale}.json` — that directory does not exist. `createNextIntlPlugin()` is still applied in [next.config.ts](next.config.ts) and [src/i18n/](src/i18n/) is unreferenced by any component. Don't build on it; git history (`e2e4c64 change and remove next-intl`) shows it was deliberately abandoned.

The two locale JSONs must stay key-identical — the hook's `t()` silently returns the key string on a miss, so typos fail invisibly.

## Page structure convention

Every route follows the same two-file split, and new routes should too:

- `page.tsx` — server component. Its only jobs are `generateMetadata()` and rendering the content component. Metadata reads the locale JSON directly (`props` → [getLanguageFromSearchParams](src/hooks/getLanguageFromSearchParams.ts) → `?lang=en|id`), pulling the per-page `meta*` keys (`metaTitle`, `metaDescription`, `metaKeywords`, `metaRobots`, `metaAuthor`, `metaPublisher`, `metaLang`) plus a hardcoded canonical/OG URL under `https://indosweetjn.com`.
- `XxxContent.tsx` — `"use client"`, holds all markup and calls `useTranslation()`.

[LanguageRedirectWrapper](src/components/LanguageRedirectWrapper.tsx) in the root layout syncs `?lang=` from localStorage on mount so the metadata path and the render path agree. Note that on a static export `generateMetadata` runs at build time only, so `?lang=id` metadata is not actually served per-request — the EN build output is what ships.

Translation keys are positional (`text1`, `text2`, …) per page section, not semantic. Renumbering breaks both locale files at once; append rather than reorder.

## Products

Product detail is a dynamic route with hardcoded slugs in [our-products/[slug]/page.tsx](src/app/our-products/[slug]/page.tsx) `generateStaticParams()`. Adding a product means three coordinated edits:

1. New slug in `generateStaticParams()`.
2. Matching `OurProductsDetails.<slug>` object (`title`, `description`, `list[]`) in **both** locale files — [ProductDetailClient](src/app/our-products/[slug]/ProductDetailClient.tsx) casts `t()`'s return to that object shape and renders "Product not found" when `title` is absent.
3. Image at `public/products/<slug>.png` (detail page) and a card in [OurProductsContent.tsx](src/app/our-products/OurProductsContent.tsx) pointing at `public/assets/products/`.

## Styling

Tailwind v4, configured entirely in [src/app/globals.css](src/app/globals.css) via `@theme` — no `tailwind.config`. Brand tokens: `primary` (#143423 dark green), `background` (#f4f1ea cream), `highlight` (#e3dac9 beige), `secondary` (#697d6c), `accent` (#c6a969 gold). Dark mode is intentionally disabled (commented-out `prefers-color-scheme` block; commit `b95fb6a revision dark mode`).

Prettier: no semicolons, double quotes, no trailing commas, 120 cols, arrow parens avoided. Much existing code predates this and is unformatted — don't reformat files you aren't otherwise editing.

`next/image` is not used anywhere; plain `<img>` with `/* eslint-disable @next/next/no-img-element */` at the top of the file is the established pattern (required by `output: "export"` without a loader).

## Third-party

- **EmailJS** — the contact form ([ContactUsContent.tsx](src/app/contact-us/ContactUsContent.tsx)) posts via `emailjs.sendForm` with service/template/public-key IDs hardcoded inline. Form `name` attributes must match the EmailJS template variables. The account has "allow non-browser API calls" enabled, so the hardcoded public key can be used to send from anywhere — worth turning off in the dashboard if quota abuse ever shows up. Package is `emailjs-com`, which upstream has deprecated in favour of `@emailjs/browser`.
- **Firebase** — currently inert. [FirebaseInitializer](src/components/FirebaseInitializer.tsx) calls `initializeApp()` and nothing else: no `getAnalytics()`, no Firestore, no Auth anywhere in `src/`. `measurementId` is present in [firebase.config.ts](src/lib/firebase.config.ts) but never used, so **no GA4 events are sent**. Adding analytics means importing `getAnalytics` from `firebase/analytics` and guarding it with `isSupported()` (it throws during SSR/prerender). Config comes from `NEXT_PUBLIC_FIREBASE_*` in `.env.local` (untracked).
- **keen-slider** — [MediaGallery](src/components/MediaGallery.tsx) with its item list hardcoded in the component, pointing at `public/assets/gallery/`.
