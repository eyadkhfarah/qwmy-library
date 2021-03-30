import React from 'react'

import Link from 'next/link'

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="logo">
                <h1>Commerce Students</h1>
            </div>
            <div className="navContent">

                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/fromu">
                    <a>Formu</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>


                <Link><a>Login</a></Link>
            </div>
        </nav>
    )
}

export default Navbar
