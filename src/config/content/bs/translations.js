// =============================================================================
// BOSNIAN TRANSLATIONS
// =============================================================================
// This file contains all Bosnian translations for the portfolio website.
// Each section corresponds to a specific page or component in the application.
// Organized to match the visual hierarchy of the website for easier maintenance.

export const translationsBs = {
  // =============================================================================
  // GLOBAL NAVIGATION & COMMON ELEMENTS
  // =============================================================================
  // These elements appear across multiple pages and components
  // Includes main navigation items and commonly used messages
  
  nav: {
    // Main navigation menu items
    // Used in Navbar.js and mobile menu
    home: 'Početna',
    about: 'O meni',
    projects: 'Projekti',
    articles: 'Članci',
    contact: 'Kontakt',
    menu: 'Meni'
  },

  common: {
    // Shared UI elements and messages
    // Used throughout the application for consistent messaging
    loading: 'Učitavanje...',
    error: 'Greška',
    notFound: 'Nije pronađeno'
  },

  // =============================================================================
  // HOME PAGE
  // =============================================================================
  // Main landing page content
  // Located in src/pages/Home.js
  
  home: {
    // ---------------------------------------------
    // Hero Section - Main Introduction Area
    // ---------------------------------------------
    // Primary content visitors see when landing on the site
    // Includes personal introduction and call-to-action buttons
    greeting: 'Pozdrav_',
    intro: 'Ja sam',
    role: 'medijski profesionalac',
    description: 'dijelim važne ideje i priče',
    viewWork: 'Pogledaj radove',
    getInTouch: 'Kontaktiraj me',

    // ---------------------------------------------
    // Featured Content Section
    // ---------------------------------------------
    // Showcases recent articles and media presence
    // Provides quick access to key content sections
    featuredArticles: 'Izdvojeni članci',
    viewAllArticles: 'Svi članci',
    mediaPresence: 'Medijsko prisustvo',
    speakingEngagements: 'Javni nastupi',
    viewSchedule: 'Raspored',
    
    // ---------------------------------------------
    // Press Kit Quick Access
    // ---------------------------------------------
    // Quick links to press resources and latest publications
    // Helps journalists and media professionals find relevant information
    pressKit: 'Press kit',
    downloadPressKit: 'Preuzmi press kit',
    latestPublications: 'Najnovije publikacije',
    viewPublication: 'Pročitaj publikaciju'
  },

  // =============================================================================
  // PRESS KIT PAGE
  // =============================================================================
  // Press resources and media information
  // Located in src/pages/PressKit.js
  
  press: {
    // ---------------------------------------------
    // Page Header
    // ---------------------------------------------
    // Main introduction and overview of press resources
    title: 'Press kit',
    subtitle: 'Medijski resursi',
    description: 'Sve što je potrebno za medijsko pokrivanje: biografija, fotografije i materijali o brendu.',

    // ---------------------------------------------
    // Quick Facts Panel
    // ---------------------------------------------
    // Key information about professional background
    // Used by journalists for quick reference
    quickFacts: 'Brze činjenice',
    facts: {
      experience: '15+ godina iskustva u novinarstvu i medijima',
      expertise: 'Specijalizacija u tehnologiji, kulturi i društvenom uticaju',
      languages: 'Intervjui dostupni na engleskom, turskom, ruskom, hrvatskom i bosanskom jeziku',
      location: 'Baza u [Lokacija], dostupan za globalne događaje'
    },

    // ---------------------------------------------
    // Downloadable Resources Section
    // ---------------------------------------------
    // Collection of press materials and assets
    // Includes biographies, photos, and branding materials
    downloads: 'Materijali za preuzimanje',
    biography: {
      short: 'Kratka biografija',
      shortDesc: 'Sažeta profesionalna biografija od 100 riječi',
      full: 'Puna biografija',
      fullDesc: 'Detaljne informacije o karijeri i postignućima'
    },
    photos: {
      headshots: 'Profesionalne fotografije',
      headshotsDesc: 'Portretne i reportažne fotografije visoke rezolucije'
    },
    brandAssets: 'Materijali o brendu',
    brandAssetsDesc: 'Logotipi, paleta boja i vodič za stil',
    download: 'Preuzmi',

    // ---------------------------------------------
    // Media Appearances Grid
    // ---------------------------------------------
    // Recent interviews, podcasts, and panel discussions
    // Showcases media presence and expertise
    recentAppearances: 'Nedavni medijski nastupi',
    recentAppearance1: {
      title: 'Budućnost digitalnog novinarstva',
      outlet: 'Tech Insights Podcast',
      date: 'Mart 2024'
    },
    recentAppearance2: {
      title: 'Biti Erasmus+ student na Univerzitetu Galata u Istanbulu',
      outlet: 'Digital Today Magazine',
      date: 'Februar 2024'
    },
    viewAppearance: 'Pogledaj nastup',

    // ---------------------------------------------
    // Press Contact Section
    // ---------------------------------------------
    // Contact information for media inquiries
    // Direct line for journalists and event organizers
    contactTitle: 'Kontakt za medije',
    contactDescription: 'Za medijske upite i zahtjeve za intervjue, molimo kontaktirajte nas.',
    contactButton: 'Kontaktiraj press službu',

    // ---------------------------------------------
    // Media Appearance Details
    // ---------------------------------------------
    // Individual media appearance pages
    // Includes video embeds and appearance information
    appearance1: {
      description: 'Dubinska diskusija o novim trendovima u digitalnom novinarstvu, uključujući integraciju AI-a, pripovijedanje zasnovano na podacima i budućnost industrije vijesti.',
      type: 'Video intervju',
      videoUrl: 'https://www.youtube.com/embed/example1'
    },
    appearance2: {
      description: 'Istraživanje najnovijih razvoja u medijskim tehnologijama, strategijama angažmana publike i evoluciji konzumacije sadržaja.',
      type: 'Panel diskusija',
      videoUrl: 'https://www.youtube.com/embed/kQsJYN2ofE0'
    },

    // ---------------------------------------------
    // Navigation Elements
    // ---------------------------------------------
    // Navigation links and buttons for press section
    backToPress: 'Natrag na press kit',
    watchAppearance: 'Pogledaj nastup'
  },

  // =============================================================================
  // SPEAKING PAGE
  // =============================================================================
  // Speaking engagements and event information
  // Located in src/pages/Speaking.js
  
  speaking: {
    // ---------------------------------------------
    // Page Header
    // ---------------------------------------------
    // Overview of speaking services and expertise
    title: 'Javni nastupi',
    description: 'Dostupan za keynote prezentacije, panel diskusije i radionice o medijima, tehnologiji i društvenom uticaju.',

    // ---------------------------------------------
    // Speaking Topics Grid
    // ---------------------------------------------
    // Key areas of expertise and speaking topics
    // Helps event organizers understand speaking capabilities
    topicsTitle: 'Teme izlaganja',
    topic1: {
      title: 'Budućnost digitalnih medija',
      description: 'Istraživanje novih trendova i tehnologija koji oblikuju moderno novinarstvo'
    },
    topic2: {
      title: 'Međukulturalna komunikacija',
      description: 'Prevazilaženje kulturnih barijera kroz efikasno pripovijedanje'
    },

    // ---------------------------------------------
    // Events Calendar Section
    // ---------------------------------------------
    // Upcoming and past speaking engagements
    // Showcases speaking experience and future availability
    eventsTitle: 'Kalendar događaja',
    upcomingEvents: 'Predstojeći',
    pastEvents: 'Prošli događaji',
    event1: {
      title: 'Digital Media Summit 2024',
      date: '15.-17. juna 2024.',
      location: 'London, UK',
      type: 'Keynote prezentacija',
      description: 'Predstavljanje uvida o evoluciji digitalnog novinarstva'
    },
    event2: {
      title: 'Global Journalism Forum',
      date: '8.-10. jula 2024.',
      location: 'Berlin, Njemačka',
      type: 'Panel diskusija',
      description: 'Učešće u panelu o međukulturalnom novinarstvu'
    },
    pastEvent1: {
      title: 'Konferencija o medijskim inovacijama',
      date: 'Januar 2024',
      location: 'Virtualni događaj',
      type: 'Radionica',
      recording: 'Pogledaj snimak'
    },

    // ---------------------------------------------
    // Booking Section
    // ---------------------------------------------
    // Information for booking speaking engagements
    // Includes call-to-action for event organizers
    registerNow: 'Registruj se',
    watchRecording: 'Pogledaj snimak',
    bookingTitle: 'Rezerviši za svoj događaj',
    bookingDescription: 'Zanima vas moje učešće na vašem događaju? Javite se za provjeru dostupnosti i uslove.',
    bookNow: 'Rezerviši sad',

    // ---------------------------------------------
    // Recording Page Elements
    // ---------------------------------------------
    // Components for event recording pages
    // Used in individual event recording views
    recording: {
      subtitle: 'Snimak događaja',
      aboutEvent: 'O ovom događaju',
      watchFullRecording: 'Pogledaj cijeli snimak'
    },
    backToEvents: '← Natrag na događaje'
  },

  // =============================================================================
  // ABOUT PAGE
  // =============================================================================
  // Professional background and expertise
  // Located in src/pages/About.js
  
  about: {
    // ---------------------------------------------
    // Page Header
    // ---------------------------------------------
    // Personal introduction and overview
    title: 'O meni',
    subtitle: 'Moj put',
    downloadResume: 'Preuzmi CV',
    professionalOverview: 'Profesionalni pregled',
    contact: 'Kontakt',

    // ---------------------------------------------
    // Skills & Expertise Section
    // ---------------------------------------------
    // Professional capabilities and specializations
    // Organized by area of expertise
    skills: {
      title: 'Ekspertiza',
      areas: 'Područja specijalizacije',
      writing: 'Pisanje i uređivanje',
      speaking: 'Javni nastupi',
      media: 'Odnosi s medijima',
      digital: 'Digitalni mediji',
      research: 'Istraživanje',
      tools: 'Alati i platforme'
    },

    // ---------------------------------------------
    // Professional Timeline
    // ---------------------------------------------
    // Career progression and achievements
    experience: {
      title: 'Profesionalni put',
      present: 'Danas'
    },

    // ---------------------------------------------
    // Additional Sections
    // ---------------------------------------------
    // Supplementary professional information
    // Includes education, awards, and interests
    education: {
      title: 'Obrazovanje'
    },
    awards: {
      title: 'Nagrade i priznanja'
    },
    publications: {
      title: 'Publikacije'
    },
    interests: {
      title: 'Područja interesa'
    },
    hobbies: {
      title: 'Lični interesi'
    },
    volunteerWork: {
      title: 'Volonterski rad'
    }
  },

  // =============================================================================
  // PROJECTS PAGE
  // =============================================================================
  // Showcase of professional projects and work
  // Located in src/pages/Projects.js
  
  projects: {
    // ---------------------------------------------
    // Project Display Elements
    // ---------------------------------------------
    // UI elements for project showcase
    title: 'Izdvojeni radovi',
    viewProject: 'Pogledaj projekat',
    viewLive: 'Pogledaj uživo',
    viewDetails: 'Više detalja',
    impact: 'Uticaj',
    highlights: 'Ključne tačke'
  },

  // =============================================================================
  // ARTICLES PAGE
  // =============================================================================
  // Collection of written content and publications
  // Located in src/pages/Articles.js
  
  articles: {
    // ---------------------------------------------
    // Page Header
    // ---------------------------------------------
    // Main article section introduction
    title: 'Članci',
    subtitle: 'Uvidi i priče',
    readMore: 'Pročitaj više',
    backToArticles: '← Natrag na članke',

    // ---------------------------------------------
    // Article Metadata
    // ---------------------------------------------
    // Information displayed with each article
    // Used in article cards and detail views
    publishedOn: 'Objavljeno',
    readTime: 'Vrijeme čitanja',
    author: 'Autor',
    tags: 'Teme',
    relatedArticles: 'Povezani članci',

    // ---------------------------------------------
    // Search & Filter Interface
    // ---------------------------------------------
    // Tools for finding and organizing articles
    // Includes search, categories, and sorting options
    searchPlaceholder: 'Pretraži članke...',
    noResults: 'Nisu pronađeni članci',
    categories: {
      all: 'Sve',
      journalism: 'Novinarstvo',
      opinion: 'Mišljenje',
      analysis: 'Analiza',
      features: 'Reportaže'
    },
    filter: {
      title: 'Filter',
      sortBy: 'Sortiraj po',
      latest: 'Najnovije',
      oldest: 'Najstarije',
      popular: 'Popularno'
    }
  },

  // =============================================================================
  // CONTACT PAGE
  // =============================================================================
  // Contact information and communication forms
  // Located in src/pages/Contact.js
  
  contact: {
    // ---------------------------------------------
    // Page Header
    // ---------------------------------------------
    // Contact section introduction
    title: 'Kontakt',
    subtitle: 'Povežimo se',
    description: 'Imate pitanja ili prijedloge? Slobodno se javite!',

    // ---------------------------------------------
    // Contact Form Labels & Placeholders
    // ---------------------------------------------
    // Form elements for contact submission
    // Includes validation messages and feedback
    form: {
      name: 'Ime',
      email: 'Email',
      subject: 'Predmet',
      message: 'Poruka',
      send: 'Pošalji',
      namePlaceholder: 'Vaše ime',
      emailPlaceholder: 'Vaša email adresa',
      subjectPlaceholder: 'Predmet poruke',
      messagePlaceholder: 'Vaša poruka...',
      success: 'Hvala! Vaša poruka je poslana.',
      error: 'Izvinjavamo se, došlo je do greške. Molimo pokušajte ponovo kasnije.',
      required: 'Obavezno polje'
    },

    // ---------------------------------------------
    // Social Media Section
    // ---------------------------------------------
    // Links to social media profiles
    // Provides alternative contact methods
    socialLinks: {
      title: 'Društvene mreže',
      followMe: 'Pratite me na društvenim mrežama'
    },

    // ---------------------------------------------
    // Location Information
    // ---------------------------------------------
    // Physical location and address details
    location: {
      title: 'Lokacija',
      address: 'Adresa'
    }
  }
}; 