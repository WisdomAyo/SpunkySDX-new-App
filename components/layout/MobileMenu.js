'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item menu-item-has-children `}>
                        <Link href="/">Home</Link>
                        <span className="arrow" onClick={() => handleClick(1)} />
                       
                    </li>
                    <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
                                <Link href="/faq">FAQs</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/login")}`}>
                                <Link href="/login">Login</Link>
                            </li>
                    <li className={`menu-item ${pathname === "/roadmap" ? "current-menu-item" : ""}`}>
                        <Link href="/roadmap">Spunkymap</Link>
                    </li>
                   
                    
                </ul>
            </nav>

        </>
    )
}
