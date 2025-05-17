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
import { BLOCKS, Document } from "@contentful/rich-text-types";
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
import { GetStaticProps, GetStaticPaths } from 'next';
import { Entry } from "contentful";

interface Author {
  fields: {
    name: string;
    slug: string;
  };
}

interface BookFields {
  title: string;
  slug: string;
  brief: Document;
  link: string;
  book: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  author: Author;
}

interface Book {
  fields: BookFields;
}

interface BookDetailsProps {
  books: Book;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "books",
    "fields.slug": params?.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { books: items[0] },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "books",
  });

  const paths = res.items.map((item: Entry<unknown>) => {
    return {
      params: { slug: (item.fields as any).slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

const Qoute: React.FC<{ children: React.ReactNode }> = ({ children }) => <q>{children}</q>;

const options = {
  renderNode: {
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => <Qoute>{children}</Qoute>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: React.ReactNode) => (
      <a className="text-primary" href={node.data.uri}>
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p className="">{children}</p>
        <br />
      </>
    ),
  },
};

export default function BookDetails({ books }: BookDetailsProps): JSX.Element {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const [btn, setBtn] = useState<boolean>(false);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  if (!books) return <div>تحميل</div>;

  return (
    <div className="md:grid grid-cols-3 gap-7 md:mx-16">
      <NextSeo
        title={`كتاب ${books.fields.title} — المكتبة القومية`}
        description=""
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
          <Image
            className=""
            src={'https:' + books.fields.book.fields.file.url}
            alt={books.fields.title}
            width={380}
            height={675}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        {/*Mobile*/}
        <aside className="grid gap-4 border dark:bg-dptimary dark:border-none h-fit md:hidden">
          <h2 className="pr-3">تفاصيل الكتاب</h2>
          <div className="grid gap-3 p-3">
            <p>
              الكاتب:{" "}
              <span className="font-black">
                <Link href={`/cvs/${books.fields.author.fields.slug}`}>
                  {books.fields.author.fields.name}
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
      <aside className="md:grid gap-4 border sticky top-28 dark:bg-dptimary dark:border-none w-full h-fit hidden">
        <h2 className="pr-3">تفاصيل الكتاب</h2>
        <div className="grid gap-3 p-3 w-full">
          <p>
            الكاتب:{" "}
            <span className="font-black">
              <Link href={`/cvs/${books.fields.author.fields.slug}`}>
                {books.fields.author.fields.name}
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