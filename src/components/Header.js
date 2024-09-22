import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [currentSection, setCurrentSection] = useState("about");
  // eslint-disable-next-line
  const sections = ["about", "skills", "projects", "contact"];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 50; // Adjust this value if needed
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (
        sectionElement.offsetTop <= scrollPosition &&
        sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition
      ) {
        setCurrentSection(section);
      }
    });
  }, [sections]); // Include sections in dependencies

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to the dependency array

  return (
    <header
      className="sticky top-0 text-white p-4 shadow-md z-10 transition-transform duration-300"
      style={{
        backgroundColor: "#3EB489",
        backgroundSize: "cover",
      }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div
          className="flex items-center animate-bounce cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-50 mr-2 resizeMode-contain transition-transform duration-300 transform hover:scale-110 object-contain"
          />
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </div>
        <div className="flex space-x-6">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              aria-current={currentSection === item ? "page" : undefined}
              className={`relative text-white transition-all duration-300 ${
                currentSection === item ? "text-yellow-400 font-bold" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  currentSection === item ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
