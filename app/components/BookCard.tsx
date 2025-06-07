import { useState } from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Book } from '../types'
import { useLanguage } from '../hooks/useLanguage'

type BookCardProps = {
    book: Book
    onBookClick: (bookId: string) => void
    onAddToCart?: (book: Book) => void
}

export default function BookCard({ book, onBookClick, onAddToCart }: BookCardProps) {
    const { t } = useLanguage()
    const [showAdded, setShowAdded] = useState(false)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation()
        console.log('BookCard handleAddToCart called for:', book.title)
        console.log('onAddToCart function is:', onAddToCart)
        onAddToCart?.(book)

        // Show visual feedback
        setShowAdded(true)
        setTimeout(() => setShowAdded(false), 2000)
    }

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
        const stars = []

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            )
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative">
                    <Star className="h-4 w-4 text-gray-300" />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
            )
        }

        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
            )
        }

        return stars
    }

    return (
        <div className="relative">
            {/* Success feedback */}
            {showAdded && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10 animate-bounce">
                    Added!
                </div>
            )}
            <div
                onClick={() => onBookClick(book.id)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
                <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                        src={book.image}
                        alt={t(book.title)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        onError={(e) => {
                            const img = e.target as HTMLImageElement
                            img.src = `https://via.placeholder.com/300x400/e5e7eb/6b7280?text=${encodeURIComponent(t(book.title))}`
                        }}
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                // Handle wishlist
                            }}
                            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                        >
                            <Heart className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-red-500" />
                        </button>
                    </div>
                    {book.isBestseller && (
                        <div className="absolute top-2 left-2">
                            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                                Bestseller
                            </span>
                        </div>
                    )}
                    {book.isNew && (
                        <div className="absolute top-2 left-2">
                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                New
                            </span>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {t(book.title)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        by {book.author}
                    </p>
                    <div className="flex items-center mb-2">
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(book.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300 dark:text-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            ({book.reviews.toLocaleString()})
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            €{book.price.toFixed(2)}
                        </span>
                        <button
                            onClick={handleAddToCart}
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                            title="Add to cart"
                        >
                            <ShoppingCart className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 