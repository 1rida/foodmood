// src/components/Slide.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProps {
  autoPlay?: boolean;
  interval?: number;
}

const images = [
  '/images/ballroom.jpg',
  '/images/ballroom1.jpg',
  '/images/ballroom2.jpg',
  '/images/ballroom3.jpg',
  '/images/ballroom4.jpg',
  '/images/ballroom5.jpg',
  '/images/ballroom6.jpg',
];

export default function Slide({ autoPlay = true, interval = 3500 }: SlideProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearTimer();
  }, [autoPlay, interval]);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goPrev = () => {
    clearTimer();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    clearTimer();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goTo = (i: number): void => {
    clearTimer();
    setIndex(i);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto p-4 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('/images/ballroom-event.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Slider viewport */}
      <div className="relative h-72 sm:h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Left / Right buttons */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
        >
          ›
        </button>

        {/* Caption / counter */}
        <div className="absolute left-4 bottom-4 z-20 bg-black/40 text-white px-3 py-1 rounded-md text-sm">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-transform ${
              i === index ? 'scale-125 bg-lime-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
