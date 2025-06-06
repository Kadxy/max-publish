'use client'

import { useState, useEffect } from 'react'
import { Search, Book, ShoppingCart, User, Menu, X, Star, ChevronRight, ChevronLeft, Sun, Moon, Monitor } from 'lucide-react'
import { TEXTS } from '../lib/constants'

export default function Home() {
    const [language, setLanguage] = useState<'en' | 'it'>('en')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
    const [currentBookSlide, setCurrentBookSlide] = useState(0)

    const t = (key: any) => {
        return key[language] || key.en
    }

    // Theme management
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system'
        setTheme(savedTheme)
        applyTheme(savedTheme)

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleSystemThemeChange = () => {
            const currentTheme = localStorage.getItem('theme') || 'system'
            if (currentTheme === 'system') {
                applyTheme('system')
            }
        }

        mediaQuery.addEventListener('change', handleSystemThemeChange)
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }, [])

    // Close theme menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isThemeMenuOpen) {
                setIsThemeMenuOpen(false)
            }
            if (isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isThemeMenuOpen, isMenuOpen])

    const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')

        if (newTheme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            root.classList.add(systemTheme)
        } else {
            root.classList.add(newTheme)
        }
    }

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
        setIsThemeMenuOpen(false)
    }

    const totalBooks = TEXTS.sampleBooks.length
    const booksPerView = 5 // Number of books visible at once
    const maxSlide = Math.max(0, totalBooks - booksPerView) // Maximum slide position

    const nextBookSlide = () => {
        setCurrentBookSlide((prev) => Math.min(prev + 1, maxSlide))
    }

    const prevBookSlide = () => {
        setCurrentBookSlide((prev) => Math.max(prev - 1, 0))
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
                <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
                    <div className="flex justify-between items-center h-16 gap-2">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            <span className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">Max Publishing</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">{t(TEXTS.nav.home)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">{t(TEXTS.nav.books)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">{t(TEXTS.nav.categories)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">{t(TEXTS.nav.bestsellers)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">{t(TEXTS.nav.about)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">{t(TEXTS.nav.contact)}</a>
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center space-x-4">
                            {/* Language Toggle */}
                            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 transition-colors">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage('it')}
                                    className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'it' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'}`}
                                >
                                    IT
                                </button>
                            </div>

                            {/* Theme Toggle */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                    title={t(TEXTS.theme.toggle)}
                                >
                                    {theme === 'light' && <Sun className="h-5 w-5" />}
                                    {theme === 'dark' && <Moon className="h-5 w-5" />}
                                    {theme === 'system' && <Monitor className="h-5 w-5" />}
                                </button>

                                {isThemeMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 py-1">
                                        <button
                                            onClick={() => handleThemeChange('light')}
                                            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors ${theme === 'light' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'}`}
                                        >
                                            <Sun className="h-4 w-4" />
                                            <span>{t(TEXTS.theme.light)}</span>
                                        </button>
                                        <button
                                            onClick={() => handleThemeChange('dark')}
                                            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors ${theme === 'dark' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'}`}
                                        >
                                            <Moon className="h-4 w-4" />
                                            <span>{t(TEXTS.theme.dark)}</span>
                                        </button>
                                        <button
                                            onClick={() => handleThemeChange('system')}
                                            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors ${theme === 'system' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'}`}
                                        >
                                            <Monitor className="h-4 w-4" />
                                            <span>{t(TEXTS.theme.system)}</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Search */}
                            <div className="hidden lg:block relative">
                                <input
                                    type="text"
                                    placeholder={t(TEXTS.nav.search_placeholder)}
                                    className="w-48 xl:w-56 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                            </div>

                            {/* Cart & User */}
                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    <ShoppingCart className="h-5 w-5" />
                                </button>
                                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    <User className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 py-4">
                            <div className="flex flex-col space-y-3">
                                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">{t(TEXTS.nav.home)}</a>
                                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">{t(TEXTS.nav.books)}</a>
                                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">{t(TEXTS.nav.categories)}</a>
                                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">{t(TEXTS.nav.bestsellers)}</a>
                                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">{t(TEXTS.nav.about)}</a>
                                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">{t(TEXTS.nav.contact)}</a>
                                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 relative">
                                    <input
                                        type="text"
                                        placeholder={t(TEXTS.nav.search_placeholder)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            {t(TEXTS.hero.title)}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            {t(TEXTS.hero.subtitle)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                {t(TEXTS.hero.cta_browse)}
                            </button>
                            <button className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-semibold">
                                {t(TEXTS.hero.cta_bestsellers)}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        {t(TEXTS.categories.title)}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { key: 'fiction', icon: '📚', color: 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200' },
                            { key: 'non_fiction', icon: '🎓', color: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' },
                            { key: 'mystery', icon: '🔍', color: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200' },
                            { key: 'romance', icon: '💕', color: 'bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200' },
                            { key: 'science', icon: '🔬', color: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' },
                            { key: 'history', icon: '🏛️', color: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200' },
                            { key: 'children', icon: '🧸', color: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200' },
                            { key: 'poetry', icon: '✨', color: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200' }
                        ].map((category) => (
                            <div key={category.key} className="group cursor-pointer">
                                <div className={`${category.color} rounded-xl p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-transparent dark:border-gray-600/30`}>
                                    <div className="text-3xl mb-3 filter dark:brightness-110 dark:contrast-110">{category.icon}</div>
                                    <h3 className="font-semibold">
                                        {t(TEXTS.categories[category.key as keyof typeof TEXTS.categories])}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Books Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {t(TEXTS.featured.title)}
                        </h2>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={prevBookSlide}
                                disabled={currentBookSlide === 0}
                                className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextBookSlide}
                                disabled={currentBookSlide >= maxSlide}
                                className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentBookSlide * (100 / booksPerView)}%)` }}
                        >
                            {TEXTS.sampleBooks.map((book) => (
                                <div key={book.id} className="flex-shrink-0 px-2" style={{ width: `${100 / booksPerView}%` }}>
                                    <div className="group cursor-pointer">
                                        {/* Book Cover */}
                                        <div className="aspect-[2.8/4] bg-white dark:bg-gray-800 rounded-lg p-3 flex items-center justify-center mb-3 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300">
                                            <img
                                                src={book.image}
                                                alt={t(book.title)}
                                                className="w-full h-full object-contain rounded-sm group-hover:scale-105 transition-transform duration-300"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center rounded-sm"><svg class="h-12 w-12 text-blue-400 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"></path></svg></div>';
                                                }}
                                            />
                                        </div>

                                        {/* Book Info */}
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 leading-tight min-h-[2.5rem]">
                                                {t(book.title)}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs">di {book.author}</p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(book.rating) ? 'text-orange-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    ({book.reviews})
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center gap-2 pt-1">
                                                <span className="text-base font-bold text-gray-900 dark:text-white">€{book.price}</span>
                                                {book.originalPrice && (
                                                    <span className="text-xs text-gray-400 dark:text-gray-500 line-through">€{book.originalPrice}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white dark:text-gray-100 mb-4">
                        {language === 'en' ? 'Stay Updated with New Releases' : 'Rimani Aggiornato con le Nuove Uscite'}
                    </h2>
                    <p className="text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
                        {language === 'en'
                            ? 'Subscribe to our newsletter and be the first to know about new books, special offers, and literary events.'
                            : 'Iscriviti alla nostra newsletter e sii il primo a sapere di nuovi libri, offerte speciali ed eventi letterari.'
                        }
                    </p>
                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder={language === 'en' ? 'Enter your email' : 'Inserisci la tua email'}
                            className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 focus:outline-none text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-transparent transition-colors"
                        />
                        <button className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors font-semibold whitespace-nowrap">
                            {language === 'en' ? 'Subscribe' : 'Iscriviti'}
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Book className="h-6 w-6 text-blue-400 dark:text-blue-300" />
                                <span className="text-lg font-bold">Max Publishing</span>
                            </div>
                            <p className="text-gray-400 dark:text-gray-300 mb-4">
                                {t(TEXTS.footer.company_desc)}
                            </p>
                            <div className="text-sm text-gray-400 dark:text-gray-300">
                                <p>{TEXTS.company.name}</p>
                                <p>{TEXTS.company.address}</p>
                                <p>P.IVA: {TEXTS.company.vat}</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">{t(TEXTS.footer.quick_links)}</h3>
                            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.nav.books)}</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.nav.categories)}</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.nav.bestsellers)}</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.nav.about)}</a></li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">{t(TEXTS.footer.customer_service)}</h3>
                            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.footer.help)}</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.footer.shipping)}</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">{t(TEXTS.footer.returns)}</a></li>
                                <li><a href={`mailto:${TEXTS.company.email}`} className="hover:text-white transition-colors">{t(TEXTS.nav.contact)}</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">{t(TEXTS.footer.follow_us)}</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Facebook</a>
                                <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Twitter</a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
                        <p>&copy; 2024 Max Publishing SRL. {language === 'en' ? 'All rights reserved.' : 'Tutti i diritti riservati.'}</p>
                    </div>
                </div>
            </footer>
        </div>
    )
} 