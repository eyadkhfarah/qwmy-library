import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from 'next/head'
import { useRouter } from "next/router";
import Script from 'next/script'

import { DefaultSeo, NextSeo } from 'next-seo';

import { useState, useRef } from "react"

import { Partytown } from '@builder.io/partytown/react';
// import ScrollButton from "./ScrollBtn";
// import DarkButton from "./darkBtn";

export default function Layout({ children, market, etf }) {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
    const router = useRouter()

    const title = "المكتبة القومية"
    const desc = "بوابتك المعرفية الي عالم القومية"
    const img = "https://i.ibb.co/0scYsTR/Picsart-23-03-23-02-14-02-466.jpg"

    return (
        <>
            <NextSeo
                canonical={siteUrl + router.asPath}
            />
            <DefaultSeo
            title={title}
            description={desc}

                facebook={{
                    appId: '963733097926528',
                }}
                openGraph={{
                    title: title,
                    description: desc,
                    images: [
                        {
                          url: img,
                          width: 800,
                          height: 600,
                          alt: 'صورة المكتبة القومية',
                        },
                    ],
                    type: 'website',
                    locale: 'ar_IE',
                    url: siteUrl + router.asPath,
                    siteName: 'المكتبة القومية',
                }}

                twitter={{
                    handle: '@',
                    site: '@',
                    cardType: 'summary_large_image',
                }}

                additionalMetaTags={[
                    {
                        property: "fb:admins",
                        content: ""
                    },
                    {
                        name: "fb_admins_meta_tag",
                        content: ""
                    },
                    {
                        property: "fb:app_id",
                        content: ""
                    },
                    {
                        property: "fb:pages",
                        content: ""
                    },
                    {
                        name: "emailvertical",
                        content: "المكتبة القومية"
                    },
                    {
                        name: "application-name",
                        content: "المكتبة القومية"
                    },

                    {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    },
                    {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    },
                    {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "#DCDCDC"
                    },
                    {
                        name: "theme-color",
                        content: "#DCDCDC"
                    },
                    {
                        content: 'general',
                        name: 'rating'
                    },
                    {
                        content: 'all',
                        name: 'robots'
                    },

                    {
                        name: "google-site-verification",
                        content: "SAdpay-liv1rI5Wv_WMEhQWbAXRtsm96riCif7zyOzs"
                    },

                    {
                        content: 'ar',
                        name: 'language'
                    },
                    {
                        content: 'EG',
                        name: 'geo.country'
                    },
                    {
                        name: "geo.region",
                        content: "EG"
                    },
                    {
                        content: 'global',
                        name: 'distribution'
                    },
                    {
                        content: '1 days',
                        name: 'revisit-after'
                    },
                    {
                        content: 'Egypt',
                        name: 'geo.placename'
                    },

                    {
                        name: "HandheldFriendly",
                        content: "True"
                    },
                    {
                        name: "MobileOptimized",
                        content: "1100"
                    },

                ]}

                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: `${siteUrl}/favicon.ico`,
                    },
                    {
                        rel: 'shortcut icon',
                        href: `${siteUrl}/favicon.ico`,
                        type: "image/ico"
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: `${siteUrl}/favicon.ico`,
                        sizes: '76x76',
                        type: "image/ico"
                    },
                    {
                        rel: "alternate",
                        href: `${siteUrl}/rss.xml`,
                        title: "Maktaba - RSS",
                        type: "application/rss+xml"
                    },
                ]}
            />


            <Partytown debug={true} forward={['dataLayer.push']} />
            <Head>
                <Script
                    type="text/partytown"
                    strategy="afterInteractive"

                    dangerouslySetInnerHTML={{
                        __html: `
            
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '963733097926528',
      xfbml      : true,
      version    : 'v15.0'
    });
    FB.AppEvents.logPageView();
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));`
                    }} />

                <Script
                    type="text/partytown"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    (function(w,d,s,l,i){
                      w[l] = w[l] || [];
                      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                      var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NXCKRCJ');
                `}} />

                <Script
                    type="text/partytown"
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-L2L744B91L" />
                <Script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    
                    gtag('js', new Date());
                    gtag('config', 'G-L2L744B91L', {
                        page_path: window.location.pathname,
                    });`
                    }}
                    type="text/partytown"
                />
                <Script
                    id="Adsense-id"
                    data-ad-client="ca-pub-4450640148291415"
                    async="true"
                    crossorigin="anonymous"
                    strategy="beforeInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    type="text/partytown"
                />
                <Script
                    id="Adsense-id" async
                    data-ad-client="ca-pub-4450640148291415"
                    onError={(e) => { console.error("Script failed to load", e); }}
                    strategy="afterInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    crossorigin="anonymous"
                    type="text/partytown"
                />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            {/* <ScrollButton />
                <DarkButton /> */}
        </>
    )
}