import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS } from '../../lib/constants'
import { Book, Mail, MapPin } from 'lucide-react'

type FooterProps = {
    onNavigate: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
    const { t } = useLanguage()

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-4xl mx-auto px-4 py-12">
                <div className="text-center">
                    {/* Logo and brand */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-blue-600 p-3 rounded-xl mr-4">
                            <Book className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white">{TEXTS.company.name}</h2>
                            <p className="text-blue-300 text-sm">{t(TEXTS.footer.company_info)}</p>
                        </div>
                    </div>

                    {/* Company description */}
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                        {t(TEXTS.footer.company_desc)}
                    </p>

                    {/* Company details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center md:justify-end">
                            <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                            <div className="text-left">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {TEXTS.company.address}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                            <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                            <div className="text-left">
                                <p className="text-gray-300 text-sm">{TEXTS.company.email}</p>
                                <p className="text-gray-400 text-xs">VAT: {TEXTS.company.vat}</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700/50 pt-6">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} {TEXTS.company.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 