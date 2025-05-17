import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function Search(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();
  const { search } = router.query;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      router.push(`/search?search=${searchText}`);
    }
  };

  return (
    <>
      <Head>
        <title>{search} — المكتبة القومية — بحث</title>
      </Head>
      <section>
        <div className="flex gap-4 mb-9">
          <h1 className="text-center">
            نتائج بحث:{""}
            <span className="text-black mr-3">{search}</span>
          </h1>
        </div>

        <div className="flex justfiy-center items-center gap-6">
          <input
            className="input w-full"
            type="text"
            placeholder="بحث ..."
            onKeyDown={handleKeyDown}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
          />
          <Link href={`/search?search=${searchText}`} legacyBehavior>
            <RiSearchLine className="cursor-pointer text-3xl" />
          </Link>
        </div>

        <div>
          {/* Commented out content filtering logic */}
        </div>
      </section>
    </>
  );
} 