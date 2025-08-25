// src/components/Environment.js

import Image from 'next/image';

const environmentImages = [
  {
    src: '/images/env1.jpg',
    alt: 'Cozy restaurant interior',
  },
  {
    src: '/images/env2.jpg',
    alt: 'Modern dining area',
  },
  {
    src: '/images/env3.jpg',
    alt: 'Open kitchen view',
  },
  {
    src: '/images/env4.jpg',
    alt: 'Outdoor seating',
  },
];

const Environment = () => {
  return (
    <section
      className="py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/env5.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Our Restaurant Environment
          </h2>
          <p className="text-center text-gray-200 mb-10 max-w-2xl mx-auto">
            We believe the ambiance is as important as the food. Here's a glimpse into the cozy and stylish setting where you can enjoy your meal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {environmentImages.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
