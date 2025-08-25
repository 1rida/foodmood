// src/components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-400">Food Factory</h2>
          <p className="text-gray-400">
            Tasty, Hygienic & Delivered Fast! We serve food with love and care in a warm and inviting environment.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/Ballroom">ballRoom</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact / Social Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">📞 0309-1234567</p>
          <p className="text-gray-400 mb-2">📍 Karachi, Pakistan</p>
          <p className="text-gray-400">✉️ foodMood@gmail.com</p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Food Factory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
