import Link from 'next/link';
import Image from 'next/image';

import NavList from './NavList'
// import SearchBox from '../Navbar/NavMenu/SearchBox';

import { useTheme } from "next-themes";
import { RiSearch2Line, RiMenu3Line } from 'react-icons/ri'
import { useState } from 'react';

export default function Navbar() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const [btn, setBtn] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <>
            <nav>
                <RiMenu3Line onClick={() => setBtn(!btn)} className="navIcon" />

                <Link href={"/"}>
                    <a href={siteUrl}>
                        {currentTheme === "dark" ?
                            <Image src="/WhiteLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={120} height={47} />
                            :
                            <Image src="/DarkLogo.svg" alt="لوجو المكتبة القومية" aria-label="لوجو المكتبة القومية" width={120} height={47} />
                        }
                    </a>
                </Link>

                <RiSearch2Line className="navIcon" />
            </nav>

            <NavList btn={btn} setBtn={setBtn} />
        </>
    )
}