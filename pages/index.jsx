import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script'

import { useState } from "react"

import { NextSeo } from 'next-seo';

// Components
import { useTheme } from "next-themes";

// Icons
import { RiArrowLeftSFill } from "react-icons/ri";

// import { createClient } from 'contentful'

// import generateRssFeed from '@/utils/generateRSSFeed'

const fake = [
  { name: 'اياد', id: 1 },
  { name: 'قومي', id: 2 },
  { name: 'القومية المصرية', id: 3 },
  { name: 'وعي مصر', id: 4 },
  { name: 'الصحوة القومية', id: 5 },
  { name: 'القومية الامازغية', id: 6 },
  { name: 'القومية العربية', id: 7 },
  { name: 'الافروسنترك', id: 8 },
  { name: 'الجماعات الارهابية', id: 9 },

]

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  const [value, setValue] = useState()

  const onChange = (event) => {
    setValue(event.targer.value);
  }

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
            "name": "المكتبة القومية",
            "url": "${siteUrl}",
            "logo": "${siteUrl}/favicon.ico",
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
              "name": "المكتبة القوكية",
              "url": "${siteUrl}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "${siteUrl}/search?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}} />
      </Head>
      <div className="text-center h-full grid items-center">
        <div className="grid gap-3 w-full">
          <h1>ابحث في المكتبة القومية</h1>
          <p>بوابتك المعرفية في عالم القومية</p>
          <div>
            <input
              value={value}
              onChange={onChange}
              className="searchInput"
              type="text"
              placeholder="ابحث في عالم القومية" />
          </div>

          <div className="border text-right">
            {fake
              .filter(items => {
                const searchItems = value.toLowerCase()
                const term = items.name.toLowerCase()

                return searchItems && term.endWith(searchItems) && term !== searchItems;
              })
              .slice(0,10)
              .map((items, index) => (
                <div className="border-b-1 p-4" key={items.id}>{items.name}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}