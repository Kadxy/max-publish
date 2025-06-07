import { useState, useEffect } from 'react'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Package } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { TEXTS } from '../../../lib/constants'

type CartItem = {
    id: string
    title: string
    author: string
    price: number
    image: string
    quantity: number
}

type CartPageProps = {
    onNavigate: (section: string) => void
    cartItems?: CartItem[]
    onUpdateCart?: (items: CartItem[]) => void
}

export default function CartPage({ onNavigate, cartItems = [], onUpdateCart }: CartPageProps) {
    const { t } = useLanguage()
    const [localCartItems, setLocalCartItems] = useState<CartItem[]>(cartItems)

    // Update local state when props change
    useEffect(() => {
        setLocalCartItems(cartItems)
    }, [cartItems])

    // Save cart to localStorage and notify parent whenever local cart changes
    useEffect(() => {
        if (onUpdateCart) {
            onUpdateCart(localCartItems)
        }
    }, [localCartItems, onUpdateCart])

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeItem(id)
            return
        }

        setLocalCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const removeItem = (id: string) => {
        setLocalCartItems(items => items.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setLocalCartItems([])
    }



    const getTotalPrice = () => {
        return localCartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const getTotalItems = () => {
        return localCartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const handleCheckout = () => {
        // Generate random data to cause errors on the Italian payment site
        const randomOrderId = Math.random().toString(36).substring(2, 15)
        const randomAmount = (Math.random() * 9999 + 1).toFixed(2)
        const randomMerchantId = Math.random().toString(36).substring(2, 10)

        // Italian payment gateway URL with random parameters that will cause errors
        const paymentUrl = `https://www.cartasi.it/payment/gateway?` +
            `orderId=${randomOrderId}&` +
            `amount=${randomAmount}&` +
            `currency=EUR&` +
            `merchantId=${randomMerchantId}&` +
            `callback=invalid&` +
            `timestamp=${Date.now()}&` +
            `signature=invalid_signature&` +
            `lang=it`

        // Open in new window/tab
        window.open(paymentUrl, '_blank', 'noopener,noreferrer')
    }

    if (localCartItems.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </button>
                </div>

                <div className="text-center py-16">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag className="h-12 w-12 text-gray-400 dark:text-gray-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Your cart is empty
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        Looks like you haven't added any books to your cart yet. Start exploring our collection!
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => onNavigate('books')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Browse Books
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <button
                    onClick={() => onNavigate('home')}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-4"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                </button>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Shopping Cart
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
                        </p>
                    </div>
                    {localCartItems.length > 0 && (
                        <button
                            onClick={clearCart}
                            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors"
                        >
                            Clear Cart
                        </button>
                    )}
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {localCartItems.map((item) => (
                                <div key={item.id} className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-28 object-cover rounded-lg flex-shrink-0"
                                            onError={(e) => {
                                                const img = e.target as HTMLImageElement
                                                img.src = `https://via.placeholder.com/80x112/e5e7eb/6b7280?text=${encodeURIComponent(item.title)}`
                                            }}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                                by {item.author}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        <Minus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                                    </button>
                                                    <span className="text-lg font-medium text-gray-900 dark:text-white min-w-[2rem] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                                    </button>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                                        €{(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal ({getTotalItems()} items)</span>
                                <span>€{getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span className="text-green-600 dark:text-green-400">Free</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                                    <span>Total</span>
                                    <span>€{getTotalPrice().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
                        >
                            Proceed to Checkout
                        </button>

                        <button
                            onClick={() => onNavigate('books')}
                            className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            Continue Shopping
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Free shipping on all orders
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                30-day return policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 