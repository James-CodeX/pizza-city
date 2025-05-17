import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = 'Pizza City Juja Mall | Delicious Pizza & Crispy Chicken';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Promotions />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;