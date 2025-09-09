import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-6">About Our Company</h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        We are more than just an e-commerce platform; we are a community dedicated to quality and customer satisfaction.
      </p>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Mission</h2>
        <p className="text-gray-400 leading-relaxed">
          Our mission is to provide a seamless and enjoyable shopping experience by offering a carefully curated selection of high-quality products. We are committed to ethical sourcing, sustainable practices, and creating value for our customers and partners. We believe that shopping should be a joyful and transparent process.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Vision</h2>
        <p className="text-gray-400 leading-relaxed">
          To become a leading global e-commerce destination, known for our exceptional service, innovative products, and unwavering commitment to our customers. We aim to build lasting relationships and inspire trust in every interaction.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-2">
          <li>Customer First: We prioritize our customers' needs and strive to exceed their expectations.</li>
          <li>Integrity: We conduct our business with honesty, transparency, and a strong moral compass.</li>
          <li>Innovation: We are constantly exploring new ways to improve our products and services.</li>
          <li>Sustainability: We are dedicated to making environmentally conscious choices in all our operations.</li>
        </ul>
      </section>
    </div>
  );
}


