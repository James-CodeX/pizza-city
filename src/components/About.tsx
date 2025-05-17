import React from 'react';
import { CheckCircle, Award, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Pizza City Restaurant Interior" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Delicious Pizza" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Crispy Chicken" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Burger and Fries" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-600">Hot favorites</p>
                  <p className="text-lg font-bold text-primary">200+ Weekly Orders</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-primary/10 rounded-full">
              <p className="text-primary font-medium text-sm">About Pizza City</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Best Pizza Experience in Juja</h2>
            <p className="text-neutral-600 mb-8">
              Pizza City at Juja Mall is a premier pizza and crispy chicken restaurant known for our delicious meals and excellent customer service. We use only the freshest ingredients to create mouthwatering pizzas, crispy chicken, and delightful combo meals that keep our customers coming back for more.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Fresh Ingredients</h3>
                  <p className="text-sm text-neutral-600">We use only the freshest, highest quality ingredients</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Fast Delivery</h3>
                  <p className="text-sm text-neutral-600">Hot and fresh pizza delivered to your doorstep</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Special Deals</h3>
                  <p className="text-sm text-neutral-600">Great offers and promotions throughout the week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Quality Guaranteed</h3>
                  <p className="text-sm text-neutral-600">We guarantee satisfaction with every order</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-sm text-neutral-600">Ground Floor, Juja City Mall</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Open Hours</h3>
                  <p className="text-sm text-neutral-600">Daily: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;