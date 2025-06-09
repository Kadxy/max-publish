import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MAX PUBLISHING SRL | Strategic Publishing Solutions',
    description: 'MAX PUBLISHING SRL: Delivering specialized publishing services, bulk fulfillment, and rights management for businesses and institutions.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <LanguageProvider>
                    <ThemeProvider>
                        <div className="min-h-screen flex flex-col">
                            <Header />
                            <main className="flex-1 pt-16">
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    )
} 