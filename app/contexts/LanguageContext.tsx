'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, LocalizedText } from '../types'

interface LanguageContextType {
    language: Language
    changeLanguage: (language: Language) => void
    t: (text: LocalizedText | string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'it')) {
            setLanguage(savedLanguage)
        }
    }, [])

    const changeLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage)
        localStorage.setItem('language', newLanguage)
    }

    const t = (text: LocalizedText | string): string => {
        if (typeof text === 'string') return text
        return text[language] || text.en
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
} 