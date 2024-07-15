"use client";
import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Card, CardBody, Button, Slider, CardFooter } from "@nextui-org/react";
import Script from "next/script";
export default function AboutMe() {
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
              src="/images/pics/pic3.png"
              alt="Profile Picture"
              className="w-60 h-70 rounded-lg"
            />
          </div>
          <br />
          <br />
          <p className="text-lg md:text-xl">
            A passionate computer science enthusiast pursuing my Master&#39;s at
            Northeastern University. With four years of software engineering
            experience in India, I&#39;m on a mission to make waves in tech.
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 md:justify-end">
          <div className="circle">
            <div className="logo">
              <div className="text">
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:justify-end w-full md:w-auto">
          <Image
            src="/images/pics/pic3.png" // Ensure this path is correct
            alt="Profile Picture"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      {/* till */}

      <div className="relative container mx-auto px-4 py-16 min-h-screen">
        <div className="absolute inset-0 flex justify-start md:justify-center items-center">
          <div className="w-1 bg-pink-500 h-full ml-4 md:ml-0"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start md:items-center mb-12">
            <div className="timeline-dot bg-red-500 absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="timeline-content mt-6 md:mt-0 ml-8 md:ml-16 w-full md:w-1/2 md:text-left">
              <h2 className="text-2xl md:text-3xl text-red-500 mb-4">
                Northeastern University
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                In 2024, driven by a growing fascination with the Software
                Engineering, I pursued a master’s degree in Computer Software
                Engineering at Northeastern University. This academic pursuit
                sharpened my full-stack development capabilities. The experience
                has been exhilarating—I’ve connected with brilliant minds at
                Boston’s tech events, won several hackathons, and immersed
                myself in the crypto ecosystem and its underlying
                infrastructure.
              </p>
            </div>
          </div>
          {/* <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start md:items-center mb-12">
            <div className="timeline-dot bg-red-500 absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="timeline-content mt-6 md:mt-0 ml-8 md:ml-16 w-full md:w-1/2 md:text-left">
              <h2 className="text-2xl md:text-3xl text-red-500 mb-4">
                Hexagon India Pvt. Ltd.
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                My experience at Hexagon Geosystems was a pivotal chapter in my
                professional journey. As a Software Engineer, I worked on
                developing Java-based GIS solutions (Luciad Product) for
                esteemed clients in the Defense, Military, and Aviation
                industries. This role required a deep understanding of advanced
                Java concepts, Spring Boot, and Node.js frameworks. I provided
                technical consulting and collaborated closely with clients to
                analyze their requirements and implement efficient, stable GIS
                software solutions. This experience honed my technical skills,
                enhanced my problem-solving capabilities, and strengthened my
                ability to deliver high-impact solutions in a dynamic,
                high-stakes environment.
              </p>
            </div>
          </div> */}

          <div className="timeline-item relative flex flex-col md:flex-row items-start md:items-center mb-12">
            <div className="timeline-dot bg-green-500 absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="timeline-content mt-6 md:mt-0 mr-8 md:mr-16 w-full md:w-1/2 md:text-right">
              <h2 className="text-2xl md:text-3xl text-green-500 mb-4">
                Hexagon India Pvt. Ltd.
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                My experience at Hexagon Geosystems was a pivotal chapter in my
                professional journey. As a Software Engineer, I worked on
                developing Java-based GIS solutions (Luciad Product) for
                esteemed clients in the Defense, Military, and Aviation
                industries. This role required a deep understanding of advanced
                Java concepts, Spring Boot, and Node.js frameworks. I provided
                technical consulting and collaborated closely with clients to
                analyze their requirements and implement efficient, stable GIS
                software solutions. This experience honed my technical skills,
                enhanced my problem-solving capabilities, and strengthened my
                ability to deliver high-impact solutions in a dynamic,
                high-stakes environment.
              </p>
            </div>
          </div>

          <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start md:items-center mb-12">
            <div className="timeline-dot bg-blue-500 absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="timeline-content mt-6 md:mt-0 ml-8 md:ml-16 w-full md:w-1/2 md:text-left">
              <h2 className="text-2xl md:text-3xl text-blue-500 mb-4">
                Tata Consultancy Services
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                My tenure at Tata Consultancy Services was a transformative
                period in my career. As a Java Developer, I contributed to
                developing user interfaces for TCS iON’s Cloud-Based Solutions,
                utilizing MVC Frameworks and OOPS concepts. Working on the
                Kettle Spoon tool, I managed data operations involving bulk
                downloads, inserts, updates, and validations. This role
                significantly enhanced my technical acumen and problem-solving
                skills. Collaborating with various clients to monitor issues and
                execute product development as per their requirements provided
                me with invaluable experience in client management and product
                development, shaping my ability to deliver high-quality software
                solutions effectively.
              </p>
            </div>
          </div>

          <div className="timeline-item relative flex flex-col md:flex-row items-start md:items-center mb-12">
            <div className="timeline-dot bg-yellow-500 absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="timeline-content mt-6 md:mt-0 mr-8 md:mr-16 w-full md:w-1/2 md:text-right">
              <h2 className="text-2xl md:text-3xl text-yellow-500 mb-4">
                CRAC Infosystem Private Limited & Four C Plus (Internet) Company
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                Internships complemented my academic pursuits by providing
                practical experience. I interned with CRAC Infosystem Private
                Limited as a web developer, assisting in website creation using
                web technologies. At Four C Plus (Internet) Company Limited, a
                Hindustan Times Syndication company, I designed and developed an
                e-commerce application using Angular 7.0 and a Desktop
                Application with Electron. These internships were instrumental
                in refining my technical skills and gaining invaluable industry
                insights.
              </p>
            </div>
          </div>
          <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start md:items-center mb-12">
            <div className="timeline-dot bg-purple-900 absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="timeline-content mt-6 md:mt-0 ml-8 md:ml-16 w-full md:w-1/2 md:text-left">
              <h2 className="text-2xl md:text-3xl text-purple-900 mb-4">
                BML Munjal University
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                In 2015, my interest in programming led me to pursue a degree in
                Computer Engineering at BML Munjal University. This passion grew
                into a love for solving problems with code. At BML Munjal
                University, I gained a solid grounding in computer science
                fundamentals, studying subjects like Object-Oriented
                Programming, Data Structures and Algorithms, Database Systems,
                Operating Systems, Big Data Analytics, and Computer Networks. My
                final year project, ‘Kinova Robotic Arm,’ involved programming
                the arm to draw alphabetic characters using C++ and computer
                graphics concepts. A practice school course provided industry
                exposure, and hands-on projects sharpened my analytical and
                development skills, preparing me for real-world challenges.
                Extracurricular activities also played a vital role in my
                development. I secured second place in the university’s sports
                festival, contributed to the Sponsorship Team for major events,
                and honed my ability to develop and pitch innovative solutions
                in the ‘BMU Pitchers’ business idea competition.
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .timeline-item {
            position: relative;
          }
          .timeline-dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
          .timeline-content {
            padding: 30px;
          }
        `}</style>
      </div>

      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F6FBF0FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
              <div className="flex justify-center md:justify-end">
                <img
                  src="/images/pics/pic1.png"
                  alt="Logo"
                  className="w-60 h-60 md:w-auto md:h-auto"
                />
              </div>

              <div className="flex flex-col items-center md:items-start">
                <h2
                  className="font-semibold text-foreground/90 text-2xl"
                  style={{ color: "#E34D73FF" }}
                >
                  Life&#39;s Motto
                </h2>
                <p className="life-motto-p mt-4 text-center md:text-left">
                  Embrace challenges, chase dreams, and code my way to success -
                  from mastering algorithms to crafting innovative solutions.
                  Each line of code is a step closer to my aspirations:
                  pioneering change, and ultimately, building my own legacy
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
