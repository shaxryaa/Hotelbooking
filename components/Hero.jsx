"use client";
import React from 'react'

const Hero = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      <div className="bg-opacity-50 w-full h-full flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between text-white gap-10">
          
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your Perfect Stay with StayKaro
            </h1>
            <p className="text-lg">
              Easy bookings, cozy stays, and unforgettable experiences.
            </p>
          </div>

          
          <div className="md:w-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-gray-800 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero