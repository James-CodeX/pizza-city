import React from 'react';
import { Pizza, Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Pizza className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white font-heading">Pizza City</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Pizza City at Juja Mall is a premier pizza and crispy chicken restaurant known for our delicious meals and excellent customer service.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/pizzacityjujamall"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/pizzacityjujamall12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-neutral-400 hover:text-white transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#promotions" className="text-neutral-400 hover:text-white transition-colors">Special Deals</a>
              </li>
              <li>
                <a href="#gallery" className="text-neutral-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:0723858567" className="text-neutral-400 hover:text-white transition-colors">
                  0723 858 567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@pizzacity.co.ke" className="text-neutral-400 hover:text-white transition-colors">
                  info@pizzacity.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  Ground Floor, Juja City Mall, Juja, Kenya
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  Open Daily: 10:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter to get updates on our latest offers.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn bg-primary hover:bg-primary-600 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Pizza City Juja Mall. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-neutral-800 rounded-full hover:bg-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;