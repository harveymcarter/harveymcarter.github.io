// =============================================================================
// RUSSIAN TRANSLATIONS
// =============================================================================
// This file contains all Russian translations for the portfolio website.
// Each section corresponds to a specific page or component in the application.
// Organized to match the visual hierarchy of the website for easier maintenance.

export const translationsRu = {
  // =============================================================================
  // GLOBAL NAVIGATION & COMMON ELEMENTS
  // =============================================================================
  // These elements appear across multiple pages and components
  // Includes main navigation items and commonly used messages
  
  nav: {
    // Main navigation menu items
    // Used in Navbar.js and mobile menu
    home: 'Главная',
    about: 'Обо мне',
    projects: 'Проекты',
    articles: 'Статьи',
    contact: 'Контакты',
    menu: 'Меню'
  },

  common: {
    // Shared UI elements and messages
    // Used throughout the application for consistent messaging
    loading: 'Загрузка...',
    error: 'Ошибка',
    notFound: 'Не найдено'
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
    greeting: 'Привет_',
    intro: 'Я',
    role: 'медиа-профессионал',
    description: 'делюсь важными идеями и историями',
    viewWork: 'Посмотреть работы',
    getInTouch: 'Связаться',

    // ---------------------------------------------
    // Featured Content Section
    // ---------------------------------------------
    // Showcases recent articles and media presence
    // Provides quick access to key content sections
    featuredArticles: 'Избранные статьи',
    viewAllArticles: 'Все статьи',
    mediaPresence: 'Медиа-присутствие',
    speakingEngagements: 'Выступления',
    viewSchedule: 'Расписание',
    
    // ---------------------------------------------
    // Press Kit Quick Access
    // ---------------------------------------------
    // Quick links to press resources and latest publications
    // Helps journalists and media professionals find relevant information
    pressKit: 'Пресс-кит',
    downloadPressKit: 'Скачать пресс-кит',
    latestPublications: 'Последние публикации',
    viewPublication: 'Читать публикацию'
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
    title: 'Пресс-кит',
    subtitle: 'Медиа-ресурсы',
    description: 'Всё необходимое для медиа-освещения: биография, фотографии и брендовые материалы.',

    // ---------------------------------------------
    // Quick Facts Panel
    // ---------------------------------------------
    // Key information about professional background
    // Used by journalists for quick reference
    quickFacts: 'Краткая информация',
    facts: {
      experience: '15+ лет опыта в журналистике и медиа',
      expertise: 'Специализация в технологиях, культуре и социальном влиянии',
      languages: 'Доступны интервью на английском, турецком, русском, хорватском и боснийском языках',
      location: 'База в [Локация], доступен для глобальных мероприятий'
    },

    // ---------------------------------------------
    // Downloadable Resources Section
    // ---------------------------------------------
    // Collection of press materials and assets
    // Includes biographies, photos, and branding materials
    downloads: 'Материалы для скачивания',
    biography: {
      short: 'Краткая биография',
      shortDesc: 'Лаконичная профессиональная биография в 100 слов',
      full: 'Полная биография',
      fullDesc: 'Подробная информация о карьере и достижениях'
    },
    photos: {
      headshots: 'Профессиональные фото',
      headshotsDesc: 'Портретные и репортажные фото в высоком разрешении'
    },
    brandAssets: 'Брендовые материалы',
    brandAssetsDesc: 'Логотипы, цветовая палитра и руководство по стилю',
    download: 'Скачать',

    // ---------------------------------------------
    // Media Appearances Grid
    // ---------------------------------------------
    // Recent interviews, podcasts, and panel discussions
    // Showcases media presence and expertise
    recentAppearances: 'Недавние медиа-выступления',
    recentAppearance1: {
      title: 'Будущее цифровой журналистики',
      outlet: 'Tech Insights Podcast',
      date: 'Март 2024'
    },
    recentAppearance2: {
      title: 'Быть студентом по обмену Erasmus+ в Стамбульском университете Галата',
      outlet: 'Digital Today Magazine',
      date: 'Февраль 2024'
    },
    viewAppearance: 'Смотреть выступление',

    // ---------------------------------------------
    // Press Contact Section
    // ---------------------------------------------
    // Contact information for media inquiries
    // Direct line for journalists and event organizers
    contactTitle: 'Контакты для прессы',
    contactDescription: 'По вопросам СМИ и запросам на интервью, пожалуйста, свяжитесь с нами.',
    contactButton: 'Связаться с пресс-службой',

    // ---------------------------------------------
    // Media Appearance Details
    // ---------------------------------------------
    // Individual media appearance pages
    // Includes video embeds and appearance information
    appearance1: {
      description: 'Глубокое обсуждение новых тенденций в цифровой журналистике, включая интеграцию ИИ, повествование на основе данных и будущее новостной индустрии.',
      type: 'Видео-интервью',
      videoUrl: 'https://www.youtube.com/embed/example1'
    },
    appearance2: {
      description: 'Исследование последних разработок в медиа-технологиях, стратегиях взаимодействия с аудиторией и эволюции потребления контента.',
      type: 'Панельная дискуссия',
      videoUrl: 'https://www.youtube.com/embed/kQsJYN2ofE0'
    },

    // ---------------------------------------------
    // Navigation Elements
    // ---------------------------------------------
    // Navigation links and buttons for press section
    backToPress: 'Вернуться к пресс-киту',
    watchAppearance: 'Смотреть выступление'
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
    title: 'Выступления',
    description: 'Доступен для keynote-выступлений, панельных дискуссий и воркшопов по темам медиа, технологий и культурного влияния.',

    // ---------------------------------------------
    // Speaking Topics Grid
    // ---------------------------------------------
    // Key areas of expertise and speaking topics
    // Helps event organizers understand speaking capabilities
    topicsTitle: 'Темы выступлений',
    topic1: {
      title: 'Будущее цифровых медиа',
      description: 'Исследование новых трендов и технологий, формирующих современную журналистику'
    },
    topic2: {
      title: 'Межкультурная коммуникация',
      description: 'Преодоление культурных барьеров через эффективное повествование'
    },

    // ---------------------------------------------
    // Events Calendar Section
    // ---------------------------------------------
    // Upcoming and past speaking engagements
    // Showcases speaking experience and future availability
    eventsTitle: 'Календарь выступлений',
    upcomingEvents: 'Предстоящие',
    pastEvents: 'Прошедшие события',
    event1: {
      title: 'Саммит цифровых медиа 2024',
      date: '15-17 июня 2024',
      location: 'Лондон, Великобритания',
      type: 'Keynote-выступление',
      description: 'Представление идей об эволюции цифровой журналистики'
    },
    event2: {
      title: 'Глобальный форум журналистики',
      date: '8-10 июля 2024',
      location: 'Берлин, Германия',
      type: 'Панельная дискуссия',
      description: 'Участие в панели по межкультурной журналистике'
    },
    pastEvent1: {
      title: 'Конференция по медиа-инновациям',
      date: 'Январь 2024',
      location: 'Виртуальное мероприятие',
      type: 'Воркшоп',
      recording: 'Смотреть запись'
    },

    // ---------------------------------------------
    // Booking Section
    // ---------------------------------------------
    // Information for booking speaking engagements
    // Includes call-to-action for event organizers
    registerNow: 'Зарегистрироваться',
    watchRecording: 'Смотреть запись',
    bookingTitle: 'Заказать выступление',
    bookingDescription: 'Заинтересованы в моем выступлении на вашем мероприятии? Свяжитесь для обсуждения доступности и условий.',
    bookNow: 'Забронировать',

    // ---------------------------------------------
    // Recording Page Elements
    // ---------------------------------------------
    // Components for event recording pages
    // Used in individual event recording views
    recording: {
      subtitle: 'Запись мероприятия',
      aboutEvent: 'Об этом мероприятии',
      watchFullRecording: 'Смотреть полную запись'
    },
    backToEvents: '← Назад к мероприятиям'
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
    title: 'Обо мне',
    subtitle: 'Мой путь',
    downloadResume: 'Скачать резюме',
    professionalOverview: 'Профессиональный обзор',
    contact: 'Контакты',

    // ---------------------------------------------
    // Skills & Expertise Section
    // ---------------------------------------------
    // Professional capabilities and specializations
    // Organized by area of expertise
    skills: {
      title: 'Экспертиза',
      areas: 'Области специализации',
      writing: 'Написание и редактирование',
      speaking: 'Публичные выступления',
      media: 'Медиа-отношения',
      digital: 'Цифровые медиа',
      research: 'Исследования',
      tools: 'Инструменты и платформы'
    },

    // ---------------------------------------------
    // Professional Timeline
    // ---------------------------------------------
    // Career progression and achievements
    experience: {
      title: 'Профессиональный путь',
      present: 'Настоящее время'
    },

    // ---------------------------------------------
    // Additional Sections
    // ---------------------------------------------
    // Supplementary professional information
    // Includes education, awards, and interests
    education: {
      title: 'Образование'
    },
    awards: {
      title: 'Награды и признания'
    },
    publications: {
      title: 'Публикации'
    },
    interests: {
      title: 'Области интересов'
    },
    hobbies: {
      title: 'Личные интересы'
    },
    volunteerWork: {
      title: 'Общественная деятельность'
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
    title: 'Избранные работы',
    viewProject: 'Посмотреть работу',
    viewLive: 'Смотреть онлайн',
    viewDetails: 'Подробнее',
    impact: 'Влияние',
    highlights: 'Ключевые моменты'
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
    title: 'Статьи',
    subtitle: 'Идеи и истории',
    readMore: 'Читать далее',
    backToArticles: '← Назад к статьям',

    // ---------------------------------------------
    // Article Metadata
    // ---------------------------------------------
    // Information displayed with each article
    // Used in article cards and detail views
    publishedOn: 'Дата публикации',
    readTime: 'Время чтения',
    author: 'Автор',
    tags: 'Темы',
    relatedArticles: 'Похожие статьи',

    // ---------------------------------------------
    // Search & Filter Interface
    // ---------------------------------------------
    // Tools for finding and organizing articles
    // Includes search, categories, and sorting options
    searchPlaceholder: 'Поиск статей...',
    noResults: 'Статьи не найдены',
    categories: {
      all: 'Все',
      journalism: 'Журналистика',
      opinion: 'Мнение',
      analysis: 'Анализ',
      features: 'Очерки'
    },
    filter: {
      title: 'Фильтр',
      sortBy: 'Сортировать по',
      latest: 'Новые',
      oldest: 'Старые',
      popular: 'Популярные'
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
    title: 'Контакты',
    subtitle: 'Давайте общаться',
    description: 'Есть вопросы или предложения? Не стесняйтесь обращаться!',

    // ---------------------------------------------
    // Contact Form Labels & Placeholders
    // ---------------------------------------------
    // Form elements for contact submission
    // Includes validation messages and feedback
    form: {
      name: 'Имя',
      email: 'Email',
      subject: 'Тема',
      message: 'Сообщение',
      send: 'Отправить',
      namePlaceholder: 'Ваше имя',
      emailPlaceholder: 'Ваш email адрес',
      subjectPlaceholder: 'Тема сообщения',
      messagePlaceholder: 'Ваше сообщение...',
      success: 'Спасибо! Ваше сообщение отправлено.',
      error: 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.',
      required: 'Обязательное поле'
    },

    // ---------------------------------------------
    // Social Media Section
    // ---------------------------------------------
    // Links to social media profiles
    // Provides alternative contact methods
    socialLinks: {
      title: 'Социальные сети',
      followMe: 'Подписывайтесь на меня в социальных сетях'
    },

    // ---------------------------------------------
    // Location Information
    // ---------------------------------------------
    // Physical location and address details
    location: {
      title: 'Местоположение',
      address: 'Адрес'
    }
  }
}; 