"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const ProjectsPage: React.FC = () => {
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
            My projects
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>
              Working on diverse range of projects, including a robotics and
              computer graphics project for the Kinova Robotic Arm, and an
              e-commerce platform, cloud-based solutions and worked on data
              manipulation tools. Advanced Java-based GIS solutions. Hold
              expertise in both front-end and back-end development.Engaging in
              providing end-end solutions.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 md:justify-end">
          <div className="circle">
            <div className="logo">
              <div className="text">
                <p>MY PROJECTS </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F6FBF0FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-24 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-12 md:col-span-10"></div>
              <div className="flex flex-col col-span-12 md:col-span-14">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="flex flex-col gap-2 md:gap-0">
                    <h3
                      className="font-semibold text-foreground/90"
                      style={{ color: "#81B72FFF" }}
                    >
                      Full Stack
                    </h3>
                    <h1 className="text-projects">Elderlycare</h1>
                    <p className="text-medium text-foreground/80">
                      A web-based solution to improve healthcare accessibility
                      for the elderly, EC-Buddy AI assistant , book doctor
                      <br /> appointments and empower doctors with real-time
                      access, enhancing operational efficiency and patient
                      satisfaction
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <img
                      src="/images/elderlycare/logo.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/elderlycare/hands.jpeg"
                      alt="Logo"
                      className="logo-image"
                    />
                    {/* <img
                      src="/images/sample/e3.png"
                      alt="Logo"
                      className="logo-image"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              <Link href="/elderlycare">
                <button className="button">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                    className="icon"
                    width="16"
                    height="16"
                  >
                    <path
                      style={{ fill: "#232326" }}
                      d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                      data-name="Left"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FDF2F4FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-24 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-12 md:col-span-10"></div>
              <div className="flex flex-col col-span-12 md:col-span-14">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="flex flex-col gap-2 md:gap-0">
                    <h3
                      className="font-semibold text-foreground/90"
                      style={{ color: "#E34D73FF" }}
                    >
                      Blockchain, Frontend
                    </h3>
                    <h1 className="text-projects">Secure Social Share</h1>
                    <p className="text-medium text-foreground/80">
                      An E2E encrypted data sharing system with strict, smart
                      contract-based access control, allowing users to <br />{" "}
                      securely share sensitive information with their social
                      circle in a decentralized way. Winner of multiple 1st
                      place <br />
                      prizes at ETHBoston 2024.
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <img
                      src="/images/securesocialshare/lock.jpg"
                      alt="Logo"
                      className="logo-image"
                      // height="350px"
                      // width="100"
                    />
                    {/* <img
                      src="/images/sample/e2.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/sample/e3.png"
                      alt="Logo"
                      className="logo-image"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              <Link href="/secureshare">
                <button className="button">
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                    className="icon"
                    width="16"
                    height="16"
                  >
                    <path
                      style={{ fill: "#232326" }}
                      d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                      data-name="Left"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FDF2F4FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-24 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-12 md:col-span-10"></div>
              <div className="flex flex-col col-span-12 md:col-span-14">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="flex flex-col gap-2 md:gap-0">
                    <h3
                      className="font-semibold text-foreground/90"
                      style={{ color: "#E34D73FF" }}
                    >
                      Coming Soon!!!
                    </h3>
                    <h1 className="text-projects">Coming Soon!!!</h1>
                    <p className="text-medium text-foreground/80">
                      Coming Soon!!!
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <img
                      src="/images/sample/e1.png"
                      alt="Logo"
                      className="logo-image"
                      // height="350px"
                      // width="100"
                    />
                    {/* <img
                      src="/images/sample/e2.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/sample/e3.png"
                      alt="Logo"
                      className="logo-image"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              {/* <Link href="/secureshare"> */}
              <button className="button">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  className="icon"
                  width="16"
                  height="16"
                >
                  <path
                    style={{ fill: "#232326" }}
                    d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                    data-name="Left"
                  />
                </svg>
              </button>
              {/* </Link> */}
            </div>
          </CardBody>
        </Card>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
