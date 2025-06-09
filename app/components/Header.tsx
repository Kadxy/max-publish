'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { TEXTS, COMPANY } from '@/lib/constants'

export default function Header() {
    const pathname = usePathname()
    const { language, changeLanguage } = useLanguage()
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: TEXTS.nav.home[language] },
        { href: '/about', label: TEXTS.nav.aboutUs[language] },
        { href: '/services', label: TEXTS.nav.services[language] },
        { href: '/contact', label: TEXTS.nav.contactUs[language] }
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary">{COMPANY.name}</span>
                            <span className="text-xs text-muted-foreground">{COMPANY.legalForm[language]}</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        {/* Language Switcher */}
                        <button
                            onClick={() => changeLanguage(language === 'en' ? 'it' : 'en')}
                            className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            title={TEXTS.nav.language[language]}
                        >
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{language}</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => {
                                const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system']
                                const currentIndex = themes.indexOf(theme)
                                const nextIndex = (currentIndex + 1) % themes.length
                                setTheme(themes[nextIndex])
                            }}
                            className="p-2 rounded-md hover:bg-accent"
                            title={TEXTS.theme.toggle[language]}
                        >
                            {theme === 'dark' ? (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : theme === 'light' ? (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            )}
                        </button>

                        {/* Get Quote Button - Desktop */}
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                        >
                            {TEXTS.common.getQuote[language]}
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md hover:bg-accent"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-muted-foreground hover:text-primary hover:bg-accent'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {/* Get Quote Button - Mobile */}
                            <Link
                                href="/contact"
                                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {TEXTS.common.getQuote[language]}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
} 