'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'
import {
    BookOpen,
    Package,
    Key,
    ArrowRight,
    CheckCircle,
    FileText,
    Users,
    Globe,
    Zap,
    Shield,
    BarChart,
    Palette,
    Languages,
    PenTool,
    BookMarked,
    Building,
    GraduationCap,
    ShoppingCart,
    Copyright,
    FileSignature,
    Globe2,
    Film
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ServicesPage() {
    const { language } = useLanguage()
    const [activeService, setActiveService] = useState<string | null>(null)

    const services = [
        {
            id: 'publishing',
            icon: BookOpen,
            title: TEXTS.services.publishing.title[language],
            description: TEXTS.services.publishing.introText[language],
            color: 'blue',
            gradient: 'from-blue-500 to-blue-600',
            lightGradient: 'from-blue-50 to-blue-100',
            darkGradient: 'dark:from-blue-900/30 dark:to-blue-800/30',
            subServices: [
                {
                    icon: Palette,
                    title: TEXTS.services.publishing.subServices.custom.title[language],
                    description: TEXTS.services.publishing.subServices.custom.description[language],
                    features: [
                        language === 'en' ? 'Corporate histories and anniversary publications' : 'Storie aziendali e pubblicazioni commemorative',
                        language === 'en' ? 'Annual reports with creative design' : 'Relazioni annuali con design creativo',
                        language === 'en' ? 'Brand books and style guides' : 'Brand book e guide di stile',
                        language === 'en' ? 'Custom magazines and newsletters' : 'Riviste e newsletter personalizzate'
                    ]
                },
                {
                    icon: PenTool,
                    title: TEXTS.services.publishing.subServices.editorialProduction.title[language],
                    description: TEXTS.services.publishing.subServices.editorialProduction.description[language],
                    features: [
                        language === 'en' ? 'Professional manuscript evaluation' : 'Valutazione professionale del manoscritto',
                        language === 'en' ? 'Developmental and structural editing' : 'Editing di sviluppo e strutturale',
                        language === 'en' ? 'Copyediting and proofreading' : 'Copyediting e correzione di bozze',
                        language === 'en' ? 'Print and digital production' : 'Produzione stampa e digitale'
                    ]
                },
                {
                    icon: Languages,
                    title: TEXTS.services.publishing.subServices.translation.title[language],
                    description: TEXTS.services.publishing.subServices.translation.description[language],
                    features: [
                        language === 'en' ? 'Native speaker translators' : 'Traduttori madrelingua',
                        language === 'en' ? 'Cultural adaptation and localization' : 'Adattamento culturale e localizzazione',
                        language === 'en' ? 'Technical and specialized translations' : 'Traduzioni tecniche e specializzate',
                        language === 'en' ? 'Multi-language project management' : 'Gestione progetti multilingue'
                    ]
                },
                {
                    icon: BookMarked,
                    title: TEXTS.services.publishing.subServices.contentDev.title[language],
                    description: TEXTS.services.publishing.subServices.contentDev.description[language],
                    features: [
                        language === 'en' ? 'Training and educational materials' : 'Materiali formativi ed educativi',
                        language === 'en' ? 'Technical documentation and manuals' : 'Documentazione tecnica e manuali',
                        language === 'en' ? 'Marketing and promotional content' : 'Contenuti marketing e promozionali',
                        language === 'en' ? 'Thought leadership publications' : 'Pubblicazioni di thought leadership'
                    ]
                }
            ],
            stats: [
                { value: '500+', label: language === 'en' ? 'Projects Completed' : 'Progetti Completati' },
                { value: '50+', label: language === 'en' ? 'Languages Supported' : 'Lingue Supportate' },
                { value: '98%', label: language === 'en' ? 'Client Satisfaction' : 'Soddisfazione Clienti' }
            ],
            cta: TEXTS.services.publishing.cta
        },
        {
            id: 'bulk-sales',
            icon: Package,
            title: TEXTS.services.bulkSales.title[language],
            description: TEXTS.services.bulkSales.introText[language],
            color: 'green',
            gradient: 'from-green-500 to-green-600',
            lightGradient: 'from-green-50 to-green-100',
            darkGradient: 'dark:from-green-900/30 dark:to-green-800/30',
            subServices: [
                {
                    icon: Building,
                    title: language === 'en' ? 'Corporate Solutions' : 'Soluzioni Aziendali',
                    description: language === 'en'
                        ? 'Tailored book purchasing programs for businesses of all sizes'
                        : 'Programmi di acquisto libri su misura per aziende di tutte le dimensioni',
                    features: [
                        language === 'en' ? 'Employee training libraries' : 'Biblioteche per formazione dipendenti',
                        language === 'en' ? 'Corporate gift programs' : 'Programmi regalo aziendali',
                        language === 'en' ? 'Conference and event materials' : 'Materiali per conferenze ed eventi',
                        language === 'en' ? 'Custom branded editions' : 'Edizioni personalizzate con brand'
                    ]
                },
                {
                    icon: GraduationCap,
                    title: language === 'en' ? 'Educational Institutions' : 'Istituzioni Educative',
                    description: language === 'en'
                        ? 'Comprehensive solutions for schools, universities, and libraries'
                        : 'Soluzioni complete per scuole, università e biblioteche',
                    features: [
                        language === 'en' ? 'Textbook procurement programs' : 'Programmi di approvvigionamento libri di testo',
                        language === 'en' ? 'Library collection development' : 'Sviluppo collezioni bibliotecarie',
                        language === 'en' ? 'Digital resource licensing' : 'Licenze per risorse digitali',
                        language === 'en' ? 'Academic discounts' : 'Sconti accademici'
                    ]
                },
                {
                    icon: ShoppingCart,
                    title: language === 'en' ? 'Retail Partners' : 'Partner Retail',
                    description: language === 'en'
                        ? 'Wholesale programs for bookstores and retailers'
                        : 'Programmi all\'ingrosso per librerie e rivenditori',
                    features: [
                        language === 'en' ? 'Competitive wholesale pricing' : 'Prezzi all\'ingrosso competitivi',
                        language === 'en' ? 'Flexible return policies' : 'Politiche di reso flessibili',
                        language === 'en' ? 'Marketing support materials' : 'Materiali di supporto marketing',
                        language === 'en' ? 'Drop-shipping options' : 'Opzioni di drop-shipping'
                    ]
                }
            ],
            benefits: TEXTS.services.bulkSales.benefits.points.map((point, idx) => ({
                icon: idx === 0 ? BarChart : idx === 1 ? Users : idx === 2 ? Zap : Shield,
                text: point[language]
            })),
            stats: [
                { value: '1M+', label: language === 'en' ? 'Books Delivered' : 'Libri Consegnati' },
                { value: '200+', label: language === 'en' ? 'Corporate Clients' : 'Clienti Aziendali' },
                { value: '24h', label: language === 'en' ? 'Quote Response' : 'Risposta Preventivi' }
            ],
            cta: TEXTS.services.bulkSales.cta
        },
        {
            id: 'rights-licensing',
            icon: Key,
            title: TEXTS.services.rightsLicensing.title[language],
            description: TEXTS.services.rightsLicensing.introText[language],
            color: 'purple',
            gradient: 'from-purple-500 to-purple-600',
            lightGradient: 'from-purple-50 to-purple-100',
            darkGradient: 'dark:from-purple-900/30 dark:to-purple-800/30',
            subServices: [
                {
                    icon: Globe2,
                    title: TEXTS.services.rightsLicensing.subServices.translation.title[language],
                    description: TEXTS.services.rightsLicensing.subServices.translation.description[language],
                    features: [
                        language === 'en' ? 'Global rights management' : 'Gestione diritti globali',
                        language === 'en' ? 'Publisher network in 50+ countries' : 'Network editori in 50+ paesi',
                        language === 'en' ? 'Translation quality assurance' : 'Garanzia qualità traduzioni',
                        language === 'en' ? 'Rights tracking and reporting' : 'Tracciamento e reportistica diritti'
                    ]
                },
                {
                    icon: Copyright,
                    title: TEXTS.services.rightsLicensing.subServices.reprint.title[language],
                    description: TEXTS.services.rightsLicensing.subServices.reprint.description[language],
                    features: [
                        language === 'en' ? 'Academic and educational use' : 'Uso accademico ed educativo',
                        language === 'en' ? 'Anthology and collection rights' : 'Diritti per antologie e collezioni',
                        language === 'en' ? 'Excerpt permissions' : 'Permessi per estratti',
                        language === 'en' ? 'Quick clearance process' : 'Processo di autorizzazione rapido'
                    ]
                },
                {
                    icon: FileSignature,
                    title: TEXTS.services.rightsLicensing.subServices.digital.title[language],
                    description: TEXTS.services.rightsLicensing.subServices.digital.description[language],
                    features: [
                        language === 'en' ? 'E-book distribution rights' : 'Diritti distribuzione e-book',
                        language === 'en' ? 'Audiobook production licensing' : 'Licenze produzione audiolibri',
                        language === 'en' ? 'Digital library agreements' : 'Accordi biblioteche digitali',
                        language === 'en' ? 'Subscription service deals' : 'Accordi servizi in abbonamento'
                    ]
                },
                {
                    icon: Film,
                    title: TEXTS.services.rightsLicensing.subServices.adaptation.title[language],
                    description: TEXTS.services.rightsLicensing.subServices.adaptation.description[language],
                    features: [
                        language === 'en' ? 'Film and TV rights negotiation' : 'Negoziazione diritti film e TV',
                        language === 'en' ? 'Theater adaptation licenses' : 'Licenze adattamento teatrale',
                        language === 'en' ? 'Podcast and audio drama rights' : 'Diritti podcast e audio drama',
                        language === 'en' ? 'Gaming and interactive media' : 'Gaming e media interattivi'
                    ]
                }
            ],
            stats: [
                { value: '30+', label: language === 'en' ? 'Years Experience' : 'Anni di Esperienza' },
                { value: '5000+', label: language === 'en' ? 'Rights Managed' : 'Diritti Gestiti' },
                { value: '95%', label: language === 'en' ? 'Deal Success Rate' : 'Tasso Successo Accordi' }
            ],
            cta: TEXTS.services.rightsLicensing.cta
        }
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
                            {TEXTS.services.main.headerTitle[language]}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fade-in animation-delay-100">
                            {TEXTS.services.main.introText[language]}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detailed Sections */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`mb-32 scroll-mt-20 ${index !== 0 ? 'mt-32' : ''}`}
                        >
                            {/* Service Header */}
                            <div className="relative mb-16">
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 blur-3xl`}></div>
                                <div className="relative text-center">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-xl`}>
                                        <service.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Sub-services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {service.subServices.map((subService, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                                        onMouseEnter={() => setActiveService(`${service.id}-${idx}`)}
                                        onMouseLeave={() => setActiveService(null)}
                                    >
                                        {/* Background decoration */}
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.lightGradient} ${service.darkGradient} opacity-50 blur-3xl transition-all duration-500 ${activeService === `${service.id}-${idx}` ? 'scale-150' : 'scale-100'
                                            }`}></div>

                                        {/* Content */}
                                        <div className="relative">
                                            <div className="flex items-start mb-4">
                                                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.lightGradient} ${service.darkGradient} mr-4`}>
                                                    <subService.icon className={`h-6 w-6 text-${service.color}-600 dark:text-${service.color}-400`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                        {subService.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                                        {subService.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <ul className="space-y-2">
                                                {subService.features.map((feature, featureIdx) => (
                                                    <li key={featureIdx} className="flex items-start">
                                                        <CheckCircle className={`h-5 w-5 text-${service.color}-600 dark:text-${service.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Benefits/Stats Section */}
                            {service.benefits ? (
                                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                                        {TEXTS.services.bulkSales.benefits.title[language]}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {service.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <div className={`p-2 rounded-lg bg-${service.color}-100 dark:bg-${service.color}-900/20 mr-3`}>
                                                    <benefit.icon className={`h-5 w-5 text-${service.color}-600 dark:text-${service.color}-400`} />
                                                </div>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">{benefit.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mb-12">
                                {service.stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className={`text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="text-center">
                                <a
                                    href={`mailto:${COMPANY.emails.general}?subject=${encodeURIComponent(service.cta.emailSubject[language])}`}
                                    className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                                >
                                    {service.cta.text[language]}
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        {language === 'en'
                            ? 'Ready to Transform Your Publishing Vision into Reality?'
                            : 'Pronto a Trasformare la Tua Visione Editoriale in Realtà?'
                        }
                    </h2>
                    <p className="text-xl mb-8 text-gray-300">
                        {language === 'en'
                            ? 'Our team of experts is standing by to help you navigate the world of professional publishing. Let\'s create something extraordinary together.'
                            : 'Il nostro team di esperti è pronto ad aiutarti a navigare nel mondo dell\'editoria professionale. Creiamo insieme qualcosa di straordinario.'
                        }
                    </p>
                </div>
            </section>
        </div>
    )
} 