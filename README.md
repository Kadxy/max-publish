# Book Web Template

A modern, bilingual (English/Italian) online bookstore template built with
Next.js 14, TypeScript, and Tailwind CSS. Perfect for creating professional
book retail websites with dark mode support and responsive design.

## Features

- 🌐 **Bilingual template** (English/Italian) with real-time language switching
- 🌙 **Dark/Light/System mode** with automatic theme detection
- 📚 **Professional design** inspired by leading Italian bookstores
- 🛒 **Complete book catalog** with ratings, reviews, and carousel showcase
- 👥 **Author profiles section** with bio and publication counts
- 📱 **Fully responsive** mobile-first interface design
- ⚡ **Next.js 14** with App Router and TypeScript for type safety
- 🎨 **Tailwind CSS** utility-first styling system
- 🚀 **Production ready** for Vercel deployment
- 📦 **Easy customization** through centralized constants

## Company Information

### Max Publishing SRL

- Address: Via Camillo Benso Cavour 50/D, 20056 Bologna
- Email: <maxpublishingsrl@pec.it>
- Registration: MI-2555363
- VAT: 10750550963

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

1. Clone this template

```bash
git clone https://github.com/Kadxy/book-web.git
cd book-web
```

1. Install dependencies

```bash
npm install
```

1. Start development server

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) to view your bookstore

### Customization

After installation, customize the template by:

- Edit `lib/constants.ts` to add your books, company info, and translations
- Replace images in `public/images/` with your own book covers and branding
- Modify colors and styling in `tailwind.config.js`
- Update company information in the footer and about sections

## Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Manual Deploy

1. Build the project

```bash
npm run build
```

1. The `out` folder contains the static files ready for deployment

1. Deploy to Vercel:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a Next.js project
   - Deploy with default settings

## Project Structure

```text
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

Language switching is available in the header. All text content is stored in
`lib/constants.ts` for easy management.

### Theme Support

Three theme modes are available:

- **Light mode** - Classic bright interface
- **Dark mode** - Modern dark interface for better night reading
- **System mode** - Automatically adapts to device preference

Theme switching is available in the header next to language options. The
selected theme is saved in localStorage.

## Advanced Customization

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
