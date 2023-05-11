import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from 'contentful';

import { NextSeo } from 'next-seo';
import Link from "next/link";

import ReactPaginate from 'react-paginate';
import Image from "next/image";

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

export default function CV({ cvs }) {
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
                    images: [{
                        url: siteUrl + "/og/cv.png",
                        width: 800,
                        height: 600,
                        alt: 'سيرة ذاتية',
                        type: 'image/png',
                    }]
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
            <div className="container mx-auto">
                <h1>سيرة ذاتية</h1>
                <div className="gird gap-3">
                    {cvs.map((cv) => (
                        <div className="p-4 my-4 border-b-2">
                            <div className="flex items-center gap-4">
                                <RiArrowLeftSLine className="text-2xl" />
                                <Image className="rounded-xl mx-auto" src={'https:' + cv.fields.image.fields.file.url} alt={cv.fields.name} width={70} height={70} />
                                <div className="flex gap-3">
                                    <div className="grid h-fit">
                                        <Link href={`/cvs/${cv.fields.slug}`}>
                                            <a href={`/cvs/${cv.fields.slug}`}>
                                                <h2 className="border-none text-lg m-0">
                                                    {cv.fields.name}
                                                </h2>
                                            </a>
                                        </Link>
                                        <p className="text-gray-500">{cv.fields.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
