import { NextSeo } from 'next-seo';
import Link from "next/link";

export default function Privacy() {
    const title = "المكتبة القومية — الشروط والاحكام"
    const desc = "اقرا عن الشروط والاحكام الخاصة بموقع المكتبة القومية علشان تطمن علي بياناتك."
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <article>
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

            <h1>الشروط والاحكام لمكتبة القومية</h1>

        </article>
    )
}