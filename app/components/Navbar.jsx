'use client'
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 w-full z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">QuantumStep IT</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative group">
            <button
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              Courses
              <span className=" text-gray-500">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg ${
                isDropdownOpen ? "block" : "hidden"
              }`}
              style={{ top: '100%', left: 0, zIndex: 100 }} // Ensure correct positioning and z-index
            >
              <ul className="p-2">
                <li className="py-2 px-4  hover:text-blue-500">
                  <Link href="/courses/python">Python</Link>
                </li>
                <li className="py-2 px-4  hover:text-blue-500">
                  <Link href="/courses/sql">SQL</Link>
                </li>
                <li className="py-2 px-4  hover:text-blue-500">
                  <Link href="/courses/databases">Databases</Link>
                </li>
                <li className="py-2 px-4  hover:text-blue-500">
                  <Link href="/courses/docker">Docker</Link>
                </li>
                {/* Add more courses here */}
              </ul>
            </div>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/careers">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
