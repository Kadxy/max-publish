'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Theme } from '@/lib/constants'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('system')

    useEffect(() => {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme') as Theme
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
            setTheme(savedTheme)
        }
    }, [])

    useEffect(() => {
        // Apply theme to document
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }

        // Save theme to localStorage
        localStorage.setItem('theme', theme)
    }, [theme])

    // Listen for system theme changes
    useEffect(() => {
        if (theme !== 'system') return

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            const root = window.document.documentElement
            root.classList.remove('light', 'dark')
            root.classList.add(mediaQuery.matches ? 'dark' : 'light')
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
} 