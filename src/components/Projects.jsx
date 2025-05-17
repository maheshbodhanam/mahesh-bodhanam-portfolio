const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Check out some of my professional experience and projects below.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
            Professional Experience
          </h3>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-bold">
              UI Developer @ OrangeCells Innovation Lab Pvt Ltd, Bangalore
            </h4>
            <p className="text-sm text-gray-400 mb-2">Sep 2022 – Present</p>
            <p className="text-gray-300 mb-2 font-semibold">
              Project: IoT-Based Remote Fuel Monitoring & Analytics Platform
            </p>
            <p className="text-gray-300 mb-4">
              A cloud-native, end-to-end platform designed to help industrial
              and commercial clients monitor and optimize fuel usage in real
              time using proprietary IoT sensors and time-series data analysis.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                <strong>UI Development:</strong> Developed fast and responsive
                UIs using React.js, Tailwind CSS, HTML, and JavaScript.
              </li>
              <li>
                <strong>Data Visualization:</strong> Integrated ApexCharts for
                live telemetry, alert heatmaps, and historical trend analysis.
              </li>
              <li>
                <strong>Google Maps API:</strong> Implemented real-time location
                tracking, geofencing overlays, and historical route
                visualization.
              </li>
              <li>
                <strong>Real-Time Integration:</strong> Consumed REST APIs and
                WebSocket events for live alerts and historical data.
              </li>
              <li>
                <strong>State Management:</strong> Used Redux Toolkit for
                handling asynchronous data and WebSocket events.
              </li>
              <li>
                <strong>Automation Testing:</strong> Achieved 90%+ UI test
                coverage with Playwright E2E scripts.
              </li>
              <li>
                <strong>Mobile Delivery:</strong> Converted web app to native
                Android/iOS using CapacitorJS.
              </li>
              <li>
                <strong>Collaboration:</strong> Used Git and Bitbucket for
                source control, pull requests, and code reviews.
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md">
            <h4 className="text-xl font-bold">
              UI Developer @ Trinity Tech Solutions, Indore
            </h4>
            <p className="text-sm text-gray-400 mb-2">Aug 2021 – Sep 2022</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>
                Designed mobile-responsive UIs using React, Tailwind CSS,
                Material UI, and Bootstrap.
              </li>
              <li>Built reusable UI components based on design systems.</li>
              <li>Integrated frontend with backend REST APIs efficiently.</li>
            </ul>
            <p className="text-gray-300 font-semibold">Key Projects:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                <strong>AcknoLedger:</strong> Developed NFT marketplace UI with
                homepage, NFT cards, filters, and wallet integration.
              </li>
              <li>
                <strong>Troprof:</strong> Designed UI for LMS platform including
                dashboards, calendars, and live video classes.
              </li>
            </ul>
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
              Developed a decentralized fantasy gaming platform using React.js,
              Tailwind CSS, HTML, and CSS. Converted Figma UI designs into
              pixel-perfect, responsive interfaces.
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
            <h4 className="text-xl font-bold">My Portfolio Website</h4>
            <p className="text-gray-300">
              Personal portfolio website showcasing my projects and experience,
              built using React.js, Node.js, MongoDB, Tailwind CSS, and deployed
              online.
              <br />
              <a
                href="https://github.com/maheshbodhanam/mahesh-bodhanam-projProjects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-bold">Task Management Dashboard</h4>
            <p className="text-gray-300">
              Kanban-style task management app built using React.js, Tailwind
              CSS, JSON-server, and MSWjs. Features include drag-and-drop tasks
              across "To Do", "In Progress", and "Done" columns.
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
              Chat application built using React.js, Node.js, MongoDB,
              Socket.io, and Tailwind CSS. Includes real-time messaging, chat
              rooms, and user authentication.
              <br />
              <a
                href="https://magenta-sawine-f30018.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Live Demo
              </a>{" "}
              |{" "}
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

export default Projects;
