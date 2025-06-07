'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLanguage'
import { TEXTS } from '../lib/constants'
import { Book } from './types'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import BooksPage from './components/pages/BooksPage'
import CategoriesPage from './components/pages/CategoriesPage'
import BookDetailPage from './components/pages/BookDetailPage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import CartPage from './components/pages/CartPage'
import LoginPage from './components/pages/LoginPage'
import ProfilePage from './components/pages/ProfilePage'

type CartItem = {
    id: string
    title: string
    author: string
    price: number
    image: string
    quantity: number
}

type User = {
    id: string
    name: string
    email: string
    avatar: string
}

export default function Home() {
    const { theme, changeTheme } = useTheme()
    const { language, changeLanguage } = useLanguage()
    const [currentSection, setCurrentSection] = useState<string>('home')
    const [selectedBook, setSelectedBook] = useState<Book | null>(null)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [user, setUser] = useState<User | null>(null)
    const [allBooks, setAllBooks] = useState<Book[]>(TEXTS.sampleBooks)

    // Load cart and user from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('bookstore_cart')
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart))
            } catch (error) {
                console.error('Error loading cart:', error)
            }
        }

        const savedUser = localStorage.getItem('bookstore_user')
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch (error) {
                console.error('Error loading user:', error)
            }
        }
    }, [])

    // Save cart to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('bookstore_cart', JSON.stringify(cartItems))
    }, [cartItems])

    const handleNavigation = (section: string) => {
        setCurrentSection(section)
        setSelectedBook(null)
    }

    const handleBookClick = (bookId: string) => {
        const book = allBooks.find(b => b.id === bookId)
        if (book) {
            setSelectedBook(book)
            setCurrentSection('book-detail')
        }
    }

    const handleAddToCart = (book: Book) => {
        console.log('Adding to cart:', book.title, book.id)
        setCartItems(items => {
            const existingItem = items.find(item => item.id === book.id)
            if (existingItem) {
                const updatedItems = items.map(item =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                console.log('Updated existing item, new cart items:', updatedItems)
                return updatedItems
            } else {
                // Use the translated title for cart storage
                const translatedTitle = typeof book.title === 'string' ? book.title : book.title.en
                const newItem = {
                    id: book.id,
                    title: translatedTitle,
                    author: book.author,
                    price: book.price,
                    image: book.image,
                    quantity: 1
                }
                const updatedItems = [...items, newItem]
                console.log('Added new item:', newItem)
                console.log('New cart items:', updatedItems)
                return updatedItems
            }
        })
        console.log('Cart updated')
    }

    const handleLogin = (userData: User) => {
        setUser(userData)
    }

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('bookstore_user')
    }

    const getCartItemCount = () => {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0)
        console.log('Cart item count:', count, 'from items:', cartItems)
        return count
    }

    const renderCurrentPage = () => {
        switch (currentSection) {
            case 'home':
                return <HomePage onBookClick={handleBookClick} onNavigate={handleNavigation} onAddToCart={handleAddToCart} />
            case 'books':
                return <BooksPage onBookClick={handleBookClick} onAddToCart={handleAddToCart} />
            case 'bestsellers':
                return <BooksPage onBookClick={handleBookClick} onAddToCart={handleAddToCart} />
            case 'categories':
                return <CategoriesPage onBookClick={handleBookClick} onNavigate={handleNavigation} onAddToCart={handleAddToCart} />
            case 'about':
                return <AboutPage />
            case 'contact':
                return <ContactPage />
            case 'cart':
                return <CartPage onNavigate={handleNavigation} cartItems={cartItems} onUpdateCart={setCartItems} />
            case 'login':
                return <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />
            case 'profile':
                return <ProfilePage onNavigate={handleNavigation} onLogout={handleLogout} />
            case 'book-detail':
                return selectedBook ? (
                    <BookDetailPage
                        bookId={selectedBook.id}
                        onBack={() => handleNavigation('books')}
                        onNavigate={handleNavigation}
                        onAddToCart={handleAddToCart}
                    />
                ) : null
            default:
                return <HomePage onBookClick={handleBookClick} onNavigate={handleNavigation} />
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header
                currentSection={currentSection}
                onNavigate={handleNavigation}
                cartItemCount={getCartItemCount()}
            />

            <main className="pt-16">
                {renderCurrentPage()}
            </main>

            <Footer onNavigate={handleNavigation} />
        </div>
    )
} 