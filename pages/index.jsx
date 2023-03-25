import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script'

import { useState } from "react"

import { NextSeo } from 'next-seo';

// Components
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

// Icons
import { RiCloseFill, RiSearchLine } from "react-icons/ri";

import { Tabs } from "@lib/CatPages"

// import { createClient } from 'contentful'

// import generateRssFeed from '@/utils/generateRSSFeed'

const fake = [
  { name: 'اياد', cat: "شخص القومي", id: 1 },
  { name: 'قومي', cat: "صفحة", id: 2 },
  { name: 'القومية المصرية', cat: "حركة قومية", id: 3 },
  { name: 'وعي مصر', cat: "صفحة", id: 4 },
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

  const router = useRouter();

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

      <header className="text-center md:px-[9em] w-full my-8">

        <div className="grid gap-5 w-full h-full">
          <div className="md:grid place-items-start gap-7 h-full grid-cols-3">

            <ul className="tabList">
              {Tabs.slice(0, 3).map((tab) => (
                <li className="w-full">
                  <Link href={`/category/${tab.slug}`}>
                    <a className="tabs" href={`/category/${tab.slug}`}>{tab.name}</a>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="grid gap-3 w-full">
              <h1 className="md:text-2xl">اهلا بيك في</h1>

              <div>
                    <Link href={"/"}>
                        <a href={siteUrl}>
                            {currentTheme === "dark" ?
                                <Image src="/WhiteLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={1200} height={470} />
                                :
                                <Image src="/DarkLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={1200} height={470} />
                            }
                        </a>
                    </Link>
                </div>

              <p>بوابتك المعرفية في عالم القومية</p>
            </div>

            <ul className="tabList">
              {Tabs.slice(3, 6).map((tab) => (
                <li className="w-full">
                  <Link href={`/category/${tab.slug}`}>
                    <a className="tabs" href={`/category/${tab.slug}`}>{tab.name}</a>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/*Mobile*/}
          <ul className="md:hidden block my-5 list-none gap-14 grid w-full grid-cols-2">
            {Tabs.map((tab) => (
              <li>
                <Link href={`/category/${tab.slug}`}>
                <a className="tabs" href={`/category/${tab.slug}`}>{tab.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <input
              value={wordEntered}
              onChange={handleFilter}
              className="searchInput"
              type="text"
              placeholder="ابحث في عالم القومية" />
          </div>

          {filteredData.lenght != 0 && (
            <>
              <div className={`${filteredData.lenght === 0 ? "border dark:border-slate-500" : "border-none"} text-right`}>
                {filteredData.slice(0, 6).map((items) =>
                (
                  <div className="border dark:border-none dark:border-b-slate-500 dark:bg-dprimary p-4 grid gap-2" key={items.id}>
                    <p className="font-black">{items.name}</p>
                    <p className="text-sm text-slate-500">{items.cat}</p>
                  </div>
                ))}

              </div>
            </>
          )}

          {filteredData.lenght === 0 ? null : (
            <a className={`p-4 border dark:border-none`} href={`/search?search=${wordEntered}`}>ابحث اكتر</a>
          )}

        </div>
      </header>

      <div className="md:grid gap-8 grid-cols-2">
        {/* التوصيات */}
        <section>
          <h2>مقالات مختارة</h2>
        </section>

        {/* دراسات جينية */}
        <section>
          <h2>دراسات جينية</h2>
        </section>

        {/* صور */}
        <section>
          <h2>ألبوم الصور</h2>
        </section>

        {/* صور */}
        <section>
          <h2>في هذا اليوم</h2>
        </section>

      </div>
    </>
  )
}