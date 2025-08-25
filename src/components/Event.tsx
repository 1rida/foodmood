'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const eventImages = [
  '/images/event1.jpg',
  '/images/event2.jpg',
  '/images/event3.jpg',
  '/images/event4.jpg',
  '/images/event5.jpg',
  '/images/event6.jpg',
];

const Event = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Events at Our Ballroom</h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          From weddings to corporate events, birthdays to anniversaries — we make every moment unforgettable. Here,s a glimpse into the beautiful celebrations hosted in our luxurious ballroom.
        </p>

        {/* Masonry-style Image Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {eventImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Event ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
