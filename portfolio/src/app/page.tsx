import Image from "next/image";
import Navbar from "./components/Navbar"; // Ensure this path is correct
import { Card, CardBody, Button, Slider } from "@nextui-org/react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{ paddingTop: "150px", paddingLeft: "130px" }}
      >
        <div className="text-content">
          <h1 style={{ fontSize: "xxx-large", fontWeight: "600" }}>
            Hello 👋 , <br />I am Pankhuri <br />A Software Engineer
          </h1>
          <br />
          <br />
          <p>
            a passionate computer science enthusiast pursuing my Master's at{" "}
            <br />
            Northeastern University. With four years of software engineering{" "}
            <br />
            experience in India, I'm on a mission to make waves in tech. Join{" "}
            <br /> me as I chase my dreams of joining FAANG and building my own{" "}
            <br />
            startup!
          </p>
        </div>
        <div className="my_projects_logo">
          <button className="logo-button">
            <img
              src="/images/my_projects.png"
              alt="Logo"
              className="logo-image"
            />
          </button>
        </div>
        <div className="imageContainer" style={{}}>
          <Image
            src="/images/profile.png" // Ensure this path is correct
            alt="Profile Picture"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[610px] rounded-none"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4"></div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      Daily Mix
                    </h3>
                    <p className="text-small text-foreground/80">12 Tracks</p>
                    <h1 className="text-large font-medium mt-2">
                      Frontend Radio
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
