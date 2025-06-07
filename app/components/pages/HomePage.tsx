import { useState } from 'react'
import { ChevronRight, ChevronLeft, BookOpen, Book, Brain, Heart, Zap, Clock, Users, Palette } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { TEXTS } from '../../../lib/constants'
import BookCard from '../BookCard'

type HomePageProps = {
    onNavigate: (section: string) => void
    onBookClick: (bookId: string) => void
    onAddToCart?: (book: any) => void
}

export default function HomePage({ onNavigate, onBookClick, onAddToCart }: HomePageProps) {
    const { t } = useLanguage()
    const [currentBookSlide, setCurrentBookSlide] = useState(0)
    const [email, setEmail] = useState('')
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const books = TEXTS.sampleBooks
    const booksPerView = 5
    const maxSlide = Math.max(0, books.length - booksPerView)

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
        await new Promise(resolve => setTimeout(resolve, 1200))

        setIsSubscribing(false)
        setShowSuccess(true)
        setEmail('')

        setTimeout(() => {
            setShowSuccess(false)
        }, 6000)
    }

    const categories = [
        { id: 'fiction', name: TEXTS.categories.fiction, color: 'bg-blue-500', icon: BookOpen },
        { id: 'non-fiction', name: TEXTS.categories.non_fiction, color: 'bg-green-500', icon: Book },
        { id: 'mystery', name: TEXTS.categories.mystery, color: 'bg-purple-500', icon: Brain },
        { id: 'romance', name: TEXTS.categories.romance, color: 'bg-pink-500', icon: Heart },
        { id: 'science', name: TEXTS.categories.science, color: 'bg-indigo-500', icon: Zap },
        { id: 'history', name: TEXTS.categories.history, color: 'bg-yellow-500', icon: Clock },
        { id: 'children', name: TEXTS.categories.children, color: 'bg-orange-500', icon: Users },
        { id: 'poetry', name: TEXTS.categories.poetry, color: 'bg-red-500', icon: Palette }
    ]

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t(TEXTS.hero.title)}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
                        {t(TEXTS.hero.subtitle)}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate('books')}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            {t(TEXTS.hero.cta_browse)}
                        </button>
                        <button
                            onClick={() => onNavigate('bestsellers')}
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            {t(TEXTS.hero.cta_bestsellers)}
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t(TEXTS.categories.title)}
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const IconComponent = category.icon
                        return (
                            <button
                                key={category.id}
                                onClick={() => onNavigate('categories')}
                                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
                            >
                                <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 mx-auto group-hover:scale-110 transition-transform flex items-center justify-center`}>
                                    <IconComponent className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {t(category.name)}
                                </h3>
                            </button>
                        )
                    })}
                </div>
            </section>

            {/* Featured Books Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {t(TEXTS.featured.title)}
                    </h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={prevBookSlide}
                            disabled={currentBookSlide === 0}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextBookSlide}
                            disabled={currentBookSlide >= maxSlide}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentBookSlide * (100 / booksPerView)}%)` }}
                    >
                        {books.map((book) => (
                            <div key={book.id} className="flex-none w-64">
                                <BookCard book={book} onBookClick={onBookClick} onAddToCart={onAddToCart} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => onNavigate('books')}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        {t(TEXTS.featured.view_all)}
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t(TEXTS.newsletter.title)}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {t(TEXTS.newsletter.subtitle)}
                    </p>

                    {showSuccess ? (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-md mx-auto">
                            <div className="text-green-600 dark:text-green-400 font-semibold mb-2">
                                {t(TEXTS.newsletter.success_title)}
                            </div>
                            <p className="text-green-600 dark:text-green-400 text-sm">
                                {t(TEXTS.newsletter.success_message)}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t(TEXTS.newsletter.email_placeholder)}
                                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                disabled={isSubscribing}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold whitespace-nowrap"
                            >
                                {isSubscribing ? t(TEXTS.newsletter.subscribing) : t(TEXTS.newsletter.subscribe_button)}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    )
} 