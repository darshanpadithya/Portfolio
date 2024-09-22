import React from "react";
import {
  FaJava,
  FaReact,
  FaJs,
  FaPython,
  FaAndroid,
  FaHtml5,
} from "react-icons/fa";
import { SiFirebase, SiOpencv, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "React Native", icon: <FaReact className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Android Studio", icon: <FaAndroid className="text-green-500" /> },
    { name: "OpenCV", icon: <SiOpencv className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Web Development", icon: <FaHtml5 className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 text-center">
      <h1 className="inline-block text-5xl font-extrabold text-gray-800 mb-8 p-4 bg-white rounded-xl shadow-xl hover:text-blue-600 hover:shadow-2xl transition duration-300 ease-in-out tracking-wide">
        My Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white transition-transform transform hover:scale-110 hover:shadow-2xl hover:rotate-2"
            style={{ animation: `fadeIn 0.5s ease ${index * 0.1}s` }}
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h2 className="text-xl font-bold text-gray-800 transition-colors duration-300">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
