import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEquals } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'
import Head from 'next/head'

export default function Navbar() {
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        </Head>
            <nav className="Navbar">
                <div className="logo">
                    <Link href="/">
                    <h1>Commerce Students</h1>
                    </Link>
                </div>
                <div>
                <i className="fas fa-equals" className="tigger"></i>
                </div>

                <div className="navContent">

                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/formu">
                        <a>Formu</a>
                    </Link>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>


                    <Link href="/"><a className="login">Login</a></Link>
                </div>
            </nav>
        </>
    )
}
