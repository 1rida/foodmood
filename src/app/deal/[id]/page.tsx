"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const deals = [
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
    description: "2 Chicken Biryani + 2 Drinks + Dessert",
    price: "₨ 800",
    image: "/images/deal3.jpg",
  },
];

export default function DealDetailPage() {
  const params = useParams();
  const dealId = Number(params.id);

  const deal = deals.find((d) => d.id === dealId);

  if (!deal) {
    return <p className="p-6 text-red-500">Deal not found!</p>;
  }

  // Add to Cart
  const addToCart = () => {
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
      {/* Background image */}
      <Image
        src="/images/biryani.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Header */}
      <Header />

      {/* Deal Content (Glassmorphism Card) */}
      <div className="max-w-3xl mx-auto p-6 mt-10 
                      bg-white/20 backdrop-blur-lg shadow-lg 
                      rounded-2xl text-center border border-white/30">
        
        {/* ✅ Deal Number Heading */}
        <h2 className="text-lg font-semibold text-yellow-300 uppercase">
          Deal {deal.id}
        </h2>

        <Image
          src={deal.image}
          alt={deal.name}
          width={600}
          height={400}
          className="rounded-lg object-cover mx-auto mt-2"
        />
        <h1 className="text-3xl font-bold mt-4 text-white">{deal.name}</h1>
        <p className="text-gray-200 mt-2">{deal.description}</p>
        <p className="text-xl font-bold mt-2 text-yellow-300">{deal.price}</p>

        <button
          onClick={addToCart}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Add to Cart
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
