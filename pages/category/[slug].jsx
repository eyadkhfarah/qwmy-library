// import { createClient } from 'contentful'

import { Tabs } from '@/lib/CatPages'
import { NextSeo } from 'next-seo';

import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';

// Components

export async function getStaticProps(context) {
    const { params } = context;

   {/* const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: "articles" })
*/}
    const navTitle = Tabs.find((item) => {
        return item.slug.toString() === params.slug;
    })

    return {
        props: {
            navTitle,
            // articles: res.items,
        },
        revalidate: 1
    }
}

export async function getStaticPaths() {

    const paths = CatMenu.map(content => ({
        params: {
            slug: content.link.toString(),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}


export default function News({ navTitle }) {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    {/* const [blogPosts, setBlogPosts] = useState(articles);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    }; */}

    const title = `المكتبة القومية — قسم ${navTitle.name}`
    const desc = `دي صفحة تابعة لقسم ${navTitle.name}`

    return (
        <main>
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

            <h1 className="my-6">{navTitle.name}</h1>
            <div className="space-y-4">

               {/* {blogPosts
                    .filter((val) => {
                        if (val.fields.category.includes(navTitle.title)) {
                            return val
                        }
                    })
                    .map((content) => (
                        <ArticleCard key={content.sys.id} news={content} />
                    ))} */}
            </div>
        </main>
    )
}