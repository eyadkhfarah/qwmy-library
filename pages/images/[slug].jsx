import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

import {
    FacebookShareButton,
    PinterestShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
} from "next-share";

import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiWhatsappLine,
    RiLinkedinFill,
    RiLinkM,
    RiPinterestFill
} from "react-icons/ri";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: "images",
        "fields.slug": params.slug,
    });

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    const res = await client.getEntries({ content_type: "images" });

    return {
        props: { images: items[0] },
        revalidate: 1,
    };
};

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "images",
    });

    const paths = res.items.map((item) => {
        const slug = item.fields.slug;

        return {
            params: { slug },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

const Qoute = ({ children }) => <q>{children}</q>;

const options = {
    renderNode: {
        [BLOCKS.QUOTE]: (node, children) => <Qoute>{children}</Qoute>,
        [BLOCKS.HYPERLINK]: (node, children) => (
            <a className="text-primary" href={node.data.uri}>
                {children}
            </a>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <>
                <p className="">{children}</p>
                <br />
            </>
        ),
    },
};


export default function ImageDetials({ images }) {
    // const title = images.fields.title + " — المكتبة القومية"
    // const desc = images.fields.details.content[0].content[0].value;
    // const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    if (!images) return <div>تحميل</div>;

    return (
        <>
            {/* <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    title: `${title}`,
                    description: `${desc}`,
                    type: "website",
                    images: [{
                        url: 'https:' + images.fields.image.fields.file.url,
                        width: 800,
                        height: 600,
                        alt: images.fields.alt,
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

            <article className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="">
                    <h1>{images.fields.title}</h1>
                    <div className="my-7 grid gap-3 w-full h-fit md:hidden">
                        <Image priority={true} src={'https:' + images.fields.image.fields.file.url} alt={images.fields.alt} width={images.fields.image.fields.file.details.image.width} height={images.fields.image.fields.file.details.image.height} className="h-fit w-full lg:hidden block" />
                        <span className="font-medium text-gray-500 text-xs">{images.fields.alt}</span>
                    </div>
                    <div className="mt-9">
                        {documentToReactComponents(images.fields.details, options)}
                    </div>
                    <div className="my-7">
                        <h2 className="text-xl">شارك الصورة من خلال</h2>
                        <div className="flex gap-5">

                            <FacebookShareButton
                                url={`${siteUrl}/images/${images.fields.slug}`}
                                quote={images.fields.alt}
                                hashtag={'#المكتبة_القومية'}>
                                <RiFacebookCircleFill className="text-2xl" />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={`${siteUrl}/images/${images.fields.slug}`}
                                title={images.fields.alt}
                                hashtag={'#المكتبة_القومية'}>
                                <RiTwitterFill className="text-2xl" />
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={`${siteUrl}/images/${images.fields.slug}`}
                                title={images.fields.alt}>
                                <RiLinkedinFill className="text-2xl" />
                            </LinkedinShareButton>

                            <WhatsappShareButton
                                url={`${siteUrl}/images/${images.fields.slug}`}
                                title={images.fields.alt}
                                separator=" — ">
                                <RiWhatsappLine className="text-2xl" />
                            </WhatsappShareButton>

                            <PinterestShareButton
                                url={`${siteUrl}/images/${images.fields.slug}`}
                                media={images.fields.alt}
                            >
                                <RiPinterestFill className="text-2xl" />
                            </PinterestShareButton>
                        </div>
                    </div>
                </div>
                <div className="gap-3 w-full h-fit hidden md:grid">
                    <Image priority={true} src={'https:' + images.fields.image.fields.file.url} alt={images.fields.alt} width={images.fields.image.fields.file.details.image.width} height={images.fields.image.fields.file.details.image.height} className="h-fit w-full" />
                    <span className="font-medium text-gray-500 text-xs">{images.fields.alt}</span>
                </div>
            </article> */}

            <div>
                <h3>صور متعلقة</h3>
            </div>
        </>
    )
}
