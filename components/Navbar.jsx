"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold text-blue-600">StayKaro</Link>

        
        <div className="hidden md:flex items-center w-full justify-between">
          
          <div className="flex-1 flex justify-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          </div>

          
          <div className="flex items-center space-x-3">
            <Link href="/login" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">Login</Link>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Sign Up</Link>
          </div>
        </div>


        
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link href="/" onClick={toggleMenu} className="block text-gray-700">
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block text-gray-700"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="block text-gray-700"
          >
            Services
          </Link>
          <Link
            href="/blog"
            onClick={toggleMenu}
            className="block text-gray-700"
          >
            Blog
          </Link>
          <Link
            href="/login"
            onClick={toggleMenu}
            className="block text-blue-600"
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={toggleMenu}
            className="block text-blue-600"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
