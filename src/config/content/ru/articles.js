export const articlesRu = [
  {
    id: 1,
    slug: 'nachalo-raboty-s-react',
    title: 'Начало работы с React',
    excerpt: 'Изучите основы React и научитесь создавать современные веб-приложения.',
    content: `
      React - это мощная JavaScript библиотека для создания пользовательских интерфейсов. В этой статье мы рассмотрим основные концепции и лучшие практики.

      ## Ключевые концепции

      1. Компоненты
      - Строительные блоки React-приложений
      - Переиспользуемые и модульные
      - Могут быть функциональными или классовыми

      2. Props
      - Передача данных между компонентами
      - Неизменяемые и только для чтения
      - Обеспечивают переиспользуемость компонентов

      3. State
      - Управление данными компонента
      - Может обновляться с помощью setState
      - Вызывает перерендер при изменении

      ## Начало работы

      Для начала работы с React вам понадобится установленный Node.js. Затем вы можете создать новый проект:

      \`\`\`bash
      npx create-react-app my-app
      cd my-app
      npm start
      \`\`\`

      Это создаст новый React проект со всеми необходимыми настройками.
    `,
    date: 'Январь 2024',
    readTime: '5 минут чтения',
    imageUrl: '/images/react-article.jpg',
    tags: ['React', 'JavaScript', 'Веб-разработка', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Разработчик'
    }
  },
  {
    id: 2,
    slug: 'mogushchestvo-tailwindcss',
    title: 'Могущество TailwindCSS',
    excerpt: 'Узнайте, как TailwindCSS может оптимизировать ваш процесс веб-разработки.',
    content: `
      TailwindCSS - это utility-first CSS фреймворк, который может значительно ускорить ваш процесс разработки.

      ## Почему TailwindCSS?

      1. Utility-First Подход
      - Пишите стили прямо в HTML
      - Нет переключения между файлами
      - Возможности быстрого прототипирования

      2. Кастомизация
      - Полностью настраиваемая система дизайна
      - Расширение или изменение стандартной темы
      - Создание собственных утилит

      3. Производительность
      - Включает только используемые стили
      - Меньшие размеры production-сборки
      - Оптимизировано для production

      ## Начало работы

      Установите TailwindCSS в ваш проект:

      \`\`\`bash
      npm install tailwindcss
      npx tailwindcss init
      \`\`\`

      Настройте пути к шаблонам в tailwind.config.js, и вы готовы к работе!
    `,
    date: 'Январь 2024',
    readTime: '4 минуты чтения',
    imageUrl: '/images/tailwind-article.jpg',
    tags: ['CSS', 'TailwindCSS', 'Веб-разработка', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Разработчик'
    }
  }
]; 