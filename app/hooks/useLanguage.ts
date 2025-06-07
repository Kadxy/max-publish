import { useState, useEffect } from 'react'
import { Language, LocalizedText } from '../types'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
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

  return {
    language,
    changeLanguage,
    t
  }
} 