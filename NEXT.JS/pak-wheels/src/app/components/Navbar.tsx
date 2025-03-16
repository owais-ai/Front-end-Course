'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Mobile Menu Icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white">
      {/* Top Bar */}
      <div className="pb-2 flex justify-between text-center pt-3 px-4 md:px-36">
        <div className="flex items-center gap-2">
          <Image src="/phone.png" alt="phone-icon" height={20} width={20} className="h-6 w-6"/>
          <p className="text-xs">Download App via SMS</p>
        </div>
        <div>
          <p className="text-xs">Sign In | Sign Up</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-px bg-gray-500 mx-4 md:mx-36"></div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center h-20 px-4 md:px-36">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="hover:text-gray-300 cursor-pointer">New Cars</li> 
          <li className="hover:text-gray-300 cursor-pointer">Used Cars</li>
          <li className="hover:text-gray-300 cursor-pointer">Bikes</li>
          <li className="hover:text-gray-300 cursor-pointer">Auto Store</li>
          <li className="hover:text-gray-300 cursor-pointer">Videos</li>
          <li className="hover:text-gray-300 cursor-pointer">Blogs</li>
          <li className="hover:text-gray-300 cursor-pointer">Forums</li>
          <li className="hover:text-gray-300 cursor-pointer">More</li>
          <button className="h-8 w-32 rounded bg-red-700 hover:bg-red-800">
            Post an Ad
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-blue-900 text-white p-4 space-y-3 text-center">
          <Link href="/" className="hover:text-gray-300">New Cars</Link>
          <Link href="/" className="hover:text-gray-300">Used Cars</Link>
          <Link href="/" className="hover:text-gray-300">Bikes</Link>
          <Link href="/" className="hover:text-gray-300">Auto Store</Link>
          <Link href="/" className="hover:text-gray-300">Videos</Link>
          <Link href="/" className="hover:text-gray-300">Blogs</Link>
          <Link href="/" className="hover:text-gray-300">Forums</Link>
          <Link href="/" className="hover:text-gray-300">More</Link>
          <button className="h-8 w-32 rounded bg-red-700 hover:bg-red-800 mx-auto">
            Post an Ad
          </button>
        </div>
      )}
    </nav>
  );
}
