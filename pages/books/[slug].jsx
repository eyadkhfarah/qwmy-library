import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import { NextSeo, NewsArticleJsonLd } from "next-seo";
import { Partytown } from "@builder.io/partytown/react";

import { useState, useRef } from "react";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "next-share";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiTelegramFill,
  RiWhatsappLine,
  RiLinkedinFill,
  RiBallPenFill,
  RiLinkM,
} from "react-icons/ri";

import { useRouter } from "next/router";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "books",
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

  const res = await client.getEntries({ content_type: "books" });

  return {
    props: { books: items[0] },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "books",
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

export default function BookDetials({ books }) {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const [btn, setBtn] = useState(false);

  const cancelButtonRef = useRef(null);

  if (!books) return <div>تحميل</div>;

  return (
    <div className="md:grid grid-cols-3 gap-7 md:mx-16">
      <NextSeo
        title={`كتاب ${books.fields.title} — المكتبة القومية`}
        description={``}
        openGraph={{
          url: `${siteUrl}/books/${books.fields.slug}`,
          title: books.fields.title,
          description: "",
          type: "book",
          book: {
            releaseDate: "",
            authors: [""],
          },
          images: [
            {
              url: "",
              width: 800,
              height: 600,
              alt: books.fields.title,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <article className="grid gap-4 col-span-2">
        <div className="md:flex md:flex-row-reverse grid gap-5">
          <h1>{books.fields.title}</h1>
          <Image className="" src={'https:' + books.fields.book.fields.file.url} alt={books.fields.title} width={380} height={675} />
        </div>
        {/*Mobile*/}
        <aside className="grid gap-4 border dark:bg-dptimary dark:border-none h-fit md:hidden">
          <h2 className="pr-3">تفاصيل الكتاب</h2>
          <div className="grid gap-3 p-3">
            <p>
              الكاتب:{" "}
              <span className="font-black">
                <Link href={`/cvs/${books.fields.author.fields.slug}`}>
                  <a href={`/cvs/${books.fields.author.fields.slug}`}>
                    {books.fields.author.fields.name}
                  </a>
                </Link>
              </span>
            </p>
          </div>
        </aside>

        <div className="mt-9">
          {documentToReactComponents(books.fields.brief, options)}
        </div>

        <a
          href={books.fields.link}
          download={books.fields.title}
          className="download md:hidden block"
        >
          حمل الكتاب
        </a>
      </article>

      <aside className="md:grid gap-4 border dark:bg-dptimary dark:border-none w-full h-fit hidden">
        <h2 className="pr-3">تفاصيل الكتاب</h2>
        <div className="grid gap-3 p-3 w-full">
          <p>
            الكاتب:{" "}
            <span className="font-black">
              <Link href={`/cvs/${books.fields.author.fields.slug}`}>
                <a href={`/cvs/${books.fields.author.fields.slug}`}>
                  {books.fields.author.fields.name}
                </a>
              </Link>
            </span>
          </p>
          <a
            href={books.fields.link}
            download={books.fields.title}
            className="download my-4"
          >
            حمل الكتاب
          </a>
        </div>
      </aside>
    </div>
  );
}
