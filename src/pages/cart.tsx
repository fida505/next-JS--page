import Link from 'next/link';
import { useCart } from '../lib/CartContext';
import React from 'react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-gray-400 mb-8">Start shopping to add items to your cart!</p>
        <Link href="/products" className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg">
          Browse Products
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-100">Shopping Cart</h1>
      <div className="bg-zinc-800 rounded-xl shadow-lg p-6">
        <div className="divide-y divide-gray-700">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-4">
              <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-100">{item.title}</h2>
                <p className="text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-700 text-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600"
                >
                  -
                </button>
                <span className="w-8 text-center text-gray-200">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-700 text-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-semibold ml-4 w-24 text-right text-gray-200">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-6 text-red-400 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end items-center">
          <p className="text-2xl font-bold text-gray-100">Subtotal:</p>
          <p className="text-2xl font-bold text-teal-400 ml-4">${subtotal.toFixed(2)}</p>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={clearCart}
            className="bg-gray-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-600 transition-colors"
          >
            Clear Cart
          </button>
          <button className="bg-green-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
