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
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-24 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-12 md:col-span-10"></div>

              <div className="flex flex-col col-span-12 md:col-span-14">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      Frontend
                    </h3>
                    {/* <p className="text-small text-foreground/80">12 Tracks</p> */}
                    <h1 className="text-large font-medium mt-1">Elderlcare</h1>
                    <p className="text-small text-foreground/80">
                      Sint occaecat deserunt aliquip do occaecat ut quis.
                      Cupidatat magna fugiat quis sit duis est in volup
                    </p>
                  </div>
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
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-12 md:grid-cols-24 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-12 md:col-span-10"></div>

              <div className="flex flex-col col-span-12 md:col-span-14">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      Backend
                    </h3>
                    {/* <p className="text-small text-foreground/80">12 Tracks</p> */}
                    <h1 className="text-large font-medium mt-1">Elderlcare</h1>
                    <p className="text-small text-foreground/80">
                      Sint occaecat deserunt aliquip do occaecat ut quis.
                      Cupidatat magna fugiat quis sit duis est in volup
                    </p>
                  </div>
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
