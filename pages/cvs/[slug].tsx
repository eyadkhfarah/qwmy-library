import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { NextSeo, NewsArticleJsonLd } from "next-seo";
import { Partytown } from "@builder.io/partytown/react";
import { useState, useRef, FC, ReactNode } from "react";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "next-share";
import { createClient, Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Block, Inline } from "@contentful/rich-text-types";
import {
  RiUser3Fill,
  RiCalendar2Line,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiTelegramFill,
  RiWhatsappLine,
  RiLinkedinFill,
  RiBallPenFill,
  RiLinkM,
} from "react-icons/ri";
import CVDetails from "../../Components/CV/CVDetails";
import { CV, CVDetailsProps, QuoteProps } from "../../types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { items } = await client.getEntries({
    content_type: "cv",
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

  return {
    props: { cv: items[0] as CV },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "cv",
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

const Quote: FC<QuoteProps> = ({ children }) => <q>{children}</q>;

const options = {
  renderNode: {
    [BLOCKS.QUOTE]: (_node: Block | Inline, children: ReactNode) => <Quote>{children}</Quote>,
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline, children: ReactNode) => (
      <a className="text-primary" href={(node as any).data?.uri}>
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
  },
};

const CvDetails: FC<CVDetailsProps> = ({ cv }) => {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const [btn, setBtn] = useState(false);
  const cancelButtonRef = useRef(null);

  if (!cv) return <div>تحميل</div>;

  const firstParagraph = cv.fields.info.content[0]?.content?.[0]?.nodeType === 'text' 
    ? (cv.fields.info.content[0].content[0] as { value: string }).value 
    : "";

  return (
    <div className="md:grid grid-cols-3 gap-7 md:mx-16">
      <NextSeo
        title={`${cv.fields.name} — المكتبة القومية`}
        description={firstParagraph}
        openGraph={{
          url: `${siteUrl}/cvs/${cv.fields.slug}`,
          title: cv.fields.name,
          description: firstParagraph,
          images: [
            {
              url: 'https:' + cv.fields.image.fields.file.url,
              width: 800,
              height: 600,
              alt: cv.fields.title || cv.fields.name,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <article className="grid gap-4 col-span-2">
        <div className="md:flex justify-start w-full grid gap-5">
          <Image
            className="rounded-xl"
            src={'https:' + cv.fields.image.fields.file.url}
            alt={cv.fields.name}
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
          <div className="grid gap-3 h-fit">
            <h1>{cv.fields.name}</h1>
            <p className="text-gray-500">{cv.fields.type}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t-2">
          {documentToReactComponents(cv.fields.info, options)}
        </div>
      </article>
      <CVDetails cv={cv} className="grid" />
    </div>
  );
};

export default CvDetails; 