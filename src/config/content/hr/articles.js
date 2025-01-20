export const articlesHr = [
  {
    id: 1,
    slug: 'pocetni-koraci-s-reactom',
    title: 'Početni koraci s Reactom',
    excerpt: 'Naučite osnove Reacta i kako izraditi moderne web aplikacije.',
    content: `
      React je moćna JavaScript biblioteka za izradu korisničkih sučelja. U ovom članku ćemo proći kroz osnovne koncepte i najbolje prakse.

      ## Ključni koncepti

      1. Komponente
      - Građevni blokovi React aplikacija
      - Ponovno iskoristive i modularne
      - Mogu biti funkcijske ili klasne

      2. Props
      - Prijenos podataka između komponenti
      - Nepromjenjivi i read-only
      - Osiguravaju ponovnu iskoristivost komponenti

      3. State
      - Upravljanje podacima komponente
      - Može se ažurirati pomoću setState
      - Uzrokuje ponovno renderiranje pri promjeni

      ## Hooks u Reactu

      React Hooks su revolucionarna značajka koja omogućuje korištenje stanja i drugih React značajki u funkcijskim komponentama:

      \`\`\`javascript
      import React, { useState, useEffect } from 'react';

      function PrimjerKomponente() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          document.title = \`Kliknuli ste \${count} puta\`;
        }, [count]);

        return (
          <div>
            <p>Kliknuli ste {count} puta</p>
            <button onClick={() => setCount(count + 1)}>
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
      - Implementirajte ponovno iskoristive komponente

      2. Optimizacija performansi
      - Koristite React.memo za memoizaciju
      - Implementirajte useMemo i useCallback gdje je potrebno
      - Izbjegavajte nepotrebna renderiranja

      3. Upravljanje stanjem
      - Koristite Context API za globalno stanje
      - Implementirajte Redux za kompleksnije aplikacije
      - Održavajte minimalno potrebno stanje
    `,
    date: 'Siječanj 2024',
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

      2. Prilagodba
      - Potpuno prilagodljiv sustav dizajna
      - Proširenje ili izmjena zadane teme
      - Kreiranje vlastitih utility klasa

      ## Napredne značajke

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
      - Generiranje stilova prema potrebi
      - Brži development proces
      - Manja veličina bundle-a
    `,
    date: 'Siječanj 2024',
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
      TypeScript donosi statičko tipiziranje u JavaScript ekosustav, čineći razvoj robustnijim i održivijim.

      ## Zašto TypeScript?

      1. Sigurnost tipova
      - Rano otkrivanje grešaka
      - Bolja podrška u IDE-u
      - Jasnije definirana struktura koda

      2. Moderne značajke
      - Podrška za najnovije ECMAScript značajke
      - Napredni tipovi i generici
      - Dekoratori i metaprogramiranje

      ## Praktični primjeri

      ### Sučelja i tipovi

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
      - Uvjetni tipovi
      - Mapped types
      - Utility types
    `,
    date: 'Veljača 2024',
    readTime: '6 minuta čitanja',
    imageUrl: '/images/typescript-article.jpg',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Programming'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  },
  {
    id: 4,
    slug: 'nextjs-i-server-komponente',
    title: 'Next.js i Server Komponente',
    excerpt: 'Duboki uvid u Server Komponente u Next.js 14 i njihovu primjenu.',
    content: `
      Next.js 14 donosi revolucionarne promjene u načinu razvoja web aplikacija kroz Server Komponente.

      ## Što su Server Komponente?

      Server Komponente su novi pristup renderiranju React komponenti koji omogućuje:
      - Smanjenje količine JavaScript koda na klijentu
      - Bolje performanse učitavanja
      - Direktan pristup backend resursima

      ## Praktična primjena

      ### Osnovna Server Komponenta

      \`\`\`typescript
      // app/page.tsx
      async function DohvatiPodatke() {
        const podaci = await fetch('https://api.primjer.com/podaci');
        const rezultat = await podaci.json();

        return (
          <div>
            {rezultat.map(item => (
              <div key={item.id}>{item.naziv}</div>
            ))}
          </div>
        );
      }
      \`\`\`

      ### Kombiniranje Server i Client Komponenti

      \`\`\`typescript
      // Klijentska komponenta
      'use client';

      function InteraktivnaKomponenta({ podaci }) {
        const [aktivno, setAktivno] = useState(false);

        return (
          <button onClick={() => setAktivno(!aktivno)}>
            {podaci.naziv}
          </button>
        );
      }
      \`\`\`

      ## Prednosti i izazovi

      1. Prednosti
      - Brže inicijalno učitavanje
      - Manji JavaScript bundle
      - Bolja SEO optimizacija

      2. Izazovi
      - Promjena mentalnog modela
      - Kompleksnija arhitektura
      - Potreba za pažljivim planiranjem

      ## Optimizacija performansi

      1. Streaming
      - Postupno učitavanje komponenti
      - Suspense za bolji UX
      - Paralelno dohvaćanje podataka

      2. Caching
      - Revalidacija podataka
      - Statička generacija
      - Inkrementalna statička regeneracija
    `,
    date: 'Veljača 2024',
    readTime: '7 minuta čitanja',
    imageUrl: '/images/nextjs-article.jpg',
    tags: ['Next.js', 'React', 'Server Components', 'Web Development'],
    author: {
      name: 'Portfolio Author',
      avatar: '/images/author-avatar.jpg',
      bio: 'Full Stack Developer'
    }
  }
]; 