import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <h4 className="text-xl font-bold text-gray-100 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-teal-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-teal-400 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-teal-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-teal-400 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl font-bold text-gray-100 mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-teal-400 transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-xl font-bold text-gray-100 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Facebook">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3h-3.375c-3.185 0-4.625 1.341-4.625 4.333v1.667z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Twitter">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.579 0-6.479 2.9-6.479 6.479 0 .508.056 1.006.162 1.49-.009 0-.018 0-.027 0-5.394-.271-10.198-2.868-13.407-6.845-.561.968-.887 2.09-.887 3.322 0 2.257 1.151 4.254 2.911 5.438-1.07-.033-2.078-.329-2.965-.818.006.027.006.053.006.08a6.467 6.467 0 015.183 6.331-6.702 6.702 0 01-1.708.225c-.417 0-.82-.04-.982-.095.534 1.71 2.083 2.955 3.921 2.993a12.923 12.923 0 005.65-1.341c2.164-1.589 3.591-3.999 4.103-6.579 0-.005 0-.01 0-.015.011-.005.023-.01.034-.015.006 0 .012 0 .018 0 .42-.191.785-.411 1.127-.674z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Instagram">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-3.23 0-3.642.014-4.898.072-1.258.058-2.115.253-2.87.545a4.773 4.773 0 00-1.748 1.134 4.773 4.773 0 00-1.134 1.748c-.292.755-.487 1.612-.545 2.87-.058 1.256-.072 1.668-.072 4.898s.014 3.642.072 4.898c.058 1.258.253 2.115.545 2.87a4.773 4.773 0 001.134 1.748 4.773 4.773 0 001.748 1.134c.755.292 1.612.487 2.87.545 1.256.058 1.668.072 4.898.072s3.642-.014 4.898-.072c1.258-.058 2.115-.253 2.87-.545a4.773 4.773 0 001.748-1.134 4.773 4.773 0 001.134-1.748c.292-.755.487-1.612.545-2.87.058-1.256.072-1.668.072-4.898s-.014-3.642-.072-4.898c-.058-1.258-.253-2.115-.545-2.87a4.773 4.773 0 00-1.134-1.748 4.773 4.773 0 00-1.748-1.134c-.755-.292-1.612-.487-2.87-.545c-1.256-.058-1.668-.072-4.898-.072zm0 18c-3.14 0-3.523-.013-4.764-.069-1.168-.054-1.793-.243-2.26-.425a3.17 3.17 0 01-1.341-.855 3.17 3.17 0 01-.855-1.341c-.182-.467-.371-1.092-.425-2.26-.056-1.24-.069-1.623-.069-4.764s.013-3.523.069-4.764c.054-1.168.243-1.793.425-2.26a3.17 3.17 0 01.855-1.341 3.17 3.17 0 011.341-.855c.467-.182 1.092-.371 2.26-.425 1.24-.056 1.623-.069 4.764-.069s3.523.013 4.764.069c1.168.054 1.793.243 2.26.425a3.17 3.17 0 011.341.855 3.17 3.17 0 01.855 1.341c.182.467.371 1.092.425 2.26.056 1.24.069 1.623.069 4.764s-.013 3.523-.069 4.764c-.054 1.168-.243 1.793-.425 2.26a3.17 3.17 0 01-.855 1.341 3.17 3.17 0 01-1.341.855c-.467.182-1.092.371-2.26.425-1.24.056-1.623.069-4.764.069z"/>
                <path d="M12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM12 15a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
                <circle cx="16.993" cy="7.007" r="1.5"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500">
        <p> 2025 FASION FRUZO</p>
      </div>
    </footer>
  );
}

