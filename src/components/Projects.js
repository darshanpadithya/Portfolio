import React, { useRef, useEffect, useState } from "react";
import builtMate from "../assets/BM.jpg";
import wizz from "../assets/Wizz.jpg";
import cam from "../assets/image.png";
import pro1 from "../assets/v1.mp4";
import pro2 from "../assets/v2.mp4";
import Camera from "../assets/ocv.mp4";

function Projects({ onProjectClick }) {
  const projectList = [
    {
      title: "Construction Material App",
      description: "A React Native app with Firebase integration.",
      image: builtMate,
      video: pro1,
    },
    {
      title: "Travel Website",
      description:
        "A travel booking website built with HTML, CSS, and JavaScript.",
      image: wizz,
      video: pro2,
    },
    {
      title: "OptiCapture",
      description: "Optimized Motion-Triggered Video Capture System",
      image: cam,
      video: Camera,
    },
  ];

  const videoRefs = useRef([]);
  const imgRefs = useRef([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#01c2cc] text-center">
      <h1 className="hover:text-blue-600 hover:shadow-2xl transition duration-300 ease-in-out tracking-wide text-5xl font-extrabold text-gray-800 mb-8 bg-white p-4 rounded-lg shadow-md inline-block">
        My Projects
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => {
          if (!videoRefs.current[index]) {
            videoRefs.current[index] = React.createRef();
          }
          if (!imgRefs.current[index]) {
            imgRefs.current[index] = React.createRef();
          }

          return (
            <div
              key={index}
              className="bg-white border p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 cursor-pointer"
              onClick={() => onProjectClick(index)}
            >
              <div className="relative">
                <video
                  ref={videoRefs.current[index]}
                  className="w-full h-auto mb-4 rounded absolute top-0 left-0"
                  src={project.video}
                  alt={project.title}
                  loop
                  muted
                  playsInline
                  style={{ display: "none" }} // Initially hide the video
                />
                <img
                  ref={imgRefs.current[index]}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-4 rounded-lg transition-opacity duration-300 ease-in-out"
                  onMouseEnter={() => {
                    imgRefs.current[index].current.style.opacity = 0; // Fade out image
                    videoRefs.current[index].current.style.display = "block"; // Show video
                    videoRefs.current[index].current.play(); // Play video
                  }}
                  onMouseLeave={() => {
                    imgRefs.current[index].current.style.opacity = 1; // Fade in image
                    videoRefs.current[index].current.style.display = "none"; // Hide video
                    videoRefs.current[index].current.pause(); // Pause video
                    videoRefs.current[index].current.currentTime = 0; // Reset video to start
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="text-blue-500 hover:underline">
                View Project
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
