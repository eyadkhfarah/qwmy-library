import { createClient, Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "next-share";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiWhatsappLine,
  RiLinkedinFill,
  RiLinkM,
  RiPinterestFill,
  RiTwitterXFill
} from "react-icons/ri";
import { GetStaticProps, GetStaticPaths } from 'next';

// Types
interface ImageFile {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}

interface ImageFields {
  title: string;
  slug: string;
  alt: string;
  details: Document;
  image: ImageFile[];
}

interface ImageData extends Entry<ImageFields> {}

interface ImageDetailsProps {
  images: ImageData;
}

interface QuoteProps {
  children: React.ReactNode;
}

interface ShareButtonProps {
  url: string;
  title: string;
  className?: string;
}

// Components
const Quote: React.FC<QuoteProps> = ({ children }) => <q>{children}</q>;

const ShareButtons: React.FC<ShareButtonProps> = ({ url, title }) => (
  <div className="flex gap-5">
    <FacebookShareButton url={url} quote={title} hashtag={'#المكتبة_القومية'}>
      <RiFacebookCircleFill className="text-2xl hover:opacity-80 transition-opacity" />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} hashtags={['المكتبة_القومية']}>
      <RiTwitterXFill className="text-2xl hover:opacity-80 transition-opacity" />
    </TwitterShareButton>

    <LinkedinShareButton url={url} title={title}>
      <RiLinkedinFill className="text-2xl hover:opacity-80 transition-opacity" />
    </LinkedinShareButton>

    <WhatsappShareButton url={url} title={title} separator=" — ">
      <RiWhatsappLine className="text-2xl hover:opacity-80 transition-opacity" />
    </WhatsappShareButton>

    <PinterestShareButton url={url} media={title}>
      <RiPinterestFill className="text-2xl hover:opacity-80 transition-opacity" />
    </PinterestShareButton>
  </div>
);

// Rich Text Options
const options = {
  renderNode: {
    [BLOCKS.QUOTE]: (_: any, children: React.ReactNode) => <Quote>{children}</Quote>,
    [BLOCKS.EMBEDDED_ASSET]: (_: any, children: React.ReactNode) => (
      <a className="text-primary hover:opacity-80 transition-opacity" href={_.data.uri}>
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (_: any, children: React.ReactNode) => (
      <>
        <p className="text-gray-800 dark:text-gray-200">{children}</p>
        <br />
      </>
    ),
  },
};

// Contentful Client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

// Static Props and Paths
export const getStaticProps: GetStaticProps<ImageDetailsProps> = async ({ params }) => {
  const { items } = await client.getEntries<ImageFields>({
    content_type: "imagesQwmy",
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
    props: { images: items[0] },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<ImageFields>({
    content_type: "imagesQwmy",
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

// Main Component
const ImageDetails: React.FC<ImageDetailsProps> = ({ images }) => {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const router = useRouter();

  if (router.isFallback || !images) {
    return <div className="text-center py-8">تحميل...</div>;
  }

  const description = images.fields.details.content[0]?.content?.[0]?.nodeType === 'text'
    ? (images.fields.details.content[0].content[0] as { value: string }).value
    : "";

  const shareUrl = `${siteUrl}/images/${images.fields.slug}`;

  return (
    <>
      <NextSeo
        title={`${images.fields.title} — المكتبة القومية`}
        description={description}
        openGraph={{
          title: `${images.fields.title} — المكتبة القومية`,
          description,
          type: "website",
          images: [{
            url: `https:${images.fields.image[0].fields.file.url}`,
            width: 800,
            height: 600,
            alt: images.fields.alt,
            type: 'image/png',
          }]
        }}
        additionalMetaTags={[
          {
            property: "name",
            content: images.fields.title,
          },
          {
            property: "description",
            content: description,
          },
        ]}
      />

      <article className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-6">{images.fields.title}</h1>
          
          {/* Mobile Images */}
          <div className="my-7 grid gap-3 w-full h-fit md:hidden">
            {images.fields.image.map((img) => (
              <div key={img.fields.file.url} className="relative">
                <Image
                  priority
                  src={`https:${img.fields.file.url}`}
                  alt={images.fields.alt}
                  width={img.fields.file.details.image.width}
                  height={img.fields.file.details.image.height}
                  className="w-full h-auto"
                />
              </div>
            ))}
            <span className="font-medium text-gray-500 text-xs">{images.fields.alt}</span>
          </div>

          <div className="mt-9 prose dark:prose-invert max-w-none">
            {documentToReactComponents(images.fields.details, options)}
          </div>

          <div className="my-7">
            <h2 className="text-xl mb-4">شارك الصورة من خلال</h2>
            <ShareButtons url={shareUrl} title={images.fields.alt} />
          </div>
        </div>

        {/* Desktop Images */}
        <div className="gap-3 w-full h-fit hidden md:grid">
          {images.fields.image.map((img) => (
            <div key={img.fields.file.url} className="relative">
              <Image
                priority
                src={`https:${img.fields.file.url}`}
                alt={images.fields.alt}
                width={img.fields.file.details.image.width}
                height={img.fields.file.details.image.height}
                className="w-full h-auto"
              />
            </div>
          ))}
          <span className="font-medium text-gray-500 text-xs">{images.fields.alt}</span>
        </div>
      </article>
    </>
  );
};

export default ImageDetails; 