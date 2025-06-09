'use client'

import Link from 'next/link'
import { useLanguage } from './contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'
import { BookOpen, Users, Globe, TrendingUp, Award, Briefcase, ChevronRight, FileText, Package, Key, ArrowRight } from 'lucide-react'

export default function Home() {
    const { language } = useLanguage()

    const services = [
        {
            icon: BookOpen,
            title: TEXTS.services.publishing.titleShort[language],
            description: TEXTS.services.publishing.descriptionShort[language],
            href: '/services#publishing'
        },
        {
            icon: Package,
            title: TEXTS.services.bulkSales.titleShort[language],
            description: TEXTS.services.bulkSales.descriptionShort[language],
            href: '/services#bulk-sales'
        },
        {
            icon: Key,
            title: TEXTS.services.rightsLicensing.titleShort[language],
            description: TEXTS.services.rightsLicensing.descriptionShort[language],
            href: '/services#rights-licensing'
        }
    ]

    const features = [
        { icon: Award, text: TEXTS.home.whyChooseUs.points[0][language] },
        { icon: Users, text: TEXTS.home.whyChooseUs.points[1][language] },
        { icon: TrendingUp, text: TEXTS.home.whyChooseUs.points[2][language] },
        { icon: Globe, text: TEXTS.home.whyChooseUs.points[3][language] }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 whitespace-nowrap">
                            {TEXTS.home.hero.title[language]}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            {TEXTS.home.hero.tagline[language]}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
                            >
                                {TEXTS.home.hero.cta.exploreServices.text[language]}
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {TEXTS.services.main.headerTitle[language]}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {TEXTS.services.main.introText[language]}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="mb-4">
                                    <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                                    {TEXTS.common.learnMore[language]}
                                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {TEXTS.home.whyChooseUs.title[language]}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-blue-600 dark:bg-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {language === 'en' ? 'Ready to Start Your Publishing Project?' : 'Pronto per Iniziare il Tuo Progetto Editoriale?'}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Contact our team today to discuss how we can help bring your publishing vision to life.'
                            : 'Contatta il nostro team oggi per discutere come possiamo aiutarti a realizzare la tua visione editoriale.'
                        }
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
                    >
                        {TEXTS.common.getQuote[language]}
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </>
    )
} 