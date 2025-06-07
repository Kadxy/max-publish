import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS } from '../../lib/constants'

type FooterProps = {
    onNavigate: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
    const { t } = useLanguage()

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center">
                    {/* Company Info */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">
                            {t(TEXTS.footer.company_info)}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
                            {t(TEXTS.footer.company_desc)}
                        </p>
                        <div className="space-y-1 text-sm text-gray-400">
                            <p><strong className="text-white">{TEXTS.company.name}</strong></p>
                            <p>{TEXTS.company.address}</p>
                            <p>Email: {TEXTS.company.email}</p>
                            <p>VAT: {TEXTS.company.vat}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} {TEXTS.company.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 