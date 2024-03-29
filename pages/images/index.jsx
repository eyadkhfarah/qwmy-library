import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";

import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "imagesQwmy" });

    return {
        props: {
            images: res.items,
        },
        revalidate: 1,
    };
}

export default function Images({ images }) {

    const title = "ألبوم الصور — المكتبة القومية";
    const desc = "شاهد اهم واجمل الصور هنا.";
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const [imagesPost, setImagesPost] = useState(images);

    const [currentPage, setCurrentPage] = useState(1);
    const [ImagesPerPage] = useState(20);

    const indexOfLastPost = currentPage * ImagesPerPage;
    const indexOfFirstPost = indexOfLastPost - ImagesPerPage;
    const currentImages = images.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
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
                        itemProp: "name",
                        content: { title },
                    },
                    {
                        itemProp: "description",
                        content: { desc },
                    },
                ]}
            />


            <h1>ألبوم صور</h1>
            {imagesPost ? 
                <>
                    <div className="w-full max-w-full py-5 mx-auto mb-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {images.map((image) => (
                            <Link href={"/images/" + image.fields.slug} key={image.sys.id}>
                                <div className="group relative h-fit">
                                    <a href={"/images/" + image.fields.slug}>
                                        <Image layout="responsive" objectFit="cover" src={'https:' + image.fields.image[0].fields.file.url} alt={image.fields.alt} width={image.fields.image[0].fields.file.details.image.width} height={image.fields.image[0].fields.file.details.image.height} className="block h-full w-full object-cover object-center group-hover:opacity-50 transition-all ease-in-out duration-300" />
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
                </> : <div>جاري التحميل</div>
            }
        </>
    )
}
