export const articlesBs = [
  {
    id: 1,
    slug: 'prvi-koraci-s-reactom',
    title: 'Prvi koraci s Reactom',
    excerpt: 'Naučite osnove Reacta i kako napraviti moderne web aplikacije.',
    content: `
      React je moćna JavaScript biblioteka za izradu korisničkih interfejsa. U ovom članku ćemo proći kroz osnovne koncepte i najbolje prakse.

      ## Ključni koncepti

      1. Komponente
      - Građevinski blokovi React aplikacija
      - Ponovno upotrebljive i modularne
      - Mogu biti funkcijske ili klasne

      2. Props
      - Prenos podataka između komponenti
      - Nepromjenjivi i read-only
      - Osiguravaju ponovnu upotrebljivost komponenti

      3. State
      - Upravljanje podacima komponente
      - Može se ažurirati pomoću setState
      - Uzrokuje ponovno renderovanje pri promjeni

      ## Hooks u Reactu

      React Hooks su revolucionarna funkcionalnost koja omogućava korištenje stanja i drugih React funkcionalnosti u funkcijskim komponentama:

      \`\`\`javascript
      import React, { useState, useEffect } from 'react';

      function PrimjerKomponente() {
        const [brojac, setBrojac] = useState(0);

        useEffect(() => {
          document.title = \`Kliknuli ste \${brojac} puta\`;
        }, [brojac]);

        return (
          <div>
            <p>Kliknuli ste {brojac} puta</p>
            <button onClick={() => setBrojac(brojac + 1)}>
              Klikni me
            </button>
          </div>
        );
      }
      \`\`\`

      ## Najbolje prakse

      1. Organizacija koda
      - Koristite smislenu strukturu direktorija
      - Razdvojite logiku od prezentacije
      - Implementirajte ponovno upotrebljive komponente

      2. Optimizacija performansi
      - Koristite React.memo za memoizaciju
      - Implementirajte useMemo i useCallback gdje je potrebno
      - Izbjegavajte nepotrebna renderovanja

      3. Upravljanje stanjem
      - Koristite Context API za globalno stanje
      - Implementirajte Redux za kompleksnije aplikacije
      - Održavajte minimalno potrebno stanje
    `,
    date: 'Januar 2024',
    readTime: '5 minuta čitanja',
    imageUrl: '/images/react-article.jpg',
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  },
  {
    id: 2,
    slug: 'snaga-tailwindcss',
    title: 'Snaga TailwindCSS-a',
    excerpt: 'Otkrijte kako TailwindCSS može optimizirati vaš proces web razvoja.',
    content: `
      TailwindCSS je utility-first CSS framework koji može značajno ubrzati vaš proces razvoja.

      ## Zašto TailwindCSS?

      1. Utility-First Pristup
      - Pišite stilove direktno u HTML-u
      - Nema prebacivanja između datoteka
      - Mogućnosti brzog prototipiranja

      2. Prilagođavanje
      - Potpuno prilagodljiv sistem dizajna
      - Proširenje ili izmjena zadane teme
      - Kreiranje vlastitih utility klasa

      ## Napredne funkcionalnosti

      ### Prilagođavanje konfiguracije

      \`\`\`javascript
      // tailwind.config.js
      module.exports = {
        theme: {
          extend: {
            colors: {
              'brand-primary': '#FF0000',
              'brand-secondary': '#00FF00',
            },
            spacing: {
              '128': '32rem',
              '144': '36rem',
            },
          }
        },
        variants: {
          extend: {
            backgroundColor: ['active'],
            fontSize: ['hover'],
          }
        }
      }
      \`\`\`

      ### Responzivni dizajn

      TailwindCSS olakšava izradu responzivnih layouta:

      \`\`\`html
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow rounded">
          <!-- Sadržaj kartice -->
        </div>
      </div>
      \`\`\`

      ## Optimizacija za produkciju

      1. PurgeCSS integracija
      - Automatsko uklanjanje nekorištenih stilova
      - Značajno smanjenje veličine CSS datoteke
      - Bolje performanse učitavanja

      2. JIT (Just-In-Time) način rada
      - Generisanje stilova prema potrebi
      - Brži development proces
      - Manja veličina bundle-a
    `,
    date: 'Januar 2024',
    readTime: '4 minute čitanja',
    imageUrl: '/images/tailwind-article.jpg',
    tags: ['CSS', 'TailwindCSS', 'Web Development', 'Frontend'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  },
  {
    id: 3,
    slug: 'typescript-u-modernom-web-razvoju',
    title: 'TypeScript u modernom web razvoju',
    excerpt: 'Istražite prednosti korištenja TypeScripta u modernim web aplikacijama.',
    content: `
      TypeScript donosi statičko tipiziranje u JavaScript ekosistem, čineći razvoj robustnijim i održivijim.

      ## Zašto TypeScript?

      1. Sigurnost tipova
      - Rano otkrivanje grešaka
      - Bolja podrška u IDE-u
      - Jasnije definisana struktura koda

      2. Moderne funkcionalnosti
      - Podrška za najnovije ECMAScript funkcionalnosti
      - Napredni tipovi i generici
      - Dekoratori i metaprogramiranje

      ## Praktični primjeri

      ### Interfejsi i tipovi

      \`\`\`typescript
      interface Korisnik {
        id: number;
        ime: string;
        email: string;
        godine?: number;
      }

      type KorisnikResponse = {
        podaci: Korisnik;
        status: 'aktivan' | 'neaktivan';
      };

      function dohvatiKorisnika(id: number): Promise<KorisnikResponse> {
        return fetch(\`/api/korisnici/\${id}\`)
          .then(res => res.json());
      }
      \`\`\`

      ### Generički tipovi

      \`\`\`typescript
      interface ApiOdgovor<T> {
        podaci: T;
        poruka: string;
        status: number;
      }

      async function apiPoziv<T>(url: string): Promise<ApiOdgovor<T>> {
        const odgovor = await fetch(url);
        return odgovor.json();
      }
      \`\`\`

      ## Integracija s popularnim frameworkima

      1. React s TypeScriptom
      - Tipiziranje propsa i stanja
      - Bolja podrška za hooks
      - Tipiziranje konteksta

      2. Next.js s TypeScriptom
      - Automatska konfiguracija
      - Tipiziranje API ruta
      - Bolja podrška za SSR

      ## Najbolje prakse

      1. Organizacija koda
      - Odvajanje tipova u zasebne datoteke
      - Korištenje barrel exports
      - Dosljedne konvencije imenovanja

      2. Napredne tehnike
      - Uslovni tipovi
      - Mapped types
      - Utility types
    `,
    date: 'Februar 2024',
    readTime: '6 minuta čitanja',
    imageUrl: '/images/typescript-article.jpg',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Programming'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  }
]; 