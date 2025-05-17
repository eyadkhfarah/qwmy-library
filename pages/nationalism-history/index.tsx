import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";
import { NextSeo } from "next-seo";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

const History: React.FC = () => {
    const title = "تاريخ التيار القومي — المكتبة القومية";
    const desc = "تعرف علي تاريخ حركة القومية المصرية.";
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
                        alt: 'تاريخ التيار القومي',
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
                <h1>تاريخ التيار القومي</h1>
            </section>
        </>
    )
}

export default History; 