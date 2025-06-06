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

  // Books data with real bestselling books
  sampleBooks: [
    {
      id: '1',
      title: 'L\'amica geniale',
      author: 'Elena Ferrante',
      price: 16.50,
      originalPrice: 18.00,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      category: 'Fiction',
      rating: 4.8,
      reviews: 15420,
      description: {
        en: 'The captivating first novel in Elena Ferrante\'s Neapolitan Novels quartet, exploring the intense friendship between Elena and Lila growing up in 1950s Naples.',
        it: 'Il primo romanzo della celebre tetralogia di Elena Ferrante sui Romanzi Napoletani, che esplora l\'intensa amicizia tra Elena e Lila nella Napoli degli anni \'50.'
      }
    },
    {
      id: '2',
      title: 'La vita intima',
      author: 'Niccolò Ammaniti',
      price: 19.50,
      originalPrice: 22.00,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      category: 'Contemporary Fiction',
      rating: 4.6,
      reviews: 3280,
      description: {
        en: 'Winner of the 2023 Viareggio Prize, this novel follows Maria Cristina Palma as a video from her past threatens to unravel her perfect life.',
        it: 'Vincitore del Premio Viareggio 2023, questo romanzo segue Maria Cristina Palma mentre un video del suo passato minaccia di distruggere la sua vita perfetta.'
      }
    },
    {
      id: '3',
      title: 'Il ladro gentiluomo',
      author: 'Alessia Gazzola',
      price: 14.90,
      originalPrice: 16.50,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      category: 'Mystery',
      rating: 4.5,
      reviews: 8760,
      description: {
        en: 'Winner of the 2019 Premio Bancarella, this mystery novel from the beloved L\'allieva series combines crime fiction with romance.',
        it: 'Vincitore del Premio Bancarella 2019, questo romanzo giallo della serie L\'allieva combina il giallo con il romance.'
      }
    },
    {
      id: '4',
      title: 'La solitudine dei numeri primi',
      author: 'Paolo Giordano',
      price: 12.50,
      originalPrice: 15.00,
      image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop',
      category: 'Literary Fiction',
      rating: 4.7,
      reviews: 12340,
      description: {
        en: 'The Strega Prize-winning debut that became an international phenomenon, exploring the parallel lives of two wounded souls.',
        it: 'Il romanzo d\'esordio vincitore del Premio Strega che è diventato un fenomeno internazionale, esplorando le vite parallele di due anime ferite.'
      }
    },
    {
      id: '5',
      title: 'Gomorra',
      author: 'Roberto Saviano',
      price: 13.50,
      originalPrice: 15.50,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop',
      category: 'Non-fiction',
      rating: 4.6,
      reviews: 9850,
      description: {
        en: 'The groundbreaking exposé of the Neapolitan mafia that sold over 10 million copies worldwide and inspired films and TV series.',
        it: 'L\'esposizione rivoluzionaria della mafia napoletana che ha venduto oltre 10 milioni di copie in tutto il mondo e ha ispirato film e serie TV.'
      }
    },
    {
      id: '6',
      title: 'I leoni di Sicilia',
      author: 'Stefania Auci',
      price: 18.50,
      originalPrice: 20.00,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      category: 'Historical Fiction',
      rating: 4.7,
      reviews: 11200,
      description: {
        en: 'The bestselling saga of the Florio family that sold over 1.5 million copies in Italy and became a Disney+ series.',
        it: 'La saga bestseller della famiglia Florio che ha venduto oltre 1,5 milioni di copie in Italia ed è diventata una serie Disney+.'
      }
    },
    {
      id: '7',
      title: 'La lunga vita di Marianna Ucrìa',
      author: 'Dacia Maraini',
      price: 15.90,
      originalPrice: 17.50,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
      category: 'Historical Fiction',
      rating: 4.5,
      reviews: 7890,
      description: {
        en: 'Premio Campiello winner, this powerful novel tells the story of a deaf-mute Sicilian woman in 18th-century aristocratic society.',
        it: 'Vincitore del Premio Campiello, questo potente romanzo racconta la storia di una donna siciliana sordomuta nella società aristocratica del XVIII secolo.'
      }
    },
    {
      id: '8',
      title: 'Seta',
      author: 'Alessandro Baricco',
      price: 11.50,
      originalPrice: 13.00,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      category: 'Literary Fiction',
      rating: 4.4,
      reviews: 6540,
      description: {
        en: 'The international bestseller about a French silkworm merchant\'s journey to Japan, a tale of love, travel, and transformation.',
        it: 'Il bestseller internazionale sul viaggio di un commerciante francese di bachi da seta in Giappone, una storia di amore, viaggio e trasformazione.'
      }
    }
  ],

  // Featured Authors with real Italian authors
  featuredAuthors: [
    {
      id: '1',
      name: 'Elena Ferrante',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c6d77132?w=150&h=150&fit=crop&crop=face',
      bio: {
        en: 'Pseudonymous Italian novelist, author of the internationally acclaimed Neapolitan Novels quartet. Time magazine named her one of the 100 most influential people in 2016.',
        it: 'Scrittrice italiana pseudonima, autrice della acclamata tetralogia dei Romanzi Napoletani. La rivista Time l\'ha nominata una delle 100 persone più influenti nel 2016.'
      },
      books: 15
    },
    {
      id: '2', 
      name: 'Paolo Giordano',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: {
        en: 'Physicist, novelist, and journalist from Turin. His debut novel "The Solitude of Prime Numbers" won the Strega Prize and became a worldwide phenomenon.',
        it: 'Fisico, romanziere e giornalista di Torino. Il suo romanzo d\'esordio "La solitudine dei numeri primi" ha vinto il Premio Strega ed è diventato un fenomeno mondiale.'
      },
      books: 8
    },
    {
      id: '3',
      name: 'Roberto Saviano', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: {
        en: 'Investigative journalist and writer known for his exposés of organized crime. His book "Gomorrah" became a global phenomenon and inspired films and TV series.',
        it: 'Giornalista investigativo e scrittore noto per le sue denunce del crimine organizzato. Il suo libro "Gomorra" è diventato un fenomeno globale e ha ispirato film e serie TV.'
      },
      books: 12
    }
  ],

  // Real customer reviews
  customerReviews: [
    {
      id: '1',
      name: 'Marco R.',
      location: 'Milano',
      rating: 5,
      text: {
        en: 'Exceptional service and fast delivery. The books arrived in perfect condition. Elena Ferrante\'s novels are absolutely captivating!',
        it: 'Servizio eccezionale e consegna veloce. I libri sono arrivati in perfette condizioni. I romanzi di Elena Ferrante sono assolutamente coinvolgenti!'
      },
      book: 'L\'amica geniale'
    },
    {
      id: '2',
      name: 'Giulia M.',
      location: 'Roma',
      rating: 5,
      text: {
        en: 'Great selection of contemporary Italian literature. I discovered many new authors through their recommendations. Highly recommended!',
        it: 'Ottima selezione di letteratura italiana contemporanea. Ho scoperto molti nuovi autori grazie ai loro consigli. Altamente raccomandato!'
      },
      book: 'La vita intima'
    },
    {
      id: '3',
      name: 'Stefano L.',
      location: 'Bologna',
      rating: 5,
      text: {
        en: 'The bilingual edition was perfect for my Italian studies. Excellent quality books and very competitive prices.',
        it: 'L\'edizione bilingue è stata perfetta per i miei studi di italiano. Libri di ottima qualità e prezzi molto competitivi.'
      },
      book: 'Gomorra'
    }
  ]
} 