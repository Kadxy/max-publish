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
    const [email, setEmail] = useState('')
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

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

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim()) return

        setIsSubscribing(true)

        // 模拟API调用延迟
        await new Promise(resolve => setTimeout(resolve, 1200))

        setIsSubscribing(false)
        setShowSuccess(true)
        setEmail('')

        // 6秒后重置状态
        setTimeout(() => {
            setShowSuccess(false)
        }, 6000)
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
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            {t(TEXTS.featured.title)}
                        </h2>
                        <div className="flex items-center justify-center space-x-2">
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

            {/* New Arrivals Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {t(TEXTS.newArrivals.title)}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TEXTS.newArrivalBooks.slice(0, 6).map((book) => {
                            const getTagColors = (index: number) => {
                                const colors = [
                                    'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
                                    'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
                                    'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
                                    'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
                                    'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300',
                                    'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300'
                                ];
                                return colors[index % colors.length];
                            };

                            return (
                                <div key={book.id} className="group cursor-pointer">
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                        <div className="flex space-x-4">
                                            {/* Book Cover */}
                                            <div className="flex-shrink-0 w-20 h-28 bg-white dark:bg-gray-700 rounded-lg p-2 flex items-center justify-center shadow-sm">
                                                <img
                                                    src={book.image}
                                                    alt={t(book.title)}
                                                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center rounded-sm"><svg class="h-8 w-8 text-blue-400 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"></path></svg></div>';
                                                    }}
                                                />
                                            </div>

                                            {/* Book Info */}
                                            <div className="flex-1 min-w-0">
                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {book.tags.map((tag, index) => (
                                                        <span
                                                            key={tag}
                                                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getTagColors(index)}`}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1 line-clamp-2 leading-tight">
                                                    {t(book.title)}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">di {book.author}</p>

                                                {/* Rating */}
                                                <div className="flex items-center gap-1 mb-2">
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
                                                <div className="flex items-center gap-2">
                                                    <span className="text-base font-bold text-gray-900 dark:text-white">€{book.price}</span>
                                                    {book.originalPrice && (
                                                        <span className="text-xs text-gray-400 dark:text-gray-500 line-through">€{book.originalPrice}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {t(TEXTS.reviews.title)}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {t(TEXTS.reviews.subtitle)}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TEXTS.customerReviews.map((review) => (
                            <div key={review.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">


                                {/* Review Text */}
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                    "{t(review.text)}"
                                </p>

                                {/* Customer Info */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{review.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{review.book}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">5K+</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {language === 'en' ? 'Happy Customers' : 'Clienti Soddisfatti'}
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-green-600 dark:text-green-400">10K+</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {language === 'en' ? 'Books Sold' : 'Libri Venduti'}
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">98%</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {language === 'en' ? 'Satisfaction Rate' : 'Tasso Soddisfazione'}
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-orange-600 dark:text-orange-400">24h</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {language === 'en' ? 'Fast Shipping' : 'Spedizione Rapida'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {language === 'en' ? 'Why Choose Max Publishing' : 'Perché Scegliere Max Publishing'}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {language === 'en'
                                ? 'Excellence in every aspect of your book buying experience'
                                : 'Eccellenza in ogni aspetto della tua esperienza di acquisto libri'
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 - Quality Selection */}
                        <div className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {language === 'en' ? 'Curated Selection' : 'Selezione Curata'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                    {language === 'en'
                                        ? 'Handpicked books by literary experts for quality and reader satisfaction'
                                        : 'Libri selezionati da esperti letterari per qualità e soddisfazione del lettore'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 - Fast Delivery */}
                        <div className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {language === 'en' ? 'Express Delivery' : 'Consegna Express'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                    {language === 'en'
                                        ? '24-48 hour delivery across Italy with careful packaging'
                                        : 'Consegna in 24-48 ore in tutta Italia con imballaggio accurato'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 - Easy Returns */}
                        <div className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {language === 'en' ? 'Easy Returns' : 'Resi Facili'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                    {language === 'en'
                                        ? '30-day hassle-free returns with full refund guarantee'
                                        : 'Resi senza problemi entro 30 giorni con rimborso completo garantito'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 - Competitive Prices */}
                        <div className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {language === 'en' ? 'Best Prices' : 'Migliori Prezzi'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                    {language === 'en'
                                        ? 'Competitive pricing with exclusive member discounts and deals'
                                        : 'Prezzi competitivi con sconti esclusivi e offerte per i membri'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 - Expert Support */}
                        <div className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {language === 'en' ? '24/7 Support' : 'Supporto 24/7'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                    {language === 'en'
                                        ? 'Round-the-clock customer service and book recommendations'
                                        : 'Servizio clienti 24 ore su 24 e raccomandazioni librarie'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Feature 6 - Secure Shopping */}
                        <div className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {language === 'en' ? 'Secure Payment' : 'Pagamento Sicuro'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                    {language === 'en'
                                        ? 'Bank-level security with multiple trusted payment options'
                                        : 'Sicurezza bancaria con multiple opzioni di pagamento affidabili'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-slate-800 dark:to-slate-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        {language === 'en' ? 'Stay Updated with New Releases' : 'Rimani Aggiornato con le Nuove Uscite'}
                    </h2>
                    <p className="text-gray-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                        {language === 'en'
                            ? 'Subscribe to our newsletter and be the first to know about new books, special offers, and literary events.'
                            : 'Iscriviti alla nostra newsletter e sii il primo a sapere di nuovi libri, offerte speciali ed eventi letterari.'
                        }
                    </p>

                    <div className="max-w-md mx-auto">
                        {showSuccess ? (
                            <div className="animate-in slide-in-from-top-4 fade-in duration-700">
                                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-6 rounded-2xl shadow-2xl">
                                    <div className="flex items-center justify-center space-x-3">
                                        <div className="relative">
                                            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <div className="absolute inset-0 w-8 h-8 bg-green-300 rounded-full animate-ping opacity-20"></div>
                                        </div>
                                        <div className="font-bold text-lg">
                                            {language === 'en' ? 'Successfully subscribed!' : 'Iscrizione completata!'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={language === 'en' ? 'Enter your email' : 'Inserisci la tua email'}
                                    className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 bg-white border border-transparent transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className={`px-8 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 transform ${isSubscribing
                                        ? 'bg-slate-400 text-white cursor-not-allowed scale-95'
                                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:scale-105 hover:shadow-lg active:scale-95'
                                        }`}
                                >
                                    {isSubscribing ? (
                                        <div className="flex items-center space-x-2">
                                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="text-sm">{language === 'en' ? 'Sending...' : 'Invio...'}</span>
                                        </div>
                                    ) : (
                                        language === 'en' ? 'Subscribe' : 'Iscriviti'
                                    )}
                                </button>
                            </form>
                        )}
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