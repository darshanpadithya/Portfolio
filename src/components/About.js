import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing the icons
import myImage from "../assets/por.jpg"; // Adjust the path to your image

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white-100 flex items-center justify-center"
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-[#3EB489] relative">
          <span className="relative z-10">About Me</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#3EB489] to-[#FFD700] blur-lg opacity-30 rounded"></span>
        </h1>
        <p className="text-lg text-gray-600">
          Hi, I'm{" "}
          <span className="text-yellow-500 font-bold text-2xl">
            Darshan P Adithya
          </span>
          , an aspiring software engineer driven by a passion for coding.
          Determined to learn from industry experts and craft innovative
          applications that drive organizational success and transform society.
        </p>
        <div className="mt-6">
          <p className="text-2xl font-extrabold text-[#FFD700] p-2 inline-block rounded-lg shadow-lg border-4 border-[#FFD700] transition-transform transform hover:scale-105 hover:bg-[#3EB489] hover:text-white">
            Welcome to my portfolio!
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/darshanpadithya" // Replace with your GitHub URL
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mx-2 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/darshanpadithya" // Replace with your LinkedIn URL
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mx-2 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="mailto:darshanpadithya@gmail.com" // Replace with your email
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mx-2 flex items-center"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
        </div>
      </div>
      <div className="ml-8 flex justify-center">
        <img
          src={myImage}
          alt="Darshan P Adithya"
          className="w-[150px] h-[150px] rounded-lg shadow-lg object-cover md:w-[400px] md:h-[300px] max-w-full max-h-full"
        />
      </div>
    </section>
  );
}

export default About;
