"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Deal {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const deals: Deal[] = [
  {
    id: 1,
    name: "Family Deal",
    description: "2 Large Pizzas + 1.5L Drink",
    price: "₨ 2500",
    image: "/images/deal1.jpg",
  },
  {
    id: 2,
    name: "Burger Combo",
    description: "2 Zinger Burgers + Fries + Drink",
    price: "₨ 1200",
    image: "/images/deal2.jpg",
  },
  {
    id: 3,
    name: "Biryani Special",
    description: "2 Chicken Biryani + 2 Drinks",
    price: "₨ 800",
    image: "/images/deal3.jpg",
  },
];

export default function DealPage() {
  // Add to Cart function
  const addToCart = (deal: Deal) => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push({
      name: deal.name,
      price: deal.price,
      category: "Deal",
      image: deal.image,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${deal.name} added to cart!`);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image (Biryani wali) */}
      <Image
        src="/images/biryani.jpg" // ✅ apni biryani wali image ka naam rakho
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {/* Header */}
      <Header />

      {/* Main Deals Section */}
      <div className="max-w-6xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Deals</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white/90 shadow-md rounded-lg p-4 flex flex-col items-center text-black"
            >
              <Image
                src={deal.image}
                alt={deal.name}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mt-2">{deal.name}</h2>
              <p className="text-gray-600">{deal.description}</p>
              <p className="font-bold mt-2">{deal.price}</p>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => addToCart(deal)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Add to Cart
                </button>

                <Link
                  href={`/deal/${deal.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Deal
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
