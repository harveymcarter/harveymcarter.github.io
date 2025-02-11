import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
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
import MediaAppearance from './pages/MediaAppearance';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow pt-16 sm:pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/press" element={<PressKit />} />
                <Route path="/speaking" element={<Speaking />} />
                <Route path="/speaking/recording/:eventId" element={<EventRecording />} />
                <Route path="/press/appearance/:appearanceId" element={<MediaAppearance />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App; 