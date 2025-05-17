import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-20'}`}>
      <a
        href="tel:0723858567"
        className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:bg-primary-600 transition-colors"
        aria-label="Call to order"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default FloatingCTA;