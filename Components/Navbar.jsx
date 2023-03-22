import Link from 'next/link';
import Image from 'next/image';

// import NavList from '../Navbar/NavMenu/NavList'
// import SearchBox from '../Navbar/NavMenu/SearchBox';

import { RiSearch2Line, RiMenu3Line } from 'react-icons/ri'
import { useState } from 'react';

export default function Navbar() {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const [btn, setBtn] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <nav>
            <RiSearch2Line className="navIcon"/>
            <Link href={"/"}>
                <h1>
                    المكتبة القومية
                </h1>
            </Link>
            <RiMenu3Line className="navIcon"/>
        </nav>
    )
}