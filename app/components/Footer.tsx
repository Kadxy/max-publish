'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS, COMPANY } from '@/lib/constants'
import { Mail, MapPin, Building2, FileText } from 'lucide-react'

export default function Footer() {
    const { language } = useLanguage()

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{COMPANY.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {COMPANY.legalForm[language]}
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start space-x-2">
                                <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">{TEXTS.footer.registeredOffice[language]}</p>
                                    <p>{COMPANY.registeredOffice[language]}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FileText className="h-4 w-4 flex-shrink-0" />
                                <p>{TEXTS.footer.vatNumber[language]}: {COMPANY.vatNumber}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FileText className="h-4 w-4 flex-shrink-0" />
                                <p>{TEXTS.footer.reaNumber[language]}: {COMPANY.reaNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{TEXTS.nav.services[language]}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services#publishing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {TEXTS.services.publishing.titleShort[language]}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#bulk-sales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {TEXTS.services.bulkSales.titleShort[language]}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#rights-licensing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {TEXTS.services.rightsLicensing.titleShort[language]}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{TEXTS.contact.info.title[language]}</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <a href={`mailto:${COMPANY.emails.general}`} className="text-muted-foreground hover:text-primary transition-colors">
                                    {COMPANY.emails.general}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            {TEXTS.footer.copyright[language]}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}