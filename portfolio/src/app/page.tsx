import Image from "next/image";
import Navbar from "./components/Navbar"; // Ensure this path is correct
import Footer from "./components/Footer"; // Ensure this path is correct
import { Card, CardBody, Button, Slider, CardFooter } from "@nextui-org/react";
export default function Home() {
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
            a passionate computer science enthusiast pursuing my Master's at
            Northeastern University. With four years of software engineering
            experience in India, I'm on a mission to make waves in tech. Join me
            as I chase my dreams of joining FAANG and building my own startup!
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto">
          <button className="logo-button">
            <img
              src="/images/my_projects.png"
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </button>
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
      {/* till */}
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
                      Frontend
                    </h3>
                    <h1 className="text-projects">Elderlycare</h1>
                    <p className="text-small text-foreground/80">
                      Sint occaecat deserunt aliquip do occaecat ut quis.
                      Cupidatat magna fugiat quis sit duis est in volup
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <img
                      src="/images/sample/e1.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/sample/e2.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/sample/e3.png"
                      alt="Logo"
                      className="logo-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-4">
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
                      Backend
                    </h3>
                    <h1 className="text-projects">Oceanic Feeling</h1>
                    <p className="text-small text-foreground/80">
                      Sint occaecat deserunt aliquip do occaecat ut quis.
                      Cupidatat magna fugiat quis sit duis est in volup
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <img
                      src="/images/sample/e1.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/sample/e2.png"
                      alt="Logo"
                      className="logo-image"
                    />
                    <img
                      src="/images/sample/e3.png"
                      alt="Logo"
                      className="logo-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-4">
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
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-8 flex justify-center">
        <button className="button-browse-projects">Browse All Projects</button>
      </div>
      <h1 className="skills-heading ml-12 mb-5 text-center text-3xl md:text-6xl">
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
                  Life's Motto
                </h2>
                <p className="life-motto-p mt-4 text-center md:text-left">
                  "Embrace challenges, chase dreams, and code my way to success
                  - from mastering algorithms to crafting innovative solutions.
                  Each line of code is a step closer to my aspirations:
                  conquering FAANG, pioneering change, and ultimately, building
                  my own legacy."
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <h1 className="skills-heading ml-12  mb-5 mt-8 text-center  text-3xl md:text-6xl">
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
}
