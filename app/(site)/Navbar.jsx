import { useState, useEffect } from 'react'

import { NavLinks } from '@/lib/NavList'

export default function Navbar() {
    const [dark, setDark] = useState(undefined)
    const [click, setClick] = useState(false);
    const [pos, setPos] = useState(false);


    const handelClick = () => setPos(!pos)


    return (
        <nav>
        </nav>
    )
}
