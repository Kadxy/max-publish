import { useState, useEffect } from 'react'
import { User, Mail, MapPin, Phone, Calendar, Settings, LogOut, Package, Heart, ArrowLeft } from 'lucide-react'

type UserType = {
    id: string
    name: string
    email: string
    avatar: string
    phone?: string
    address?: string
    joinDate?: string
}

type ProfilePageProps = {
    onNavigate: (section: string) => void
    onLogout?: () => void
}

export default function ProfilePage({ onNavigate, onLogout }: ProfilePageProps) {
    const [user, setUser] = useState<UserType | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [editForm, setEditForm] = useState({
        name: '',
        phone: '',
        address: ''
    })

    useEffect(() => {
        const savedUser = localStorage.getItem('bookstore_user')
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser)
                setUser({
                    ...userData,
                    phone: userData.phone || '',
                    address: userData.address || '',
                    joinDate: userData.joinDate || 'January 2024'
                })
                setEditForm({
                    name: userData.name || '',
                    phone: userData.phone || '',
                    address: userData.address || ''
                })
            } catch (error) {
                console.error('Error loading user data:', error)
                onNavigate('login')
            }
        } else {
            onNavigate('login')
        }
    }, [onNavigate])

    const handleSave = () => {
        if (user) {
            const updatedUser = {
                ...user,
                name: editForm.name,
                phone: editForm.phone,
                address: editForm.address
            }
            setUser(updatedUser)
            localStorage.setItem('bookstore_user', JSON.stringify(updatedUser))
            setIsEditing(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('bookstore_user')
        onLogout?.()
        onNavigate('home')
    }

    if (!user) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Please log in to view your profile
                    </h2>
                    <button
                        onClick={() => onNavigate('login')}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Sign In
                    </button>
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
                    Back to Home
                </button>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    My Profile
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Profile Info */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div className="text-center mb-6">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                {user.name}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Member since {user.joinDate}
                            </p>
                        </div>

                        {!isEditing ? (
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <Mail className="h-4 w-4 mr-3" />
                                    <span className="text-sm">{user.email}</span>
                                </div>
                                {user.phone && (
                                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                                        <Phone className="h-4 w-4 mr-3" />
                                        <span className="text-sm">{user.phone}</span>
                                    </div>
                                )}
                                {user.address && (
                                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                                        <MapPin className="h-4 w-4 mr-3" />
                                        <span className="text-sm">{user.address}</span>
                                    </div>
                                )}
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-6"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={editForm.name}
                                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        value={editForm.phone}
                                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Address
                                    </label>
                                    <textarea
                                        value={editForm.address}
                                        onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                                <div className="flex space-x-3 mt-6">
                                    <button
                                        onClick={handleSave}
                                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        <hr className="my-6 border-gray-200 dark:border-gray-700" />

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 py-2 font-medium transition-colors"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* Account Overview */}
                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
                                <Package className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Orders</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
                                <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Wishlist Items</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
                                <Calendar className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Recent Orders
                            </h3>
                            <div className="text-center py-8">
                                <Package className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    You haven't placed any orders yet
                                </p>
                                <button
                                    onClick={() => onNavigate('books')}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Start Shopping
                                </button>
                            </div>
                        </div>

                        {/* Wishlist */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                My Wishlist
                            </h3>
                            <div className="text-center py-8">
                                <Heart className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Your wishlist is empty
                                </p>
                                <button
                                    onClick={() => onNavigate('books')}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Browse Books
                                </button>
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Account Settings
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center">
                                    <Settings className="h-4 w-4 mr-3 text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Notification Preferences</span>
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center">
                                    <User className="h-4 w-4 mr-3 text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Privacy Settings</span>
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center">
                                    <Mail className="h-4 w-4 mr-3 text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Change Password</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 