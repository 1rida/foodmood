'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Slide from '@/components/Slide';
import Footer from '@/components/Footer';

const BallroomPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />
      <Slide />

      {/* Background section */}
      <div
        className="relative py-16 px-6"
        style={{
          backgroundImage: 'url("/images/ballroom.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-300 mb-6 drop-shadow-lg">
            Welcome to Our Elegant Ballroom
          </h1>

          {/* Foreground Image */}
          <div className="w-full mb-10 rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/images/ballroom1.jpg"
              alt="Ballroom View"
              width={1200}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 md:p-10 leading-relaxed text-gray-800 space-y-4"
          >
            <p>
              Our beautifully designed ballroom is the perfect venue for all your special occasions.
              Whether you,re planning a wedding, birthday, corporate event, or anniversary, our space offers the elegance and ambiance to make your event unforgettable.
            </p>

            <p>
              With a seating capacity of up to 300 guests, our ballroom is equipped with modern lighting,
              air-conditioning, and customizable décor to match your theme.
            </p>

            <p>
              We offer complete event management including catering, stage setup, sound system, floral
              arrangements, and more—so you can relax and enjoy.
            </p>

            <p>
              📍 <strong>Location:</strong> Near Main Boulevard, Karachi  
              <br />
              📞 <strong>Contact:</strong> 0300-1234567  
              <br />
              🕒 <strong>Timings:</strong> 10:00 AM – 11:00 PM (Daily)
            </p>

            <p className="text-amber-700 font-semibold">
              Book your date now and let us take care of your big day with class, comfort, and care!
            </p>
          </motion.div>

          {/* Ballroom Gallery */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-amber-300 mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['ballroom2.jpg', 'ballroom1.jpg', 'ballroom3.jpg', 'ballroom4.jpg', 'ballroom5.jpg', 'ballroom6.jpg'].map(
                (img, index) => (
                  <motion.div
                    key={img}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg border-4 border-white h-64 sm:h-72 lg:h-80"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={`/images/${img}`}
                        alt={`Ballroom Image ${index + 2}`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* 🎥 Events GIF */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-amber-300 mb-4">Experience the Magic of Our Events</h2>
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/ballroom-event.gif"
                alt="Ballroom Events"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* 💸 Discount Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-amber-100 text-gray-800 rounded-xl p-6 md:p-10 shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-amber-700">🎁 Special Offer</h3>
            <p className="text-lg font-medium">
              Book before <span className="font-bold text-red-600">december 31st</span> and get <span className="text-green-700 font-bold">20% OFF</span> on your full event package!
            </p>
          </motion.div>

          {/* 🥂 Limited-Time Deal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 bg-red-100 text-red-800 rounded-xl p-6 md:p-10 shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-2">🔥 Weekend Deal</h3>
            <p className="text-lg font-medium">
              Free welcome drinks & floral entrance setup for <span className="font-semibold">Saturday & Sunday bookings</span>! ✨
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BallroomPage;
