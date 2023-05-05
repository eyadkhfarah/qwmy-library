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

export default function CvDetails({cv}) {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const [btn, setBtn] = useState(false);

  const cancelButtonRef = useRef(null);

  if (!cv) return <div>تحميل</div>;

  return (
    <div className="md:grid grid-cols-3 gap-7 md:mx-16"></div>
  )
}
