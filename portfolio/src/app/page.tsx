import Image from "next/image";
import Navbar from "./components/Navbar"; // Ensure this path is correct

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{ textAlign: "left", paddingTop: "150px", paddingLeft: "130px" }}
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
        <div className="imageContainer" style={{}}>
          <Image
            src="/images/profile.png" // Ensure this path is correct
            alt="Profile Picture"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
