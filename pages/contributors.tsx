import { NextSeo } from 'next-seo';
import Link from "next/link";
import { FC } from 'react';

const Contributors: FC = () => {
    const title = "المساهمين — المكتبة القومية";
    const desc = "قائمة المساهمين في الموقع بشكل مادي، كن انت من المساهمين.";
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <>
            <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    title,
                    description: desc,
                    type: 'website',
                }}
                additionalMetaTags={[
                    {
                        property: 'name',
                        content: title
                    },
                    {
                        property: 'description',
                        content: desc
                    },
                ]}
            />

            <section>
                <h1>مساهمينا</h1>
            </section>
        </>
    );
};

export default Contributors; 