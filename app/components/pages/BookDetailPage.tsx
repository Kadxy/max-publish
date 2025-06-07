import { useState } from 'react'
import { ArrowLeft, Star, ShoppingCart, Heart, Share2 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { TEXTS } from '../../../lib/constants'
import { Book } from '../../types'

type BookDetailPageProps = {
    bookId: string
    onBack: () => void
    onNavigate: (section: string) => void
    onAddToCart?: (book: Book) => void
}

export default function BookDetailPage({ bookId, onBack, onNavigate, onAddToCart }: BookDetailPageProps) {
    const { t } = useLanguage()
    const [quantity, setQuantity] = useState(1)
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [showAddedToCart, setShowAddedToCart] = useState(false)

    const book = TEXTS.sampleBooks.find(b => b.id === bookId)

    if (!book) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Book Not Found
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    The book you're looking for doesn't exist or has been removed.
                </p>
                <button
                    onClick={onBack}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Go Back
                </button>
            </div>
        )
    }

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
        const stars = []

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            )
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative">
                    <Star className="h-5 w-5 text-gray-300" />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
            )
        }

        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
            )
        }

        return stars
    }

    const handleAddToCart = () => {
        if (onAddToCart && book) {
            for (let i = 0; i < quantity; i++) {
                onAddToCart(book)
            }
        }
        setShowAddedToCart(true)
        setTimeout(() => setShowAddedToCart(false), 3000)
        console.log(`Adding ${quantity} copies of "${t(book.title)}" to cart`)
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: t(book.title),
                    text: `Check out this book: ${t(book.title)} by ${book.author}`,
                    url: window.location.href,
                })
            } catch (err) {
                console.log('Error sharing:', err)
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href)
        }
    }

    const relatedBooks = TEXTS.sampleBooks
        .filter(b => b.category === book.category && b.id !== book.id)
        .slice(0, 4)

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Books
            </button>

            {/* Success Message */}
            {showAddedToCart && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                    ✓ Added to cart successfully!
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Book Image */}
                <div className="flex justify-center">
                    <div className="relative">
                        <img
                            src={book.image}
                            alt={t(book.title)}
                            className="w-80 h-auto rounded-lg shadow-lg"
                            onError={(e) => {
                                const img = e.target as HTMLImageElement
                                img.src = `https://via.placeholder.com/320x480/e5e7eb/6b7280?text=${encodeURIComponent(t(book.title))}`
                            }}
                        />
                        {/* Add badges if needed */}
                    </div>
                </div>

                {/* Book Details */}
                <div>
                    <div className="mb-4">
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {book.category}
                        </span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t(book.title)}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                        by {book.author}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-1">
                            {renderStars(book.rating)}
                        </div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                            {book.rating}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                            ({book.reviews.toLocaleString()} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-4 mb-8">
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            €{book.price.toFixed(2)}
                        </span>
                        {book.originalPrice && book.originalPrice > book.price && (
                            <>
                                <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                                    €{book.originalPrice.toFixed(2)}
                                </span>
                                <span className="bg-red-500 text-white text-sm font-medium px-2 py-1 rounded-full">
                                    -{Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t(book.description)}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        {/* Quantity and Add to Cart */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border-x border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span>{t(TEXTS.ui.add_to_cart)}</span>
                            </button>
                        </div>

                        {/* Secondary Actions */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${isWishlisted
                                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
                                    : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                                <span>{isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
                            </button>

                            <button
                                onClick={handleShare}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Share2 className="h-4 w-4" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Books */}
            {relatedBooks.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        More books in {book.category}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedBooks.map((relatedBook) => (
                            <div
                                key={relatedBook.id}
                                onClick={() => onNavigate(`book-${relatedBook.id}`)}
                                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                                <img
                                    src={relatedBook.image}
                                    alt={t(relatedBook.title)}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                                    onError={(e) => {
                                        const img = e.target as HTMLImageElement
                                        img.src = `https://via.placeholder.com/200x192/e5e7eb/6b7280?text=${encodeURIComponent(t(relatedBook.title))}`
                                    }}
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {t(relatedBook.title)}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        {relatedBook.author}
                                    </p>
                                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                        €{relatedBook.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
} 