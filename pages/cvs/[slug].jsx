import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import { NextSeo, NewsArticleJsonLd } from "next-seo";
import { Partytown } from "@builder.io/partytown/react";

import { useState, useRef } from "react";

import {
  FaceBookhareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "next-share";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

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
import CVDeatils from "@component/CV/CVDeatils";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async ({ params }) => {
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

  const res = await client.getEntries({ content_type: "cv" });

  return {
    props: { cv: items[0] },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "cv",
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

export default function CvDetails({ cv }) {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const [btn, setBtn] = useState(false);

  const cancelButtonRef = useRef(null);

  if (!cv) return <div>تحميل</div>;

  return (
    <div className="md:grid grid-cols-3 gap-7 md:mx-16">
      <NextSeo
        title={`${cv.fields.name} — المكتبة القومية`}
        description={cv.fields.info.content[0].content[0].value}
        openGraph={{
          url: `${siteUrl}/cvs/${cv.fields.slug}`,
          title: cv.fields.name,
          description: cv.fields.info.content[0].content[0].value,
          images: [
            {
              url: 'https:' + cv.fields.image.fields.file.url,
              width: 800,
              height: 600,
              alt: cv.fields.title,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <article className="grid gap-4 col-span-2">
        <div className="md:flex justify-start w-full grid gap-5">
          <Image
            className="rounded-xl mx-auto"
            src={'https:' + cv.fields.image.fields.file.url}
            alt={cv.fields.nameن}
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className="grid gap-3 h-fit">
            <h1>{cv.fields.name}</h1>
            <p className="text-gray-500">{cv.fields.type}</p>
          </div>
        </div>
        {/* <CVDeatils cv={cv} className="hidden" /> */}
        <div className="mt-4 pt-4 border-t-2">
          {documentToReactComponents(cv.fields.info, options)}
        </div>
      </article>
      <CVDeatils cv={cv} className="md:hidden grid" />
    </div>
  );
}
