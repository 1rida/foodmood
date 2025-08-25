'use client';

import Image from 'next/image';

const chefImages = [
  '/images/chef1.jpg',
  '/images/chef2.jpg',
  '/images/chef3.jpg',
  '/images/chef4.jpg',
  '/images/chef5.jpg',
  '/images/chef6.jpg',
  '/images/chef7.jpg',
];

const Chef = () => {
  return (
    <section
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: 'url("/images/chef.jpg")' }}
    >
      <div className="text-center mb-10 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">Our Chefs</h2>
        <p className="text-white mt-2 drop-shadow-sm text-lg">
          Meet the experts behind your meals
        </p>
        <p className="text-white mt-4 text-sm sm:text-base drop-shadow-md leading-relaxed">
          Our team of professional chefs combines passion and skill to bring you the most
          delicious and memorable dishes. Whether it,s traditional recipes or modern fusion,
          every chef here is dedicated to perfection in every plate. Fresh ingredients,
          creative presentation, and unmatched flavor — that,s the promise our chefs deliver.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6">
        {chefImages.map((img, index) => (
          <div
            key={index}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <Image
              src={img}
              alt={`Chef ${index + 1}`}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chef;
