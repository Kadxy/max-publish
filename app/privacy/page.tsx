'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'

export default function PrivacyPage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Page Header */}
            <section className="bg-gray-50 dark:bg-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
                        {TEXTS.privacy.title[language]}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p className="text-gray-600 dark:text-gray-300">
                            {TEXTS.privacy.content[language]}
                        </p>

                        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                {language === 'en'
                                    ? 'Note: This is a placeholder privacy policy. Please consult with legal counsel to create a comprehensive privacy policy that complies with GDPR and other applicable regulations.'
                                    : 'Nota: Questa è una politica sulla privacy segnaposto. Si prega di consultare un consulente legale per creare una politica sulla privacy completa che sia conforme al GDPR e ad altre normative applicabili.'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 