"use client"; // This line ensures that the component is treated as a Client Component

import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const BlogPage: React.FC = () => {
  useEffect(() => {
    console.log("Custom script executed!");
    const textElement = document.querySelector(".text p") as HTMLElement;
    if (textElement) {
      textElement.innerHTML = textElement.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Blogs
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>Coming Soon!!!!!!!</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 md:justify-end">
          <div className="circle">
            <div className="logo">
              <div className="text">
                <p> BLOGS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default BlogPage;
