import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "The purpose of human life is to serve, and to show compassion and the will to help others.",
    author: "Albert Schweitzer"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The good life is one inspired by love and guided by knowledge.",
    author: "Bertrand Russell"
  },
  {
    text: "We are all different. But when we ask for the Lord's blessings, we must not forget that God created us equal.",
    author: "Vladimir Putin"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Education is not preparation for life; education is life itself.",
    author: "John Dewey"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  }
];

const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsVisible(true);
      }, 500); // Wait for fade out animation before changing quote
    }, 30000); // Change quote every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <footer className="bg-white border-t border-media-border py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <blockquote className="font-heading text-xl text-media-ink mb-4 italic">
                  "{currentQuote.text}"
                </blockquote>
                <cite className="text-media-muted not-italic">— {currentQuote.author}</cite>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="text-center text-media-muted text-sm">
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <p className="mt-2">
              Made with passion in Ljubuški, Bosnia and Herzegovina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 