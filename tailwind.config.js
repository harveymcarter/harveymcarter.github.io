/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        media: {
          // Elegant neutral colors
          paper: '#FAFAF9',    // Warm white background
          ink: '#1C1917',      // Soft black for main text
          muted: '#78716C',    // Sophisticated gray for secondary text
          accent: '#9C6644',   // Warm brown for accents
          quote: '#F5F5F4',    // Light warm gray for backgrounds
          border: '#E7E5E4',   // Subtle border color
          highlight: '#FAFAFA', // Clean white for highlights
          // Additional shades
          accent_light: '#B7856B', // Lighter brown for hover states
          accent_dark: '#7C4F34',  // Darker brown for active states
          surface: {
            50: '#FAFAF9',
            100: '#F5F5F4',
            200: '#E7E5E4',
            300: '#D6D3D1',
            400: '#A8A29E',
            500: '#78716C',
            600: '#57534E',
            700: '#44403C',
            800: '#292524',
            900: '#1C1917',
          }
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Serif Pro', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            h1: {
              fontFamily: 'Playfair Display, serif',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
            },
            blockquote: {
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              borderLeftColor: '#9C6644',
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}; 