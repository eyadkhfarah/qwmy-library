import RSS from 'rss';
import fs from 'fs';
import { Entry } from 'contentful';

interface ArticleFields {
  title: string;
  subtitle: string;
  slug: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  author: {
    fields: {
      name: string;
    };
  };
}

interface Article extends Entry<ArticleFields> {}

interface GenerateRssFeedProps {
  items: Article[];
}

export default async function generateRssFeed(res: GenerateRssFeedProps): Promise<void> {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
    if (!siteUrl) {
        throw new Error('NEXT_PUBLIC_DOMAIN_URL is not defined');
    }
    const article = res.items;

    const feedOptions = {
        title: "مقالات المكتبة القومية",
        description: "باوبتك المعرفية لعالم القومية",
        id: siteUrl,
        feed_url: siteUrl + '/rss.xml',
        site_url: siteUrl,
        language: "ar",
        image_url: "http://i.ibb.co/PNr1fDv/Picsart-22-12-02-04-21-23-219.jpg",
        favicon: siteUrl + "/favicon.png",
        pubDate: 'Oct 20, 2022 04:00:00 GMT',
        copyright: `All rights reserved ${new Date().getFullYear()}, Lokoji`,
    }

    const feed = new RSS(feedOptions);

    article.map((post) => {
        feed.item({
            title: post.fields.title,
            description: post.fields.subtitle,
            url: `${siteUrl}/article/${post.fields.slug}`,
            date: post.sys.createdAt,
            enclosure: {
                url: "https:" + post.fields.image.fields.file.url,
                type: "image/jpeg",
            },
            author: post.fields.author.fields.name,
        });
    });

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
} 