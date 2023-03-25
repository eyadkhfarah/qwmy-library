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

    const res = await client.getEntries({ content_type: "books" })

    return {
        props: {
            books: res.items,
        },
        revalidate: 1
    }
}

export default function Books({ books }) {
    const title = "المكتبة القومية — كتب عن القومية"
    const desc = "اكتشف مجموعة كبيرة من الكتب التي تتحدث عن القومية."
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

            <h1>كتب عن القومية</h1>
            <div className="gird gap-3 p-4 my-4 border-b-2">
                {books.map((book) => (
                    <>
                        <div className="flex items-start gap-4">
                            <RiArrowLeftSLine className="text-2xl" />
                            <a href="/"><h2 className="border-none text-lg">{book.fields.title}</h2></a>
                        </div>
                        <div className="flex text-gray-500 gap-5">
                            <p>نوع الكتاب</p>
                            <p>{book.fields.authors.fields.name}</p>
                        </div>
                    </>)
                )}
            </div>
        </>
    )
}
