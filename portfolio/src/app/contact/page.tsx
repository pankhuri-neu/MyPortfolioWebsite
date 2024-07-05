import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer1"; // Ensure this path is correct

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Say hello and let&apos;s work <br />
            together!
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                  placeholder="Your email address"
                />
              </div>
              <br />
              <div>
                <textarea
                  id="message"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                  placeholder="Describe your project"
                  //  rows="4"
                ></textarea>
              </div>
              <br />
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
        <div className="flex justify-center items-center w-full md:w-auto">
          <button className="logo-button">
            <img
              src="/images/contactme.png"
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center w-full md:w-auto">
          <Image
            src="/images/pics/pic2.png" // Ensure this path is correct
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ContactPage;
