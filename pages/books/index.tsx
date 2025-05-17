import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";
import { createClient } from "contentful";
import { NextSeo } from "next-seo";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, FC, KeyboardEvent, ChangeEvent, useMemo } from "react";
import { BooksProps, Book } from "../../types";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const res = await client.getEntries({ content_type: "books" });

  return {
    props: {
      books: res.items,
    },
    revalidate: 1,
  };
}

// Types
interface SearchFilters {
  name: string;
  type: string;
}

// Components
const BookItem: FC<{ book: Book }> = ({ book }) => (
  <div className="p-4 my-4 border-b-2 dark:border-gray-800">
    <div className="flex items-center gap-4">
      <span className="text-2xl">
        <RiArrowLeftSLine />
      </span>
      <Link href={`/books/${book.fields.slug}`}>
        <h2 className="border-none text-lg m-0">
          {book.fields.title}
        </h2>
      </Link>
    </div>
    <div className="flex text-gray-500 gap-5">
      <p>{book.fields.type}</p>
      <p>{book.fields.author.fields.name}</p>
    </div>
  </div>
);

const SearchBar: FC<{
  searchText: string;
  typeValue: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  bookTypes: string[];
}> = ({ searchText, typeValue, onSearchChange, onTypeChange, onKeyDown, bookTypes }) => (
  <div className="w-full flex">
    <input
      type="text"
      placeholder="اكتب اسم الكتاب"
      value={searchText}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
      onKeyDown={onKeyDown}
      className="w-full dark:border-none dark:bg-dlight"
    />
    <select
      name="type"
      value={typeValue}
      id="type"
      className="dark:border-none dark:bg-dlight"
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onTypeChange(e.target.value)}
    >
      <option value="">كل الأنواع</option>
      {bookTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>
);

// Main Component
const Books: FC<BooksProps> = ({ books }) => {
  const [searchText, setSearchText] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const router = useRouter();
  const { name, type } = router.query;

  const title = "كتب قومية — المكتبة القومية";
  const desc = "اكتشف مجموعة كبيرة من الكتب التي تتحدث عن القومية.";
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  // Memoize unique book types
  const bookTypes = useMemo(() => 
    Array.from(new Set(books.map(book => book.fields.type))),
    [books]
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/books?name=${searchText}${typeValue ? `&type=${typeValue}` : ''}`);
    }
  };

  // Filter books based on search criteria
  const filteredBooks = useMemo(() => {
    if (!name && !type) return books;
    
    return books.filter((book) => {
      const matchesName = !name || book.fields.title.includes(name as string);
      const matchesType = !type || book.fields.type.includes(type as string);
      return matchesName && matchesType;
    });
  }, [books, name, type]);

  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          type: "website",
          images: [
            {
              url: siteUrl + "/og/books.png",
              width: 800,
              height: 600,
              alt: "سيرة ذاتية",
              type: "image/png",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "name",
            content: title,
          },
          {
            name: "description",
            content: desc,
          },
        ]}
      />
      <section>
        <h1>كتب قومية</h1>
        <div className="grid gap-4">
          <h2 className="border-none">أبحث عن كتاب:</h2>
          <SearchBar
            searchText={searchText}
            typeValue={typeValue}
            onSearchChange={setSearchText}
            onTypeChange={setTypeValue}
            onKeyDown={handleKeyDown}
            bookTypes={bookTypes}
          />
          <div className="grid gap-3">
            {filteredBooks.map((book) => (
              <BookItem key={book.sys.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const NotFound: FC = () => {
  return <h1>حاول البحث</h1>;
};

export default Books;
