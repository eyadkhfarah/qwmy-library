import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import { useState } from "react";
import { NextSeo } from 'next-seo';
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { RiCloseFill, RiSearchLine } from "react-icons/ri";
import { Tabs } from "@lib/CatPages";

export default function Home(): JSX.Element {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
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
      <header className="text-center max-w-[1920px] mx-auto px-4 lg:px-8 w-full my-8">
        <div className="grid gap-5 w-full h-full max-w-7xl mx-auto">
          <div className="gap-7 w-full h-full lg:flex justify-center items-baseline">
            <ul className="tabList p-0">
              {Tabs.slice(0, 3).map((tab) => (
                <li key={tab.id} className="w-full">
                  <Link href={`/${tab.slug}`} className="tabs hover:opacity-80 transition-opacity">
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="grid gap-3 w-full max-w-3xl mx-auto">
              <h1 className="md:text-2xl">اهلا بيك في</h1>

              <div className="max-w-[800px] mx-auto">
                <Link href={"/"}>
                  <Image
                    src="/DarkLogo.svg"
                    alt="لوجو المكتبة القومية"
                    aria-label="لوجو المكتبة القومية"
                    width={1200}
                    height={470}
                    className="dark:invert transition-all duration-200"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </Link>
              </div>

              <p className="text-lg md:text-xl">بوابتك المعرفية في عالم القومية</p>
            </div>

            <ul className="tabList p-0">
              {Tabs.slice(3, 6).map((tab) => (
                <li key={tab.id} className="w-full p-0">
                  <Link href={`/${tab.slug}`} className="tabs hover:opacity-80 transition-opacity">
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*Mobile*/}
          <ul className="lg:hidden my-5 p-0 list-none gap-14 grid w-full grid-cols-2">
            {Tabs.map((tab) => (
              <li key={tab.id}>
                <Link href={`/${tab.slug}`} className="tabs hover:opacity-80 transition-opacity">
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="md:grid gap-8 grid-cols-2 max-w-7xl mx-auto">
          {/* التوصيات */}
          <section className="mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl mb-4">مقالات مختارة</h2>
          </section>

          {/* دراسات جينية */}
          <section className="mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl mb-4">دراسات جينية</h2>
          </section>

          {/* صور */}
          <section className="mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl mb-4">ألبوم الصور</h2>
          </section>

          {/* صور */}
          <section className="mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl mb-4">في هذا اليوم</h2>
          </section>
        </div>
      </div>
    </>
  );
} 