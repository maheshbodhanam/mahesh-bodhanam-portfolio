import React from "react";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Redux / Zustand", level: 90 },
  { name: "Tailwind CSS / Material UI", level: 90 },
  { name: "Node.js / Express.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "CapacitorJS", level: 80 },
  { name: "Playwright / Jest", level: 75 },
];

const CV = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col gap-10">
        {/* Header */}
        <div className="pb-4 border-b-4 border-gray-500">
          <h2 className="text-4xl font-bold">Mahesh Bodhanam</h2>
          <p className="text-sm text-gray-400">UI / MERN Stack Developer</p>
          <p className="text-sm mt-1">
            Email: br95bm@gmail.com | Phone: +91 8179460185
          </p>
          <div className="flex gap-4 mt-2 text-blue-400">
            <a
              href="https://github.com/maheshbodhanam"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-bodhanam-3a4793188/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://mahesh-bodhanam-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h3 className="text-2xl font-semibold border-b-2 border-gray-500 mb-2">
            Professional Summary
          </h3>
          <p className="text-lg">
            UI Developer with 3+ years experience building responsive web apps
            using React.js. Proficient in Tailwind CSS, Redux, Zustand,
            Playwright, and converting web apps to Android/iOS using
            CapacitorJS.
          </p>
        </div>

        {/* Skills with Progress Bars */}
        <div>
          <h3 className="text-2xl font-semibold border-b-2 border-gray-500 mb-4">
            Technical Skills
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="text-md font-medium">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold border-b-2 border-gray-500 mb-2">
            Experience
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">
                OrangeCells Innovation Lab Pvt Ltd (Sep 2022 – Present)
              </h4>
              <p className="text-sm italic">UI Developer</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-lg">
                <li>
                  Developed responsive dashboards using React.js and Tailwind
                  CSS
                </li>
                <li>
                  Integrated Google Maps API for live tracking and geofencing
                </li>
                <li>
                  Used Redux Toolkit & WebSocket for real-time state handling
                </li>
                <li>Built native apps from web code using CapacitorJS</li>
                <li>Automated tests using Playwright with 90%+ coverage</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Trinity Tech Solutions (Aug 2021 – Sep 2022)
              </h4>
              <p className="text-sm italic">UI Developer</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-lg">
                <li>Designed responsive UIs using React & Material UI</li>
                <li>
                  Integrated REST APIs and followed clean component practices
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-semibold border-b-2 border-gray-500 mb-2">
            Projects
          </h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>
              <strong>Coinfantasy:</strong> Decentralized gaming frontend (React
              + Tailwind)
            </li>
            <li>
              <strong>Troprof:</strong> LMS with calendar, video UI (React +
              Node)
            </li>
            <li>
              <strong>AcknoLedger:</strong> NFT marketplace UI with wallet
              integration
            </li>
            <li>
              <strong>Task Management Dashboard:</strong> Kanban board with mock
              APIs
            </li>
            <li>
              <strong>Chat App:</strong> Real-time messaging using Socket.io
            </li>
            <li>
              <strong>Portfolio Website:</strong> React.js + Node.js + MongoDB
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold border-b-2 border-gray-500 mb-2">
            Education
          </h3>
          <p className="text-lg">
            Bachelor of Technology in Electronics & Communication Engineering –
            2016
            <br />
            Pragna Bharathi Institute of Technology, Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;
