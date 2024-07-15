import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.instagram.com/pankhuri0209/"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://x.com/PANKHURI0209"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pankhurigupta0209/"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:pankhuri0209@gmail.com"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaEnvelope size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-8 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-medium text-gray-300">Email</span>
            <span className="text-lg font-semibold text-white">
              pankhuri0209@gmail.com
            </span>
          </div>
        </div> */}
      </div>

      <div className="mt-8 text-center text-gray-400">
        &copy; 2024 Pankhuri Gupta
      </div>
    </footer>
  );
};

export default Footer1;
