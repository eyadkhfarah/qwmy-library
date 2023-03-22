import Link from 'next/link';
import Image from 'next/image';

import NavList from '../Navbar/NavList'
// import SearchBox from '../Navbar/NavMenu/SearchBox';

import { RiSearch2Line, RiMenu3Line } from 'react-icons/ri'
import { useState } from 'react';

export default function Navbar() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const [btn, setBtn] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <nav>
                <RiMenu3Line onClick={() => setBtn(!btn)} className="navIcon" />

                <Link href={"/"}>
                    <h1>
                        المكتبة القومية
                    </h1>
                </Link>

                <RiSearch2Line className="navIcon" />
            </nav>

            <NavList btn={btn} setBtn={setBtn} />
        </>
    )
}