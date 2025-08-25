// src/components/FoodCards.tsx

// Update the import path to the correct location of FoodGif
import FoodGif from './FoodGif';
import Image from 'next/image';

const foodItems = [
  {
    name: 'Delicious Burger',
    description: 'Juicy grilled burger with cheese and veggies.',
    image: '/images/food2.jpg',
  },
  {
    name: 'Cheesy Pizza',
    description: 'Loaded with cheese, tomatoes, and olives.',
    image: '/images/food3.jpg',
  },
  {
    name: 'Spicy Biryani',
    description: 'Traditional spicy rice with chicken.',
    image: '/images/biryani.jpg',
  },
  {
    name: 'French Fries',
    description: 'Crispy and golden potato fries.',
    image: '/images/fries.jpg',
  },
  {
    name: 'Grilled Sandwich',
    description: 'Toasted sandwich with melted cheese and veggies.',
    image: '/images/sandwish.jpg',
  },
  {
    name: 'Ice Cream Sundae',
    description: 'Chilled dessert with chocolate topping.',
    image: '/images/icecream.jpg',
  },
];

const FoodCards = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Popular Foods</h2>

        {/* Food Item Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GIF Section Heading */}
        <div className="text-center mt-16 mb-8">
          <h2 className="text-4xl font-bold text-green-700 underline">Live Food Moments</h2>
          <p className="text-lg text-gray-600 mt-2 underline">
            Experience the sizzling, cheesy, and mouth-watering magic of our kitchen.
          </p>
        </div>

        {/* GIF Cards */}
        <FoodGif />
      </div>
    </section>
  );
};

export default FoodCards;
