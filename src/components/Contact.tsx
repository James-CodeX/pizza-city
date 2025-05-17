import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 rounded-full">
            <p className="text-primary font-medium text-sm">Contact Us</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-neutral-600">
            Have questions or want to place an order? We're here to help! 
            Contact us through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-neutral-600">Ground Floor, Juja City Mall, Juja, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-neutral-600">
                      <a href="tel:0723858567" className="hover:text-primary transition-colors">
                        0723 858 567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Opening Hours</h4>
                    <p className="text-neutral-600">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-neutral-600">
                      <a href="mailto:info@pizzacity.co.ke" className="hover:text-primary transition-colors">
                        info@pizzacity.co.ke
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <h4 className="font-bold mb-3">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.facebook.com/pizzacityjujamall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-100 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/pizzacityjujamall12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-100 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Order Now</h3>
              <p className="mb-6">
                Ready to place an order? Call us now or visit our restaurant.
                We provide dine-in, takeaway, and delivery services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0723858567" className="btn bg-white text-primary hover:bg-neutral-100">
                  <Phone className="h-4 w-4" />
                  Call to Order
                </a>
                <a 
                  href="https://goo.gl/maps/your-location-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-secondary text-white hover:bg-secondary-600"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7222343267!2d37.01520371475855!3d-1.0968697992798058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1eb5a25e0c2b%3A0x9ae0c1c99f599873!2sJuja%20City%20Mall!5e0!3m2!1sen!2ske!4v1632761402537!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pizza City Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;