/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'bg-blue-100',
    'bg-blue-600',
    'bg-blue-700',
    'text-blue-600',
    'text-blue-400',
    'hover:bg-blue-700',
    'focus:ring-blue-500',
    'dark:bg-blue-900/20',
    'dark:text-blue-400',
    'bg-green-100',
    'bg-green-600',
    'bg-green-700',
    'text-green-600',
    'text-green-400',
    'hover:bg-green-700',
    'focus:ring-green-500',
    'dark:bg-green-900/20',
    'dark:text-green-400',
    'bg-purple-100',
    'bg-purple-600',
    'bg-purple-700',
    'text-purple-600',
    'text-purple-400',
    'hover:bg-purple-700',
    'focus:ring-purple-500',
    'dark:bg-purple-900/20',
    'dark:text-purple-400',
    'from-blue-100',
    'to-blue-200',
    'from-green-100',
    'to-green-200',
    'from-purple-100',
    'to-purple-200',
    'dark:from-blue-900/20',
    'dark:to-blue-800/20',
    'dark:from-green-900/20',
    'dark:to-green-800/20',
    'dark:from-purple-900/20',
    'dark:to-purple-800/20',
    'text-blue-500/20',
    'text-green-500/20',
    'text-purple-500/20',
  ]
} 