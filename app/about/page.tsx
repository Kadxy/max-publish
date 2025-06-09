'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'
import { Target, Eye, Building, Users } from 'lucide-react'

export default function AboutPage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Page Header */}
            <section className="bg-gray-50 dark:bg-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
                        {TEXTS.about.headerTitle[language]}
                    </h1>
                </div>
            </section>

            {/* Company Profile */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            {TEXTS.about.profile.title[language]}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            {TEXTS.about.profile.content[language]}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {TEXTS.about.mission.title[language]}
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                {TEXTS.about.mission.content[language]}
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {TEXTS.about.vision.title[language]}
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                {TEXTS.about.vision.content[language]}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B Expertise */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Building className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {TEXTS.about.b2bExpertise.title[language]}
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
                        {TEXTS.about.b2bExpertise.content[language]}
                    </p>
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-16 bg-blue-600 dark:bg-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">5+</div>
                            <div className="text-blue-100">
                                {language === 'en' ? 'Years of Experience' : 'Anni di Esperienza'}
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">100+</div>
                            <div className="text-blue-100">
                                {language === 'en' ? 'Projects Completed' : 'Progetti Completati'}
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">50+</div>
                            <div className="text-blue-100">
                                {language === 'en' ? 'Corporate Clients' : 'Clienti Aziendali'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        {language === 'en'
                            ? 'Let\'s Work Together'
                            : 'Lavoriamo Insieme'
                        }
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {language === 'en'
                            ? 'Discover how MAX PUBLISHING SRL can help your organization achieve its publishing goals.'
                            : 'Scopri come MAX PUBLISHING SRL può aiutare la tua organizzazione a raggiungere i suoi obiettivi editoriali.'
                        }
                    </p>
                    <a
                        href={`mailto:${COMPANY.emails.general}`}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        {TEXTS.nav.contactUs[language]}
                    </a>
                </div>
            </section>
        </div>
    )
} 