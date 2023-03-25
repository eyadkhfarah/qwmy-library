import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from 'contentful';

import { NextSeo } from 'next-seo';
import Link from "next/link";

import ReactPaginate from 'react-paginate';

export default function Books() {
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
                <div className="flex items-center gap-4">
                    <RiArrowLeftSLine className="text-2xl" />
                    <a href="/"><h2 className="border-none">كتاب معين</h2></a>
                </div>
                <div className="flex text-gray-500 gap-5">
                    <p>نوع الكتاب</p>
                    <p>اسم المؤلف</p>
                </div>
            </div>
        </>
    )
}
