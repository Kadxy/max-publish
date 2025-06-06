export const TEXTS = {
  // Navigation
  nav: {
    home: { en: 'Home', it: 'Home' },
    books: { en: 'Books', it: 'Libri' },
    categories: { en: 'Categories', it: 'Categorie' },
    bestsellers: { en: 'Bestsellers', it: 'Bestseller' },
    about: { en: 'About', it: 'Chi Siamo' },
    contact: { en: 'Contact', it: 'Contatti' },
    search_placeholder: { en: 'Search books...', it: 'Cerca libri...' }
  },
  
  // Hero Section
  hero: {
    title: { en: 'Discover Your Next Great Read', it: 'Scopri la Tua Prossima Grande Lettura' },
    subtitle: { en: 'Explore thousands of books across all genres. From bestsellers to hidden gems.', it: 'Esplora migliaia di libri di tutti i generi. Dai bestseller ai gioielli nascosti.' },
    cta_browse: { en: 'Browse Books', it: 'Sfoglia Libri' },
    cta_bestsellers: { en: 'View Bestsellers', it: 'Vedi Bestseller' }
  },
  
  // Categories
  categories: {
    title: { en: 'Popular Categories', it: 'Categorie Popolari' },
    fiction: { en: 'Fiction', it: 'Narrativa' },
    non_fiction: { en: 'Non-Fiction', it: 'Saggistica' },
    mystery: { en: 'Mystery & Thriller', it: 'Giallo e Thriller' },
    romance: { en: 'Romance', it: 'Romanzi Rosa' },
    science: { en: 'Science & Technology', it: 'Scienza e Tecnologia' },
    history: { en: 'History', it: 'Storia' },
    children: { en: 'Children\'s Books', it: 'Libri per Bambini' },
    poetry: { en: 'Poetry', it: 'Poesia' }
  },
  
  // Featured Books
  featured: {
    title: { en: 'Featured Books', it: 'Libri in Evidenza' },
    bestsellers_title: { en: 'Current Bestsellers', it: 'Bestseller Attuali' },
    new_releases_title: { en: 'New Releases', it: 'Nuove Uscite' }
  },
  
  // Footer
  footer: {
    company_info: { en: 'About Max Publishing', it: 'Chi è Max Publishing' },
    company_desc: { en: 'Your trusted partner for quality books and literature since 2019.', it: 'Il vostro partner di fiducia per libri e letteratura di qualità dal 2019.' },
    quick_links: { en: 'Quick Links', it: 'Link Rapidi' },
    customer_service: { en: 'Customer Service', it: 'Servizio Clienti' },
    help: { en: 'Help', it: 'Aiuto' },
    shipping: { en: 'Shipping Info', it: 'Info Spedizioni' },
    returns: { en: 'Returns', it: 'Resi' },
    privacy: { en: 'Privacy Policy', it: 'Privacy Policy' },
    terms: { en: 'Terms of Service', it: 'Termini di Servizio' },
    follow_us: { en: 'Follow Us', it: 'Seguici' }
  },
  
  // Company Info (based on provided documents)
  company: {
    name: 'Max Publishing SRL',
    address: 'Via Camillo Benso Cavour 50/D, 20056 Bologna',
    email: 'maxpublishingsrl@pec.it',
    registration: 'MI-2555363',
    vat: '10750550963'
  },
  
  // Theme
  theme: {
    toggle: { en: 'Theme', it: 'Tema' },
    light: { en: 'Light', it: 'Chiaro' },
    dark: { en: 'Dark', it: 'Scuro' },
    system: { en: 'System', it: 'Sistema' }
  },

  // Authors Section
  authors: {
    title: { en: 'Featured Authors', it: 'Autori in Evidenza' },
    subtitle: { en: 'Meet our celebrated writers', it: 'Incontra i nostri scrittori celebrati' }
  },

  // Reviews Section
  reviews: {
    title: { en: 'What Our Readers Say', it: 'Cosa Dicono i Nostri Lettori' },
    subtitle: { en: 'Trusted by thousands of book lovers', it: 'Di fiducia per migliaia di amanti dei libri' }
  },

  // Sample Books Data (Expanded)
  sampleBooks: [
    {
      id: 1,
      title: { en: 'The Great Adventure', it: 'La Grande Avventura' },
      author: 'Marco Rossi',
      price: 19.99,
      category: 'fiction',
      cover: '/api/placeholder/300/400',
      rating: 4.8,
      reviews: 245,
      description: { 
        en: 'An epic tale of discovery and courage that will keep you turning pages.', 
        it: 'Un racconto epico di scoperta e coraggio che vi terrà incollati alle pagine.' 
      }
    },
    {
      id: 2,
      title: { en: 'Modern Italian Cuisine', it: 'Cucina Italiana Moderna' },
      author: 'Chef Giuseppe Bianchi',
      price: 24.99,
      category: 'non_fiction',
      cover: '/api/placeholder/300/400',
      rating: 4.6,
      reviews: 189,
      description: { 
        en: 'Discover the secrets of contemporary Italian cooking with traditional roots.', 
        it: 'Scopri i segreti della cucina italiana contemporanea con radici tradizionali.' 
      }
    },
    {
      id: 3,
      title: { en: 'Venice Mysteries', it: 'I Misteri di Venezia' },
      author: 'Elena Martini',
      price: 16.99,
      category: 'mystery',
      cover: '/api/placeholder/300/400',
      rating: 4.9,
      reviews: 312,
      description: { 
        en: 'A thrilling mystery set in the romantic canals of Venice.', 
        it: 'Un thriller avvincente ambientato nei romantici canali di Venezia.' 
      }
    },
    {
      id: 4,
      title: { en: 'Love in Tuscany', it: 'Amore in Toscana' },
      author: 'Giulia Romano',
      price: 18.99,
      category: 'romance',
      cover: '/api/placeholder/300/400',
      rating: 4.7,
      reviews: 428,
      description: { 
        en: 'A heartwarming romance story set in the beautiful Tuscan countryside.', 
        it: 'Una storia d\'amore commovente ambientata nella bellissima campagna toscana.' 
      }
    },
    {
      id: 5,
      title: { en: 'Digital Renaissance', it: 'Rinascimento Digitale' },
      author: 'Dr. Alessandro Ferretti',
      price: 27.99,
      category: 'science',
      cover: '/api/placeholder/300/400',
      rating: 4.5,
      reviews: 156,
      description: { 
        en: 'How technology is reshaping our world and what it means for the future.', 
        it: 'Come la tecnologia sta rimodellando il nostro mondo e cosa significa per il futuro.' 
      }
    },
    {
      id: 6,
      title: { en: 'Roman Empire Chronicles', it: 'Cronache dell\'Impero Romano' },
      author: 'Prof. Lucia Benedetti',
      price: 22.99,
      category: 'history',
      cover: '/api/placeholder/300/400',
      rating: 4.8,
      reviews: 203,
      description: { 
        en: 'A comprehensive journey through the rise and fall of Rome.', 
        it: 'Un viaggio completo attraverso l\'ascesa e la caduta di Roma.' 
      }
    },
    {
      id: 7,
      title: { en: 'Little Explorer\'s World', it: 'Il Mondo del Piccolo Esploratore' },
      author: 'Maria Castelli',
      price: 12.99,
      category: 'children',
      cover: '/api/placeholder/300/400',
      rating: 4.9,
      reviews: 167,
      description: { 
        en: 'A delightful children\'s book about curiosity and wonder.', 
        it: 'Un delizioso libro per bambini sulla curiosità e la meraviglia.' 
      }
    },
    {
      id: 8,
      title: { en: 'Whispers of the Soul', it: 'Sussurri dell\'Anima' },
      author: 'Giovanni Dante',
      price: 15.99,
      category: 'poetry',
      cover: '/api/placeholder/300/400',
      rating: 4.6,
      reviews: 94,
      description: { 
        en: 'A collection of contemporary poems about love, loss, and hope.', 
        it: 'Una raccolta di poesie contemporanee su amore, perdita e speranza.' 
      }
    }
  ],

  // Featured Authors
  featuredAuthors: [
    {
      id: 1,
      name: 'Marco Rossi',
      bio: { 
        en: 'Award-winning novelist with over 2 million books sold worldwide.',
        it: 'Romanziere pluripremiato con oltre 2 milioni di libri venduti nel mondo.'
      },
      books: 12,
      avatar: '/api/placeholder/150/150'
    },
    {
      id: 2,
      name: 'Elena Martini',
      bio: { 
        en: 'Master of mystery and suspense, creator of unforgettable characters.',
        it: 'Maestra del mistero e suspense, creatrice di personaggi indimenticabili.'
      },
      books: 8,
      avatar: '/api/placeholder/150/150'
    },
    {
      id: 3,
      name: 'Dr. Alessandro Ferretti',
      bio: { 
        en: 'Technology expert and futurist, making complex topics accessible.',
        it: 'Esperto di tecnologia e futurista, rende accessibili argomenti complessi.'
      },
      books: 5,
      avatar: '/api/placeholder/150/150'
    }
  ],

  // Customer Reviews
  customerReviews: [
    {
      id: 1,
      name: 'Sofia M.',
      rating: 5,
      comment: {
        en: 'Amazing selection of books and fast delivery. Highly recommended!',
        it: 'Selezione incredibile di libri e consegna veloce. Altamente raccomandato!'
      },
      location: 'Milan'
    },
    {
      id: 2,
      name: 'Roberto T.',
      rating: 5,
      comment: {
        en: 'Great customer service and excellent book recommendations.',
        it: 'Ottimo servizio clienti e eccellenti raccomandazioni di libri.'
      },
      location: 'Rome'
    },
    {
      id: 3,
      name: 'Anna P.',
      rating: 4,
      comment: {
        en: 'Love the bilingual website. Makes browsing so much easier!',
        it: 'Adoro il sito bilingue. Rende la navigazione molto più facile!'
      },
      location: 'Bologna'
    }
  ]
} 