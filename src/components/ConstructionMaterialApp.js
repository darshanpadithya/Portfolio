import React from "react";
import projectImage from "../assets/BUILT_MATE.jpg"; // Replace with actual image path

function ConstructionMaterialApp() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 shadow-md p-4 rounded-lg bg-grey-50 hover:text-blue-600 hover:shadow-2xl transition duration-300 ease-in-out tracking-wide">
          Construction Material App
        </h1>
        <img
          src={projectImage}
          alt="Construction Material App"
          className="w-full h-auto mb-8 rounded shadow-lg"
        />
        <p className="text-lg text-gray-600 mb-4">
          This is a React Native app designed to help users buy construction
          materials. It features Firebase authentication and real-time database
          integration, making it easy to manage user authentication and store
          data dynamically.
        </p>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Features:
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Firebase Authentication for secure sign-in and sign-up.</li>
            <li>Real-time database for storing user information and orders.</li>
            <li>
              Simple and user-friendly interface to browse construction
              materials.
            </li>
            <li>Integrated with Android Studio for mobile deployment.</li>
            <li>Support for multiple payment options for convenience.</li>
          </ul>
        </div>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Technologies Used:
          </h2>
          <div className="flex flex-wrap">
            <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              React Native
            </span>
            <span className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              Firebase
            </span>
            <span className="bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              Android Studio
            </span>
          </div>
        </div>
        <a
          href="https://github.com/darshanpadithya/Building_mate" // Replace with your actual GitHub URL
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

export default ConstructionMaterialApp;
