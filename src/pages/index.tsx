import Link from 'next/link';
import FeaturedProducts from '../components/FeaturedProducts';
import React from 'react';

export default function HomePage() {
  return (
    <div className="text-center">
     
      <div className="relative bg-zinc-800 text-white py-24 px-8 rounded-xl shadow-lg mb-12">
        <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">
            Welcome to Our Store!
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Discover a wide range of premium products tailored for you.
          </p>
          <Link href="/products" className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-xl">
            Shop Now
          </Link>
        </div>
      </div>

     
      <section className="my-12">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">Explore Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-800 rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-200 mb-2">Electronics</h3>
            <p className="text-gray-400 mb-4">Find the latest gadgets and devices.</p>
            <Link href="/products" className="text-teal-400 hover:underline font-semibold">
              Shop Electronics
            </Link>
          </div>
          <div className="bg-zinc-800 rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-200 mb-2">Fashion</h3>
            <p className="text-gray-400 mb-4">Stay trendy with our exclusive clothing line.</p>
            <Link href="/products" className="text-teal-400 hover:underline font-semibold">
              Shop Fashion
            </Link>
          </div>
          <div className="bg-zinc-800 rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-200 mb-2">Home & Living</h3>
            <p className="text-gray-400 mb-4">Decorate your space with our unique collection.</p>
            <Link href="/products" className="text-teal-400 hover:underline font-semibold">
              Shop Home
            </Link>
          </div>
        </div>
      </section>

      
      <FeaturedProducts />

      
      
    </div>
  );
}

