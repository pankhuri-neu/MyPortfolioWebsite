"use client";
// pages/index.tsx
import Image from "next/image";
import Navbar from "./components/Navbar"; // Ensure this path is correct
import Footer from "./components/Footer"; // Ensure this path is correct
import { Card, CardBody, Button, CardFooter } from "@nextui-org/react";
import Script from "next/script";
import Link from "next/link";
import React from "react";
import Slider from "./components/Slider";

const Home: React.FC = () => {
  const testimonials = [
    <div key="1">
      <h2
        className="font-semibold text-foreground/90 text-2xl"
        style={{ color: "#E34D73FF" }}
      >
        Dr. Purnendu Shekhar Pandey
      </h2>
      <br />
      <h2
        className=" text-foreground/90 text-xl"
        style={{ color: "#E34D73FF", fontStyle: "italic" }}
      >
        Associate Professor & Researcher
      </h2>
      <p className=" mt-4 ">
        I am pleased to recommend Pankhuri for her outstanding work on the Smart
        Bag project. I had the privilege of supervising Pankhuri and witnessing
        her remarkable skills and dedication firsthand. Pankhuri worked on the
        development of a Smart Bag, integrating various advanced technologies
        such as IoT, RFID, and GPS. Despite having no prior experience in these
        areas, she demonstrated exceptional intellectual abilities and
        successfully created a cohesive and functional system in a short period.
        Throughout the project, Pankhuri showed a strong capacity for
        independent work, creativity, and enthusiasm. Her sharp mind, excellent
        grasping power, and deep commitment to her tasks were evident. Among the
        many students I have mentored, Pankhuri stands out as one of the very
        best. Her programming skills, analytical approach, and problem-solving
        abilities are particularly impressive. Pankhuris work ethic is
        exemplary. The Smart Bag project she completed during her undergraduate
        studies showcases her ability to quickly learn new technologies and
        apply them effectively to solve challenging problems. Her motivation to
        acquire new professional skills is commendable. Pankhuri is self-driven
        and highly motivated, with a clear potential for success in any
        professional endeavor. I highly recommend her for any opportunity she
        seeks. She is a bright and highly motivated individual who will be an
        asset to any team.
      </p>
    </div>,

    <div key="2">
      <h2
        className="font-semibold text-foreground/90 text-2xl"
        style={{ color: "#E34D73FF" }}
      >
        Naresh Sharma
      </h2>
      <br />
      <h2
        className=" text-foreground/90 text-xl"
        style={{ color: "#E34D73FF", fontStyle: "italic" }}
      >
        Sr. Technical Manager @ Hexagon
      </h2>
      <p className=" mt-4 text-center md:text-left">
        I am pleased to write this recommendation for Pankhuri based on her
        outstanding performance. Pankhuri collaborated with me on various
        projects, and her expertise and dedication were invaluable assets to our
        team. Her deep knowledge of Technologies and Geographic Information
        Systems (GIS) enabled her to tackle complex spatial challenges with
        precision and creativity. She adeptly coded GIS solutions, offered
        technical consultancy, and managed Proof of Concept applications,
        showcasing our product robustness. Her analytical prowess and ability to
        tackle challenges independently highlighted her exceptional competence
        and dedication Pankhuris enthusiasm for her work and her commitment to
        delivering results make her a highly valuable asset to any organization.
        I wholeheartedly recommend her and I am confident that she will continue
        to excel in her future endeavors.
      </p>
    </div>,
    <div key="3">
      <h2
        className="font-semibold text-foreground/90 text-2xl"
        style={{ color: "#E34D73FF" }}
      >
        Shivangi Pandey
      </h2>
      <br />
      <h2
        className=" text-foreground/90 text-xl italic-text"
        style={{ color: "#E34D73FF", fontStyle: "italic" }}
      >
        Senior Software Engineer @ Nagarro
      </h2>
      <p className=" mt-4 text-center md:text-left">
        I had the pleasure of working with Pankhuri, and I am continually
        impressed by her exceptional problem-solving skills and dedication.
        Pankhuri played a pivotal role in resolving critical blocker issues that
        were hindering our progress. She adeptly addressed a major issue in
        visualizing student fees and creating student payments dashboards. Her
        work on the dashboard, which serves over 2,000 campus customers and
        impacts more than 10,000 student users, was nothing short of
        outstanding. Pankhuri demonstrated her technical expertise by developing
        fee payment templates and handling bulky transactions efficiently.
        Additionally, she provided suitable solutions that benefitted two
        internal teams, showcasing her ability to collaborate and deliver
        impactful results. Pankhuris hard work, dedication, and technical
        proficiency make her an invaluable asset to any team. I highly recommend
        her for any challenging project or role that demands high-level
        problem-solving and collaboration skills.
      </p>
    </div>,

    // Add more testimonials here if needed
  ];

  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hello 👋 , <br />I am Pankhuri <br />A Software Engineer
          </h1>
          <div className="flex justify-center md:hidden mt-4">
            <img
              src="/images/profile.png"
              alt="Profile Picture"
              className="w-60 h-70 rounded-lg"
            />
          </div>
          <br />
          <br />
          <p className="text-lg md:text-xl">
            A passionate computer science enthusiast pursuing my Master&#39;s at
            Northeastern University. With over 4 years of experience in building
            scalable infrastructure and user-centric applications, I&#39;m on a
            mission to make waves in tech.
          </p>
          <div className="flex justify-start mt-4">
            <Link href="/aboutme">
              <button className="button" style={{ color: "rgb(227, 77, 115)" }}>
                More about me
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
        </div>
        <div className="flex justify-center items-center w-full md:w-auto">
          <div className="circle">
            <div className="logo">
              <div className="text">
                <p>
                  MY PROJECTS {"        "} MY PROJECTS {"        "} MY PROJECTS
                </p>
                <Script
                  id="custom-script"
                  dangerouslySetInnerHTML={{
                    __html: `
                      (function() {
                        console.log('Custom script executed!');
                        const text = document.querySelector('.text p');
                        if (text) {
                          text.innerHTML = text.innerText.split("").map((char, i) => 
                            \`<span style="transform:rotate(\${i * 9.2}deg)">\${char}</span>\`
                          ).join("");
                        }
                      })();
                    `,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center md:justify-end w-full md:w-auto">
          <Image
            src="/images/profile.png" // Ensure this path is correct
            alt="Profile Picture"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

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

      <div className="col-span-12 md:col-span-8 flex justify-center">
        <Link href="/projects">
          <button className="button-browse-projects">
            Browse All Projects
          </button>
        </Link>
      </div>
      <br />
      <h1 className="skills-heading ml-12 mb-5 text-center text-2xl md:text-5xl">
        My skills
      </h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-16 flex flex-wrap justify-around items-center gap-4 mt- md:mt-0">
          <img src="/images/tech/css.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/html.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/java.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/js.png" alt="Logo" className="skills-image" />
          <img src="/images/tech/php.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/python.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/sql.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/nodejs.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/react.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/angular.png"
            alt="Logo"
            className="skills-image"
          />
        </div>
        <div className="col-span-12 md:col-span-16 flex flex-wrap justify-around items-center gap-4 mt- md:mt-0">
          <img src="/images/tech/ts.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/spring.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/c.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/csharp.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/postgres.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/javafx.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/mongodb.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/kettle.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/github.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/intellij.png"
            alt="Logo"
            className="skills-image"
          />
        </div>
      </div>
      <br />
      <br />
      <h1 className="skills-heading ml-12 mb-5 text-center text-2xl md:text-5xl">
        Testimonials
      </h1>
      <Slider testimonials={testimonials} />
      <br />
      <br />

      <h1 className="skills-heading ml-12 mb-5 text-center text-2xl md:text-5xl">
        Blogs
      </h1>

      <div className="flex flex-wrap gap-6 md:gap-4 justify-center mx-4 md:mx-8">
        <Card className="max-w-[300px] mb-4">
          <CardBody>
            <img src="/images/blogs/b1.png" alt="Logo" />
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <CardFooter className="bg-light-gray text-gray-600 p-2">
            <small>June 27, 2024</small>
          </CardFooter>
        </Card>
        <Card className="max-w-[300px] mb-4">
          <CardBody>
            <img src="/images/blogs/b2.png" alt="Logo" />
            <p>Create responsive layouts with ease.</p>
          </CardBody>
          <CardFooter className="bg-light-gray text-gray-600 p-2">
            <small>June 27, 2024</small>
          </CardFooter>
        </Card>
        <Card className="max-w-[300px] mb-4">
          <CardBody>
            <img src="/images/blogs/b3.png" alt="Logo" />
            <p>Utilize powerful CSS utilities for custom designs.</p>
          </CardBody>
          <CardFooter className="bg-light-gray text-gray-600 p-2">
            <small>June 27, 2024</small>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
