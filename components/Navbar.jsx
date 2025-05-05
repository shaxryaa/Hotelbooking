import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">StayKaro</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-blue-600">
            Services
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-blue-600">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
