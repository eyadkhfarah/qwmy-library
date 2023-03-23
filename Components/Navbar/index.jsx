import Link from 'next/link';
import Image from 'next/image';

import NavList from './NavList'
import { NavLinks } from "@lib/NavList";

// import SearchBox from '../Navbar/NavMenu/SearchBox';

import { useTheme } from "next-themes";
import { RiSearch2Line, RiMenu3Line } from 'react-icons/ri'
import { useState } from 'react';

export default function Navbar() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const [btn, setBtn] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    const Search = <span><RiSearch2Line /></span>;
    const Menu = <span><RiMenu3Line /></span>;

    return (
        <>
            <nav>
                <div onClick={() => setBtn(!btn)} className="navIcon md:hidden block">{Menu}</div>

                <Link href={"/"}>
                    <a href={siteUrl}>
                        {currentTheme === "dark" ?
                            <Image src="/WhiteLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={120} height={47} />
                            :
                            <Image src="/DarkLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={120} height={47} />
                        }
                    </a>
                </Link>

                <div className="navIcon">{Search}</div>

                <ul className="hidden md:flex text-md gap-4 items-center ">
                    {NavLinks.map((link) => (
                        <Link href={link.link}>
                            <li
                                className="navLink"
                                key={link.id}
                                onClick={() => setBtn(!btn)}
                            >
                                <a href={siteUrl + link.link} aria-label={link.title}
                                >
                                    {link.title}
                                </a>
                            </li>
                        </Link>
                    ))}
                </ul>

            </nav>

            <NavList btn={btn} setBtn={setBtn} />
        </>
    )
}