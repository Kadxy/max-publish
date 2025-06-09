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

// Company Information
export const COMPANY = {
  name: 'MAX PUBLISHING SRL',
  legalForm: {
    en: 'Limited Liability Company',
    it: 'Società a responsabilità limitata (SRL)'
  },
  registeredOffice: {
    en: 'GREZZAGO (MI) VIA CAVOUR 50/D CAP 20056, Italy',
    it: 'GREZZAGO (MI) VIA CAVOUR 50/D CAP 20056, Italia'
  },
  operationalOffice: {
    en: 'VIA CAMILLO BENSO CAVOUR 50/D, 20056, Bologna, Italy',
    it: 'VIA CAMILLO BENSO CAVOUR 50/D, 20056, Bologna, Italia'
  },
  vatNumber: '10750550963',
  fiscalCode: '10750550963',
  reaNumber: 'MI - 2555363',
  shareCapital: {
    en: '€10,000.00',
    it: '€10.000,00'
  },
  foundedDate: {
    en: 'March 29, 2019',
    it: '29 Marzo 2019'
  },
  emails: {
    general: 'fanyuchengcc@gmail.com',
  },
}

// All website texts
export const TEXTS = {
  // Common UI texts
  common: {
    learnMore: { en: 'Learn More', it: 'Scopri di più' },
    viewDetails: { en: 'View Details', it: 'Vedi Dettagli' },
    submit: { en: 'Submit', it: 'Invia' },
    getQuote: { en: 'Get a Quote', it: 'Richiedi un Preventivo' },
    requestConsultation: { en: 'Request a Consultation', it: 'Richiedi una Consulenza' }
  },

  // Navigation
  nav: {
    home: { en: 'Home', it: 'Home' },
    aboutUs: { en: 'About Us', it: 'Chi Siamo' },
    services: { en: 'Services', it: 'Servizi' },
    portfolio: { en: 'Portfolio', it: 'Portfolio' },
    contactUs: { en: 'Contact Us', it: 'Contattaci' },
    language: { en: 'Language', it: 'Lingua' }
  },

  // Footer
  footer: {
    copyright: {
      en: `Copyright ${COMPANY.name} © ${new Date().getFullYear()}. All rights reserved.`,
      it: `Copyright ${COMPANY.name} © ${new Date().getFullYear()}. Tutti i diritti riservati.`
    },
    companyInfo: { en: 'Company Information', it: 'Informazioni Aziendali' },
    registeredOffice: { en: 'Registered Office', it: 'Sede Legale' },
    vatNumber: { en: 'VAT Number', it: 'Partita IVA' },
    reaNumber: { en: 'REA Number', it: 'Numero REA' }
  },

  // Theme
  theme: {
    toggle: { en: 'Theme', it: 'Tema' },
    light: { en: 'Light', it: 'Chiaro' },
    dark: { en: 'Dark', it: 'Scuro' },
    system: { en: 'System', it: 'Sistema' }
  },

  // Home Page
  home: {
    metaTitle: {
      en: 'MAX PUBLISHING SRL | Strategic Publishing Solutions',
      it: 'MAX PUBLISHING SRL | Soluzioni Editoriali Strategiche'
    },
    hero: {
      title: {
        en: 'Your Strategic Partner in Publishing Solutions',
        it: 'Il Tuo Partner Strategico nelle Soluzioni Editoriali'
      },
      tagline: {
        en: 'MAX PUBLISHING SRL: Delivering specialized publishing services, bulk fulfillment, and rights management for businesses and institutions.',
        it: 'MAX PUBLISHING SRL: Forniamo servizi editoriali specializzati, vendite all\'ingrosso e gestione dei diritti per aziende e istituzioni.'
      },
      cta: {
        exploreServices: {
          text: { en: 'Explore Our Services', it: 'Esplora i Nostri Servizi' }
        },
        requestConsultation: {
          text: { en: 'Request a Consultation', it: 'Richiedi una Consulenza' },
          emailSubject: {
            en: 'Consultation Request from Website',
            it: 'Richiesta di Consulenza dal Sito Web'
          }
        }
      }
    },
    whyChooseUs: {
      title: {
        en: 'Why Choose MAX PUBLISHING SRL',
        it: 'Perché Scegliere MAX PUBLISHING SRL'
      },
      points: [
        {
          en: 'Proven B2B Expertise: Over 5 years of specialized publishing solutions for businesses',
          it: 'Esperienza B2B Comprovata: Oltre 5 anni di soluzioni editoriali specializzate per le aziende'
        },
        {
          en: 'Tailored Solutions: Customized services to meet your specific publishing needs',
          it: 'Soluzioni Su Misura: Servizi personalizzati per soddisfare le vostre specifiche esigenze editoriali'
        },
        {
          en: 'Quality Commitment: Excellence in every project, from concept to delivery',
          it: 'Impegno per la Qualità: Eccellenza in ogni progetto, dal concept alla consegna'
        },
        {
          en: 'Reliable Partnership: Trusted by leading businesses and institutions',
          it: 'Partnership Affidabile: Di fiducia per aziende e istituzioni leader'
        }
      ]
    }
  },

  // About Page
  about: {
    metaTitle: {
      en: 'About MAX PUBLISHING SRL',
      it: 'Chi Siamo - MAX PUBLISHING SRL'
    },
    headerTitle: {
      en: 'About Us',
      it: 'Chi Siamo'
    },
    mission: {
      title: { en: 'Our Mission', it: 'La Nostra Missione' },
      content: {
        en: 'To provide innovative and tailored publishing solutions that empower businesses and institutions to communicate effectively with their audiences through high-quality printed and digital content.',
        it: 'Fornire soluzioni editoriali innovative e su misura che consentano ad aziende e istituzioni di comunicare efficacemente con il loro pubblico attraverso contenuti stampati e digitali di alta qualità.'
      }
    },
    vision: {
      title: { en: 'Our Vision', it: 'La Nostra Visione' },
      content: {
        en: 'To be the leading B2B publishing partner in Europe, recognized for our commitment to quality, innovation, and exceptional service in the publishing industry.',
        it: 'Essere il partner editoriale B2B leader in Europa, riconosciuti per il nostro impegno verso la qualità, l\'innovazione e il servizio eccezionale nel settore editoriale.'
      }
    },
    profile: {
      title: { en: 'Company Profile', it: 'Profilo Aziendale' },
      content: {
        en: `Founded in ${COMPANY.foundedDate.en}, MAX PUBLISHING SRL has established itself as a reliable partner for businesses seeking professional publishing solutions. Based in Bologna, Italy, we combine traditional publishing expertise with modern digital capabilities to deliver comprehensive services that meet the evolving needs of our B2B clients.`,
        it: `Fondata il ${COMPANY.foundedDate.it}, MAX PUBLISHING SRL si è affermata come partner affidabile per le aziende che cercano soluzioni editoriali professionali. Con sede a Bologna, Italia, combiniamo l\'esperienza editoriale tradizionale con le moderne capacità digitali per fornire servizi completi che soddisfano le esigenze in evoluzione dei nostri clienti B2B.`
      }
    },
    b2bExpertise: {
      title: { en: 'B2B Publishing Expertise', it: 'Esperienza nell\'Editoria B2B' },
      content: {
        en: 'We specialize in serving corporate clients, educational institutions, and government organizations with customized publishing solutions. Our expertise spans from technical manuals and corporate publications to educational materials and bulk book orders, always maintaining the highest standards of quality and professionalism.',
        it: 'Siamo specializzati nel servire clienti aziendali, istituzioni educative e organizzazioni governative con soluzioni editoriali personalizzate. La nostra esperienza spazia dai manuali tecnici e pubblicazioni aziendali ai materiali didattici e ordini di libri all\'ingrosso, mantenendo sempre i più alti standard di qualità e professionalità.'
      }
    }
  },

  // Services
  services: {
    main: {
      metaTitle: {
        en: 'Our B2B Publishing Services | MAX PUBLISHING SRL',
        it: 'I Nostri Servizi Editoriali B2B | MAX PUBLISHING SRL'
      },
      headerTitle: {
        en: 'Our Services',
        it: 'I Nostri Servizi'
      },
      introText: {
        en: 'MAX PUBLISHING SRL offers a comprehensive suite of B2B publishing services designed to meet the diverse needs of businesses, institutions, and organizations. From concept to distribution, we provide end-to-end solutions that ensure your publishing projects succeed.',
        it: 'MAX PUBLISHING SRL offre una suite completa di servizi editoriali B2B progettati per soddisfare le diverse esigenze di aziende, istituzioni e organizzazioni. Dal concept alla distribuzione, forniamo soluzioni end-to-end che garantiscono il successo dei vostri progetti editoriali.'
      }
    },
    publishing: {
      title: { en: 'Publishing Services', it: 'Servizi Editoriali' },
      titleShort: { en: 'Publishing Services', it: 'Servizi Editoriali' },
      descriptionShort: {
        en: 'From manuscript to market, we provide end-to-end editorial and production services.',
        it: 'Dal manoscritto al mercato, forniamo servizi editoriali e di produzione end-to-end.'
      },
      metaTitle: {
        en: 'Publishing Services | MAX PUBLISHING SRL',
        it: 'Servizi Editoriali | MAX PUBLISHING SRL'
      },
      introText: {
        en: 'MAX PUBLISHING SRL offers comprehensive publishing solutions tailored to meet the unique needs of businesses and organizations. Our expert team guides you through every stage of the publishing process, ensuring exceptional results that align with your goals.',
        it: 'MAX PUBLISHING SRL offre soluzioni editoriali complete su misura per soddisfare le esigenze uniche di aziende e organizzazioni. Il nostro team di esperti vi guida attraverso ogni fase del processo editoriale, garantendo risultati eccezionali allineati ai vostri obiettivi.'
      },
      subServices: {
        custom: {
          title: {
            en: 'Custom Publishing & Bespoke Projects',
            it: 'Editoria Personalizzata e Progetti Su Misura'
          },
          description: {
            en: 'Tailored publishing solutions for corporate histories, annual reports, branded content, and special projects that reflect your organization\'s unique identity and objectives.',
            it: 'Soluzioni editoriali su misura per storie aziendali, relazioni annuali, contenuti di marca e progetti speciali che riflettono l\'identità e gli obiettivi unici della vostra organizzazione.'
          }
        },
        editorialProduction: {
          title: {
            en: 'Editorial & Production Services',
            it: 'Servizi Editoriali e di Produzione'
          },
          description: {
            en: 'Complete editorial services including manuscript evaluation, developmental editing, copyediting, proofreading, design, typesetting, and print production management.',
            it: 'Servizi editoriali completi inclusi valutazione del manoscritto, editing di sviluppo, copyediting, correzione di bozze, design, impaginazione e gestione della produzione di stampa.'
          }
        },
        translation: {
          title: {
            en: 'Translation & Localization',
            it: 'Traduzione e Localizzazione'
          },
          description: {
            en: 'Professional translation services for books, manuals, and corporate publications. We ensure cultural appropriateness and maintain the original tone and intent across languages.',
            it: 'Servizi di traduzione professionale per libri, manuali e pubblicazioni aziendali. Garantiamo l\'appropriatezza culturale e manteniamo il tono e l\'intento originali attraverso le lingue.'
          }
        },
        contentDev: {
          title: {
            en: 'Content Development & Corporate Publishing',
            it: 'Sviluppo Contenuti ed Editoria Aziendale'
          },
          description: {
            en: 'Strategic content creation for training materials, technical documentation, marketing collateral, and thought leadership publications that enhance your brand authority.',
            it: 'Creazione strategica di contenuti per materiali di formazione, documentazione tecnica, materiale di marketing e pubblicazioni di thought leadership che migliorano l\'autorità del vostro marchio.'
          }
        }
      },
      cta: {
        text: {
          en: 'Request a Quote for Publishing Services',
          it: 'Richiedi un Preventivo per Servizi Editoriali'
        },
        emailSubject: {
          en: 'Quote Request: Publishing Services',
          it: 'Richiesta Preventivo: Servizi Editoriali'
        }
      }
    },
    bulkSales: {
      title: {
        en: 'Bulk & Corporate Sales',
        it: 'Vendite all\'Ingrosso e Aziendali'
      },
      titleShort: {
        en: 'Bulk & Corporate Sales',
        it: 'Vendite all\'Ingrosso'
      },
      descriptionShort: {
        en: 'Volume purchasing solutions for businesses, educational institutions, and organizations.',
        it: 'Soluzioni di acquisto in volume per aziende, istituzioni educative e organizzazioni.'
      },
      metaTitle: {
        en: 'Bulk & Corporate Sales | MAX PUBLISHING SRL',
        it: 'Vendite all\'Ingrosso e Aziendali | MAX PUBLISHING SRL'
      },
      introText: {
        en: 'MAX PUBLISHING SRL provides flexible bulk purchasing options for businesses, educational institutions, libraries, and organizations. Whether you need books for corporate training, educational programs, or promotional purposes, we offer competitive pricing and customized solutions.',
        it: 'MAX PUBLISHING SRL fornisce opzioni di acquisto all\'ingrosso flessibili per aziende, istituzioni educative, biblioteche e organizzazioni. Che abbiate bisogno di libri per formazione aziendale, programmi educativi o scopi promozionali, offriamo prezzi competitivi e soluzioni personalizzate.'
      },
      benefits: {
        title: {
          en: 'Key Benefits',
          it: 'Vantaggi Principali'
        },
        points: [
          {
            en: 'Competitive Pricing: Significant discounts on volume orders with flexible pricing tiers',
            it: 'Prezzi Competitivi: Sconti significativi sugli ordini in volume con livelli di prezzo flessibili'
          },
          {
            en: 'Dedicated Account Management: Personal support throughout the ordering and fulfillment process',
            it: 'Gestione Account Dedicata: Supporto personale durante tutto il processo di ordine e consegna'
          },
          {
            en: 'Customized Solutions: Branded covers, special editions, and custom packaging options',
            it: 'Soluzioni Personalizzate: Copertine brandizzate, edizioni speciali e opzioni di packaging personalizzato'
          },
          {
            en: 'Efficient Fulfillment: Streamlined logistics for timely delivery to single or multiple locations',
            it: 'Consegna Efficiente: Logistica ottimizzata per consegne puntuali a singole o multiple destinazioni'
          }
        ]
      },
      cta: {
        text: {
          en: 'Get a Quote for Your Bulk Order',
          it: 'Richiedi un Preventivo per il Tuo Ordine all\'Ingrosso'
        },
        emailSubject: {
          en: 'Quote Request: Bulk Order',
          it: 'Richiesta Preventivo: Ordine all\'Ingrosso'
        }
      }
    },
    rightsLicensing: {
      title: {
        en: 'Rights & Licensing',
        it: 'Diritti e Licenze'
      },
      titleShort: {
        en: 'Rights & Licensing',
        it: 'Diritti e Licenze'
      },
      descriptionShort: {
        en: 'Comprehensive rights management and licensing services for publishers and content owners.',
        it: 'Servizi completi di gestione dei diritti e licenze per editori e proprietari di contenuti.'
      },
      metaTitle: {
        en: 'Rights & Licensing Services | MAX PUBLISHING SRL',
        it: 'Servizi di Diritti e Licenze | MAX PUBLISHING SRL'
      },
      introText: {
        en: 'MAX PUBLISHING SRL offers expert rights management and licensing services to help publishers, authors, and content owners maximize the value of their intellectual property. We facilitate rights transactions across multiple formats, languages, and territories.',
        it: 'MAX PUBLISHING SRL offre servizi esperti di gestione dei diritti e licenze per aiutare editori, autori e proprietari di contenuti a massimizzare il valore della loro proprietà intellettuale. Facilitiamo transazioni di diritti attraverso molteplici formati, lingue e territori.'
      },
      subServices: {
        translation: {
          title: {
            en: 'Translation Rights',
            it: 'Diritti di Traduzione'
          },
          description: {
            en: 'Management of translation rights for books and content across multiple languages and territories, ensuring maximum reach and revenue potential.',
            it: 'Gestione dei diritti di traduzione per libri e contenuti attraverso molteplici lingue e territori, garantendo massima portata e potenziale di ricavo.'
          }
        },
        reprint: {
          title: {
            en: 'Reprint Permissions',
            it: 'Permessi di Ristampa'
          },
          description: {
            en: 'Handling reprint and excerpt permissions for academic, educational, and commercial use, with clear licensing terms and efficient processing.',
            it: 'Gestione dei permessi di ristampa ed estratti per uso accademico, educativo e commerciale, con termini di licenza chiari ed elaborazione efficiente.'
          }
        },
        digital: {
          title: {
            en: 'Digital Licensing',
            it: 'Licenze Digitali'
          },
          description: {
            en: 'E-book, audiobook, and digital content licensing arrangements for various platforms and distribution channels.',
            it: 'Accordi di licenza per e-book, audiolibri e contenuti digitali per varie piattaforme e canali di distribuzione.'
          }
        },
        territorial: {
          title: {
            en: 'Territorial Rights',
            it: 'Diritti Territoriali'
          },
          description: {
            en: 'Strategic management of geographical rights to optimize market coverage and prevent conflicts between different editions.',
            it: 'Gestione strategica dei diritti geografici per ottimizzare la copertura del mercato e prevenire conflitti tra diverse edizioni.'
          }
        },
        adaptation: {
          title: {
            en: 'Adaptation Rights',
            it: 'Diritti di Adattamento'
          },
          description: {
            en: 'Licensing for adaptations including film, television, theater, and other media formats, maximizing content value across platforms.',
            it: 'Licenze per adattamenti inclusi film, televisione, teatro e altri formati multimediali, massimizzando il valore dei contenuti attraverso le piattaforme.'
          }
        }
      },
      cta: {
        text: {
          en: 'Inquire About Rights & Licensing',
          it: 'Informazioni su Diritti e Licenze'
        },
        emailSubject: {
          en: 'Inquiry: Rights & Licensing',
          it: 'Richiesta: Diritti e Licenze'
        }
      }
    }
  },

  // Contact Page
  contact: {
    metaTitle: {
      en: 'Contact Us | MAX PUBLISHING SRL',
      it: 'Contattaci | MAX PUBLISHING SRL'
    },
    headerTitle: {
      en: 'Contact Us',
      it: 'Contattaci'
    },
    description: {
      en: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      it: 'Ci piacerebbe sentirti. Inviaci un messaggio e ti risponderemo il prima possibile.'
    },
    form: {
      title: {
        en: 'Send us a Message',
        it: 'Inviaci un Messaggio'
      },
      nameLabel: {
        en: 'Name',
        it: 'Nome'
      },
      namePlaceholder: {
        en: 'Your full name',
        it: 'Il tuo nome completo'
      },
      emailLabel: {
        en: 'Email',
        it: 'Email'
      },
      emailPlaceholder: {
        en: 'your.email@example.com',
        it: 'tua.email@esempio.com'
      },
      companyLabel: {
        en: 'Company (Optional)',
        it: 'Azienda (Opzionale)'
      },
      companyPlaceholder: {
        en: 'Your company name',
        it: 'Nome della tua azienda'
      },
      subjectLabel: {
        en: 'Subject',
        it: 'Oggetto'
      },
      selectSubject: {
        en: 'Select a subject',
        it: 'Seleziona un oggetto'
      },
      subjects: {
        general: { en: 'General Inquiry', it: 'Richiesta Generale' },
        publishing: { en: 'Publishing Services', it: 'Servizi Editoriali' },
        bulk: { en: 'Bulk Orders', it: 'Ordini all\'Ingrosso' },
        rights: { en: 'Rights & Licensing', it: 'Diritti e Licenze' },
        partnership: { en: 'Partnership Opportunities', it: 'Opportunità di Partnership' },
        other: { en: 'Other', it: 'Altro' }
      },
      messageLabel: {
        en: 'Message',
        it: 'Messaggio'
      },
      messagePlaceholder: {
        en: 'Please describe your inquiry in detail...',
        it: 'Descrivi la tua richiesta in dettaglio...'
      },
      submitButton: {
        en: 'Send Message',
        it: 'Invia Messaggio'
      },
      submitting: {
        en: 'Sending...',
        it: 'Invio...'
      },
      emailSubject: {
        en: 'Website Inquiry',
        it: 'Richiesta dal Sito Web'
      },
      mailtoDisclaimer: {
        en: 'Please note: Clicking \'Submit\' will open your default email application to send your message.',
        it: 'Nota: Cliccando \'Invia\' si aprirà la tua applicazione email predefinita per inviare il messaggio.'
      }
    },
    info: {
      title: {
        en: 'Get in Touch',
        it: 'Contattaci'
      },
      generalEmail: {
        title: { en: 'General Inquiries', it: 'Richieste Generali' },
        description: { en: 'For all inquiries and information', it: 'Per informazioni e richieste di carattere generale' }
      },
      registeredOffice: {
        title: { en: 'Registered Office', it: 'Sede Legale' }
      },
      operationalOffice: {
        title: { en: 'Operational Office', it: 'Sede Operativa' }
      }
    }
  },

  // Portfolio (Optional)
  portfolio: {
    metaTitle: {
      en: 'Our Work | MAX PUBLISHING SRL',
      it: 'I Nostri Lavori | MAX PUBLISHING SRL'
    },
    headerTitle: {
      en: 'Portfolio',
      it: 'Portfolio'
    },
    introText: {
      en: 'Explore a selection of our successful publishing projects and partnerships.',
      it: 'Esplora una selezione dei nostri progetti editoriali di successo e partnership.'
    },
    caseStudy: {
      clientTypeLabel: { en: 'Client Type', it: 'Tipo di Cliente' },
      challengeLabel: { en: 'Challenge', it: 'Sfida' },
      solutionLabel: { en: 'Our Solution', it: 'La Nostra Soluzione' },
      outcomeLabel: { en: 'Results', it: 'Risultati' }
    }
  }
} 