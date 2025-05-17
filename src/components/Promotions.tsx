import React from 'react';
import { PROMOTION_ITEMS } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Promotions: React.FC = () => {
  return (
    <section id="promotions" className="section-padding bg-neutral-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden md:block absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5"></div>
      <div className="hidden md:block absolute top-36 -left-12 w-24 h-24 rounded-full bg-secondary/5"></div>
      <div className="hidden md:block absolute bottom-12 right-12 w-36 h-36 rounded-full bg-primary/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 rounded-full">
            <p className="text-primary font-medium text-sm">Special Deals</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Weekly Promotions & Offers</h2>
          <p className="text-neutral-600">
            Don't miss out on our amazing weekly promotions! We've got special deals 
            every day of the week to satisfy your cravings without breaking the bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMOTION_ITEMS.map((promo) => (
            <div key={promo.id} className="card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-white" />
                    <span className="text-sm text-white">{promo.day}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{promo.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-neutral-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>Valid only on {promo.day}s</span>
                  </div>
                  <a 
                    href="#order" 
                    className="inline-flex items-center gap-1 text-primary font-medium hover:underline group"
                  >
                    Order Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buy one get one free banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Buy 1 Get 1 FREE!
              </h3>
              <p className="text-white/90 mb-6">
                Order any large pizza and get a medium pizza absolutely FREE! 
                This special offer is valid every Tuesday and Friday. Call us now or order online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#order" className="btn bg-white text-primary hover:bg-neutral-100">
                  Order Now
                </a>
                <a href="tel:0723858567" className="btn bg-secondary text-white hover:bg-secondary-600">
                  Call: 0723 858 567
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Buy One Get One Free"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;