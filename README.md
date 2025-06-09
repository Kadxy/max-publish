# MAX PUBLISHING SRL Official Website

A professional B2B publishing company website built with Next.js, featuring bilingual support (English/Italian) and a modern, responsive design.

## Overview

MAX PUBLISHING SRL is a strategic publishing partner for businesses and institutions, offering specialized publishing services, bulk fulfillment, and rights management solutions. This website serves as the company's digital presence and primary contact point for potential B2B clients.

## Features

- **Bilingual Support**: Full English and Italian language support with seamless switching
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Dark Mode**: System-aware theme switching with manual override option
- **Professional B2B Focus**: Tailored for corporate clients and institutional partners
- **Service Showcase**: Detailed presentation of publishing services, bulk sales, and rights management
- **Contact Integration**: Mailto-based contact forms for direct communication

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## Company Services

1. **Publishing Services**
   - Custom Publishing & Bespoke Projects
   - Editorial & Production Services
   - Translation & Localization
   - Content Development & Corporate Publishing

2. **Bulk & Corporate Sales**
   - Volume purchasing for businesses
   - Educational institutions support
   - Custom packaging and branding options

3. **Rights & Licensing**
   - Translation rights management
   - Reprint permissions
   - Digital licensing
   - Territorial rights

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd book-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── services/       # Services overview
│   ├── privacy/        # Privacy policy
│   ├── terms/          # Terms of service
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts
│   └── layout.tsx      # Root layout
├── lib/
│   └── constants.ts    # All text content and configuration
├── public/             # Static assets
└── tailwind.config.js  # Tailwind configuration
```

## Key Components

- **Header**: Navigation with language switcher and theme toggle
- **Footer**: Company information and legal links
- **LanguageContext**: Manages bilingual content
- **ThemeContext**: Handles dark/light mode switching

## Deployment

The website is optimized for deployment on Vercel:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Legal Notice

This website represents MAX PUBLISHING SRL, an Italian limited liability company:
- Registration: MI-2555363
- VAT Number: 10750550963
- Registered Office: GREZZAGO (MI) VIA CAVOUR 50/D CAP 20056, Italy

## Contact

For business inquiries:
- General: info@maxpublishingsrl.com
- Quotes: quotes@maxpublishingsrl.com
- PEC: maxpublishingsrl@pec.it

---

© 2024 MAX PUBLISHING SRL. All rights reserved.
