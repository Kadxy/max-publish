import { useState } from 'react'
import { Search, Book, ShoppingCart, User, Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../hooks/useTheme'
import { TEXTS } from '../../lib/constants'

type HeaderProps = {
    onNavigate: (section: string) => void
    currentSection: string
    cartItemCount?: number
}

export default function Header({ onNavigate, currentSection, cartItemCount = 0 }: HeaderProps) {
    const { language, changeLanguage, t } = useLanguage()
    const { theme, changeTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const navigationItems = [
        { id: 'home', label: TEXTS.nav.home },
        { id: 'books', label: TEXTS.nav.books },
        { id: 'categories', label: TEXTS.nav.categories },
        { id: 'bestsellers', label: TEXTS.nav.bestsellers },
        { id: 'about', label: TEXTS.nav.about },
        { id: 'contact', label: TEXTS.nav.contact }
    ]

    const handleNavigation = (sectionId: string) => {
        onNavigate(sectionId)
        setIsMenuOpen(false)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            onNavigate('search')
            // Here you would normally perform the search
            console.log('Searching for:', searchQuery)
        }
    }

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center h-16 gap-2">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => handleNavigation('home')}
                    >
                        <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                            Max Publishing
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className={`transition-colors whitespace-nowrap px-3 py-2 rounded-md ${currentSection === item.id
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {t(item.label)}
                            </button>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        {/* Language Toggle */}
                        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 transition-colors">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'en'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => changeLanguage('it')}
                                className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'it'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'
                                    }`}
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
                                        onClick={() => changeTheme('light')}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors ${theme === 'light'
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                            : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <Sun className="h-4 w-4" />
                                        <span>{t(TEXTS.theme.light)}</span>
                                    </button>
                                    <button
                                        onClick={() => changeTheme('dark')}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors ${theme === 'dark'
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                            : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <Moon className="h-4 w-4" />
                                        <span>{t(TEXTS.theme.dark)}</span>
                                    </button>
                                    <button
                                        onClick={() => changeTheme('system')}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 transition-colors ${theme === 'system'
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                            : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <Monitor className="h-4 w-4" />
                                        <span>{t(TEXTS.theme.system)}</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Search */}
                        <form onSubmit={handleSearch} className="hidden lg:block relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t(TEXTS.nav.search_placeholder)}
                                className="w-48 xl:w-56 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                            >
                                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                            </button>
                        </form>

                        {/* Cart & User */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleNavigation('cart')}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative"
                                title="Shopping Cart"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                        {cartItemCount > 99 ? '99+' : cartItemCount}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => handleNavigation('profile')}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                title="User Profile"
                            >
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
                    <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 pb-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="mb-4 relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t(TEXTS.nav.search_placeholder)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                            >
                                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                            </button>
                        </form>

                        {/* Mobile Navigation */}
                        <nav className="space-y-2">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.id)}
                                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${currentSection === item.id
                                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {t(item.label)}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
} 