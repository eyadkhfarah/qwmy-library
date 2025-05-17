import Link from "next/link";
import Image from "next/image";

import NavList from "./NavList";
import { NavLinks } from "@lib/NavList";
import SearchList from "./SearchList";

import { useRouter } from "next/router";

import { useTheme } from "next-themes";
import { RiSearch2Line, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  const [btn, setBtn] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const { search } = router.query;
  const Search = (
    <span>
      <RiSearch2Line />
    </span>
  );
  const Menu = (
    <span>
      <RiMenu3Line />
    </span>
  );

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push(`/search?search=${searchText}`)
    }
  }

  return (
    <>
      <div className="md:px-36 p-3 md:text-base text-sm font-medium flex justify-between items-center gap-6">
        <span>الموقع قيد التطوير، يهمنا أراكم واقتراحاتكم ودعمكم لنا بكتابة كل ما تريده من اقتراحات وشكاوي.</span>
        <a href="https://forms.gle/NBTUQcovdLXAJXYn7" aria-label="اقتراحات المكتبة القومية" className="download text-sm h-fit md:w-44 w-fit whitespace-nowrap">اقترح هنا</a>
      </div>
      <nav
        className={`${router.pathname === "/" ? "shadow-none dark:bg-none" : ""
          }`}
      >
        <div onClick={() => setBtn(!btn)} className="navIcon md:hidden block">
          {Menu}
        </div>

        <div className="flex gap-5">
          <div className={`${router.pathname === "/" ? "hidden" : "block"}`}>
            <Link href={"/"}>

              {currentTheme === "dark" ? (
                <Image
                  src="/WhiteLogo.svg"
                  alt="لوجو المكتبة القومية"
                  aria-label="لوجو المكتبة القومية"
                  width={120}
                  height={47}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              ) : (
                <Image
                  src="/DarkLogo.svg"
                  alt="لوجو المكتبة القومية"
                  aria-label="لوجو المكتبة القومية"
                  width={120}
                  height={47}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              )}

            </Link>
          </div>

          <div className="md:flex hidden gap-2 p-1 border dark:border-none dark:bg-dlight">
            <Link href={`/search?search=` + searchText} legacyBehavior>
              <div className="navIcon">{Search}</div>
            </Link>
            <input
              // value={}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchText(e.target.value)}
              className="searchInput border-none"
              type="text"
              placeholder="ابحث في عالم القومية"
            />
          </div>
        </div>
        <div
          onClick={() => setSearchOpen(!searchOpen)}
          className="navIcon md:hidden block"
        >
          {Search}
        </div>

        <ul className="hidden md:flex text-[.7rem] gap-3 items-center ">
          {NavLinks.map((link) => (
            <li
              className="navLink"
              key={link.id}
              onClick={() => setBtn(!btn)}
            >
              <Link href={link.link} aria-label={link.title}>

                {link.title}

              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SearchList
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        className="md:hidden"
      />
      <NavList btn={btn} setBtn={setBtn} className="" />
    </>
  );
}
