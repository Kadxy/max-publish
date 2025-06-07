import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { TEXTS } from '../../../lib/constants'

export default function ContactPage() {
    const { t } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setShowSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        setTimeout(() => {
            setShowSuccess(false)
        }, 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const subjectOptions = [
        { value: '', label: t(TEXTS.contact.form.select_subject) },
        { value: 'general', label: t(TEXTS.contact.form.general_inquiry) },
        { value: 'order', label: t(TEXTS.contact.form.order_support) },
        { value: 'shipping', label: t(TEXTS.contact.form.shipping) },
        { value: 'returns', label: t(TEXTS.contact.form.returns) },
        { value: 'technical', label: t(TEXTS.contact.form.technical) },
        { value: 'partnership', label: t(TEXTS.contact.form.partnership) },
        { value: 'other', label: t(TEXTS.contact.form.other) }
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    {t(TEXTS.nav.contact)}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    {t(TEXTS.contact.description)}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        {t(TEXTS.contact.form.title)}
                    </h2>

                    {showSuccess && (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                            <div className="text-green-600 dark:text-green-400 font-semibold">
                                {t(TEXTS.contact.form.success_title)}
                            </div>
                            <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                                {t(TEXTS.contact.form.success_message)}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t(TEXTS.contact.form.name)} *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder={t(TEXTS.contact.form.name_placeholder)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t(TEXTS.contact.form.email)} *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder={t(TEXTS.contact.form.email_placeholder)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {t(TEXTS.contact.form.subject)} *
                            </label>
                            <div className="relative">
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition-colors"
                                >
                                    {subjectOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {t(TEXTS.contact.form.message)} *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                                placeholder={t(TEXTS.contact.form.message_placeholder)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                    <span>{t(TEXTS.contact.form.sending)}</span>
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" />
                                    <span>{t(TEXTS.contact.form.send)}</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        {t(TEXTS.contact.info.title)}
                    </h2>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {t(TEXTS.contact.info.email_title)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {TEXTS.company.email}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">
                                    {t(TEXTS.contact.info.email_response)}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                                <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {t(TEXTS.contact.info.phone_title)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    +39 051 123 4567
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">
                                    {t(TEXTS.contact.info.phone_hours)}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {t(TEXTS.contact.info.address_title)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {TEXTS.company.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
                                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {t(TEXTS.contact.info.hours_title)}
                                </h3>
                                <div className="text-gray-600 dark:text-gray-400 space-y-1">
                                    <p>{t(TEXTS.contact.info.hours_weekdays)}</p>
                                    <p>{t(TEXTS.contact.info.hours_weekend)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {t(TEXTS.contact.faq.title)}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                    {t(TEXTS.contact.faq.q1)}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t(TEXTS.contact.faq.a1)}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                    {t(TEXTS.contact.faq.q2)}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t(TEXTS.contact.faq.a2)}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                    {t(TEXTS.contact.faq.q3)}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t(TEXTS.contact.faq.a3)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 