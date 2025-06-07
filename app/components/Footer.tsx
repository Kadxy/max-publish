import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS } from '../../lib/constants'

type FooterProps = {
    onNavigate: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
    const { t } = useLanguage()

    const navigationLinks = [
        { id: 'home', label: TEXTS.nav.home },
        { id: 'books', label: TEXTS.nav.books },
        { id: 'categories', label: TEXTS.nav.categories },
        { id: 'about', label: TEXTS.nav.about },
        { id: 'contact', label: TEXTS.nav.contact }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">
                            {t(TEXTS.footer.company_info)}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            {t(TEXTS.footer.company_desc)}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p><strong>{TEXTS.company.name}</strong></p>
                            <p>{TEXTS.company.address}</p>
                            <p>Email: {TEXTS.company.email}</p>
                            <p>VAT: {TEXTS.company.vat}</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t(TEXTS.footer.quick_links)}
                        </h3>
                        <div className="space-y-3">
                            {navigationLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => onNavigate(link.id)}
                                    className="block text-gray-300 hover:text-white transition-colors text-left hover:translate-x-1 transform transition-all duration-200"
                                >
                                    {t(link.label)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {TEXTS.company.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 