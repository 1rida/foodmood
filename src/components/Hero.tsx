// src/components/Hero.tsx

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center text-white">
      <Image
        src="/images/food4.gif"
        alt="Hero Image"
        width={1920}
        height={2000}
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-green-400">Food Mood</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl mx-auto">
          Tasty, Hygienic & Delivered Fast!
        </p>
        <Link href="/menu">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
