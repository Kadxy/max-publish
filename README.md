# Max Publishing - Modern Bookstore Website

A modern, bilingual (English/Italian) bookstore website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Bilingual Support**: Full English and Italian language support
- **Dark/Light Theme**: System-aware theme switching with manual override
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Navigation**: Smooth navigation between different sections
- **Book Management**: Browse books, view details, filter by categories
- **Modern UI**: Clean, professional design with smooth animations
- **Component-Based Architecture**: Well-organized, reusable components

## 📁 Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header with theme/language switching
│   ├── Footer.tsx       # Site footer with links and company info
│   ├── BookCard.tsx     # Individual book display component
│   └── pages/           # Page components
│       ├── HomePage.tsx      # Landing page with hero, categories, featured books
│       ├── BooksPage.tsx     # Book listing with filters and search
│       ├── CategoriesPage.tsx # Category browsing page
│       ├── BookDetailPage.tsx # Individual book details
│       ├── AboutPage.tsx     # Company information
│       └── ContactPage.tsx   # Contact form and information
├── hooks/               # Custom React hooks
│   ├── useLanguage.ts   # Language management
│   └── useTheme.ts      # Theme management
├── types/               # TypeScript type definitions
│   └── index.ts         # Core types (Book, Language, etc.)
├── page.tsx             # Main app component with routing logic
├── layout.tsx           # Root layout
└── globals.css          # Global styles

lib/
└── constants.ts         # Text content, book data, and configuration
```

## 🎯 Key Improvements Made

### 1. **Modular Architecture**
- Broke down the monolithic 800-line `page.tsx` into focused, reusable components
- Each page is now a separate component with clear responsibilities
- Shared components (Header, Footer, BookCard) are reusable across pages

### 2. **Enhanced Navigation**
- All navigation buttons are now functional with proper state management
- Smooth transitions between different sections (Home, Books, Categories, About, Contact)
- Book detail pages with back navigation
- Active section highlighting in navigation

### 3. **Interactive Features**
- **Book Browsing**: Click any book to view detailed information
- **Category Navigation**: Browse books by category with visual feedback
- **Search Functionality**: Search interface (ready for backend integration)
- **Shopping Cart**: Cart interface (ready for e-commerce integration)
- **Contact Forms**: Working contact form with validation and feedback

### 4. **Improved User Experience**
- **Theme Switching**: Light/Dark/System theme options with persistence
- **Language Toggle**: Seamless English/Italian switching
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Loading States**: Visual feedback for form submissions and interactions
- **Error Handling**: Graceful fallbacks for missing images and data

### 5. **Developer Experience**
- **TypeScript**: Full type safety with custom type definitions
- **Custom Hooks**: Reusable logic for language and theme management
- **Clean Code**: Well-organized, commented, and maintainable codebase
- **Performance**: Optimized bundle size and loading times

## 🛠 Available Pages & Features

### 🏠 **Home Page**
- Hero section with call-to-action buttons
- Category overview with interactive cards
- Featured books carousel
- Newsletter subscription

### 📚 **Books Page**
- Complete book catalog with grid/list view toggle
- Advanced filtering by category and price range
- Sorting options (title, author, price, rating)
- Search functionality

### 🏷 **Categories Page**
- Visual category browser
- Books grouped by category
- Quick navigation to full book listings

### 📖 **Book Detail Page**
- Full book information with large cover image
- Add to cart and wishlist functionality
- Related books suggestions
- Social sharing options

### ℹ️ **About Page**
- Company story and mission
- Team member profiles
- Statistics and achievements
- Company contact information

### 📞 **Contact Page**
- Contact form with validation
- Company contact details
- Business hours and location
- FAQ section

## 🌐 Internationalization

The website supports both English and Italian with:
- Complete UI translation
- Localized book titles and descriptions
- Cultural adaptations for Italian market
- Persistent language preference

## 🎨 Design System

- **Colors**: Blue primary with purple accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's scale
- **Components**: Reusable design patterns
- **Dark Mode**: Comprehensive dark theme support

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 🔧 Customization

### Adding New Books
Edit `lib/constants.ts` and add books to the `sampleBooks` array:

```typescript
{
  id: 'unique-id',
  title: { en: 'English Title', it: 'Titolo Italiano' },
  author: 'Author Name',
  price: 19.99,
  originalPrice: 24.99, // optional
  image: 'https://example.com/cover.jpg',
  category: 'Fiction',
  rating: 4.5,
  reviews: 1234,
  description: { en: 'English description', it: 'Descrizione italiana' }
}
```

### Adding New Languages
1. Update the `Language` type in `app/types/index.ts`
2. Add translations to `lib/constants.ts`
3. Update the language selector in `Header.tsx`

### Customizing Themes
Modify the theme logic in `app/hooks/useTheme.ts` and update CSS classes in components.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔮 Future Enhancements

- Backend integration for real book data
- User authentication and profiles
- Shopping cart and checkout process
- Book reviews and ratings system
- Advanced search with filters
- Wishlist management
- Order tracking
- Admin panel for content management

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
