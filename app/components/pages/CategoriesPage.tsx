import { useState, useEffect } from 'react'
import { Book, Heart, Star, Users, Zap, Sword, Brain, Globe, BookOpen, Clock, Palette, Shield, Gamepad2 } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { TEXTS, Book as BookType, fetchBooksFromOpenLibrary } from '../../../lib/constants'
import BookCard from '../BookCard'

type CategoriesPageProps = {
    onBookClick: (bookId: string) => void
    onNavigate: (section: string) => void
    onAddToCart?: (book: any) => void
}

const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
        'Romance': Heart,
        'Fantasy': Sword,
        'Science Fiction': Zap,
        'Mystery': Brain,
        'Horror': Shield,
        'Biography': Globe,
        'Fiction': BookOpen,
        'History': Clock,
        'Philosophy': Brain,
        'Self-Help': Users,
        'Thriller': Zap,
        'Science': Zap,
        'Art': Palette,
        'Poetry': BookOpen,
        'Children': Heart,
        'Young Adult': Star,
        'Adventure': Gamepad2,
        'Technology': Zap,
        'Business': Brain,
        'Health': Users,
        'Travel': Globe,
        'Cooking': Heart
    }
    return icons[category] || BookOpen
}

export default function CategoriesPage({ onBookClick, onNavigate, onAddToCart }: CategoriesPageProps) {
    const { t } = useLanguage()
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [books, setBooks] = useState<BookType[]>(TEXTS.sampleBooks)
    const [loading, setLoading] = useState(false)

    const predefinedCategories = [
        'Romance',
        'Fantasy',
        'Science Fiction',
        'Mystery',
        'Horror',
        'Biography',
        'Fiction',
        'History',
        'Philosophy',
        'Self-Help',
        'Thriller',
        'Art',
        'Poetry',
        'Science',
        'Business',
        'Health',
        'Travel'
    ]

    // Get all unique categories from existing books + predefined ones
    const existingCategories = Array.from(new Set(TEXTS.sampleBooks.map(book => book.category)))
    const allCategories = Array.from(new Set([...existingCategories, ...predefinedCategories]))

    // Generate fixed random numbers for categories (using category name as seed)
    const getCategoryCount = (category: string) => {
        const existingCount = TEXTS.sampleBooks.filter((book: BookType) => book.category === category).length
        if (existingCount > 0) return existingCount

        // Use category name as seed for consistent random numbers
        let hash = 0
        for (let i = 0; i < category.length; i++) {
            const char = category.charCodeAt(i)
            hash = ((hash << 5) - hash) + char
            hash = hash & hash // Convert to 32bit integer
        }
        return Math.abs(hash % 40) + 10 // 10-50 books
    }

    const fetchCategoryBooks = async (category: string) => {
        if (category === 'all') {
            setBooks(TEXTS.sampleBooks)
            return
        }

        setLoading(true)
        try {
            // Get existing books from this category
            const existingBooks = TEXTS.sampleBooks.filter(book => book.category === category)

            // Try to fetch more from OpenLibrary API
            const openLibraryBooks = await fetchBooksFromOpenLibrary(category, 15)

            // Combine existing and new books
            const allCategoryBooks = [...existingBooks, ...openLibraryBooks]

            setBooks(allCategoryBooks)
        } catch (error) {
            console.error('Failed to fetch books:', error)
            // Fallback to existing books only
            const existingBooks = TEXTS.sampleBooks.filter(book => book.category === category)
            setBooks(existingBooks)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategoryBooks(selectedCategory)
    }, [selectedCategory])

    const getCategoryColor = (index: number) => {
        const colors = [
            'bg-blue-500',
            'bg-green-500',
            'bg-purple-500',
            'bg-pink-500',
            'bg-indigo-500',
            'bg-yellow-500',
            'bg-orange-500',
            'bg-red-500',
            'bg-teal-500',
            'bg-cyan-500',
            'bg-lime-500',
            'bg-amber-500'
        ]
        return colors[index % colors.length]
    }

    const filteredBooks = selectedCategory === 'all'
        ? books
        : books.filter(book => book.category === selectedCategory)

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    {t(TEXTS.categories.title)}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Explore our extensive collection of books across various genres and discover your next favorite read.
                </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                {/* All Categories */}
                <button
                    onClick={() => setSelectedCategory('all')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${selectedCategory === 'all'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                        }`}
                >
                    <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${selectedCategory === 'all'
                            ? 'bg-blue-100 dark:bg-blue-800'
                            : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                            <BookOpen className={`h-5 w-5 ${selectedCategory === 'all'
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400'
                                }`} />
                        </div>
                        <div>
                            <h3 className={`font-semibold ${selectedCategory === 'all'
                                ? 'text-blue-900 dark:text-blue-100'
                                : 'text-gray-900 dark:text-white'
                                }`}>
                                All Categories
                            </h3>
                            <p className={`text-xs ${selectedCategory === 'all'
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-500 dark:text-gray-400'
                                }`}>
                                {TEXTS.sampleBooks.length} books
                            </p>
                        </div>
                    </div>
                </button>

                {/* Individual Categories */}
                {allCategories.map((category: string, index: number) => {
                    const IconComponent = getCategoryIcon(category)
                    const categoryCount = getCategoryCount(category)

                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${selectedCategory === category
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${selectedCategory === category
                                    ? 'bg-blue-100 dark:bg-blue-800'
                                    : 'bg-gray-100 dark:bg-gray-700'
                                    }`}>
                                    <IconComponent className={`h-5 w-5 ${selectedCategory === category
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400'
                                        }`} />
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${selectedCategory === category
                                        ? 'text-blue-900 dark:text-blue-100'
                                        : 'text-gray-900 dark:text-white'
                                        }`}>
                                        {category}
                                    </h3>
                                    <p className={`text-xs ${selectedCategory === category
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {categoryCount}+ books
                                    </p>
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Selected Category Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedCategory === 'all' ? 'All Books' : selectedCategory}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{filteredBooks.length} books available</span>
                    {loading && (
                        <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                            <span>Loading more books...</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Books Grid */}
            {loading && filteredBooks.length === 0 ? (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Loading books...</span>
                </div>
            ) : filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book: any) => (
                        <BookCard key={book.id} book={book} onBookClick={onBookClick} onAddToCart={onAddToCart} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="text-gray-400 dark:text-gray-500 mb-4">
                        <BookOpen className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        No books found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        We couldn't find any books in this category. Try selecting a different category.
                    </p>
                </div>
            )}

            {/* Load More Button */}
            {selectedCategory !== 'all' && filteredBooks.length > 0 && !loading && (
                <div className="text-center mt-12">
                    <button
                        onClick={() => fetchCategoryBooks(selectedCategory)}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Load More Books
                    </button>
                </div>
            )}

            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 text-white py-16 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">
                    Can't Find What You're Looking For?
                </h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                    Browse our complete collection or use our search feature to find the perfect book for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => onNavigate('books')}
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                        Browse All Books
                    </button>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
} 