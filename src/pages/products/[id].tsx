import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../lib/CartContext';
import { Product } from '../../lib/types';
import React from 'react';

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (!id) return;
    
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        setProduct({
          id: data.id,
          title: data.title,
          price: data.price,
          thumbnail: data.thumbnail,
          description: data.description,
        });
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
    
  }, [id]);

  if (loading) {
    return <div className="text-center p-8 text-xl text-gray-400">Loading product details...</div>;
  }

  if (error || !product) {
    return (
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-100">Product Not Found</h1>
        <p className="mt-4 text-lg text-gray-400">The product you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md"
      />
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">{product.title}</h1>
        <p className="text-3xl font-semibold text-teal-400 mb-6">${product.price.toFixed(2)}</p>
        <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
