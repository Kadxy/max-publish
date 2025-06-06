# Max Publishing - Online Bookstore

A modern, bilingual (English/Italian) online bookstore built with Next.js and Tailwind CSS.

## Features

- 🌐 **Bilingual support** (English/Italian) with real-time language switching
- 🌙 **Dark/Light mode** with system preference detection
- 📚 **Modern, responsive design** inspired by top Italian bookstores
- 🛒 **Enhanced book catalog** with ratings, reviews, and 8 books showcase
- 👥 **Featured authors section** with author profiles
- ⭐ **Customer reviews** with star ratings
- 📱 **Mobile-first interface** with touch-friendly navigation
- ⚡ **Fast static site generation** optimized for performance
- 🚀 **Ready for Vercel deployment** with one-click setup

## Company Information

**Max Publishing SRL**

- Address: Via Camillo Benso Cavour 50/D, 20056 Bologna
- Email: <maxpublishingsrl@pec.it>
- Registration: MI-2555363
- VAT: 10750550963

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd book-web
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Manual Deploy

1. Build the project

```bash
npm run build
```

2. The `out` folder contains the static files ready for deployment

3. Deploy to Vercel:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a Next.js project
   - Deploy with default settings

## Project Structure

```
book-web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── constants.ts
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vercel** - Deployment platform

## Languages & Themes

### Language Support
The website supports two languages:

- **English** (EN)
- **Italian** (IT)

Language switching is available in the header. All text content is stored in `lib/constants.ts` for easy management.

### Theme Support
Three theme modes are available:
- **Light mode** - Classic bright interface
- **Dark mode** - Modern dark interface for better night reading
- **System mode** - Automatically adapts to device preference

Theme switching is available in the header next to language options. The selected theme is saved in localStorage.

## Customization

### Adding New Books

Edit the `sampleBooks` array in `lib/constants.ts`:

```typescript
{
  id: 5,
  title: { en: 'Book Title', it: 'Titolo del Libro' },
  author: 'Author Name',
  price: 19.99,
  category: 'fiction',
  cover: '/path/to/cover.jpg',
  description: { 
    en: 'English description', 
    it: 'Descrizione italiana' 
  }
}
```

### Adding New Categories

Add new category translations in `lib/constants.ts` under `categories` section.

### Styling

The project uses Tailwind CSS. You can customize the design by:

- Editing `tailwind.config.js` for theme customization
- Modifying components in `app/page.tsx`
- Adding custom CSS in `app/globals.css`

## License

© 2024 Max Publishing SRL. All rights reserved.
