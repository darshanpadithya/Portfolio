import React from "react";
import projectImage from "../assets/TW.jpg"; // Replace with actual image path

function TravelWebsite() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 shadow-md p-4 rounded-lg bg-blue-50 hover:text-blue-600 hover:shadow-2xl transition duration-300 ease-in-out tracking-wide">
          Whizz Travel Website
        </h1>

        <img
          src={projectImage}
          alt="Whizz Travel Website"
          className="w-full h-auto mb-8 rounded shadow-lg"
        />
        <p className="text-lg text-gray-600 mb-4">
          Whizz is a travel booking website that allows users to explore
          destinations, choose hotels, and proceed to payment channels. It
          provides a seamless experience for travelers to plan their trips.
        </p>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Features:
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Explore various travel destinations with detailed information.
            </li>
            <li>User-friendly interface for easy navigation.</li>
            <li>Integrated payment gateway for secure transactions.</li>
            <li>Contact Us feature for customer support and inquiries.</li>
            <li>
              Comprehensive trip planning from destination selection to payment.
            </li>
          </ul>
        </div>
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Technologies Used:
          </h2>
          <div className="flex flex-wrap">
            <span className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              HTML
            </span>
            <span className="bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              CSS
            </span>
            <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2">
              JavaScript
            </span>
          </div>
        </div>
        <a
          href="https://github.com/darshanpadithya/Whizz-TravelWebsite" // Replace with your actual GitHub URL
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

export default TravelWebsite;
