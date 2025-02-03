import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import Script from "next/script";
import { Card, CardBody, Button, Slider, CardFooter } from "@nextui-org/react";

const CloudPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <div className="relative">
            <span
              className="text_name"
              style={{
                fontFamily: "Sarabun, sans-serif",
                fontSize: "20px",
                lineHeight: "46px",
                fontWeight: "700",
              }}
            >
              <span style={{ color: "#F9629F" }}>AWS, Terraform(IaaC)</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Cloud Native Application
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>
              Developed a <b>cloud-native user management application</b>{" "}
              leveraging Node.js, Express.js, and PostgreSQL to support
              concurrent requests with CRUD operations, health monitoring, and
              robust backend services. The application was designed for{" "}
              <b>high availability</b> and <b>fault tolerance</b>, ensuring
              optimal performance. Provisioned AWS infrastructure using{" "}
              <b>Terraform</b> and <b>Packer</b>, enabling Infrastructure as
              Code (IaC) deployment for key AWS resources, including VPCs, RDS,
              Route 53, and SSL certificates. Integrated AWS SNS and Lambda for
              event-driven workflows, such as automated email verification via
              Sendgrid. To ensure security and reliability, System was used for
              service management, along with network security groups. The
              application’s <b>scalability</b> and availability were enhanced
              with EC2 Auto Scaling and Elastic Load Balancing, enabling faster
              deployments. A fully automated CI/CD pipeline was implemented
              using <b>GitHub Actions</b>, covering end-to-end testing, AMI
              creation, and rolling updates for a{" "}
              <b>seamless deployment experience</b>.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-1/3 md:ml-8">
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Date</h3>
            <p className="text-small text-foreground/80">17 December 2024</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Project Type</h3>
            <p className="text-small text-foreground/80">
              Network Structures and Cloud Computing Course
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container mx-auto px-8 md:px-32">
        <div className="flex justify-center">
          <img
            src="images/cloud/chart.jpg" // Update the path to your image
            alt="Elderly care"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
        <br />
        <br />
      </div>
      <br />

      {/* New Section for Image and Additional Content */}
      <div className="container mx-auto px-8 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
        <br />
        <br />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex items-start space-x-3">
              <span className="text-xl">⚙️</span>
              <div>
                <div className="feature-title font-semibold text-lg">
                  Scalable User Management
                </div>
                <p className="text-foreground/80">
                  Developed a cloud-native{" "}
                  <b>RESTful user management application</b> using{" "}
                  <b>Node.js, Express.js, and PostgreSQL</b>, supporting
                  concurrent requests, <b>CRUD operations</b>, and health
                  monitoring.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-xl">📦</span>
              <div>
                <div className="feature-title font-semibold text-lg">
                  Infrastructure as Code (IaC)
                </div>
                <p className="text-foreground/80">
                  Provisioned AWS infrastructure using{" "}
                  <b>Terraform and Packer</b>, deploying{" "}
                  <b>VPCs, RDS, Route 53, and SSL certificates</b> for automated
                  and scalable deployments.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-xl">📧</span>
              <div>
                <div className="feature-title font-semibold text-lg">
                  Event-Driven Workflows
                </div>
                <p className="text-foreground/80">
                  Integrated <b>AWS SNS and Lambda</b> for event-driven
                  workflows, including
                  <b> automated email verification with Sendgrid</b>, ensuring
                  seamless communication.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-xl">🔐</span>
              <div>
                <div className="feature-title font-semibold text-lg">
                  Security & Service Management
                </div>
                <p className="text-foreground/80">
                  Secured services using <b>Systemd for process management</b>{" "}
                  and enforced <b>network security</b> via{" "}
                  <b>AWS security groups</b>.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-xl">🚀</span>
              <div>
                <div className="feature-title font-semibold text-lg">
                  Scalability & Auto Scaling
                </div>
                <p className="text-foreground/80">
                  Enhanced performance with{" "}
                  <b>EC2 Auto Scaling and Elastic Load Balancing</b>, optimizing{" "}
                  <b>traffic distribution and reducing downtime</b>.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3 col-span-1 md:col-span-2">
              <span className="text-xl">🔄</span>
              <div>
                <div className="feature-title font-semibold text-lg">
                  CI/CD Pipeline Automation
                </div>
                <p className="text-foreground/80">
                  Implemented a <b>CI/CD pipeline using GitHub Actions</b>,
                  enabling{" "}
                  <b>automated testing, AMI creation, and rolling updates</b>,
                  ensuring seamless deployment.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <div className="content-wrapper px-4 md:px-12 py-8">
        <div className="text-center md:text-left">
          <h2 className="skills-heading mb-5 text-2xl md:text-4xl">
            References
          </h2>
          <ul className="reference-list space-y-4">
            <li>
              <div>
                <div className="reference-title text-lg md:text-xl font-semibold">
                  GitHub:
                </div>
                <a
                  href="https://github.com/orgs/002478905/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 break-words"
                >
                  https://tinyurl.com/mt8nnjmn
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
};

export default CloudPage;
