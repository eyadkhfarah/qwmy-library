import { useState, useEffect } from 'react'


import Link from 'next/link'
import { NavLinks } from '../lib/NavList'

export default function Navbar() {
    const [dark, setDark] = useState(undefined)
    const [click, setClick] = useState(false);
    const [pos, setPos] = useState(false);


    const handelClick = () => setPos(!pos)


    return (
        <>
            <nav className={pos ? 'Navbar active' : 'Navbar'}>
                <div className="top">
                    <div className="logo">
                        <Link href="/">
                            <span>Commerce Students</span>
                        </Link>
                    </div>
                    <div className="tiggers">
                        {/* <FontAwesomeIcon icon={faSearch} className="icon" />
                        <FontAwesomeIcon onClick={darkMode} icon={click ? faSun : faMoon} className="icon" />
                        <FontAwesomeIcon onClick={handelClick} icon={pos ? faTimes : faBars} className={pos ? 'tigger active' : 'tigger'} /> */}
                    </div>

                </div>

                <div className={pos ? 'navContent active' : 'navContent'}>

                    {NavLinks.map((link) => (
                        <Link href={link.link}>
                            <a key={link.id}>{link.title}</a>
                        </Link>
                    ))}
                    <Link href="/"><a className="login">Login</a></Link>
                </div>
            </nav>
        </>
    )
}
