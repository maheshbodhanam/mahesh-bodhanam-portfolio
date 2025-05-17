import {
  FaMobileAlt,
  FaProjectDiagram,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const blogs = [
  {
    title: "Building Real-time Fuel Monitoring Solutions",
    icon: <FaProjectDiagram size={30} className="text-teal-400" />,
    image: "https://via.placeholder.com/800x400?text=Fuel+Monitoring+Project",
    content:
      "At OrangeCells Innovation Lab, I contributed to a cloud-native IoT fuel monitoring system. I built responsive UIs using React and Tailwind CSS, integrated real-time maps with geofencing, and handled dynamic state with Redux Toolkit. WebSocket-based alert notifications and chart visualizations made the platform powerful and user-friendly.",
  },
  {
    title: "Creating Decentralized NFT Marketplace",
    icon: <FaReact size={30} className="text-purple-400" />,
    image: "https://via.placeholder.com/800x400?text=AcknoLedger+NFT+Project",
    content:
      "AcknoLedger was my deep dive into the NFT world. I designed homepage layouts, custom NFT cards, filters, and wallet connection UIs using React and Tailwind. The focus was on performance and sleek user experience for crypto users.",
  },
  {
    title: "Learning Management System with Live Video Support",
    icon: <FaTools size={30} className="text-yellow-400" />,
    image: "https://via.placeholder.com/800x400?text=Troprof+LMS",
    content:
      "At Troprof, I built a Learning Management System where students can book teachers, attend live classes, and access study materials. Using React, I built intuitive dashboards, video class UIs, and calendar integrations.",
  },
  {
    title: "Cross-Platform Mobile Apps Using CapacitorJS",
    icon: <FaMobileAlt size={30} className="text-pink-400" />,
    image: "https://via.placeholder.com/800x400?text=Mobile+App+Development",
    content:
      "I transformed web apps into native Android and iOS apps using CapacitorJS. This helped deliver a seamless experience across platforms, increasing app reach and user retention.",
  },
  {
    title: "My Tech Stack & Tools",
    icon: <SiJavascript size={30} className="text-yellow-300" />,
    image: "https://via.placeholder.com/800x400?text=Tech+Stack",
    content:
      "React, Tailwind CSS, Redux, Zustand, Node.js, MongoDB, Playwright, Jest—these are the tools I use to build full-stack web applications. I love exploring new libraries, managing state efficiently, and automating UI tests.",
  },
];

const Blog = () => {
  return (
    <div
      name="blog"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-12"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blog
          </p>
          <p className="text-gray-400 mt-2">
            Explore my professional journey, projects, and tech learnings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {blog.icon}
                  <h2 className="text-2xl font-semibold">{blog.title}</h2>
                </div>
                <p className="text-gray-300 text-sm">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
