// =============================================================================
// ENGLISH TRANSLATIONS
// =============================================================================
// This file contains all English translations for the portfolio website.
// Each section corresponds to a specific page or component in the application.
// Organized to match the visual hierarchy of the website for easier maintenance.

export const translationsEn = {
  // =============================================================================
  // GLOBAL NAVIGATION & COMMON ELEMENTS
  // =============================================================================
  // These elements appear across multiple pages and components
  // Includes main navigation items and commonly used messages
  
  nav: {
    // Main navigation menu items
    // Used in Navbar.js and mobile menu
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    articles: 'Articles',
    contact: 'Contact',
    menu: 'Menu'
  },

  common: {
    // Shared UI elements and messages
    // Used throughout the application for consistent messaging
    loading: 'Loading...',
    error: 'Error',
    notFound: 'Not Found'
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
    greeting: 'Welcome_',
    intro: "I'm",
    role: 'a Media Professional',
    description: 'sharing insights and stories that matter',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',

    // ---------------------------------------------
    // Featured Content Section
    // ---------------------------------------------
    // Showcases recent articles and media presence
    // Provides quick access to key content sections
    featuredArticles: 'Featured Articles',
    viewAllArticles: 'View All Articles',
    mediaPresence: 'Media Presence',
    speakingEngagements: 'Speaking Engagements',
    viewSchedule: 'View Schedule',
    
    // ---------------------------------------------
    // Press Kit Quick Access
    // ---------------------------------------------
    // Quick links to press resources and latest publications
    // Helps journalists and media professionals find relevant information
    pressKit: 'Press Kit',
    downloadPressKit: 'Download Press Kit',
    latestPublications: 'Latest Publications',
    viewPublication: 'Read Publication'
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
    title: 'Press Kit',
    subtitle: 'Media Resources',
    description: 'Find everything you need for media coverage, including bio, photos, and brand assets.',

    // ---------------------------------------------
    // Quick Facts Panel
    // ---------------------------------------------
    // Key information about professional background
    // Used by journalists for quick reference
    quickFacts: 'Quick Facts',
    facts: {
      experience: '15+ years of journalism and media experience',
      expertise: 'Specializing in technology, culture, and social impact',
      languages: 'Available for interviews in English, Turkish, Russian, Croatian, and Bosnian',
      location: 'Based in [Your Location], available for global engagements'
    },

    // ---------------------------------------------
    // Downloadable Resources Section
    // ---------------------------------------------
    // Collection of press materials and assets
    // Includes biographies, photos, and branding materials
    downloads: 'Downloadable Resources',
    biography: {
      short: 'Short Bio',
      shortDesc: 'A concise 100-word professional biography',
      full: 'Full Bio',
      fullDesc: 'Comprehensive background and career highlights'
    },
    photos: {
      headshots: 'Professional Photos',
      headshotsDesc: 'High-resolution headshots and action shots'
    },
    brandAssets: 'Brand Assets',
    brandAssetsDesc: 'Logos, color palette, and style guide',
    download: 'Download',

    // ---------------------------------------------
    // Media Appearances Grid
    // ---------------------------------------------
    // Recent interviews, podcasts, and panel discussions
    // Showcases media presence and expertise
    recentAppearances: 'Recent Media Appearances',
    recentAppearance1: {
      title: 'The Future of Digital Journalism',
      outlet: 'Tech Insights Podcast',
      date: 'March 2024'
    },
    recentAppearance2: {
      title: 'Being an Erasmus+ Exchange Student at Istanbul Galata University',
      outlet: 'Digital Today Magazine',
      date: 'February 2024'
    },
    viewAppearance: 'View Appearance',

    // ---------------------------------------------
    // Press Contact Section
    // ---------------------------------------------
    // Contact information for media inquiries
    // Direct line for journalists and event organizers
    contactTitle: 'Press Contact',
    contactDescription: 'For media inquiries and interview requests, please get in touch.',
    contactButton: 'Contact Press Office',

    // ---------------------------------------------
    // Media Appearance Details
    // ---------------------------------------------
    // Individual media appearance pages
    // Includes video embeds and appearance information
    appearance1: {
      description: 'An in-depth discussion on emerging trends in digital journalism, focusing on AI integration, data-driven storytelling, and the future of news delivery.',
      type: 'Video Interview',
      videoUrl: 'https://www.youtube.com/embed/example1'
    },
    appearance2: {
      description: 'Exploring the latest developments in media technology, audience engagement strategies, and the evolution of content consumption patterns.',
      type: 'Panel Discussion',
      videoUrl: 'https://www.youtube.com/embed/kQsJYN2ofE0'
    },

    // ---------------------------------------------
    // Navigation Elements
    // ---------------------------------------------
    // Navigation links and buttons for press section
    backToPress: 'Back to Press Kit',
    watchAppearance: 'Watch Appearance'
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
    title: 'Speaking Engagements',
    description: 'Available for keynotes, panels, and workshops on media, technology, and cultural impact.',

    // ---------------------------------------------
    // Speaking Topics Grid
    // ---------------------------------------------
    // Key areas of expertise and speaking topics
    // Helps event organizers understand speaking capabilities
    topicsTitle: 'Speaking Topics',
    topic1: {
      title: 'The Future of Digital Media',
      description: 'Exploring emerging trends and technologies shaping modern journalism'
    },
    topic2: {
      title: 'Cross-Cultural Communication',
      description: 'Bridging cultural gaps through effective storytelling'
    },

    // ---------------------------------------------
    // Events Calendar Section
    // ---------------------------------------------
    // Upcoming and past speaking engagements
    // Showcases speaking experience and future availability
    eventsTitle: 'Speaking Calendar',
    upcomingEvents: 'Upcoming',
    pastEvents: 'Past Events',
    event1: {
      title: 'Digital Media Summit 2024',
      date: 'June 15-17, 2024',
      location: 'London, UK',
      type: 'Keynote Speech',
      description: 'Delivering insights on the evolution of digital journalism'
    },
    event2: {
      title: 'Global Journalism Forum',
      date: 'July 8-10, 2024',
      location: 'Berlin, Germany',
      type: 'Panel Discussion',
      description: 'Participating in a panel on cross-cultural reporting'
    },
    pastEvent1: {
      title: 'Media Innovation Conference',
      date: 'January 2024',
      location: 'Virtual Event',
      type: 'Workshop',
      recording: 'Watch Recording'
    },

    // ---------------------------------------------
    // Booking Section
    // ---------------------------------------------
    // Information for booking speaking engagements
    // Includes call-to-action for event organizers
    registerNow: 'Register Now',
    watchRecording: 'Watch Recording',
    bookingTitle: 'Book for Your Event',
    bookingDescription: 'Interested in having me speak at your event? Get in touch for availability and rates.',
    bookNow: 'Book Now',

    // ---------------------------------------------
    // Recording Page Elements
    // ---------------------------------------------
    // Components for event recording pages
    // Used in individual event recording views
    recording: {
      subtitle: 'Event Recording',
      aboutEvent: 'About This Event',
      watchFullRecording: 'Watch Full Recording'
    },
    backToEvents: '← Back to Events'
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
    title: 'About Me',
    subtitle: 'My Journey',
    downloadResume: 'Download CV',
    professionalOverview: 'Professional Overview',
    contact: 'Contact',

    // ---------------------------------------------
    // Skills & Expertise Section
    // ---------------------------------------------
    // Professional capabilities and specializations
    // Organized by area of expertise
    skills: {
      title: 'Expertise',
      areas: 'Areas of Focus',
      writing: 'Writing & Editorial',
      speaking: 'Public Speaking',
      media: 'Media Relations',
      digital: 'Digital Media',
      research: 'Research',
      tools: 'Tools & Platforms'
    },

    // ---------------------------------------------
    // Professional Timeline
    // ---------------------------------------------
    // Career progression and achievements
    experience: {
      title: 'Professional Journey',
      present: 'Present'
    },

    // ---------------------------------------------
    // Additional Sections
    // ---------------------------------------------
    // Supplementary professional information
    // Includes education, awards, and interests
    education: {
      title: 'Education'
    },
    awards: {
      title: 'Awards & Recognition'
    },
    publications: {
      title: 'Publications'
    },
    interests: {
      title: 'Areas of Interest'
    },
    hobbies: {
      title: 'Personal Interests'
    },
    volunteerWork: {
      title: 'Community Engagement'
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
    title: 'Featured Work',
    viewProject: 'View Work',
    viewLive: 'View Online',
    viewDetails: 'View Details',
    impact: 'Impact',
    highlights: 'Key Highlights'
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
    title: 'Articles',
    subtitle: 'Insights & Stories',
    readMore: 'Read More',
    backToArticles: '← Back to Articles',

    // ---------------------------------------------
    // Article Metadata
    // ---------------------------------------------
    // Information displayed with each article
    // Used in article cards and detail views
    publishedOn: 'Published on',
    readTime: 'Read Time',
    author: 'Author',
    tags: 'Topics',
    relatedArticles: 'Related Articles',

    // ---------------------------------------------
    // Search & Filter Interface
    // ---------------------------------------------
    // Tools for finding and organizing articles
    // Includes search, categories, and sorting options
    searchPlaceholder: 'Search articles...',
    noResults: 'No articles found',
    categories: {
      all: 'All',
      journalism: 'Journalism',
      opinion: 'Opinion',
      analysis: 'Analysis',
      features: 'Features'
    },
    filter: {
      title: 'Filter',
      sortBy: 'Sort by',
      latest: 'Latest',
      oldest: 'Oldest',
      popular: 'Popular'
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
    title: 'Get in Touch',
    subtitle: "Let's Connect",
    description: 'Have questions or suggestions? Feel free to reach out!',

    // ---------------------------------------------
    // Contact Form Labels & Placeholders
    // ---------------------------------------------
    // Form elements for contact submission
    // Includes validation messages and feedback
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      subjectPlaceholder: 'Message subject',
      messagePlaceholder: 'Your message...',
      success: 'Thank you! Your message has been sent.',
      error: 'Sorry, there was an error. Please try again later.',
      required: 'Required field'
    },

    // ---------------------------------------------
    // Social Media Section
    // ---------------------------------------------
    // Links to social media profiles
    // Provides alternative contact methods
    socialLinks: {
      title: 'Social Media',
      followMe: 'Follow me on social media'
    },

    // ---------------------------------------------
    // Location Information
    // ---------------------------------------------
    // Physical location and address details
    location: {
      title: 'Location',
      address: 'Address'
    }
  }
}; 