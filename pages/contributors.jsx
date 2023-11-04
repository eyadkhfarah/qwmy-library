import { NextSeo } from 'next-seo';
import Link from "next/link";

export default function Contrib() {
    const title = "المساهمين — المكتبة القومية"
    const desc = "قائمة المساهمين في الموقع بشكل مادي، كن انت من المساهمين."
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

            <h1>مساهمينا</h1>
        </>
    )
}