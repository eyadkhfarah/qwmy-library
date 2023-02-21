import {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes , faBars, faMoon, faSun, faSearch } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

export default function Navbar() {
    const [dark, setDark] = useState(undefined)
    const [click, setClick] = useState(false);
    const [pos, setPos] = useState(false);

    // Navbar Change

    // const changeNavbar = () => {
    //     if (window.scrollY >= 80) {
    //         setPos(true)
    //     } else {
    //         setPos(false)
    //     }
    // }

    // window.addEventListener("scroll", changeNavbar);
    // {pos ? 'tigger active' : 'tigger'}

    // Dark mode

    // useEffect(() => {
    //     const root = window.document.documentElement;
    //     const initialColor = root.style.getPropertyValue(
    //         "--initial-color-mode"
    //     );
    //     console.log("init", initialColor)
        
    //     setDark(initialColor == "dark")
    // }, [])

    // useEffect(() => {
    //     if (dark !== undefined) {
    //         document.documentElement.setAttribute("data-theme", "dark");
    //         window.localStorage.setItem("theme", "dark")
    //     } else {
    //         document.documentElement.setAttribute("data-theme", "light");
    //         window.localStorage.setItem("theme", "light")
    //     }
    //     return () => {
    //         cleanup
    //     }
    // }, [dark])

    const handelClick = () => setPos(!pos)
    const darkMode = (event) => {
        setClick(!click)
        // setDark(event)
    }


    return (
        <>
            <nav className={pos ? 'Navbar active' : 'Navbar'}>
                <div className="top">
                    <div className="logo">
                        <Link href="/">
                        <h1>Commerce Students</h1>
                        </Link>
                    </div>
                    <div className="tiggers">
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        <FontAwesomeIcon onClick={darkMode} icon={click ? faSun : faMoon} className="icon"/>
                        <FontAwesomeIcon onClick={handelClick} icon={pos ? faTimes : faBars} className={pos ? 'tigger active' : 'tigger'}/>
                    </div>
                    
                </div>

                <div className={pos ? 'navContent active' : 'navContent'}>

                    <Link href="/">
                        <a>Home</a>
                    </Link>

                    <Link href="/"><a className="login">Login</a></Link>
                </div>
            </nav>
        </>
    )
}
