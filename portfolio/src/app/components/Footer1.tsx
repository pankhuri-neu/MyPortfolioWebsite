import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://www.instagram.com/pankhuri0209/#"
            className="flex items-center text-gray-400 hover:text-gray-100 space-x-2"
          >
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="https://x.com/PANKHURI0209?mx=2"
            className="flex items-center text-gray-400 hover:text-gray-100 space-x-2"
          >
            <FaTwitter size={24} />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pankhurigupta0209/"
            className="flex items-center text-gray-400 hover:text-gray-100 space-x-2"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="pankhuri0209@gmail.com"
            className="flex items-center text-gray-400 hover:text-gray-100 space-x-2"
          >
            <FaEnvelope size={24} />
            <span>My email</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-8 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-medium text-gray-300">Email</span>
            <span className="text-lg font-semibold text-white">
              {/* hello@pankhurigupta.tech */}
              pankhuri0209@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        &copy; 2024 Pankhuri Gupta
      </div>
    </footer>
  );
};

export default Footer1;
