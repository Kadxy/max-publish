import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Max Publishing - Online Bookstore | Libreria Online',
    description: 'Discover the best books, novels, and literature. Find your next great read at Max Publishing bookstore. | Scopri i migliori libri, romanzi e letteratura. Trova la tua prossima grande lettura da Max Publishing.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
} 