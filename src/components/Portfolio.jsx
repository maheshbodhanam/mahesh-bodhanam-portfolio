import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Professional Experience */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
            Professional Experience
          </h3>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-bold">
              UI Developer @ OrangeCells Innovation Lab
            </h4>
            <p className="text-sm text-gray-400 mb-2">Sep 2022 – Present</p>
            <p className="text-gray-300">
              Built a real-time IoT-based fuel monitoring platform using
              React.js, Tailwind CSS, and Redux Toolkit. Integrated Google Maps
              API, WebSockets for alerts, and converted the web app to native
              mobile using CapacitorJS.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md">
            <h4 className="text-xl font-bold">
              UI Developer @ Trinity Tech Solutions
            </h4>
            <p className="text-sm text-gray-400 mb-2">Aug 2021 – Sep 2022</p>
            <p className="text-gray-300">
              Designed responsive UIs with React, Tailwind, Material UI. Created
              reusable components, followed design systems, and integrated
              frontend with APIs.
            </p>
          </div>
        </div>

        {/* Freelance Project */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
            Freelance Project
          </h3>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Coinfantasy</h4>
            <p className="text-gray-300">
              Built a decentralized fantasy gaming site using React, HTML,
              Tailwind CSS. Converted Figma designs to pixel-perfect responsive
              UI.
              <br />
              <a
                href="https://play.coinfantasy.io/#/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                View Live
              </a>
            </p>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
            Personal Projects
          </h3>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-bold">Task Management Dashboard</h4>
            <p className="text-gray-300">
              Kanban-style dashboard using React, Tailwind, JSON-server, MSWjs.
              Tasks can be added and dragged between columns.
              <br />
              <a
                href="https://kanban-task-management-dashboard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/maheshbodhanam/task-management-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Real-time Chat App</h4>
            <p className="text-gray-300">
              Built with React, Node.js, MongoDB, Socket.io, and Tailwind CSS.
              Supports multiple users, real-time messaging and chat rooms.
              <br />
              <a
                href="https://github.com/maheshbodhanam/real-time-chat-app-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
