import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 max-sm:text-lg">
              Quantum Academy
            </h4>
            <p className="text-gray-300 max-sm:text-sm">
              Empowering your future with the skills you need to succeed in the
              IT industry. Join us and start your journey today!
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 max-sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 max-sm:text-lg">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline max-sm:text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 max-sm:text-lg">
              Stay Connected
            </h4>
            <p className="text-gray-300 mb-4 max-sm:text-sm">
              Follow us on social media and stay updated with the latest news
              and offers.
            </p>
            <div className="flex space-x-4 max-sm:space-x-2">
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f max-sm:text-sm"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter max-sm:text-sm"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-instagram max-sm:text-sm"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-linkedin-in max-sm:text-sm"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 max-sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Quantum Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
