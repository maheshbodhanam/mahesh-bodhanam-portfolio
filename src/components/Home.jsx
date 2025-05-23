import { Link } from "react-router-dom";
import mahesh from "../assets/mahesh.jpeg";
import {
  FaLaptopCode,
  FaBusinessTime,
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaGlobe,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 gap-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center h-full animate-fade-in-up">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            I'm a MERN Stack Developer
          </h2>

          <p className="text-gray-400 py-4 max-w-md">
            3+ years of experience building full-stack web applications using
            React.js, Node.js, Express.js & MongoDB. I craft responsive UIs,
            manage complex state with Redux & Zustand, and ensure reliability
            with Playwright tests. I also transform web apps into mobile apps
            with CapacitorJS.
          </p>

          {/* Business Section */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg mb-4">
            <div className="flex items-center gap-2 mb-2 text-yellow-400 font-semibold">
              <FaBusinessTime /> <span>Helping Startups Scale</span>
            </div>
            <p className="text-sm text-gray-300">
              I help startups and small businesses build scalable,
              cross-platform apps. From MVP to production—UI/UX, API
              integration, automation testing—I handle it all. Let's bring your
              product idea to life with fast, reliable code.
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-2 text-blue-400 font-semibold">
              <FaGraduationCap /> <span>Education</span>
            </div>
            <p className="text-sm text-gray-300">
              <strong>Bachelor of Technology</strong> in Electronics &
              Communication Engineering – 2016
              <br />
              Pragna Bharathi Institute of Technology, Hyderabad
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="animate-fade-in">
          <img
            src={mahesh}
            alt="Mahesh Bodhanam"
            className="rounded-2xl mx-auto w-[70%] md:w-full shadow-2xl"
          />
        </div>
      </div>

      {/* Grid ASIDE Sections */}
      <div className="mt-16 px-4 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
        {/* Technical Skills */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md animate-fade-in-left">
          <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
            <FaLaptopCode /> <span>Technical Skills</span>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Frontend: React.js, Redux, Zustand, Tailwind, Material UI</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Testing: Playwright, Jest</li>
            <li>Mobile Apps: CapacitorJS</li>
            <li>Version Control: Git, Bitbucket</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md animate-fade-in-right">
          <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
            <FaTools /> <span>Highlighted Projects</span>
          </div>
          <ul className="text-sm space-y-1">
            <li>🚀 Fuel Monitoring Platform @ OrangeCells</li>
            <li>🎓 LMS Platform (Troprof)</li>
            <li>🎮 NFT Marketplace (AcknoLedger)</li>
            <li>🕹️ Decentralized Fantasy Gaming (Coinfantasy)</li>
            <li>📋 Task Management Dashboard (React + JSON Server)</li>
          </ul>
        </div>

        {/* Freelance Services */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md animate-fade-in-left">
          <div className="flex items-center gap-2 text-orange-400 font-semibold mb-2">
            <FaBriefcase /> <span>Freelance Services</span>
          </div>
          <p className="text-sm text-gray-300">
            Need a skilled developer for short-term or long-term freelance work?
            I build full-stack applications, handle migrations, performance
            tuning, and custom UI/UX implementations. Let's work together on
            your next project.
          </p>
        </div>

        {/* Portfolio & Personal Websites */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md animate-fade-in-right">
          <div className="flex items-center gap-2 text-pink-400 font-semibold mb-2">
            <FaGlobe /> <span>Portfolios & Personal Websites</span>
          </div>
          <p className="text-sm text-gray-300">
            Want to showcase your brand, resume, or startup? I create
            professional portfolio websites optimized for speed, SEO, and mobile
            responsiveness. Stand out online with a custom-crafted web presence.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md animate-fade-in-up md:col-span-2">
          <p className="text-sm text-gray-300 mb-2">
            I'm open to freelance gigs, collaborations, or full-time
            opportunities. Drop a message to discuss your project or just say
            hi.
          </p>
          <Link to="/contact">
            <button
              className={`text-white hover:scale-110 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  mx-auto flex items-center justify-center rounded-md duration-300`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <FaEnvelopeOpenText /> <span>Let's Connect</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
