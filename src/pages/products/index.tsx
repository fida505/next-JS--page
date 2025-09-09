import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../lib/types';
import React from 'react';

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        const transformedProducts = data.products.map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          description: item.description
        }));
        setProducts(transformedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-xl text-gray-400">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-xl text-red-400">Error fetching products. Please try again later.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-100">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

