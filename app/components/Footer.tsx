import { useLanguage } from '../contexts/LanguageContext'
import { TEXTS } from '../../lib/constants'
import { Book, Mail, MapPin } from 'lucide-react'

type FooterProps = {
    onNavigate: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
    const { t } = useLanguage()

    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Brand */}
                    <div className="flex items-center space-x-3">
                        <Book className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-semibold">{TEXTS.company.name}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 max-w-md">
                        {t(TEXTS.footer.company_desc)}
                    </p>

                    {/* Company info */}
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-gray-500">
                        <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Bologna, Italy
                        </span>
                        <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {TEXTS.company.email}
                        </span>
                        <span>VAT: {TEXTS.company.vat}</span>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 pt-4 w-full">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} {TEXTS.company.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 