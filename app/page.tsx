'use client'

import { useState, useEffect } from 'react'
import { Search, Book, ShoppingCart, User, Menu, X, Star, ChevronRight, Sun, Moon, Monitor } from 'lucide-react'
import { TEXTS } from '../lib/constants'

export default function Home() {
    const [language, setLanguage] = useState<'en' | 'it'>('en')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)

    const t = (key: any) => {
        return key[language] || key.en
    }

    // Theme management
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system'
        setTheme(savedTheme)
        applyTheme(savedTheme)
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

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            <span className="text-xl font-bold text-gray-900 dark:text-white">Max Publishing</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t(TEXTS.nav.home)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t(TEXTS.nav.books)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t(TEXTS.nav.categories)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t(TEXTS.nav.bestsellers)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t(TEXTS.nav.about)}</a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t(TEXTS.nav.contact)}</a>
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
                            <div className="hidden sm:block relative">
                                <input
                                    type="text"
                                    placeholder={t(TEXTS.nav.search_placeholder)}
                                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                />
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
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
                                className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-4">
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
                                    <Search className="absolute left-3 top-6.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
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
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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
                            { key: 'fiction', icon: '📚', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' },
                            { key: 'non_fiction', icon: '🎓', color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' },
                            { key: 'mystery', icon: '🔍', color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' },
                            { key: 'romance', icon: '💕', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300' },
                            { key: 'science', icon: '🔬', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' },
                            { key: 'history', icon: '🏛️', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' },
                            { key: 'children', icon: '🧸', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300' },
                            { key: 'poetry', icon: '✨', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300' }
                        ].map((category) => (
                            <div key={category.key} className="group cursor-pointer">
                                <div className={`${category.color} rounded-xl p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}>
                                    <div className="text-3xl mb-3">{category.icon}</div>
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
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        {t(TEXTS.featured.title)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEXTS.sampleBooks.slice(0, 8).map((book) => (
                            <div key={book.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                                    <Book className="h-16 w-16 text-blue-400 dark:text-blue-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        {t(book.title)}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{book.author}</p>

                                    {/* Rating */}
                                    <div className="flex items-center mb-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                            {book.rating} ({book.reviews} {language === 'en' ? 'reviews' : 'recensioni'})
                                        </span>
                                    </div>

                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {t(book.description)}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">€{book.price}</span>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                                            {language === 'en' ? 'Add to Cart' : 'Aggiungi'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Authors Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {t(TEXTS.authors.title)}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {t(TEXTS.authors.subtitle)}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEXTS.featuredAuthors.map((author) => (
                            <div key={author.id} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                                        <User className="h-16 w-16 text-blue-400 dark:text-blue-300" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{author.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{t(author.bio)}</p>
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                                    {author.books} {language === 'en' ? 'books published' : 'libri pubblicati'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {t(TEXTS.reviews.title)}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {t(TEXTS.reviews.subtitle)}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEXTS.customerReviews.map((review) => (
                            <div key={review.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-2xl transition-shadow">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                                    "{t(review.text)}"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mr-3">
                                        <User className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {language === 'en' ? 'Stay Updated with New Releases' : 'Rimani Aggiornato con le Nuove Uscite'}
                    </h2>
                    <p className="text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
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