export type Language = 'en' | 'it'

export type Theme = 'light' | 'dark' | 'system'

export type LocalizedText = {
  en: string
  it: string
}

export type Book = {
  id: string
  title: LocalizedText
  author: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  description: LocalizedText
  isNew?: boolean
  isBestseller?: boolean
}

export type Category = {
  id: string
  name: LocalizedText
  count: number
  color: string
}

export type Review = {
  id: string
  name: string
  rating: number
  comment: LocalizedText
  date: string
}

export type NavigationItem = {
  label: LocalizedText
  href: string
  isActive?: boolean
} 