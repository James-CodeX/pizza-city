import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Pizza, ChevronDown } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('medium');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'combo', name: 'Combos' },
    { id: 'sides', name: 'Sides' }
  ];

  return (
    <section id="menu" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 rounded-full">
            <p className="text-primary font-medium text-sm">Our Menu</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Delicious Options for Everyone</h2>
          <p className="text-neutral-600">
            Explore our wide range of mouthwatering pizzas, crispy chicken, and combo deals. 
            All made with fresh ingredients and delivered hot to your table.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Size selector */}
        {activeCategory === 'pizza' || activeCategory === 'all' ? (
          <div className="max-w-md mx-auto mb-10 bg-white rounded-lg shadow-sm p-4">
            <p className="text-center text-sm text-neutral-600 mb-3">Select your preferred size:</p>
            <div className="grid grid-cols-4 gap-2">
              {['small', 'medium', 'large', 'extraLarge'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-2 rounded text-sm font-medium transition-all
                    ${selectedSize === size 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                >
                  {size === 'extraLarge' ? 'Extra Large' : size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card group hover:scale-[1.02]">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Price</p>
                    <p className="text-lg font-bold text-primary">
                      {item.price[selectedSize as keyof typeof item.price] 
                        ? `KSh ${item.price[selectedSize as keyof typeof item.price]}` 
                        : `KSh ${Object.values(item.price)[0]}`}
                    </p>
                  </div>
                  <a 
                    href="#order" 
                    className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    Order Now
                    <Pizza className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="btn btn-secondary group">
            View Full Menu
            <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;