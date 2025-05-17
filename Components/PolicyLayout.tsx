import { NextSeo } from 'next-seo';
import { FC, ReactNode } from 'react';

interface PolicyLayoutProps {
    title: string;
    description: string;
    siteUrl?: string;
    children: ReactNode;
}

export const PolicyLayout: FC<PolicyLayoutProps> = ({
    title,
    description,
    siteUrl,
    children
}) => {
    return (
        <article className="prose prose-lg dark:prose-invert max-w-7xl mx-auto">
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    title,
                    description,
                    type: 'website',
                    url: siteUrl,
                }}
                additionalMetaTags={[
                    {
                        property: 'name',
                        content: title
                    },
                    {
                        property: 'description',
                        content: description
                    },
                ]}
            />
            {children}
        </article>
    );
}; 