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



  // Reviews Section
  reviews: {
    title: { en: 'What Our Readers Say', it: 'Cosa Dicono i Nostri Lettori' },
    subtitle: { en: 'Trusted by thousands of book lovers', it: 'Di fiducia per migliaia di amanti dei libri' }
  },

  // Books data with real books from user's images
  sampleBooks: [
    {
      id: '1',
      title: {
        en: 'New Beginnings at Strawberry Patch Pancake House',
        it: 'Nuovi inizi a Strawberry Patch Pancake House'
      },
      author: 'Laurie Gilmore',
      price: 16.90,
      originalPrice: 18.50,
      image: '/images/books/book1.jpg',
      category: 'Romance',
      rating: 5,
      reviews: 2340,
      description: {
        en: 'A heartwarming romance set in a charming small town pancake house, where new beginnings bloom with every sunrise and love finds its way through homemade syrup and fresh starts.',
        it: 'Un romanzo commovente ambientato in una graziosa casa di pancake di provincia, dove nuovi inizi sbocciano ad ogni alba e l\'amore trova la sua strada attraverso sciroppo fatto in casa e nuovi inizi.'
      }
    },
    {
      id: '2',
      title: {
        en: 'The Dark Immensity of Death',
        it: 'L\'oscura immensità della morte'
      },
      author: 'Massimo Carlotto',
      price: 18.50,
      originalPrice: 20.00,
      image: '/images/books/book2.jpg',
      category: 'Mystery',
      rating: 5,
      reviews: 1820,
      description: {
        en: 'A gripping noir thriller from the master of Italian crime fiction, exploring the darkest corners of human nature and the relentless pursuit of justice.',
        it: 'Un avvincente thriller noir dal maestro del giallo italiano, che esplora gli angoli più oscuri della natura umana e l\'implacabile ricerca della giustizia.'
      }
    },
    {
      id: '3',
      title: {
        en: 'The Swallow\'s Talent',
        it: 'Il talento della rondine'
      },
      author: 'Matteo Bussola',
      price: 17.50,
      originalPrice: 19.00,
      image: '/images/books/book3.jpg',
      category: 'Contemporary Fiction',
      rating: 4.7,
      reviews: 3245,
      description: {
        en: 'A poignant meditation on fatherhood, love, and the profound connections that shape our lives, told with Bussola\'s signature emotional depth.',
        it: 'Una meditazione toccante sulla paternità, l\'amore e le profonde connessioni che plasmano le nostre vite, raccontata con la caratteristica profondità emotiva di Bussola.'
      }
    },
    {
      id: '4',
      title: {
        en: 'Beautiful and Lost',
        it: 'Bella e perduta'
      },
      author: 'Paolo Rumiz',
      price: 19.50,
      originalPrice: 21.00,
      image: '/images/books/book4.jpg',
      category: 'Travel',
      rating: 5,
      reviews: 1567,
      description: {
        en: 'A journey through Garibaldi\'s Italy, exploring the forgotten corners of the Risorgimento with Rumiz\'s masterful storytelling and keen historical insight.',
        it: 'Un viaggio attraverso l\'Italia garibaldina, esplorando gli angoli dimenticati del Risorgimento con la magistrale narrativa di Rumiz e la sua acuta visione storica.'
      }
    },
    {
      id: '5',
      title: {
        en: 'Never Flinch',
        it: 'Never Flinch'
      },
      author: 'Stephen King',
      price: 22.50,
      originalPrice: 25.00,
      image: '/images/books/book5.jpg',
      category: 'Horror',
      rating: 4.8,
      reviews: 4521,
      description: {
        en: 'A harrowing tale of survival and moral courage, where ordinary people face extraordinary evil and must choose between safety and doing what\'s right.',
        it: 'Un racconto straziante di sopravvivenza e coraggio morale, dove persone comuni affrontano il male straordinario e devono scegliere tra sicurezza e fare ciò che è giusto.'
      }
    },
    {
      id: '6',
      title: {
        en: 'My Name is Valley Leaf',
        it: 'Il mio nome è Foglia del Valle'
      },
      author: 'Isabel Allende',
      price: 20.00,
      originalPrice: 22.50,
      image: '/images/books/book6.jpg',
      category: 'Literary Fiction',
      rating: 4.5,
      reviews: 2876,
      description: {
        en: 'Allende\'s magical realism shines in this story of identity, belonging, and the power of names to shape our destiny across generations.',
        it: 'Il realismo magico di Allende brilla in questa storia di identità, appartenenza e il potere dei nomi di plasmare il nostro destino attraverso le generazioni.'
      }
    },
    {
      id: '7',
      title: {
        en: 'The Mute Parrot',
        it: 'Il pappagallo muto'
      },
      author: 'Maurizio de Giovanni',
      price: 16.50,
      originalPrice: 18.00,
      image: '/images/books/book7.jpg',
      category: 'Mystery',
      rating: 5,
      reviews: 1934,
      description: {
        en: 'A captivating mystery featuring Sara, where silence speaks louder than words and the truth hides behind unexpected facades.',
        it: 'Un mistero avvincente con protagonista Sara, dove il silenzio parla più forte delle parole e la verità si nasconde dietro facciate inaspettate.'
      }
    },
    {
      id: '8',
      title: {
        en: 'The Post Office Queue',
        it: 'La fila alle poste'
      },
      author: 'Chiara Valerio',
      price: 17.00,
      originalPrice: 19.50,
      image: '/images/books/book8.jpg',
      category: 'Contemporary Fiction',
      rating: 4.2,
      reviews: 1245,
      description: {
        en: 'A witty and insightful exploration of modern Italian life through the microcosm of a post office queue, revealing the comedy and drama of everyday existence.',
        it: 'Un\'esplorazione spiritosa e perspicace della vita italiana moderna attraverso il microcosmo di una fila alle poste, rivelando la commedia e il dramma dell\'esistenza quotidiana.'
      }
    },
    {
      id: '9',
      title: {
        en: 'The Laughing Woman',
        it: 'La donna che ride'
      },
      author: 'Maurizio de Giovanni',
      price: 18.50,
      originalPrice: 20.00,
      image: '/images/books/book9.jpg',
      category: 'Mystery',
      rating: 5,
      reviews: 1876,
      description: {
        en: 'A compelling mystery set in Naples, where laughter and sorrow intertwine in an unforgettable tale of human nature and justice.',
        it: 'Un mistero avvincente ambientato a Napoli, dove risate e dolore si intrecciano in un racconto indimenticabile sulla natura umana e la giustizia.'
      }
    },
    {
      id: '10',
      title: {
        en: 'Italian Stories',
        it: 'Storie italiane'
      },
      author: 'Antonio Tabucchi',
      price: 16.00,
      originalPrice: 18.00,
      image: '/images/books/book10.jpg',
      category: 'Literary Fiction',
      rating: 4.6,
      reviews: 2134,
      description: {
        en: 'A collection of evocative stories that capture the essence of contemporary Italy through the eyes of one of its most celebrated writers.',
        it: 'Una raccolta di storie evocative che catturano l\'essenza dell\'Italia contemporanea attraverso gli occhi di uno dei suoi scrittori più celebrati.'
      }
    },
    {
      id: '11',
      title: {
        en: 'The Secret Garden',
        it: 'Il giardino segreto'
      },
      author: 'Frances Hodgson Burnett',
      price: 14.50,
      originalPrice: 16.00,
      image: '/images/books/book11.jpg',
      category: 'Children',
      rating: 5,
      reviews: 3256,
      description: {
        en: 'A timeless classic about the transformative power of nature, friendship, and the magic hidden in everyday life.',
        it: 'Un classico senza tempo sul potere trasformativo della natura, dell\'amicizia e della magia nascosta nella vita quotidiana.'
      }
    }
  ],



  // Real customer reviews
  customerReviews: [
    {
      id: '1',
      name: 'Marco R.',
      location: 'Milano',
      rating: 4.5,
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
      rating: 4,
      text: {
        en: 'The bilingual edition was perfect for my Italian studies. Excellent quality books and very competitive prices.',
        it: 'L\'edizione bilingue è stata perfetta per i miei studi di italiano. Libri di ottima qualità e prezzi molto competitivi.'
      },
      book: 'Gomorra'
    }
  ]
} 