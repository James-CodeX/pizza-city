import React, { useState, useEffect } from 'react';
import { Menu, X, Pizza, ShoppingCart, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Pizza className="animate-float h-8 w-8" />
            <span className={`font-heading ${isScrolled ? 'text-primary' : 'text-white text-shadow'}`}>Pizza City</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#about" className={`nav-link ${isScrolled ? '' : 'text-white'}`}>About</a>
              <a href="#menu" className={`nav-link ${isScrolled ? '' : 'text-white'}`}>Menu</a>
              <a href="#promotions" className={`nav-link ${isScrolled ? '' : 'text-white'}`}>Promotions</a>
              <a href="#gallery" className={`nav-link ${isScrolled ? '' : 'text-white'}`}>Gallery</a>
              <a href="#contact" className={`nav-link ${isScrolled ? '' : 'text-white'}`}>Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:0723858567" className="flex items-center gap-1 text-sm font-medium">
                <Phone className={`h-4 w-4 ${isScrolled ? 'text-primary' : 'text-white'}`} />
                <span className={`${isScrolled ? 'text-primary' : 'text-white'}`}>0723 858 567</span>
              </a>
              <a href="#order" className="btn btn-primary">
                <ShoppingCart className="h-4 w-4" />
                Order Now
              </a>
            </div>
          </div>

          <button 
            className="inline-flex items-center justify-center p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="container-custom py-4">
          <div className="flex flex-col gap-4">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#menu" className="nav-link" onClick={closeMenu}>Menu</a>
            <a href="#promotions" className="nav-link" onClick={closeMenu}>Promotions</a>
            <a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a href="tel:0723858567" className="flex items-center gap-2 text-sm font-medium text-primary">
                <Phone className="h-4 w-4" />
                0723 858 567
              </a>
              <a href="#order" className="btn btn-primary" onClick={closeMenu}>
                <ShoppingCart className="h-4 w-4" />
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;