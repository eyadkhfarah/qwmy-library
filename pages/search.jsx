import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

import { useState } from "react";

// Data
// import { createClient } from 'contentful'

// import SearchNotFound from "@/Components/Cards/SearchNotFound";

import { RiSearchLine } from "react-icons/ri";

{/* export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "articles" })

  return {
    props: {
      articles: res.items,
    },
    revalidate: 1
  }
} */}

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const { search } = router.query;

  return (
    <>
      <Head>
        <title>المكتبة القومية — بحث — {search}</title>
      </Head>
      <main>
        <div className="flex gap-4 mb-9">
          <h1 className="text-center">
            نتائج بحث:{""}
            <span className="text-primary mr-3">{search}</span>
          </h1>
        </div>

        <div className="flex justfiy-center items-center gap-6">
          <input
            className="input"
            type="text"
            placeholder="بحث ..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Link href={`/search-results?search=` + searchText}>
            <RiSearchLine className="menuIcon text-3xl" />
          </Link>
        </div>


        <div>
       {/*  {search ? (
            articles
              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (val.fields.title.includes(search)) {
                  return val;
                } else if (val.fields.subtitle.includes(search)) {
                  return val;
                } else if (val.fields.category.includes(search)) {
                  return val;
                }
              })
              .map(
                (content, index) =>
                  index < 4 && (
                    <ArticleCard
                      key={content.sys.id} news={content}
                    />)
              )
          ) : (
            <SearchNotFound />
          )} */}
        </div>
      </main>
    </>
  );
}