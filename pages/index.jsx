import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script'

import { useState } from "react"

import { NextSeo } from 'next-seo';

// Components
import { useTheme } from "next-themes";

// Icons
import { RiCloseFill, RiSearchLine } from "react-icons/ri";

// import { createClient } from 'contentful'

// import generateRssFeed from '@/utils/generateRSSFeed'

const fake = [
  { name: 'اياد', cat: "شخص القومي", id: 1 },
  { name: 'قومي', cat:"صفحة", id: 2 },
  { name: 'القومية المصرية', cat:"حركة قومية", id: 3 },
  { name: 'وعي مصر', cat:"صفحة", id: 4 },
  { name: 'الصحوة القومية', cat: "صفحة", id: 5 },
  { name: 'القومية الامازغية', cat: "حركة قومية", id: 6 },
  { name: 'القومية العربية', cat: "حركة قومية", id: 7 },
  { name: 'الافروسنترك', cat: "جماعات", id: 8 },
  { name: 'الجماعات الارهابية', cat: "جماعات", id: 9 },
  { name: 'داعش', cat: "جماعة ارهابية", id: 10 },
  { name: 'الجينات المصرية', cat: "جينات", id: 11 },
  { name: 'الجينات العربية', cat: "جينات", id: 12 },
  { name: 'حرب ماجدو', car: "حرب", id: 13 },
]

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = fake.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

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
      <div className="text-center h-[53em] w-full">
        <div className="grid gap-3 w-full">
          <h1>ابحث في المكتبة القومية</h1>
          <p>بوابتك المعرفية في عالم القومية</p>
          <div>
            <input
              value={wordEntered}
              onChange={handleFilter}
              className="searchInput"
              type="text"
              placeholder="ابحث في عالم القومية" />
          </div>
          {filteredData.lenght != 0 && (
            <div className="border text-right">
              {filteredData.slice(0,6).map((items) =>
              (
                <div className="border p-4 grid gap-2" key={items.id}>
                  <p className="font-black">{items.name}</p>
                  <p className="text-sm text-gary-300">{items.cat}</p>
                </div>
              ))}

              <a className="p-4" href={`/search?search=${wordEntered}`}>ابحث اكتر</a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}