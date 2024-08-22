'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove(
                'main',
                'home1',
                'counter-scroll',
                'whitepaper',
                'privacy',
                'faq-page',
                'login-page',
                'forget',
                'page-roadmap',
                'team-page',
            )

            // Add class based on pathname
            if (pathname === '/') {
                bodyElement.classList.add('main', 'home1', 'counter-scroll')
            }
            else if (pathname === '/team-details') {
                bodyElement.classList.add('inner-page', 'team-page')
            }
            else if (pathname === '/whitepaper') {
                bodyElement.classList.add('inner-page', 'whitepaper')
            }
            else if (pathname === '/privacy') {
                bodyElement.classList.add('inner-page', 'privacy-policy')
            }
            else if (pathname === '/faq') {
                bodyElement.classList.add('inner-page', 'faq-page')
            }
            else if (pathname === '/login') {
                bodyElement.classList.add('inner-page', 'login-page')
            }
            else if (pathname === '/register') {
                bodyElement.classList.add('inner-page', 'login-page')
            }
            else if (pathname === '/forget-password') {
                bodyElement.classList.add('inner-page', 'login-page', 'forget')
            }
            else if (pathname === '/roadmap') {
                bodyElement.classList.add('inner-page', 'page-roadmap')
            }

        }
    }, [pathname])

    return null
}
