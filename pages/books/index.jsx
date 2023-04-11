import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";

import { NextSeo } from "next-seo";
import Link from "next/link";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "books" });

  return {
    props: {
      books: res.items,
    },
    revalidate: 1,
  };
}

export default function Books({ books }) {
  const [searchText, setSearchText] = useState("");
  const [typeValue, setTypeValue] = useState();

  const onChange = (event) => {
    const value = event.target.typeValue;
    setTypeValue(value);
  };

  const router = useRouter();

  const { search } = router.query;
  // const { type } = router.query;

  const title = "المكتبة القومية — كتب قومية";
  const desc = "اكتشف مجموعة كبيرة من الكتب التي تتحدث عن القومية.";
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  console.log(books.fields);

  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        openGraph={{
          title: `${title}`,
          description: `${desc}`,
          type: "website",
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

      <h1>كتب قومية</h1>
      <div className="grid gap-4">
        <h2 className="border-none">أبحث عن كتاب:</h2>
        <di className="w-ful">
          <input type="text" placeholder="اكتب اسم الكتاب" className="w-full" />

          <select
            name="type"
            value={typeValue}
            id="type"
            onChange={router.push(`/books?type=` + typeValue)}
          >
            {books.map((book) => (
              <option value={book.fields.type}>{book.fields.type}</option>
            ))}
          </select>
        </di>

        <div className="gird gap-3">
          {books.map((book) => (
            <div className="p-4 my-4 border-b-2">
              <div className="flex items-start gap-4">
                <RiArrowLeftSLine className="text-2xl" />
                <Link href={`/books/${book.fields.slug}`}>
                  <a href={`/books/${book.fields.slug}`}>
                    <h2 className="border-none text-lg m-0">
                      {book.fields.title}
                    </h2>
                  </a>
                </Link>
              </div>
              <div className="flex text-gray-500 gap-5">
                <p>{book.fields.type}</p>
                <p>{book.fields.author.fields.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
