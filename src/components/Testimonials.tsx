import React from 'react';
import { TESTIMONIAL_ITEMS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
        );
      } else {
        stars.push(
          <Star key={i} className="h-4 w-4 text-neutral-300" />
        );
      }
    }
    return stars;
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 rounded-full">
            <p className="text-primary font-medium text-sm">Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-neutral-600">
            Don't just take our word for it! See what our satisfied customers have to say about 
            their experience with Pizza City.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_ITEMS.map((testimonial) => (
            <div key={testimonial.id} className="card p-6 relative">
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">{testimonial.name}</h3>
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-neutral-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>

        {/* Happy customers stat */}
        <div className="mt-16 bg-neutral-100 rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</h3>
              <p className="text-neutral-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">15,000+</h3>
              <p className="text-neutral-600">Pizzas Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">4.8<span className="text-2xl">/5</span></h3>
              <p className="text-neutral-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;