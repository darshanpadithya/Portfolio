import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#3EB489] text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4 text-lg">
          &copy; 2024 Darshan P Adithya. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="mailto:darshanpadithya@gmail.com"
            className="flex items-center justify-center bg-white text-black px-4 py-2 rounded shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-5 w-5 mr-2 text-black"
            />
            Email Me
          </a>
          <a
            href="https://github.com/darshanpadithya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white text-black px-4 py-2 rounded shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5 w-5 mr-2 text-black"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/darshanpadithya" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white text-black px-4 py-2 rounded shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-5 w-5 mr-2 text-black"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
