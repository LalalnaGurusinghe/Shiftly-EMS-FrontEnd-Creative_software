"use client";

import { useState } from "react";
import BasicInfoForm from './basicInfoForm'


export default function tabBar() {
  const [activeTab, setActiveTab] = useState("Basic Info"); // Default active tab

  return (
    <div className="container h-auto mx-auto pl-0 p-6 mt-10 ml-10">
     

      {/* Tab Navigation */}
      <ul className="flex space-x-4 mb-5 ">
            <li className="text-center">
            <button
                onClick={() => setActiveTab("Basic Info")}
                className={`py-2 px-4 text-sm font-medium uppercase ${
                activeTab === "Basic Info"
                    ? "border-b-2 border-red-600 text-red-600"
                    :  "text-gray-500  transition duration-500 ease-in-out hover:text-red-600"
                }`}
            >
               Basic Info
            </button>
            </li>
            <li className="text-center">
            <button
                onClick={() => setActiveTab("Personal Info")}
                className={`py-2 px-4 text-sm font-medium uppercase ${
                activeTab === "Personal Info"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 transition duration-500 ease-in-out hover:text-red-600"
                }`}
            >
                Personal Info
            </button>
            </li>
            <li className="text-center">
            <button
                onClick={() => setActiveTab("Projects")}
                className={`py-2 px-4 text-sm font-medium uppercase ${
                activeTab === "Projects"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 transition duration-500 ease-in-out hover:text-red-600"
                }`}
            >
                Projects
            </button>
            </li>
            <li className="text-center">
            <button
                onClick={() => setActiveTab("Experience")}
                className={`py-2 px-4 text-sm font-medium uppercase ${
                activeTab === "Experience"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 transition duration-500 ease-in-out hover:text-red-600"
                }`}
            >
               Experience
            </button>
            </li>
            <li className="text-center">
            <button
                onClick={() => setActiveTab("Education")}
                className={`py-2 px-4 text-sm font-medium uppercase ${
                activeTab === "Education"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 transition duration-500 ease-in-out hover:text-red-600"
                }`}
            >
                Education
            </button>
            </li>
            <li className="text-center">
            <button
                onClick={() => setActiveTab("Skills")}
                className={`py-2 px-4 text-sm font-medium uppercase ${
                activeTab === "Skills"
                    ? "border-b-2 border-red-600 text-red-600"
                    : "text-gray-500 transition duration-500 ease-in-out hover:text-red-600"
                }`}
            >
               Skills
            </button>
            </li>
      </ul>

      {/* Tab Contents */}
      <div className="tab-content">
        {activeTab === "Basic Info" && (
          <div className="p-4">
            <BasicInfoForm/>
            
          </div>
        )}
        {activeTab === "Personal Info" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold">Personal Info</h3>
            <p>Description for Project 2 goes here...</p>
            <img
              src="/project2-image.jpg"
              alt="Project 2"
              className="w-full rounded-lg"
            />
          </div>
        )}
        {activeTab === "Projects" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold">Projects</h3>
            <p>Description for Project 3 goes here...</p>
            <img
              src="/project3-image.jpg"
              alt="Project 3"
              className="w-full rounded-lg"
            />
          </div>
        )}
        {activeTab === "Experience" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold">Experience</h3>
            <p>Description for Project 1 goes here...</p>
            <img
              src="/project1-image.jpg"
              alt="Project 4"
              className="w-full rounded-lg"
            />
          </div>
        )}
        {activeTab === "Education" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold">Education</h3>
            <p>Description for Project 5 goes here...</p>
            <img
              src="/project1-image.jpg"
              alt="Project 1"
              className="w-full rounded-lg"
            />
          </div>
        )}
        {activeTab === "Skills" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <p>Description for Project 6 goes here...</p>
            <img
              src="/project1-image.jpg"
              alt="Project 1"
              className="w-full rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
