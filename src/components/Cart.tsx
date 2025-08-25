'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface FoodItem {
  name: string;
  price: string;
  category: string;
  image: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<FoodItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Remove item from cart
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Get total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const priceNum = Number(item.price.replace(/[^\d]/g, ''));
      return total + priceNum;
    }, 0);
  };

  // Checkout action
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Checkout successful! Total amount: ₨ ${getTotalPrice()}`);
    clearCart();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <main className="flex-1 max-w-6xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">{item.price}</p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total and actions */}
            <div className="mt-6 p-4 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold">Total: ₨ {getTotalPrice()}</h2>
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
