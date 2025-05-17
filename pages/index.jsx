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
              "http://facbook.com/maktabaqawmya",
              ${siteUrl},
              "https://twitter.com/maktabaqawmya"
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
              "name": "المكتبة القومية",
              "url": "${siteUrl}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "${siteUrl}/search?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}} />
      </Head>
      <header className="text-center lg:px-36 px-0 w-full my-8">

        <div className="grid gap-5 w-full h-full">
          <div className="gap-7 w-full h-full lg:flex justify-center items-baseline">

            <ul className="tabList p-0">
              {Tabs.slice(0, 3).map((tab) => (
                <li key={tab.id} className="w-full">
                  <Link href={`/${tab.slug}`} className="tabs">
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="grid gap-3 w-full">
              <h1 className="md:text-2xl">اهلا بيك في</h1>

              <div>
                <Link href={"/"}>

                  {currentTheme === "dark" ?
                    <Image
                      src="/WhiteLogo.svg"
                      alt="لوجو المكتبة القومية"
                      aria-label="لوجو المكتبة القومية"
                      width={1200}
                      height={470}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                    :
                    <Image
                      src="/DarkLogo.svg"
                      alt="لوجو المكتبة القومية"
                      aria-label="لوجو المكتبة القومية"
                      width={1200}
                      height={470}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  }

                </Link>
              </div>

              <p>بوابتك المعرفية في عالم القومية</p>
            </div>

            <ul className="tabList p-0">
              {Tabs.slice(3, 6).map((tab) => (
                <li className="w-full p-0">
                  <Link href={`/${tab.slug}`} className="tabs">
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/*Mobile*/}
          <ul className="lg:hidden my-5 p-0 list-none gap-14 grid w-full grid-cols-2">
            {Tabs.map((tab) => (
              <li>
                <Link href={`/${tab.slug}`} className="tabs">
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
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
  );
}