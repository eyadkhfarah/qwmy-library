import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";
import { NextSeo } from "next-seo";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

const Refer: React.FC = () => {
    const title = "مراجع تاريخية — المكتبة القومية";
    const desc = "أقرا اهم المراجع والمصادر التاريخية الموثوقة.";
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <>
            <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    title: `${title}`,
                    description: `${desc}`,
                    type: "website",
                    images: [{
                        url: siteUrl + "/og/books.png",
                        width: 800,
                        height: 600,
                        alt: 'مراجع تاريخية',
                        type: 'image/png',
                    }]
                }}
                additionalMetaTags={[
                    {
                        property: "name",
                        content: title,
                    },
                    {
                        property: "description",
                        content: desc,
                    },
                ]}
            />

            <section>
                <h1>مراجع تاريخية</h1>
            </section>
        </>
    )
}

export default Refer; 