// =============================================================================
// TURKISH TRANSLATIONS
// =============================================================================
// This file contains all Turkish translations for the portfolio website.
// Each section corresponds to a specific page or component in the application.
// Organized to match the visual hierarchy of the website for easier maintenance.

export const translationsTr = {
  // =============================================================================
  // GLOBAL NAVIGATION & COMMON ELEMENTS
  // =============================================================================
  // These elements appear across multiple pages and components
  // Includes main navigation items and commonly used messages
  
  nav: {
    // Main navigation menu items
    // Used in Navbar.js and mobile menu
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    projects: 'Projeler',
    articles: 'Makaleler',
    contact: 'İletişim',
    menu: 'Menü'
  },

  common: {
    // Shared UI elements and messages
    // Used throughout the application for consistent messaging
    loading: 'Yükleniyor...',
    error: 'Hata',
    notFound: 'Bulunamadı'
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
    greeting: 'Merhaba_',
    intro: 'Ben',
    role: 'bir Medya Profesyoneliyim',
    description: 'önemli içgörüler ve hikayeler paylaşıyorum',
    viewWork: 'Çalışmalarımı Gör',
    getInTouch: 'İletişime Geç',

    // ---------------------------------------------
    // Featured Content Section
    // ---------------------------------------------
    // Showcases recent articles and media presence
    // Provides quick access to key content sections
    featuredArticles: 'Öne Çıkan Makaleler',
    viewAllArticles: 'Tüm Makaleleri Gör',
    mediaPresence: 'Medya Varlığı',
    speakingEngagements: 'Konuşma Etkinlikleri',
    viewSchedule: 'Programı Gör',
    
    // ---------------------------------------------
    // Press Kit Quick Access
    // ---------------------------------------------
    // Quick links to press resources and latest publications
    // Helps journalists and media professionals find relevant information
    pressKit: 'Basın Kiti',
    downloadPressKit: 'Basın Kitini İndir',
    latestPublications: 'Son Yayınlar',
    viewPublication: 'Yayını Oku'
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
    title: 'Basın Kiti',
    subtitle: 'Medya Kaynakları',
    description: 'Medya kapsamı için ihtiyacınız olan her şey: biyografi, fotoğraflar ve marka varlıkları.',

    // ---------------------------------------------
    // Quick Facts Panel
    // ---------------------------------------------
    // Key information about professional background
    // Used by journalists for quick reference
    quickFacts: 'Hızlı Bilgiler',
    facts: {
      experience: '15+ yıllık gazetecilik ve medya deneyimi',
      expertise: 'Teknoloji, kültür ve sosyal etki alanlarında uzmanlaşma',
      languages: 'İngilizce, Türkçe, Rusça, Hırvatça ve Boşnakça röportaj imkanı',
      location: '[Konum] merkezli, global etkinliklere açık'
    },

    // ---------------------------------------------
    // Downloadable Resources Section
    // ---------------------------------------------
    // Collection of press materials and assets
    // Includes biographies, photos, and branding materials
    downloads: 'İndirilebilir Kaynaklar',
    biography: {
      short: 'Kısa Biyografi',
      shortDesc: 'Özlü 100 kelimelik profesyonel biyografi',
      full: 'Tam Biyografi',
      fullDesc: 'Kapsamlı geçmiş ve kariyer öne çıkanları'
    },
    photos: {
      headshots: 'Profesyonel Fotoğraflar',
      headshotsDesc: 'Yüksek çözünürlüklü portre ve aksiyon fotoğrafları'
    },
    brandAssets: 'Marka Varlıkları',
    brandAssetsDesc: 'Logolar, renk paleti ve stil kılavuzu',
    download: 'İndir',

    // ---------------------------------------------
    // Media Appearances Grid
    // ---------------------------------------------
    // Recent interviews, podcasts, and panel discussions
    // Showcases media presence and expertise
    recentAppearances: 'Son Medya Görünümleri',
    recentAppearance1: {
      title: 'Dijital Gazeteciliğin Geleceği',
      outlet: 'Tech Insights Podcast',
      date: 'Mart 2024'
    },
    recentAppearance2: {
      title: 'İstanbul Galata Üniversitesinde Erasmus+ Değişim Öğrencisi Olmak',
      outlet: 'Digital Today Magazine',
      date: 'Şubat 2024'
    },
    viewAppearance: 'Görünümü İzle',

    // ---------------------------------------------
    // Press Contact Section
    // ---------------------------------------------
    // Contact information for media inquiries
    // Direct line for journalists and event organizers
    contactTitle: 'Basın İletişim',
    contactDescription: 'Medya sorguları ve röportaj talepleri için lütfen iletişime geçin.',
    contactButton: 'Basın Ofisiyle İletişime Geç',

    // ---------------------------------------------
    // Media Appearance Details
    // ---------------------------------------------
    // Individual media appearance pages
    // Includes video embeds and appearance information
    appearance1: {
      description: 'Dijital gazetecilikteki yeni trendler, yapay zeka entegrasyonu, veri odaklı hikaye anlatımı ve haberciliğin geleceği üzerine derinlemesine bir tartışma.',
      type: 'Video Röportaj',
      videoUrl: 'https://www.youtube.com/embed/example1'
    },
    appearance2: {
      description: 'Medya teknolojisindeki son gelişmeler, izleyici etkileşim stratejileri ve içerik tüketim modellerinin evrimi üzerine inceleme.',
      type: 'Panel Tartışması',
      videoUrl: 'https://www.youtube.com/embed/kQsJYN2ofE0'
    },

    // ---------------------------------------------
    // Navigation Elements
    // ---------------------------------------------
    // Navigation links and buttons for press section
    backToPress: 'Basın Kitine Dön',
    watchAppearance: 'Görünümü İzle'
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
    title: 'Konuşma Etkinlikleri',
    description: 'Medya, teknoloji ve kültürel etki konularında keynote konuşmaları, panel ve çalıştaylar için müsait.',

    // ---------------------------------------------
    // Speaking Topics Grid
    // ---------------------------------------------
    // Key areas of expertise and speaking topics
    // Helps event organizers understand speaking capabilities
    topicsTitle: 'Konuşma Konuları',
    topic1: {
      title: 'Dijital Medyanın Geleceği',
      description: 'Modern gazeteciliği şekillendiren yeni trendler ve teknolojileri keşfetmek'
    },
    topic2: {
      title: 'Kültürlerarası İletişim',
      description: 'Etkili hikaye anlatımı ile kültürel boşlukları köprülemek'
    },

    // ---------------------------------------------
    // Events Calendar Section
    // ---------------------------------------------
    // Upcoming and past speaking engagements
    // Showcases speaking experience and future availability
    eventsTitle: 'Konuşma Takvimi',
    upcomingEvents: 'Yaklaşan',
    pastEvents: 'Geçmiş Etkinlikler',
    event1: {
      title: 'Dijital Medya Zirvesi 2024',
      date: '15-17 Haziran 2024',
      location: 'Londra, İngiltere',
      type: 'Keynote Konuşması',
      description: 'Dijital gazeteciliğin evrimi hakkında içgörüler'
    },
    event2: {
      title: 'Global Gazetecilik Forumu',
      date: '8-10 Temmuz 2024',
      location: 'Berlin, Almanya',
      type: 'Panel Tartışması',
      description: 'Kültürlerarası habercilik üzerine bir panel'
    },
    pastEvent1: {
      title: 'Medya İnovasyon Konferansı',
      date: 'Ocak 2024',
      location: 'Sanal Etkinlik',
      type: 'Çalıştay',
      recording: 'Kaydı İzle'
    },

    // ---------------------------------------------
    // Booking Section
    // ---------------------------------------------
    // Information for booking speaking engagements
    // Includes call-to-action for event organizers
    registerNow: 'Şimdi Kayıt Ol',
    watchRecording: 'Kaydı İzle',
    bookingTitle: 'Etkinliğiniz İçin Rezervasyon',
    bookingDescription: 'Etkinliğinizde konuşmacı olarak yer almamı ister misiniz? Müsaitlik ve ücretler için iletişime geçin.',
    bookNow: 'Hemen Rezervasyon Yap',

    // ---------------------------------------------
    // Recording Page Elements
    // ---------------------------------------------
    // Components for event recording pages
    // Used in individual event recording views
    recording: {
      subtitle: 'Etkinlik Kaydı',
      aboutEvent: 'Bu Etkinlik Hakkında',
      watchFullRecording: 'Tam Kaydı İzle'
    },
    backToEvents: '← Etkinliklere Dön'
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
    title: 'Hakkımda',
    subtitle: 'Yolculuğum',
    downloadResume: 'CV İndir',
    professionalOverview: 'Profesyonel Genel Bakış',
    contact: 'İletişim',

    // ---------------------------------------------
    // Skills & Expertise Section
    // ---------------------------------------------
    // Professional capabilities and specializations
    // Organized by area of expertise
    skills: {
      title: 'Uzmanlık',
      areas: 'Odak Alanları',
      writing: 'Yazı ve Editörlük',
      speaking: 'Konuşmacılık',
      media: 'Medya İlişkileri',
      digital: 'Dijital Medya',
      research: 'Araştırma',
      tools: 'Araçlar ve Platformlar'
    },

    // ---------------------------------------------
    // Professional Timeline
    // ---------------------------------------------
    // Career progression and achievements
    experience: {
      title: 'Profesyonel Yolculuk',
      present: 'Günümüz'
    },

    // ---------------------------------------------
    // Additional Sections
    // ---------------------------------------------
    // Supplementary professional information
    // Includes education, awards, and interests
    education: {
      title: 'Eğitim'
    },
    awards: {
      title: 'Ödüller ve Tanınmalar'
    },
    publications: {
      title: 'Yayınlar'
    },
    interests: {
      title: 'İlgi Alanları'
    },
    hobbies: {
      title: 'Kişisel İlgi Alanları'
    },
    volunteerWork: {
      title: 'Toplum Katılımı'
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
    title: 'Öne Çıkan Çalışmalar',
    viewProject: 'Çalışmayı Gör',
    viewLive: 'Canlı Görüntüle',
    viewDetails: 'Detayları Gör',
    impact: 'Etki',
    highlights: 'Öne Çıkanlar'
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
    title: 'Makaleler',
    subtitle: 'İçgörüler ve Hikayeler',
    readMore: 'Devamını Oku',
    backToArticles: '← Makalelere Dön',

    // ---------------------------------------------
    // Article Metadata
    // ---------------------------------------------
    // Information displayed with each article
    // Used in article cards and detail views
    publishedOn: 'Yayın tarihi',
    readTime: 'Okuma süresi',
    author: 'Yazar',
    tags: 'Konular',
    relatedArticles: 'İlgili Makaleler',

    // ---------------------------------------------
    // Search & Filter Interface
    // ---------------------------------------------
    // Tools for finding and organizing articles
    // Includes search, categories, and sorting options
    searchPlaceholder: 'Makalelerde ara...',
    noResults: 'Makale bulunamadı',
    categories: {
      all: 'Tümü',
      journalism: 'Gazetecilik',
      opinion: 'Görüş',
      analysis: 'Analiz',
      features: 'Özellikler'
    },
    filter: {
      title: 'Filtrele',
      sortBy: 'Sıralama',
      latest: 'En Yeni',
      oldest: 'En Eski',
      popular: 'Popüler'
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
    title: 'İletişime Geç',
    subtitle: 'Bağlantı Kuralım',
    description: 'Sorularınız veya önerileriniz mi var? İletişime geçmekten çekinmeyin!',

    // ---------------------------------------------
    // Contact Form Labels & Placeholders
    // ---------------------------------------------
    // Form elements for contact submission
    // Includes validation messages and feedback
    form: {
      name: 'İsim',
      email: 'E-posta',
      subject: 'Konu',
      message: 'Mesaj',
      send: 'Gönder',
      namePlaceholder: 'Adınız',
      emailPlaceholder: 'E-posta adresiniz',
      subjectPlaceholder: 'Mesaj konusu',
      messagePlaceholder: 'Mesajınız...',
      success: 'Teşekkürler! Mesajınız gönderildi.',
      error: 'Üzgünüz, bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      required: 'Zorunlu alan'
    },

    // ---------------------------------------------
    // Social Media Section
    // ---------------------------------------------
    // Links to social media profiles
    // Provides alternative contact methods
    socialLinks: {
      title: 'Sosyal Medya',
      followMe: 'Sosyal medyada takip edin'
    },

    // ---------------------------------------------
    // Location Information
    // ---------------------------------------------
    // Physical location and address details
    location: {
      title: 'Konum',
      address: 'Adres'
    }
  }
}; 