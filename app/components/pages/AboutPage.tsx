import { BookOpen, Award, Users, Globe, Heart, Shield } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { TEXTS } from '../../../lib/constants'

export default function AboutPage() {
    const { t } = useLanguage()

    const stats = [
        { icon: BookOpen, label: 'Books Available', value: '10,000+', color: 'text-blue-600' },
        { icon: Users, label: 'Happy Customers', value: '50,000+', color: 'text-green-600' },
        { icon: Globe, label: 'Countries Served', value: '25+', color: 'text-purple-600' },
        { icon: Award, label: 'Years of Experience', value: '15+', color: 'text-orange-600' },
    ]

    const values = [
        {
            icon: BookOpen,
            title: 'Quality Literature',
            description: 'We carefully curate our collection to ensure every book meets our high standards for quality and engaging content.'
        },
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Your reading experience is our priority. We provide excellent service and support for all our customers.'
        },
        {
            icon: Shield,
            title: 'Secure & Safe',
            description: 'Shop with confidence knowing your personal information and transactions are protected with industry-standard security.'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'We serve book lovers worldwide, bringing quality literature to readers across different countries and cultures.'
        }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    About Our Bookstore
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    We are passionate about connecting readers with exceptional books. Founded in 2008,
                    our mission is to make quality literature accessible to everyone, everywhere.
                </p>
            </div>

            {/* Story Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Our Story
                    </h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400">
                        <p>
                            What started as a small local bookstore has grown into a global platform serving
                            book enthusiasts worldwide. Our journey began with a simple belief: every person
                            deserves access to great books that inspire, educate, and entertain.
                        </p>
                        <p>
                            Over the years, we've built relationships with publishers, authors, and readers
                            to create a community centered around the love of literature. We pride ourselves
                            on offering both timeless classics and contemporary gems across all genres.
                        </p>
                        <p>
                            Today, we continue to evolve while staying true to our core values: quality,
                            accessibility, and exceptional customer service. Join us in celebrating the
                            power of books to transform lives and connect people across the globe.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 h-96 flex items-center justify-center">
                        <div className="text-center">
                            <BookOpen className="h-24 w-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                15+ Years
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                of serving book lovers worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div key={index} className="text-center">
                                <IconComponent className="h-8 w-8 text-white mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-blue-100 text-sm">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Values
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        These core principles guide everything we do and shape our commitment to our customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon
                        return (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                                <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Our Mission
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                    To inspire a love of reading by providing access to quality books and creating
                    meaningful connections between authors, books, and readers worldwide. We believe
                    that books have the power to educate, entertain, and transform lives.
                </p>
            </div>
        </div>
    )
} 