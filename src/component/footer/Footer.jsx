import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">Your Company</h2>
          <p className="text-gray-600">
            Creating innovative solutions for modern businesses. Connect with us
            on social media.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to get the latest news and updates.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800 border border-gray-300"
            />
            <button className="w-full mt-2 bg-[#0000B5] hover:bg-black transition-colors duration-300 text-white py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
