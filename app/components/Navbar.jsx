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
      <div className="flex items-center justify-between px-4 py-2">
        <a className="btn btn-ghost text-xl">QuantumStep IT</a>
        <button
          className="block lg:hidden px-2 py-1 text-gray-600"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isDropdownOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isDropdownOpen ? "block" : "hidden"} lg:block`}>
          <ul className="menu menu-horizontal px-1 space-y-2 lg:space-y-0 lg:flex lg:space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                Courses
                <span className="ml-2 text-gray-500">
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
                } lg:mt-0 lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:flex lg:flex-col lg:space-y-2`}
              >
                <ul className="p-2 lg:p-0 lg:flex lg:flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                    <Link href="/courses/python">Python</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                    <Link href="/courses/sql">SQL</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                    <Link href="/courses/databases">Databases</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                    <Link href="/courses/docker">Docker</Link>
                  </li>
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
    </div>
  );
};

export default Navbar;
