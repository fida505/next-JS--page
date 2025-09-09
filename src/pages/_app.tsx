import { AppProps } from 'next/app';
import { CartProvider } from '../lib/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>My E-Commerce App</title>
        <meta name="description" content="An example e-commerce application built with Next.js Pages Router" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          @keyframes ping-once {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-ping-once {
            animation: ping-once 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </Head>
      <div className="bg-gray-900 text-gray-200 font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4 flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

