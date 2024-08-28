'use client'
import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="max-md:flex md:hidden items-center justify-between px-4 py-2 bg-base-100">
        <a className="btn btn-ghost text-xl">QuantumStep IT</a>
        <button
          className="text-gray-600"
          onClick={toggleNav}
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
              d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${isNavOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button
            className="text-gray-600"
            onClick={toggleNav}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <Link href="/" onClick={() => setIsNavOpen(false)}>Home</Link>
          </li>
          <li className="relative group">
            <button className="flex items-center">
              Courses
              <span className="ml-2 text-gray-500">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isNavOpen ? "rotate-180" : ""}`}
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
              className={`absolute top-full left-0 w-full bg-white rounded-lg shadow-lg ${isNavOpen ? "block" : "hidden"}`}
            >
              <ul className="p-2 space-y-2">
                <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                  <Link href="/courses/python" onClick={() => setIsNavOpen(false)}>Python</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                  <Link href="/courses/sql" onClick={() => setIsNavOpen(false)}>SQL</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                  <Link href="/courses/databases" onClick={() => setIsNavOpen(false)}>Databases</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 hover:text-blue-500">
                  <Link href="/courses/docker" onClick={() => setIsNavOpen(false)}>Docker</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/reviews" onClick={() => setIsNavOpen(false)}>Reviews</Link>
          </li>
          <li>
            <Link href="/careers" onClick={() => setIsNavOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsNavOpen(false)}>Blog</Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={() => setIsNavOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
