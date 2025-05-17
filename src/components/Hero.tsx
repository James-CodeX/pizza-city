import React from 'react';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl mt-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-primary rounded-full">
              <Star className="h-3 w-3 fill-white" />
              Highest Rated in Juja
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 text-shadow">
            Delicious Pizza <br /><span className="text-secondary">Delivered Hot</span> & Fresh
          </h1>
          
          <p className="text-lg text-white/90 mb-8 max-w-xl">
            Experience the finest pizza in Juja with our handcrafted recipes, premium ingredients, and outstanding service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#menu" className="btn btn-primary">
              View Our Menu
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:0723858567" className="btn btn-secondary">
              Order Now: 0723 858 567
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-white/10 rounded-full backdrop-blur">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-white/80 text-sm">Ground Floor, Juja City Mall, Juja</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-white/10 rounded-full backdrop-blur">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Opening Hours</h3>
                <p className="text-white/80 text-sm">Daily: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating pizza images */}
      <div className="hidden lg:block absolute right-[5%] top-1/2 transform -translate-y-1/2 z-10">
        <img 
          src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Delicious Pizza"
          className="w-64 h-64 object-cover rounded-full shadow-pizza pizza-animation"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src="https://images.pexels.com/photos/2714722/pexels-photo-2714722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Crispy Chicken"
          className="w-48 h-48 object-cover rounded-full shadow-pizza absolute -bottom-10 -left-20 pizza-animation"
          style={{ animationDelay: '1.5s' }}
        />
        <img 
          src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Fresh Ingredients"
          className="w-36 h-36 object-cover rounded-full shadow-pizza absolute -top-10 -left-10 pizza-animation"
          style={{ animationDelay: '3s' }}
        />
      </div>
    </section>
  );
};

export default Hero;