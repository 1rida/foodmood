'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/ballroom2.jpg"
        alt="Ballroom Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm -z-10" />

      {/* Fixed Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Page Content */}
      <div className="flex-grow flex items-center justify-center">
        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 bg-white/10 backdrop-blur-md text-white p-10 rounded-3xl shadow-2xl w-full max-w-3xl mt-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-amber-300">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <Mail className="text-amber-400" />
                <span>foodfactory@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-amber-400" />
                <span>0309-123456778</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-amber-400" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="pt-4 space-x-4">
                <a
                  href="https://wa.me/923092138872"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  WhatsApp
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  className="hover:text-blue-300 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/your-profile"
                  className="hover:text-gray-300 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/90 text-black px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/90 text-black px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-white/90 text-black px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 transition text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
