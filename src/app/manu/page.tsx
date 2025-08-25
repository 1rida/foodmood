'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Chef from '@/components/Chef';
import Footer from '@/components/Footer';

const allFoodItems = [
  // Desi Main Course
  { name: "Chicken Biryani", price: "₨ 350", category: "Main Course", image: "/images/biryani.jpg" },
  { name: "Beef Nihari", price: "₨ 500", category: "Main Course", image: "/images/nihari.jpg" },
  { name: "Chicken Karahi", price: "₨ 700", category: "Main Course", image: "/images/karahi.jpg" },
  { name: "Haleem", price: "₨ 250", category: "Main Course", image: "/images/haleem.jpg" },
  { name: "Paya", price: "₨ 400", category: "Main Course", image: "/images/paya.jpg" },

  // Desi Sides, Drinks, Desserts
  { name: "Paratha", price: "₨ 50", category: "Side Dish", image: "/images/paratha.jpg" },
  { name: "Chapli Kebab", price: "₨ 300", category: "Side Dish", image: "/images/chapli.jpg" },
  { name: "Lassi", price: "₨ 100", category: "Drinks", image: "/images/lassi.jpg" },
  { name: "Doodh Patti Chai", price: "₨ 60", category: "Drinks", image: "/images/chai.jpg" },
  { name: "Mint Margarita", price: "₨ 150", category: "Drinks", image: "/images/margarita.jpg" },
  { name: "Gulab Jamun", price: "₨ 80", category: "Desserts", image: "/images/gulabjamun.jpg" },
  { name: "Kheer", price: "₨ 120", category: "Desserts", image: "/images/kheer.jpg" },
  { name: "Rasgulla", price: "₨ 100", category: "Desserts", image: "/images/rasgulla.jpg" },

  // Fast Food
  { name: "Cheesy Pizza", price: "₨ 600", category: "Fast Food", image: "/images/pizza.jpg" },
  { name: "Beef Burger", price: "₨ 400", category: "Fast Food", image: "/images/burger.jpg" },
  { name: "Crispy Chicken Roll", price: "₨ 180", category: "Fast Food", image: "/images/roll.jpg" },
  { name: "Spicy Lasagna", price: "₨ 450", category: "Fast Food", image: "/images/lasagna.jpg" },
  { name: "French Fries", price: "₨ 120", category: "Fast Food", image: "/images/fries.jpg" },

  // Chinese Food
  { name: "Chinese Rice", price: "₨ 300", category: "Chinese", image: "/images/chinese-rice.jpg" },
  { name: "Chicken Manchurian", price: "₨ 350", category: "Chinese", image: "/images/manchurian.jpg" },
  { name: "Chicken Shashlik", price: "₨ 400", category: "Chinese", image: "/images/shashlik.jpg" },
  { name: "Macaroni", price: "₨ 280", category: "Chinese", image: "/images/macroni.jpg" },
  { name: "Chow Mein", price: "₨ 320", category: "Chinese", image: "/images/chowmein.jpg" },
  { name: "Hot & Sour Soup", price: "₨ 150", category: "Chinese", image: "/images/hotsour.jpg" },
  { name: "Spring Rolls", price: "₨ 100", category: "Chinese", image: "/images/springroll.jpg" },
  { name: "Chili Chicken", price: "₨ 370", category: "Chinese", image: "/images/chilichicken.jpg" },
];

const categories = [
  "All",
  "Main Course",
  "Side Dish",
  "Desserts",
  "Drinks",
  "Fast Food",
  "Chinese"
];

interface FoodItem {
  name: string;
  price: string;
  category: string;
  image: string;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<FoodItem[]>([]);

  // Load existing cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const filteredItems = allFoodItems.filter((item) => {
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const addToCart = (item: FoodItem): void => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
    alert(`${item.name} added to cart!`);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/env5.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <Header />

        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-12 py-10 rounded-xl mt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl font-bold text-center mb-6 text-lime-300 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Desi, Chinese & Fast Food Menu
          </motion.h1>

          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full lg:w-1/2"
            />

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border shadow-md hover:scale-105 transition-transform duration-300 ${
                    selectedCategory === cat
                      ? "bg-lime-600 text-white"
                      : "bg-white text-lime-700 border-lime-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden group transition-all"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-bold text-white drop-shadow-md">{item.name}</h2>
                    <p className="text-lime-100 text-lg font-medium mt-1 drop-shadow">{item.price}</p>
                    <p className="text-sm text-white/80 italic">{item.category}</p>

                    <button
                      onClick={() => addToCart(item)}
                      className="mt-3 px-4 py-2 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 hover:scale-105 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-red-200 text-lg mt-10">No items found.</p>
          )}
        </motion.div>

        <Chef />
        <Footer />
      </div>
    </div>
  );
}
