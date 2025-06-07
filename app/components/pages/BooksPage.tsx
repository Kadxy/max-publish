import { useState, useMemo, useEffect } from 'react'
import { Filter, Grid, List, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { TEXTS, fetchBooksFromOpenLibrary } from '../../../lib/constants'
import BookCard from '../BookCard'
import { Book } from '../../types'

type BooksPageProps = {
    onBookClick: (bookId: string) => void
    onAddToCart?: (book: any) => void
}

export default function BooksPage({ onBookClick, onAddToCart }: BooksPageProps) {
    const { t } = useLanguage()
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [sortBy, setSortBy] = useState<'title' | 'price' | 'rating' | 'author'>('title')
    const [filterCategory, setFilterCategory] = useState<string>('all')
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(100)
    const [loading, setLoading] = useState(false)

    const books = TEXTS.sampleBooks
    const categories = Array.from(new Set(books.map(book => book.category)))

    const filteredAndSortedBooks = useMemo(() => {
        let filtered = books.filter(book => {
            const categoryMatch = filterCategory === 'all' || book.category === filterCategory
            const priceMatch = book.price >= minPrice && book.price <= maxPrice
            return categoryMatch && priceMatch
        })

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return t(a.title).localeCompare(t(b.title))
                case 'price':
                    return a.price - b.price
                case 'rating':
                    return b.rating - a.rating
                case 'author':
                    return a.author.localeCompare(b.author)
                default:
                    return 0
            }
        })
    }, [books, filterCategory, minPrice, maxPrice, sortBy, t])

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {t(TEXTS.nav.books)}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Discover our complete collection of books across all genres and categories.
                </p>
            </div>

            {/* Filters and Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Category Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Category
                        </label>
                        <div className="relative">
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition-colors"
                            >
                                <option value="all">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Price Range
                        </label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="number"
                                min="0"
                                max="200"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Math.max(0, parseInt(e.target.value) || 0))}
                                className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                placeholder="Min"
                            />
                            <span className="text-gray-500 dark:text-gray-400">-</span>
                            <input
                                type="number"
                                min="0"
                                max="200"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Math.max(minPrice, parseInt(e.target.value) || 0))}
                                className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                placeholder="Max"
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-400">€</span>
                        </div>
                    </div>

                    {/* Sort By */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Sort By
                        </label>
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as any)}
                                className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition-colors"
                            >
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="price">Price</option>
                                <option value="rating">Rating</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* View Mode */}
                    <div className="flex items-end">
                        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 w-full">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex-1 p-2 rounded-md transition-colors flex items-center justify-center ${viewMode === 'grid'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                <Grid className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex-1 p-2 rounded-md transition-colors flex items-center justify-center ${viewMode === 'list'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                <List className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                    Showing {filteredAndSortedBooks.length} of {books.length} books
                </p>
            </div>

            {/* Books Grid/List */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAndSortedBooks.map((book) => (
                        <BookCard key={book.id} book={book} onBookClick={onBookClick} onAddToCart={onAddToCart} />
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredAndSortedBooks.map((book) => (
                        <div
                            key={book.id}
                            onClick={() => onBookClick(book.id)}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6 cursor-pointer group"
                        >
                            <div className="flex items-center space-x-6">
                                <img
                                    src={book.image}
                                    alt={t(book.title)}
                                    className="w-20 h-28 object-cover rounded-lg"
                                    onError={(e) => {
                                        const img = e.target as HTMLImageElement
                                        img.src = `https://via.placeholder.com/80x112/e5e7eb/6b7280?text=${encodeURIComponent(t(book.title))}`
                                    }}
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {t(book.title)}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                                        by {book.author}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                                        {t(book.description)}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                                €{book.price.toFixed(2)}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                ⭐ {book.rating} ({book.reviews.toLocaleString()})
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                            {book.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {filteredAndSortedBooks.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 dark:text-gray-500 mb-4">
                        <Filter className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        No books found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Try adjusting your filters to see more results.
                    </p>
                </div>
            )}
        </div>
    )
} 