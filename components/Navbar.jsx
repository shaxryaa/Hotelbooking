"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className={`max-w-7xl mx-auto px-4 ${scrolled ? 'py-3' : 'py-5'} flex items-center justify-between`}>
        
        <Link href="/" className={`font-bold ${scrolled ? 'text-xl text-blue-600' : (isHomepage ? 'text-2xl text-white' : 'text-2xl text-blue-600')}`}>StayKaro</Link>

        
        <div className="hidden md:flex items-center w-full justify-between">
          
          <div className="flex-1 flex justify-center space-x-6">
            <Link href="/" className={`${scrolled ? 'text-base text-gray-700 hover:text-blue-600' : (isHomepage ? 'text-lg text-white hover:text-blue-200' : 'text-lg text-gray-700 hover:text-blue-600')}`}>Home</Link>
            <Link href="/about" className={`${scrolled ? 'text-base text-gray-700 hover:text-blue-600' : (isHomepage ? 'text-lg text-white hover:text-blue-200' : 'text-lg text-gray-700 hover:text-blue-600')}`}>About</Link>
            <Link href="/services" className={`${scrolled ? 'text-base text-gray-700 hover:text-blue-600' : (isHomepage ? 'text-lg text-white hover:text-blue-200' : 'text-lg text-gray-700 hover:text-blue-600')}`}>Services</Link>
            <Link href="/blog" className={`${scrolled ? 'text-base text-gray-700 hover:text-blue-600' : (isHomepage ? 'text-lg text-white hover:text-blue-200' : 'text-lg text-gray-700 hover:text-blue-600')}`}>Blog</Link>
          </div>

          
          <div className="flex items-center space-x-3">
            <SignedOut>
              <SignInButton>
                <button className={`px-4 py-2 rounded transition ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : (isHomepage ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700')}`}>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>


        
        <div className="md:hidden">
          <button onClick={toggleMenu} className={scrolled ? 'text-gray-700' : (isHomepage ? 'text-white' : 'text-gray-700')}>
            {isOpen ? <X size={scrolled ? 28 : 32} /> : <Menu size={scrolled ? 28 : 32} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className={`md:hidden px-6 pb-4 space-y-4 ${scrolled ? 'pt-2 bg-white' : (isHomepage ? 'pt-3 bg-black bg-opacity-80' : 'pt-3 bg-white')}`}>
          <Link href="/" onClick={toggleMenu} className={`block ${scrolled ? 'text-base text-gray-700' : (isHomepage ? 'text-lg text-white' : 'text-lg text-gray-700')}`}>
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className={`block ${scrolled ? 'text-base text-gray-700' : (isHomepage ? 'text-lg text-white' : 'text-lg text-gray-700')}`}
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className={`block ${scrolled ? 'text-base text-gray-700' : (isHomepage ? 'text-lg text-white' : 'text-lg text-gray-700')}`}
          >
            Services
          </Link>
          <Link
            href="/blog"
            onClick={toggleMenu}
            className={`block ${scrolled ? 'text-base text-gray-700' : (isHomepage ? 'text-lg text-white' : 'text-lg text-gray-700')}`}
          >
            Blog
          </Link>
    
          <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className={`block ${scrolled ? 'text-blue-600 hover:text-blue-800' : (isHomepage ? 'text-blue-300 hover:text-white' : 'text-blue-600 hover:text-blue-800')}`}>
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
