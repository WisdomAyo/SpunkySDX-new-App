'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item `}>
                    <Link href="/">Home</Link>
                    
                </li>
              
                <li className={`menu-item ${pathname === "/roadmap" ? "current-menu-item" : ""}`}>
                    <Link href="/roadmap">Spunkymap</Link>
                </li>
                <li className={`menu-item ${checkCurrentMenuItem("/whitepaper")}`}>
                            <Link href="/whitepaper">Whitepaper</Link>
                </li>
                <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
                            <Link href="/faq">FAQs</Link>
                </li>
                
               
               
               
               
            </ul>
        </nav>
    )
}

