'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const gifs = [
  { src: '/images/gif1.gif', caption: 'Hot Kabab' },
  { src: '/images/gif2.gif', caption: 'Cheesy Pizza Slice' },
  { src: '/images/gif3.gif', caption: 'Beef Burger' },
  { src: '/images/gif4.gif', caption: 'Fresh & Hot Pasta' },
  { src: '/images/gif5.gif', caption: 'Chowmein' },
  { src: '/images/gif6.gif', caption: 'Spicy Chicken' },
];

export default function FoodGif() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/images/ballroom.jpg"
          alt="Ballroom Background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* GIF Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {gifs.map((gif, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg border border-white/30 bg-white/10 backdrop-blur-sm w-72"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={gif.src}
              alt={`Food Gif ${index + 1}`}
              width={288}
              height={180}
              className="object-cover w-full h-48"
            />
            <p className="text-center text-white text-lg font-semibold py-3">
              {gif.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
