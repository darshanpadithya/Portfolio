import React from "react";
import projectImage from "../assets/op.jpg"; // Replace with actual image path for OptiCapture

function OptiCapture() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 shadow-md p-4 rounded-lg bg-blue-50 hover:text-blue-600 hover:shadow-2xl transition duration-300 ease-in-out tracking-wide">
          OptiCapture
        </h1>

        <img
          src={projectImage}
          alt="OptiCapture Project"
          className="w-full h-auto mb-8 rounded shadow-lg"
        />
        <p className="text-lg text-gray-600 mb-4">
          OptiCapture is an intelligent motion-triggered video recording system
          designed to save storage space and optimize data usage. It captures
          video only when movement is detected, making it highly efficient for
          surveillance and monitoring systems.
        </p>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Features:
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Motion-triggered video recording system to minimize storage usage.
            </li>
            <li>
              Automatic video saving and uploading to AWS at the end of each
              day.
            </li>
            <li>Real-time video capture with robust detection algorithms.</li>
            <li>Customizable motion sensitivity settings.</li>
            <li>Cost-effective solution for video surveillance.</li>
          </ul>
        </div>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Technologies Used:
          </h2>
          <div className="flex flex-wrap">
            <span className="bg-red-200 text-red-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              Python
            </span>
            <span className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              OpenCV
            </span>
          </div>
        </div>
        <a
          href="https://github.com/darshanpadithya/OptiCapture" // Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

export default OptiCapture;
