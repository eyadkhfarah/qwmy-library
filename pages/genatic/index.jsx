import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";

import { NextSeo } from "next-seo";
import Link from "next/link";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Genatic() {

    const title = "المكتبة القومية — دراسة جينية";
    const desc = "تعرف علي احدث ما توصل إليه علم الجينات وخصوصا الجينات المصرية.";
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
                        url: siteUrl + "/og/genatic.png",
                        width: 800,
                        height: 600,
                        alt: 'دراسة جينية',
                        type: 'image/png',
                    }]
                }}
                additionalMetaTags={[
                    {
                        itemProp: "name",
                        content: { title },
                    },
                    {
                        itemProp: "description",
                        content: { desc },
                    },
                ]}
            />

            <h1>دراسة جينية</h1>
        </>
    )
}
