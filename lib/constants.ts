// Types
export type LocalizedText = {
  en: string
  it: string
}

export type Language = 'en' | 'it'
export type Theme = 'light' | 'dark' | 'system'

export type Book = {
  id: string
  title: LocalizedText | string
  author: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  description: LocalizedText | string
  isNew?: boolean
  isBestseller?: boolean
  tags?: string[]
  publishDate?: string
}

// OpenLibrary API functions
export const fetchBooksFromOpenLibrary = async (subject: string, limit: number = 20): Promise<Book[]> => {
  try {
    const response = await fetch(`https://openlibrary.org/subjects/${subject.toLowerCase().replace(' ', '_')}.json?limit=${limit}`)
    const data = await response.json()
    
    return data.works?.map((work: any, index: number) => ({
      id: `ol-${work.key.split('/')[2]}`,
      title: work.title || 'Unknown Title',
      author: work.authors?.[0]?.name || 'Unknown Author',
      price: Math.floor(Math.random() * 30) + 10, // Random price between 10-40
      image: work.cover_id 
        ? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
        : `https://via.placeholder.com/300x400/e5e7eb/6b7280?text=${encodeURIComponent(work.title || 'Book')}`,
      category: subject,
      rating: Math.floor(Math.random() * 20) / 4 + 3, // Random rating between 3.0-4.75
      reviews: Math.floor(Math.random() * 5000) + 100,
      description: work.description || `A ${subject.toLowerCase()} book by ${work.authors?.[0]?.name || 'Unknown Author'}.`,
      isNew: index < 3,
      isBestseller: Math.random() > 0.7
    })) || []
  } catch (error) {
    console.error('Error fetching books from OpenLibrary:', error)
    return []
  }
}

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

  // New Arrivals
  newArrivals: {
    title: { en: 'New Arrivals', it: 'Nuovi Arrivi' },
    subtitle: { en: 'Fresh books just added to our collection', it: 'Libri freschi appena aggiunti alla nostra collezione' },
    view_all: { en: 'View All New Books', it: 'Vedi Tutti i Nuovi Libri' },
    just_arrived: { en: 'Just Arrived', it: 'Appena Arrivato' },
    pre_order: { en: 'Pre-order', it: 'Pre-ordina' }
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

  // Books data with real books from OpenLibrary
  sampleBooks: [
    {
      id: '1',
      title: {
        en: 'The Seven Husbands of Evelyn Hugo',
        it: 'I Sette Mariti di Evelyn Hugo'
      },
      author: 'Taylor Jenkins Reid',
      price: 16.90,
      originalPrice: 18.50,
      image: 'https://covers.openlibrary.org/b/id/8354226-M.jpg',
      category: 'Romance',
      rating: 5,
      reviews: 2340,
      description: {
        en: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story to an unknown journalist.',
        it: 'Un romanzo avvincente su un\'icona reclusa di Hollywood che finalmente decide di raccontare la sua storia a una giornalista sconosciuta.'
      }
    },
    {
      id: '2',
      title: {
        en: 'Where the Crawdads Sing',
        it: 'Il Canto dei Gamberi'
      },
      author: 'Delia Owens',
      price: 18.50,
      originalPrice: 20.00,
      image: 'https://covers.openlibrary.org/b/id/8362947-M.jpg',
      category: 'Mystery',
      rating: 5,
      reviews: 1820,
      description: {
        en: 'A mystery and coming-of-age story set in the marshes of North Carolina, where nature is both sanctuary and threat.',
        it: 'Un mistero e una storia di formazione ambientata nelle paludi del North Carolina, dove la natura è sia santuario che minaccia.'
      }
    },
    {
      id: '3',
      title: {
        en: 'Later',
        it: 'Dopo'
      },
      author: 'Stephen King',
      price: 17.50,
      originalPrice: 19.00,
      image: 'https://covers.openlibrary.org/b/id/14654000-M.jpg',
      category: 'Horror',
      rating: 4.7,
      reviews: 3245,
      description: {
        en: 'A supernatural thriller about a boy who can see and talk to the dead, but wishes he couldn\'t.',
        it: 'Un thriller soprannaturale su un ragazzo che può vedere e parlare con i morti, ma vorrebbe non poterlo fare.'
      }
    },
    {
      id: '4',
      title: {
        en: 'Eva Luna',
        it: 'Eva Luna'
      },
      author: 'Isabel Allende',
      price: 19.50,
      originalPrice: 21.00,
      image: 'https://covers.openlibrary.org/b/id/3205240-M.jpg',
      category: 'Literary Fiction',
      rating: 5,
      reviews: 1567,
      description: {
        en: 'The story of Eva Luna, a Latin American Scheherazade who weaves tales that blur the boundaries between reality and imagination.',
        it: 'La storia di Eva Luna, una Sherazade latinoamericana che tesse racconti che sfumano i confini tra realtà e immaginazione.'
      }
    },
    {
      id: '5',
      title: {
        en: 'Hija de la fortuna',
        it: 'Figlia della Fortuna'
      },
      author: 'Isabel Allende',
      price: 22.50,
      originalPrice: 25.00,
      image: 'https://covers.openlibrary.org/b/id/10574160-M.jpg',
      category: 'Historical Fiction',
      rating: 4.8,
      reviews: 4521,
      description: {
        en: 'An epic tale of love and adventure set during the California Gold Rush, following a young Chilean woman\'s journey.',
        it: 'Un racconto epico di amore e avventura ambientato durante la corsa all\'oro della California, seguendo il viaggio di una giovane donna cilena.'
      }
    },
    {
      id: '6',
      title: {
        en: 'Sostiene Pereira',
        it: 'Sostiene Pereira'
      },
      author: 'Antonio Tabucchi',
      price: 20.00,
      originalPrice: 22.50,
      image: 'https://covers.openlibrary.org/b/id/5496834-M.jpg',
      category: 'Literary Fiction',
      rating: 4.5,
      reviews: 2876,
      description: {
        en: 'A profound meditation on literature, resistance, and moral awakening set in 1930s Lisbon.',
        it: 'Una profonda meditazione su letteratura, resistenza e risveglio morale ambientata nella Lisbona degli anni \'30.'
      }
    },
    {
      id: '7',
      title: {
        en: 'Requiem',
        it: 'Requiem'
      },
      author: 'Antonio Tabucchi',
      price: 16.50,
      originalPrice: 18.00,
      image: 'https://covers.openlibrary.org/b/id/598181-M.jpg',
      category: 'Literary Fiction',
      rating: 5,
      reviews: 1934,
      description: {
        en: 'A dreamlike journey through Lisbon where the narrator searches for a lost friend, blending reality with memory.',
        it: 'Un viaggio onirico attraverso Lisbona dove il narratore cerca un amico perduto, mescolando realtà e memoria.'
      }
    },
    {
      id: '8',
      title: {
        en: 'Notturno indiano',
        it: 'Notturno indiano'
      },
      author: 'Antonio Tabucchi',
      price: 17.00,
      originalPrice: 19.50,
      image: 'https://covers.openlibrary.org/b/id/598081-M.jpg',
      category: 'Literary Fiction',
      rating: 4.2,
      reviews: 1245,
      description: {
        en: 'A mysterious quest through India in search of a missing friend, exploring themes of identity and truth.',
        it: 'Una ricerca misteriosa attraverso l\'India alla ricerca di un amico scomparso, esplorando temi di identità e verità.'
      }
    },
    {
      id: '9',
      title: {
        en: 'The Midnight Library',
        it: 'La Biblioteca di Mezzanotte'
      },
      author: 'Matt Haig',
      price: 18.50,
      originalPrice: 20.00,
      image: 'https://covers.openlibrary.org/b/id/10313767-M.jpg',
      category: 'Contemporary Fiction',
      rating: 5,
      reviews: 1876,
      description: {
        en: 'Between life and death there is a library, and within that library, the shelves go on forever.',
        it: 'Tra la vita e la morte c\'è una biblioteca, e all\'interno di quella biblioteca, gli scaffali vanno all\'infinito.'
      }
    },
    {
      id: '10',
      title: {
        en: 'Klara and the Sun',
        it: 'Klara e il Sole'
      },
      author: 'Kazuo Ishiguro',
      price: 16.00,
      originalPrice: 18.00,
      image: 'https://covers.openlibrary.org/b/id/10648686-M.jpg',
      category: 'Literary Fiction',
      rating: 4.6,
      reviews: 2134,
      description: {
        en: 'From the Nobel Prize-winning author comes a luminous novel about love, loss, and what it means to be human.',
        it: 'Dal vincitore del Premio Nobel arriva un romanzo luminoso su amore, perdita e cosa significa essere umani.'
      }
    },
    {
      id: '11',
      title: {
        en: 'The Thursday Murder Club',
        it: 'Il Club degli Omicidi del Giovedì'
      },
      author: 'Richard Osman',
      price: 14.50,
      originalPrice: 16.00,
      image: 'https://covers.openlibrary.org/b/id/10201431-M.jpg',
      category: 'Mystery',
      rating: 5,
      reviews: 3256,
      description: {
        en: 'Four unlikely friends meet weekly to investigate cold cases, but when a real murder happens, they find themselves in their first live case.',
        it: 'Quattro improbabili amici si incontrano settimanalmente per indagare su casi irrisolti, ma quando accade un vero omicidio, si ritrovano nel loro primo caso dal vivo.'
      }
    }
  ],

  // New Arrivals - Latest books added to the collection
  newArrivalBooks: [
    {
      id: 'new1',
      title: {
        en: 'The Atlas of Dreams and Ghosts',
        it: 'L\'atlante dei sogni e dei fantasmi'
      },
      author: 'Zen Cho',
      price: 21.50,
      originalPrice: 24.00,
      image: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
      tags: ['Fantasy', 'Award Winner'],
      rating: 5,
      reviews: 234,
      isNew: true,
      publishDate: '2024-01',
      description: {
        en: 'A magical collection of interconnected stories that span continents and centuries, weaving together Malaysian folklore with contemporary urban fantasy.',
        it: 'Una collezione magica di storie interconnesse che attraversano continenti e secoli, intrecciando il folklore malese con la fantasy urbana contemporanea.'
      }
    },
    {
      id: 'new2',
      title: {
        en: 'Digital Minimalism',
        it: 'Minimalismo Digitale'
      },
      author: 'Cal Newport',
      price: 19.90,
      originalPrice: 22.50,
      image: 'https://covers.openlibrary.org/b/id/8507540-M.jpg',
      tags: ['Self-Help'],
      rating: 5,
      reviews: 567,
      isNew: true,
      publishDate: '2024-01',
      description: {
        en: 'A philosophy for technology use that emphasizes quality over quantity, helping you create space for the things that truly matter.',
        it: 'Una filosofia per l\'uso della tecnologia che enfatizza la qualità sulla quantità, aiutandoti a creare spazio per le cose che contano veramente.'
      }
    },
    {
      id: 'new3',
      title: {
        en: 'The Thursday Murder Club',
        it: 'Il Club degli Omicidi del Giovedì'
      },
      author: 'Richard Osman',
      price: 18.50,
      originalPrice: 20.00,
      image: 'https://covers.openlibrary.org/b/id/10201431-M.jpg',
      tags: ['Mystery', 'Bestseller'],
      rating: 4.9,
      reviews: 1432,
      isNew: true,
      publishDate: '2024-01',
      description: {
        en: 'Four unlikely friends meet weekly to investigate cold cases, but when a real murder happens on their doorstep, they find themselves in the middle of their first live case.',
        it: 'Quattro improbabili amici si incontrano settimanalmente per indagare su casi irrisolti, ma quando un vero omicidio accade sulla loro soglia, si ritrovano nel mezzo del loro primo caso dal vivo.'
      }
    },
    {
      id: 'new4',
      title: {
        en: 'Klara and the Sun',
        it: 'Klara e il Sole'
      },
      author: 'Kazuo Ishiguro',
      price: 23.50,
      originalPrice: 26.00,
      image: 'https://covers.openlibrary.org/b/id/10648686-M.jpg',
      tags: ['Literary Fiction', 'Nobel Prize'],
      rating: 4.4,
      reviews: 2156,
      isNew: true,
      publishDate: '2024-01',
      description: {
        en: 'From the Nobel Prize-winning author comes a luminous novel about love, loss, and what it means to be human, told through the eyes of an artificial friend.',
        it: 'Dal vincitore del Premio Nobel arriva un romanzo luminoso su amore, perdita e cosa significa essere umani, raccontato attraverso gli occhi di un amico artificiale.'
      }
    },
    {
      id: 'new5',
      title: {
        en: 'The Invisible Bridge',
        it: 'Il Ponte Invisibile'
      },
      author: 'Julie Orringer',
      price: 20.50,
      originalPrice: 23.00,
      image: 'https://covers.openlibrary.org/b/id/6680990-M.jpg',
      tags: ['Historical Fiction'],
      rating: 5,
      reviews: 987,
      isNew: true,
      publishDate: '2024-01',
      description: {
        en: 'A sweeping historical novel that follows three Hungarian Jewish brothers through the tumultuous years of World War II.',
        it: 'Un ampio romanzo storico che segue tre fratelli ebrei ungheresi attraverso gli anni tumultuosi della Seconda Guerra Mondiale.'
      }
    },
    {
      id: 'new6',
      title: {
        en: 'The Midnight Library',
        it: 'La Biblioteca di Mezzanotte'
      },
      author: 'Matt Haig',
      price: 17.90,
      originalPrice: 19.50,
      image: 'https://covers.openlibrary.org/b/id/10313767-M.jpg',
      tags: ['Contemporary', 'Philosophy'],
      rating: 4.5,
      reviews: 3245,
      isNew: true,
      publishDate: '2024-01',
      description: {
        en: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
        it: 'Tra la vita e la morte c\'è una biblioteca, e all\'interno di quella biblioteca, gli scaffali vanno all\'infinito. Ogni libro offre la possibilità di provare un\'altra vita che avresti potuto vivere.'
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
  ],

  // Contact page texts
  contact: {
    description: {
      en: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      it: "Ci piacerebbe sentirti. Inviaci un messaggio e ti risponderemo il prima possibile."
    },
    form: {
      title: {
        en: "Send us a Message",
        it: "Inviaci un Messaggio"
      },
      success_title: {
        en: "Message Sent Successfully!",
        it: "Messaggio Inviato con Successo!"
      },
      success_message: {
        en: "Thank you for contacting us. We'll get back to you within 24 hours.",
        it: "Grazie per averci contattato. Ti risponderemo entro 24 ore."
      },
      name: {
        en: "Name",
        it: "Nome"
      },
      name_placeholder: {
        en: "Your full name",
        it: "Il tuo nome completo"
      },
      email: {
        en: "Email",
        it: "Email"
      },
      email_placeholder: {
        en: "your.email@example.com",
        it: "tua.email@esempio.com"
      },
      subject: {
        en: "Subject",
        it: "Oggetto"
      },
      select_subject: {
        en: "Select a subject",
        it: "Seleziona un oggetto"
      },
      general_inquiry: {
        en: "General Inquiry",
        it: "Richiesta Generale"
      },
      order_support: {
        en: "Order Support",
        it: "Supporto Ordini"
      },
      shipping: {
        en: "Shipping & Delivery",
        it: "Spedizione e Consegna"
      },
      returns: {
        en: "Returns & Refunds",
        it: "Resi e Rimborsi"
      },
      technical: {
        en: "Technical Support",
        it: "Supporto Tecnico"
      },
      partnership: {
        en: "Partnership Opportunities",
        it: "Opportunità di Partnership"
      },
      other: {
        en: "Other",
        it: "Altro"
      },
      message: {
        en: "Message",
        it: "Messaggio"
      },
      message_placeholder: {
        en: "Please describe your inquiry in detail...",
        it: "Descrivi la tua richiesta in dettaglio..."
      },
      sending: {
        en: "Sending...",
        it: "Invio..."
      },
      send: {
        en: "Send Message",
        it: "Invia Messaggio"
      }
    },
    info: {
      title: {
        en: "Get in Touch",
        it: "Contattaci"
      },
      email_title: {
        en: "Email Us",
        it: "Inviaci una Email"
      },
      email_response: {
        en: "We typically respond within 24 hours",
        it: "Generalmente rispondiamo entro 24 ore"
      },
      phone_title: {
        en: "Call Us",
        it: "Chiamaci"
      },
      phone_hours: {
        en: "Mon-Fri 9:00 AM - 6:00 PM CET",
        it: "Lun-Ven 9:00 - 18:00 CET"
      },
      address_title: {
        en: "Visit Us",
        it: "Visitaci"
      },
      hours_title: {
        en: "Business Hours",
        it: "Orari di Apertura"
      },
      hours_weekdays: {
        en: "Monday - Friday: 9:00 AM - 6:00 PM",
        it: "Lunedì - Venerdì: 9:00 - 18:00"
      },
      hours_weekend: {
        en: "Saturday: 10:00 AM - 4:00 PM",
        it: "Sabato: 10:00 - 16:00"
      }
    },
    faq: {
      title: {
        en: "Frequently Asked Questions",
        it: "Domande Frequenti"
      },
      q1: {
        en: "How long does shipping take?",
        it: "Quanto tempo richiede la spedizione?"
      },
      a1: {
        en: "Standard shipping within Italy takes 2-3 business days. International shipping varies by destination.",
        it: "La spedizione standard in Italia richiede 2-3 giorni lavorativi. La spedizione internazionale varia a seconda della destinazione."
      },
      q2: {
        en: "Can I return a book?",
        it: "Posso restituire un libro?"
      },
      a2: {
        en: "Yes, we accept returns within 30 days of purchase in original condition.",
        it: "Sì, accettiamo resi entro 30 giorni dall'acquisto nelle condizioni originali."
      },
      q3: {
        en: "Do you have a physical store?",
        it: "Avete un negozio fisico?"
      },
      a3: {
        en: "Yes, you can visit our showroom in Bologna by appointment.",
        it: "Sì, puoi visitare il nostro showroom a Bologna su appuntamento."
      }
    }
  }
} 