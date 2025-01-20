import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import PressKit from './pages/PressKit';
import Speaking from './pages/Speaking';
import EventRecording from './pages/EventRecording';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/press" element={<PressKit />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/speaking/recording/:eventId" element={<EventRecording />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App; 