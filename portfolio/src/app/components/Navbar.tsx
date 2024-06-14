"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "projects" },
    { id: 2, link: "about me" },
    { id: 3, link: "blog" },
    { id: 4, link: "contact" },
  ];

  return (
    <div className="flex justify-between text-black bg-white fixed navBar-outline">
      <div className="relative">
        <span
          className="text"
          style={{
            fontFamily: "Sarabun, sans-serif",
            fontSize: "30px",
            lineHeight: "46px",
            fontWeight: "700",
          }}
        >
          <span style={{ color: "#000000" }}>&lt;</span>
          <span style={{ color: "#F9629F" }}>Pankhuri Gupta</span>
          <span style={{ color: "#000000" }}>/&gt;</span>
        </span>
      </div>

      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={`/${link.replace(" ", "").toLowerCase()}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  custom-width h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-6 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                href={`/${link.replace(" ", "").toLowerCase()}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Navbar;

// jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
