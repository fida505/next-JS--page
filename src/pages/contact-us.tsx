
import React from 'react';

export default function ContactUsPage() {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        Have a question, feedback, or a partnership inquiry? We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-200 font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Fida"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="fida.doe@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-200 font-bold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

