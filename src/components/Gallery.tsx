import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 rounded-full">
            <p className="text-primary font-medium text-sm">Photo Gallery</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Feast Your Eyes</h2>
          <p className="text-neutral-600">
            Take a look at our delicious creations and the warm, welcoming atmosphere of Pizza City. 
            Every bite is a flavorful experience worth savoring.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                style={{ aspectRatio: index === 0 ? '16/9' : '1/1' }}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;