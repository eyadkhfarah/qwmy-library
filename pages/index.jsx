import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script'

import { NextSeo } from 'next-seo';

// Components
import { useTheme } from "next-themes";

// Icons
import { RiArrowLeftSFill } from "react-icons/ri";

// import { createClient } from 'contentful'

// import generateRssFeed from '@/utils/generateRSSFeed'

export default function Home() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <>
        <Head>
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            "name": "لوكوجي",
            "alternateName": "Lokoji",
            "url": "${siteUrl}",
            "logo": "${siteUrl}/favicon.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "contactType": "",
              "contactOption": ["TollFree","HearingImpairedSupported"],
              "areaServed": "EG",
              "availableLanguage": "Arabic"
            },
            "sameAs": [
              "http://facbook.com/lokoji.eco",
              ${siteUrl},
              "https://twitter.com/LokojiEco"
            ]
          }`}}
        ></script>

        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "لوكوجي",
              "url": "${siteUrl}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "${siteUrl}/search-results?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}} />
        </Head>
            <div className="text-center h-full grid items-center">
                <div className="grid gap-3">
                    <h1>ابحث في المكتبة القومية</h1>
                    <p>بوابتك المعرفية في عالم القومية</p>

                    <input className="searchInput" type="text" placeholder="ابحث في عالم القومية" />
                </div>
            </div>
        </>
    )
}