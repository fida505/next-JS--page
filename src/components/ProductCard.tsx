import Link from 'next/link';
import { useCart } from '../lib/CartContext';
import { Product } from '../lib/types';
import React from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{product.title}</h3>
        <p className="text-gray-400 mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center space-x-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 text-center bg-gray-700 text-gray-200 py-2 px-4 rounded-full font-medium hover:bg-gray-600 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-teal-500 text-white py-2 px-4 rounded-full font-medium hover:bg-teal-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
