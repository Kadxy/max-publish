'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'
import { Mail, MapPin, Building2, FileText, Phone, Send, ChevronDown } from 'lucide-react'

export default function ContactPage() {
    const { language } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const emailBody = `
${language === 'en' ? 'Name' : 'Nome'}: ${formData.name}
${language === 'en' ? 'Email' : 'Email'}: ${formData.email}
${language === 'en' ? 'Company' : 'Azienda'}: ${formData.company || (language === 'en' ? 'Not provided' : 'Non fornita')}
${language === 'en' ? 'Subject' : 'Oggetto'}: ${formData.subject}

${language === 'en' ? 'Message' : 'Messaggio'}:
${formData.message}
    `.trim()

        const mailtoLink = `mailto:${COMPANY.emails.general}?subject=${encodeURIComponent(formData.subject || TEXTS.contact.form.emailSubject[language])}&body=${encodeURIComponent(emailBody)}`

        window.location.href = mailtoLink
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Page Header */}
            <section className="bg-gray-50 dark:bg-gray-800/50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        {TEXTS.contact.headerTitle[language]}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
                        {TEXTS.contact.description[language]}
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                    {TEXTS.contact.form.title[language]}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {TEXTS.contact.form.nameLabel[language]} *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full h-12 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-shadow shadow-sm"
                                                placeholder={TEXTS.contact.form.namePlaceholder[language]}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {TEXTS.contact.form.emailLabel[language]} *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full h-12 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-shadow shadow-sm"
                                                placeholder={TEXTS.contact.form.emailPlaceholder[language]}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {TEXTS.contact.form.companyLabel[language]}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full h-12 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-shadow shadow-sm"
                                            placeholder={TEXTS.contact.form.companyPlaceholder[language]}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {TEXTS.contact.form.subjectLabel[language]} *
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full h-12 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-shadow shadow-sm appearance-none pr-10"
                                            >
                                                <option value="" disabled>{TEXTS.contact.form.selectSubject[language]}</option>
                                                <option value={TEXTS.contact.form.subjects.general[language]}>
                                                    {TEXTS.contact.form.subjects.general[language]}
                                                </option>
                                                <option value={TEXTS.contact.form.subjects.publishing[language]}>
                                                    {TEXTS.contact.form.subjects.publishing[language]}
                                                </option>
                                                <option value={TEXTS.contact.form.subjects.bulk[language]}>
                                                    {TEXTS.contact.form.subjects.bulk[language]}
                                                </option>
                                                <option value={TEXTS.contact.form.subjects.rights[language]}>
                                                    {TEXTS.contact.form.subjects.rights[language]}
                                                </option>
                                                <option value={TEXTS.contact.form.subjects.partnership[language]}>
                                                    {TEXTS.contact.form.subjects.partnership[language]}
                                                </option>
                                                <option value={TEXTS.contact.form.subjects.other[language]}>
                                                    {TEXTS.contact.form.subjects.other[language]}
                                                </option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-400">
                                                <ChevronDown className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {TEXTS.contact.form.messageLabel[language]} *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-shadow shadow-sm"
                                            placeholder={TEXTS.contact.form.messagePlaceholder[language]}
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                                        >
                                            <Send className="h-5 w-5 mr-3" />
                                            {TEXTS.contact.form.submitButton[language]}
                                        </button>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-md p-4 mt-2">
                                        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                            {TEXTS.contact.form.mailtoDisclaimer[language]}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                    {TEXTS.contact.info.title[language]}
                                </h3>

                                <div className="space-y-6">
                                    {/* General Email */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">
                                                {TEXTS.contact.info.generalEmail.title[language]}
                                            </h4>
                                            <a href={`mailto:${COMPANY.emails.general}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                {COMPANY.emails.general}
                                            </a>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {TEXTS.contact.info.generalEmail.description[language]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                    {TEXTS.contact.info.registeredOffice.title[language]}
                                </h3>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <Building2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300">{COMPANY.registeredOffice[language]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 