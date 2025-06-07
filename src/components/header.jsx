import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        <span className="text-white">VAIBHAVA</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex gap-4">
        <a href="#home" className="px-4 py-2 rounded-full bg-white text-black font-medium">
          Home
        </a>
        <a href="#about" className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          About
        </a>
        <a href="#work" className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          Work
        </a>
      </nav>

      {/* Contact Button */}
      <div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
