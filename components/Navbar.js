"use client";

import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section (Logo) */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wide">
            <span className="text-green-500">I</span>
            <span className="text-white">S</span>
            <span className="text-orange-500">D</span>
          </span>
          <span className="text-xs text-gray-300">
           IGCSM Skill Development Pvt. Ltd.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <NavItem title="HOME" />
          <NavItem title="ABOUT US" dropdown />
          <NavItem title="INDIAN ECONOMY" dropdown />
          <NavItem title="INDUSTRY" dropdown />
          <NavItem title="STATES/UT" dropdown />
          <NavItem title="EXPORTS" dropdown />
          <NavItem title="BLOG" />
          <NavItem title="CONTACT" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-3 p-4 bg-gray-700 rounded">
          <NavItem title="HOME" />
          <NavItem title="ABOUT US" dropdown />
          <NavItem title="INDIAN ECONOMY" dropdown />
          <NavItem title="INDUSTRY" dropdown />
          <NavItem title="STATES/UT" dropdown />
          <NavItem title="EXPORTS" dropdown />
          <NavItem title="BLOG" />
          <NavItem title="CONTACT" />
        </div>
      )}
    </nav>
  );
}

// Reusable NavItem Component
function NavItem({ title, dropdown }) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 hover:text-orange-400 transition">
        <span>{title}</span>
        {dropdown && <ChevronDown size={12} />}
      </button>
      {dropdown && (
        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded w-40">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Option 1
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Option 2
          </a>
        </div>
      )}
    </div>
  );
}
