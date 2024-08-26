import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Hello , let&#39;s work together!
          </h2>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.instagram.com/pankhuri0209/"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://x.com/Pankhurig0209"
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

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <form
            action="https://formspree.io/f/mzzpzvvq"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                placeholder="Your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-medium text-gray-300"
              >
                Input your message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                placeholder="Describe your project"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm md:text-base">
        &copy; 2024 Pankhuri Gupta
      </div>
    </footer>
  );
};

export default Footer;
