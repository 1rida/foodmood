"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Helper: Star rating renderer */
function StarRating({ rating = 5 }) {
  const total = 5;
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-transparent text-gray-400"
          } drop-shadow`}
        >
          <path
            stroke="currentColor"
            strokeWidth="1"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z"
          />
        </svg>
      ))}
    </div>
  );
}

/** 20 Client Reviews (dummy data) */
const reviews = [
  { id: 1, name: "Ayesha Khan", review: "Delicious food and quick delivery. Highly recommended!", rating: 5 },
  { id: 2, name: "Ali Raza", review: "Biryani was flavorful and fresh. Great value!", rating: 4 },
  { id: 3, name: "Sara Ahmed", review: "Burger combo was perfect. Will order again.", rating: 5 },
  { id: 4, name: "Hassan Ali", review: "Packaging and taste both on point.", rating: 4 },
  { id: 5, name: "Fatima Noor", review: "Loved the deals and portion size!", rating: 5 },
  { id: 6, name: "Usman Tariq", review: "Good taste, a bit late delivery this time.", rating: 3 },
  { id: 7, name: "Noor Jahan", review: "Zinger was crispy and juicy. Yum!", rating: 5 },
  { id: 8, name: "Adeel Sheikh", review: "Consistent quality. Staff is polite.", rating: 4 },
  { id: 9, name: "Hira Iqbal", review: "Tried the Biryani Special—amazing!", rating: 5 },
  { id: 10, name: "Talha Mehmood", review: "Fries could be better, rest was great.", rating: 3 },
  { id: 11, name: "Zara Siddiqui", review: "Love the spice level. Just right!", rating: 4 },
  { id: 12, name: "Bilal Khan", review: "Family Deal is a must-try.", rating: 5 },
  { id: 13, name: "Maha Yousuf", review: "Clean, tasty, and on time.", rating: 5 },
  { id: 14, name: "Hamza Ali", review: "Great taste, reasonable prices.", rating: 4 },
  { id: 15, name: "Iqra Shah", review: "Presentation was lovely. Keep it up!", rating: 4 },
  { id: 16, name: "Danish Farooq", review: "Drinks were cold, food was hot. Perfect.", rating: 5 },
  { id: 17, name: "Laiba Asif", review: "Customer support is responsive.", rating: 4 },
  { id: 18, name: "Ahmad Rauf", review: "Portions generous. Worth the price.", rating: 5 },
  { id: 19, name: "Sadia Imran", review: "Got a minor mix-up, but quickly fixed.", rating: 4 },
  { id: 20, name: "Zainab Akhtar", review: "Overall great experience. Will recommend.", rating: 5 },
];

/** Avatar component */
type AvatarProps = { name: string };

function Avatar({ name }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="h-12 w-12 rounded-full bg-white/30 border border-white/40 flex items-center justify-center text-white font-semibold backdrop-blur-sm">
      {initials}
    </div>
  );
}

export default function FeedbackPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <Image
        src="/images/biryani.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Header */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2">
          Client Feedback
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Real words from our happy customers ⭐
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="group rounded-2xl border border-white/25 bg-white/15 backdrop-blur-lg p-6 shadow-lg hover:bg-white/20 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div>
                  <h3 className="font-semibold">{r.name}</h3>
                  <StarRating rating={r.rating} />
                </div>
              </div>

              <p className="mt-4 text-gray-100 leading-relaxed">“{r.review}”</p>
              <div className="mt-4 text-xs text-gray-300">Review #{r.id}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
