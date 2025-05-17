import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

interface ImageFields {
  slug: string;
  alt: string;
  title: string;
  image: Array<{
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
  }>;
}

interface Image {
  sys: {
    id: string;
  };
  fields: ImageFields;
}

interface ImagesProps {
  images: Image[];
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const res = await client.getEntries({ content_type: "imagesQwmy" });

  return {
    props: {
      images: res.items,
    },
    revalidate: 1,
  };
}

export default function Images({ images }: ImagesProps): JSX.Element {
  const title = "ألبوم الصور — المكتبة القومية";
  const desc = "شاهد اهم واجمل الصور هنا.";
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  const [imagesPost, setImagesPost] = useState<Image[]>(images);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ImagesPerPage] = useState<number>(20);

  const indexOfLastPost = currentPage * ImagesPerPage;
  const indexOfFirstPost = indexOfLastPost - ImagesPerPage;
  const currentImages = images.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }: { selected: number }): void => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        openGraph={{
          title: `${title}`,
          description: `${desc}`,
          type: "website",
          images: [{
            url: siteUrl + "/og/images.png",
            width: 800,
            height: 600,
            alt: 'ألبوم الصور',
            type: 'image/png',
          }]
        }}
        additionalMetaTags={[
          {
            property: "name",
            content: title,
          },
          {
            property: "description",
            content: desc,
          },
        ]}
      />
      <section>
        <h1>ألبوم صور</h1>
      {imagesPost ? (
        <>
          <div className="w-full py-5 mx-auto mb-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {images.map((image) => (
              <Link href={"/images/" + image.fields.slug} key={image.sys.id} legacyBehavior>
                <div className="group relative h-fit">
                  <a href={"/images/" + image.fields.slug}>
                    <Image
                      src={'https:' + image.fields.image[0].fields.file.url}
                      alt={image.fields.alt}
                      width={image.fields.image[0].fields.file.details.image.width}
                      height={image.fields.image[0].fields.file.details.image.height}
                      className="block h-full w-full object-cover object-center group-hover:opacity-50 transition-all ease-in-out duration-300"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover"
                      }} />
                    <span className="absolute bottom-3 right-3 transition-opacity opacity-0 group-hover:opacity-100 text-black text-xl font-black dark:text-white">{image.fields.title}</span>
                  </a>
                </div>
              </Link>
            ))}
          </div>

          <ReactPaginate
            onPageChange={paginate}
            breakLabel={"..."}
            renderOnZeroPageCount={null}
            pageCount={Math.ceil(imagesPost.length / ImagesPerPage)}
            previousLabel={'السابق'}
            nextLabel={'التالي'}
            breakClassName={"pageNum"}
            breakLinkClassName={"pageNum"}
            containerClassName={'pagination'}
            pageClassName={"pageNu"}
            pageLinkClassName={'pageNum'}
            previousLinkClassName={'pageSwitch'}
            nextLinkClassName={'pageSwitch'}
            activeLinkClassName={'pageNumAct'}
          />
        </>
      ) : (
        <div>جاري التحميل</div>
      )}
      </section>
    </>
  );
} 