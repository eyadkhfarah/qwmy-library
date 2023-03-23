import RSS from 'rss';
import fs from 'fs';

export default async function generateRssFeed(res) {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
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
            pubDate: post.sys.createdAt,
            enclosure: {
                length: 1000,
                type: "image/jpeg",
                url: "https:" + post.fields.image.fields.file.url,
            },
            author: post.fields.author.fields.name,
        });
    });

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
