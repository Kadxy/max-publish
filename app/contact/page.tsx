'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'
import { Mail, MapPin, Building2, FileText, Phone, Send } from 'lucide-react'

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

        // Construct email body
        const emailBody = `
${language === 'en' ? 'Name' : 'Nome'}: ${formData.name}
${language === 'en' ? 'Email' : 'Email'}: ${formData.email}
${language === 'en' ? 'Company' : 'Azienda'}: ${formData.company}
${language === 'en' ? 'Subject' : 'Oggetto'}: ${formData.subject}

${language === 'en' ? 'Message' : 'Messaggio'}:
${formData.message}
    `.trim()

        // Create mailto link
        const mailtoLink = `mailto:${COMPANY.emails.general}?subject=${encodeURIComponent(formData.subject || TEXTS.contact.form.emailSubject[language])}&body=${encodeURIComponent(emailBody)}`

        // Open email client
        window.location.href = mailtoLink
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Page Header */}
            <section className="bg-gray-50 dark:bg-gray-800 py-12">
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
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                    {TEXTS.contact.form.title[language]}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                {TEXTS.contact.form.nameLabel[language]} *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                                placeholder={TEXTS.contact.form.namePlaceholder[language]}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                {TEXTS.contact.form.emailLabel[language]} *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                                placeholder={TEXTS.contact.form.emailPlaceholder[language]}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {TEXTS.contact.form.companyLabel[language]}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                            placeholder={TEXTS.contact.form.companyPlaceholder[language]}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {TEXTS.contact.form.subjectLabel[language]} *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                        >
                                            <option value="">{TEXTS.contact.form.selectSubject[language]}</option>
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
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {TEXTS.contact.form.messageLabel[language]} *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                            placeholder={TEXTS.contact.form.messagePlaceholder[language]}
                                        />
                                    </div>

                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
                                        <p className="text-sm text-blue-800 dark:text-blue-200">
                                            {TEXTS.contact.form.mailtoDisclaimer[language]}
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                    >
                                        <Send className="h-5 w-5 mr-2" />
                                        {TEXTS.contact.form.submitButton[language]}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {TEXTS.contact.info.title[language]}
                                </h3>

                                <div className="space-y-6">
                                    {/* General Email */}
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                            <Mail className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                                            {TEXTS.contact.info.generalEmail.title[language]}
                                        </h4>
                                        <a href={`mailto:${COMPANY.emails.general}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                            {COMPANY.emails.general}
                                        </a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {TEXTS.contact.info.generalEmail.description[language]}
                                        </p>
                                    </div>

                                    {/* Quotes Email */}
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                            <FileText className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                                            {TEXTS.contact.info.quotesEmail.title[language]}
                                        </h4>
                                        <a href={`mailto:${COMPANY.emails.quotes}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                            {COMPANY.emails.quotes}
                                        </a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {TEXTS.contact.info.quotesEmail.description[language]}
                                        </p>
                                    </div>

                                    {/* PEC Email */}
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                            <Mail className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                                            {TEXTS.contact.info.pecEmail.title[language]}
                                        </h4>
                                        <a href={`mailto:${COMPANY.pecEmail}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                            {COMPANY.pecEmail}
                                        </a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {TEXTS.contact.info.pecEmail.description[language]}
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    {COMPANY.phone && (
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                                <Phone className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                                                {language === 'en' ? 'Phone' : 'Telefono'}
                                            </h4>
                                            <p className="text-gray-700 dark:text-gray-300">{COMPANY.phone}</p>
                                        </div>
                                    )}

                                    {/* Registered Office */}
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                            <Building2 className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                                            {TEXTS.contact.info.registeredOffice.title[language]}
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {COMPANY.registeredOffice[language]}
                                        </p>
                                    </div>

                                    {/* Operational Office */}
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                            <MapPin className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                                            {TEXTS.contact.info.operationalOffice.title[language]}
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {COMPANY.operationalOffice[language]}
                                        </p>
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