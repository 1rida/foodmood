'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Cart count load from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartCount(JSON.parse(savedCart).length);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();

    // Listen to storage changes (multi-tab update + when cart updates)
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo + Site Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/logo.jpg"
            alt="Food Factory Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <Link href="/" className="text-2xl font-bold text-green-500">
            Food Mood
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/manu" className="hover:text-green-500">Menu</Link>
          <Link href="/Ballroom" className="hover:text-green-500">Ballroom</Link>
          <Link href="/deal" className="hover:text-green-500">Deal</Link>
          <Link href="/Feedback" className="hover:text-green-500">Feedback</Link>
          <Link href="/contacts" className="hover:text-green-500">Contacts</Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-green-500 hover:text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu + Cart */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-black text-white font-medium">
          <Link href="/" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/manu" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/Ballroom" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Ballroom</Link>
          <Link href="/deal" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Deal</Link>
          <Link href="/Feedback" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Feedback</Link>
          <Link href="/contacts" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Contacts</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
