import React, { useState } from "react";
import ConstructionMaterialApp from "./ConstructionMaterialApp";
import TravelWebsite from "./TravelWebsite";
import OptiCapture from "./OptiCapture";

function Slideshow({ currentIndex }) {
  const projects = [
    <ConstructionMaterialApp />,
    <TravelWebsite />,
    <OptiCapture />,
  ];

  const [manualIndex, setManualIndex] = useState(currentIndex);

  const handleNext = () => {
    setManualIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setManualIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-2">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition mr-2"
        >
          Previous
        </button>
        <div className="slide">{projects[manualIndex]}</div>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
