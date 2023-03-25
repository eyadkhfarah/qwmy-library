import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from 'contentful';

import { NextSeo } from 'next-seo';
import Link from "next/link";

import ReactPaginate from 'react-paginate';

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: "cv" })

    return {
        props: {
            cvs: res.items,
        },
        revalidate: 1
    }
}

export default function CV({cvs}) {
    const title = "المكتبة القومية — سيرة ذاتية"
    const desc = "تعرف علب مجموعة كبيرة من قراء ومفكرين وشخصيات قومية عظيمة."
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <>
            <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    title: `${title}`,
                    description: `${desc}`,
                    type: 'website',
                }}
                additionalMetaTags={[
                    {
                        itemProp: 'name',
                        content: { title }
                    },
                    {
                        itemProp: 'description',
                        content: { desc }
                    },
                ]}
            />

            <h1>سيرة ذاتية</h1>
    
    </>
  )
}
